var testSet = [
    {
        title: "FlexCache Deep Architecture",
        ask: "Review the sidebar study panels to analyze the comprehensive engineering logic governing this domain.",
        choices: [
            "Launch Deep Study Mode from the top menu to view structural data layouts.",
            "Analyze detailed configuration and network parameters.",
            "Verify advanced CLI command syntax guidelines.",
            "Review core blueprint metrics."
        ],
        rightIndex: 0,
        note: "Select 'Deep Study Mode' in the upper layout header to review the comprehensive structural blueprints of this storage domain."
    }
];

var studyNotesPayload = `
    <h2>1. FlexCache Global Architecture & Core Mechanics</h2>
    <p>FlexCache introduces a sparse, high-performance logical volume layer that operates as an intelligent on-demand caching proxy. Instead of executing resource-intensive, bulk block-level file system mirroring, FlexCache selectively populates local hot blocks dynamically based on user read queries.</p>
    
    <h3>Underlying Storage Primitives:</h3>
    <ul>
        <li><strong>Origin versus Cache Relationship:</strong> The Master Volume (Origin) serves as the source of truth, managing absolute data tracking tables and file system attributes. The Caching Volume (Cache) acts as a read-heavy edge pointer, occupying a minimal storage footprint initially.</li>
        <li><strong>Sparse WAFL Containers:</strong> When initialized, a FlexCache volume creates an empty tracking table inside its WAFL file system. Data blocks are only fetched over the WAN network when an endpoint client issues a read payload request. Unrequested data blocks consume zero physical space on the edge aggregate.</li>
        <li><strong>Scale-Out FlexGroup Topologies:</strong> FlexCache natively supports both FlexVol layouts and multi-node FlexGroup volumes. Bounding FlexCache to a FlexGroup enables edge environments to balance massive scale out compute workloads symmetrically over all cluster node heads.</li>
    </ul>

    <h2>2. Real-Time Cache Consistency & Coherency Protocols</h2>
    <p>To deliver enterprise-grade cross-cluster execution safety, ONTAP deploys an active background cache consistency engine to prevent remote edge nodes from accidentally serving stale or corrupted data blocks.</p>
    
    <h3>Cache Validation & Eviction Frameworks:</h3>
    <ul>
        <li><strong>Programmatic Invalidation Vectors:</strong> When a client executes a write operation against a file block directly on the master Origin volume, the origin immediately sends targeted invalidation messages to all mapped FlexCache endpoints over the network. The edge nodes drop their local metadata pointer tables for that specific file asset.</li>
        <li><strong>The Least Recently Used (LRU) Engine:</strong> If an edge flash data aggregate approaches maximum capacity boundaries, the FlexCache system activates a background eviction loop. It clears out old, unrequested blocks to release space while preserving the structural metadata index maps intact.</li>
    </ul>

    <h2>3. Cross-Site Writeback Architectures & Concurrency</h2>
    <p>FlexCache simplifies distributed multi-site pipelines by enabling a unified namespace write experience across separated geographic clusters while anchoring transactions to the master origin.</p>
    
    <h3>Write-Handling and File Locking Constraints:</h3>
    <ul>
        <li><strong>Proxy Write-Through Invalidation:</strong> When a client performs a modification operation on a FlexCache volume, the write payload is proxied instantly over the WAN directly to the master Origin volume. Once the transaction commits safely to the origin WAFL layer, the local cache volume invalidates its old blocks to force a fresh fetch.</li>
        <li><strong>Global File Locking (GFL) Controls:</strong> Cross-site file system collisions are prevented by forcing FlexCache volumes to query the origin volume to register and negotiate lock state reservations and file share allocations before authorizing client execution access loops.</li>
    </ul>

    <h2>4. Multi-Tenant Peering & Protocol Compatibility</h2>
    <p>Deploying FlexCache across distinct physical administrative boundaries demands strict multi-tenant network security and multi-protocol file access alignments.</p>
    
    <h3>Network and Protocol Boundaries:</h3>
    <ul>
        <li><strong>SVM Peering Requirements:</strong> Intercluster FlexCache communication relies on underlying infrastructure paths. The caching Storage Virtual Machine (SVM) and the origin master SVM must carry valid peering tokens and active intercluster LIF interfaces to process requests.</li>
        <li><strong>Cross-Cluster SMB Cache Safety:</strong> Modern ONTAP updates support full FlexCache compatibility for Microsoft Windows fileshares over SMB. This demands synchronized Active Directory domain controls across clusters to ensure consistent user SID identity lookup and ACL evaluation permissions.</li>
    </ul>

    <h2>5. Enterprise Administrative CLI Management Syntax</h2>
    <p>Orchestrating, verifying, and checking performance metrics across a FlexCache deployment relies on precise command trees inside the advanced CLI plane.</p>
    
    <h3>Mandatory CLI Commands for the NCDA Sandbox:</h3>
    <div class="code-snippet">
:: 1. Establish an active FlexCache relationship pointing to an origin volume path
volume flexcache create -vserver svm_edge -volume cache_vol -aggr aggr_flash_1 -origin-vserver svm_hq -origin-volume master_vol -size 500GB

:: 2. Display the configuration parameters and link paths of an active cache layout
volume flexcache show -vserver svm_edge -volume cache_vol -instance

:: 3. Monitor live performance data plane counters and check cache hit-and-miss ratios
statistics show -object flexcache -instance cache_vol</div>
`;
