var testSet = [
    {
        title: "FlexCache Cross-Cloud Cloud Architecture Review",
        ask: "A global enterprise deploys a multi-region architecture using Cloud Volumes ONTAP (CVO) across AWS, Azure, and on-premises sites linked via FlexCache. Users at a remote edge zone complain of temporary freezes and stale file locks during automated microservice deployment sequences. What is the fundamental diagnostic path?",
        choices: [
            "Deactivating all Intercluster LIFs and forcing single-plex aggregate reconstruction runs.",
            "Analyzing WAN packet fragmentation/MTU mismatches, evaluating Delegated Write invalidation queues, and running the advanced flexcache check and stats CLI tools to trace RPC delays.",
            "Forcing the parent directory permission sharing style into legacy Mixed protocol boundaries.",
            "Bouncing the local cluster master node into maintenance mode to bypass directory namespace pinning."
        ],
        rightIndex: 1,
        note: "Cross-cloud and multi-location FlexCache anomalies are driven by latency jitter, network MTU disparities disrupting RPC payloads, or queue bottlenecks in the Global File Locking (GFL) write-through path back to the origin."
    }
];

var studyNotesPayload = `
    <h2>1. Global Cross-Cloud & Multi-Location Architectural Topologies</h2>
    <p>In modern enterprise environments (fully updated for ONTAP 9.14 through 9.18+ architectures), FlexCache scales beyond simple data center pairs into complex multi-cloud and hybrid ecosystems. This includes deployments across on-premises SAN arrays (ASA/FAS) and **Cloud Volumes ONTAP (CVO)** running in AWS, Microsoft Azure, and Google Cloud Platform (GCP).</p>
    
    <h3>The Multi-Location Distributed Mesh:</h3>
    <ul>
        <li><strong>The Single Origin, Multi-Cache Fan-Out:</strong> A single authoritative production master volume (the Origin) can host data in an on-premises data center, while up to 100 distinct sparse FlexCache volumes (the Caches) are instantiated globally in various cloud provider availability zones or remote edge sites.</li>
        <li><strong>Inter-Cloud Data Routing Paths:</strong> Data movement between clouds relies on the <strong>NetApp data plane</strong> running over secure VPN tunnels or cloud interconnect networks (AWS Direct Connect, Azure ExpressRoute). CVO nodes pass block-efficient RPC tokens across cloud boundaries on ports 11104 and 11105.</li>
        <li><strong>On-Demand Cloud Hydration:</strong> Instead of executing a massive data migration that costs significant egress fees, FlexCache hydrates cloud instances blocks on-demand. Only data actively read by the cloud application is egressed, slashing cloud data transport footprints.</li>
    </ul>

    <h2>2. Common Global User Complaints & Bottlenecks</h2>
    <p>When engineering multi-location cloud caching solutions, users and application nodes often flag distinct performance or behavioral anomalies. Understanding these is vital to passing the proctored NCDA exam.</p>
    
    <h3>Core Real-World Performance Anomaly Triggers:</h3>
    <ul>
        <li><strong>Complaint A: "The First-Access Freeze" (WAN Read Penalty)</strong><br>
        <em>Symptom:</em> An application or developer opens a directory or file path for the first time from a cloud edge zone, and the application experiences a temporary 3 to 10-second freeze or lag.<br>
        <em>Architectural Cause:</em> This is a classic "cache miss." Because the FlexCache volume is a sparse metadata shell, the edge node must pause the client session, generate an RPC block request, fetch the payload over the WAN from the origin, commit it to local SSD tracks, and then serve it. Subsequent accesses drop to sub-millisecond local flash speeds.</li>
        
        <li><strong>Complaint B: "The Modification Stall" (Write-Through Bottlenecks)</strong><br>
        <em>Symptom:</em> Users executing massive batch modifications, renaming tasks, or metadata modifications (such as <code>chmod</code> or <code>chown</code>) experience sudden transaction slowdowns.<br>
        <em>Architectural Cause:</em> FlexCache enforces a strict <strong>Write-Through Proxy policy</strong>. Caches are not allowed to commit local modifications independently. Every single write and metadata mutation must be serialized, proxied back over the WAN, and committed to the Origin WAFL layer first. High WAN latency or packet jitter causes write queues to stack up.</li>
        
        <li><strong>Complaint C: "The Lock Violation or Stale File Exception"</strong><br>
        <em>Symptom:</em> Automated build tools or concurrent multi-site users complain that files modified a few seconds ago at the corporate master head are throwing access errors or showing stale variants at the edge cloud zone.<br>
        <em>Architectural Cause:</em> Cache Invalidation Messages are dropped due to network path drops, or the <strong>Global File Locking (GFL)</strong> engine is delayed in clearing older metadata pointer caches. This creates a state mismatch between the edge cache and the origin source of truth.</li>
    </ul>

    <h2>3. Comprehensive Operational & Performance Testing Blueprints</h2>
    <p>To safely evaluate path resiliency, determine hit ratios, and troubleshoot performance metrics across your global cloud repository, you must deploy specific CLI testing routines.</p>
    
    <h3>Test Suite 1: Path Verification & MTU Diagnostics</h3>
    <p>Before testing the storage plane, you must guarantee that the layer-3 routing network can parse dense block data without dropping packets due to fragmentation:</p>
    <div class="code-snippet">
:: 1. Execute an advanced non-fragmented ping test from the Edge Intercluster LIF targeting the HQ Origin IP
network ping -lif ic_edge_01 -vserver cl_edge -destination 10.200.10.55 -packet-size 9000 -disallow-fragmentation true

:: 2. Verify that the routing engine path does not report packet drops or MTU truncation alerts</div>

    <h3>Test Suite 2: Advanced FlexCache Connection Checks</h3>
    <p>ONTAP includes a dedicated, non-disruptive check engine to verify that the cluster peer lanes, SVM mappings, and RPC endpoints match perfectly across environments:</p>
    <div class="code-snippet">
:: 1. Shift into the advanced administrative engineering mode
set -privilege advanced

:: 2. Execute a diagnostic audit over an active caching relationship
volume flexcache check -vserver svm_edge -volume cache_prod_vol1

:: 3. Review the structural relationship connections and operational health counters
volume flexcache check show -vserver svm_edge -volume cache_prod_vol1</div>

    <h3>Test Suite 3: Real-Time Cache Hit & Telemetry Tracing</h3>
    <p>To find out exactly why users are complaining about latency, execute a live statistics counter test to find the exact ratio of cache-hits versus cache-misses:</p>
    <div class="code-snippet">
:: 1. Sample the active cache performance metrics every 2 seconds
statistics show -object flexcache -instance cache_prod_vol1 -interval 2 -samples 5

:: 2. Analyze the key output counters:
::    - cache_hit_data_bytes: Represents data served instantly from local edge flash tracks.
::    - cache_miss_data_bytes: Represents cold blocks forced to stream over the WAN from the origin.
::    - server_request_latency: Traces exact round-trip RPC delays in milliseconds.</div>

    <h2>4. Advanced Multi-Location Troubleshooting Playbooks</h2>
    <p>When debugging multi-cloud caching fabrics, apply this structured troubleshooting sequence to isolate the exact layer of failure:</p>
    
    <h3>Triage Path A: Fixing Global Locking & Sync Mismatches</h3>
    <p>If files are out of sync or throwing locking violations across regions, force a metadata table re-evaluation by executing a clean volume-level bounce routine:</p>
    <div class="code-snippet">
:: 1. Take the edge cache volume offline to flush bad metadata indexes cleanly
volume offline -vserver svm_edge -volume cache_prod_vol1

:: 2. Bring the volume back online to force a fresh cluster peer handshake
volume online -vserver svm_edge -volume cache_prod_vol1

:: 3. Check for any active global file locks locked up at the master head
volume flexcache origin show-locks -vserver svm_hq -volume hq_master_vol</div>

    <h3>Triage Path B: Pre-Populating Cache Files (Bypassing First-Access Lag)</h3>
    <p>To eliminate the "first-access freeze" complaint before a major branch office starts their morning work or an automated cloud deployment triggers, you can **pre-populate (warm)** the cache container via the CLI:</p>
    <div class="code-snippet">
:: 1. Tell the cache engine to proactively crawl and pull down specific folders or files into local flash before users arrive
volume flexcache prepopulate -vserver svm_edge -volume cache_prod_vol1 -path-list /dir1/project_files, /dir2/build_assets -max-size 100GB

:: 2. Monitor the background warming progress until it registers complete
volume flexcache prepopulate show -vserver svm_edge -volume cache_prod_vol1</div>
`;
