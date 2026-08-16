var testSet = [
    {
        title: "FabricPool Advanced Lifecycle Review",
        ask: "An environment utilizing FabricPool 'Auto' tiering rules experiences local flash SSD aggregate capacity saturation, but the background data block offloading process to the cloud target appears completely stalled. Which diagnostic path safely evaluates the layer-3 routing network without packet fragmentation?",
        choices: [
            "Deactivating all Intercluster LIF interfaces and running an offline metadata clear run.",
            "Executing an advanced non-fragmented network ping test from the node lif to the cloud S3 endpoint using an explicit 9000 packet-size and disallow-fragmentation true parameter set.",
            "Enforcing a background aggregate format to shift the WAFL layouts to RAID4 geometry.",
            "Bouncing the primary node management network data links into isolated broadcast loops."
        ],
        rightIndex: 1,
        note: "FabricPool offloading requires a fully optimized network path. Dropping packet frames due to path MTU mismatches completely breaks the background HTTPS data stream transfers."
    }
];

var studyNotesPayload = `
    <h2>Section 10: Deep Architectural Mechanics & Hybrid Cloud Overview</h2>
    <p>FabricPool is an automated hybrid-storage technology that links low-latency local flash media (the performance tier) to cheaper public or private cloud object repositories (the capacity tier). It optimizes file systems at a block level without altering front-end application layout configurations or mount points.</p>
    
    <h3>Data Plane Movement & Lifecycle Operations:</h3>
    <ul>
        <li><strong>Object-Store Cloud Communication Protocols:</strong> Movement from local flash structures down to cloud repositories relies on secure HTTPS connections. Data payloads are organized and split into immutable 4MB object sizes inside cloud provider buckets.</li>
        <li><strong>Network Latency Threshold Limits:</strong> To protect active data planes against connection timeouts, the system enforces a strict round-trip time (RTT) boundary. High-performance on-premises networks should sit below 15ms RTT when connecting to local StorageGRID appliances, while public cloud targets must avoid jitter spikes exceeding 30ms to maintain seamless tiering operations.</li>
        <li><strong>Maximum Transmission Unit (MTU) Demands:</strong> Because tiering processes stage massive quantities of block payloads sequentially, Jumbo Frames (MTU 9000) must be enabled end-to-end across all physical switch interfaces, intercluster links, and cloud interconnect networks to prevent heavy packet fragmentation overhead.</li>
    </ul>
    <h2>Section 11: Step-by-Step CLI Configuration Pipeline</h2>
    <p>Configuring a production FabricPool attachment involves an orderly chronological sequence to bind local aggregates safely to cloud buckets. Use these precise command strings to build your configuration:</p>
    
    <h3>Step 1: Define the External Cloud Object Endpoint</h3>
    <div class="code-snippet">
:: 1. Add the external cloud capacity tier target details to the cluster infrastructure
storage aggregate object-store config create -object-store-name cloud_tier_aws -provider-type AWS_S3 -server ://amazonaws.com -bucket corp-ncda-cold-vault -access-key "AKIAIOSFODNN7EXAMPLE" -secret-key "wJalrXUptFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

:: 2. Verify that the cloud destination target configuration is cataloged successfully
storage aggregate object-store config show</div>

    <h3>Step 2: Bind the Cloud Target to a Performance Aggregate</h3>
    <div class="code-snippet">
:: 1. Link the local aggregate to the defined cloud target endpoint
storage aggregate object-store attach -aggregate flash_aggr_01 -object-store-name cloud_tier_aws

:: 2. Confirm the hybrid attachment is established and status reads "Online"
storage aggregate object-store show -aggregate flash_aggr_01</div>

    <h3>Step 3: Apply the Automated Tiering Policy to a Data Volume</h3>
    <div class="code-snippet">
:: 1. Enforce the Auto tiering policy with an explicit 14-day cooling window configuration
volume modify -vserver svm_prod -volume vol_finance -tiering-policy auto -tiering-minimum-cooling-days 14

:: 2. Verify the policy assignment parameters across the target volume container
volume show -vserver svm_prod -volume vol_finance -fields tiering-policy,tiering-minimum-cooling-days</div>

    <h2>Section 12: Real-Time Operational Cross-Site Usage Scenarios</h2>
    <p>Understanding the exact chronological data-flow step lifecycles inside the WAFL file layer is a major requirement for the proctored NCDA blueprint evaluation.</p>
    
    <h3>The Widescreen Read/Write Lifecycle Path:</h3>
    <ol>
        <li><strong>The Write and Classification Pass:</strong> New transactions are written straight to local flash SSD sectors. The internal scanner evaluates data access logs. If a block belongs to an older snapshot copy or stays unaccessed beyond the cooling threshold (e.g., 14 days), it is flagged as cold.</li>
        <li><strong>The Offloading Commit Staging:</strong> The background engine reads cold blocks, packs them into unified 4MB data chunks within staging caches, encrypts them via NAE/NVE keys, and streams them out to the cloud target via HTTPS.</li>
        <li><strong>The Metadata Pointers Transformation:</strong> Once the object commits successfully to the cloud bucket, the local aggregate updates its inner WAFL block mapping tables. The physical blocks are deleted from local flash to release space, replaced by lightweight cloud pointer tokens.</li>
        <li><strong>The On-Demand Read Re-Hydration:</strong> A client requests a file block that resides in the cloud. The aggregate catches the pointer token, triggers a real-time read call over the network, pulls the block down, and serves it. If the volume policy is "Auto," the block remains local; if the policy is "Snapshot-Only," the block stays cold in the cloud.</li>
    </ol>


    <h2>Section 13: Advanced Troubleshooting &amp; Common User Complaints</h2>
    <p>When engineering high-churn hybrid frameworks, network connection breaks or improper cooling parameters can trigger user complaints or operational blocks. Use this guide to remediate errors instantly:</p>
    
    <h3>Core Real-World Performance Resolution Paths:</h3>
    <ul>
        <li><strong>User Complaint: "Data Offloading is Stalled, local SSD Aggregates are Full"</strong><br>
        <em>Remediation Strategy:</em> Run an advanced non-fragmented network ping test to confirm layer-3 routing stability without drops:
        <div class="code-snippet">network ping -lif ic_lif01 -vserver cl_node1 -destination ://amazonaws.com -packet-size 9000 -disallow-fragmentation true</div></li>
        
        <li><strong>User Complaint: "Extreme Read Latency Over WAN During Financial Auditing Sequences"</strong><br>
        <em>Remediation Strategy:</em> To stop the latency penalty, override the policy to "None" or execute an advanced manual retrieval operation to pull all blocks back onto local flash before the audit starts:
        <div class="code-snippet">volume modify -vserver svm_prod -volume vol_finance -tiering-policy none</div></li>
        
        <li><strong>User Complaint: "Volume Move Tasks are Failing With Reference Mapping Token Misalignments"</strong><br>
        <em>Remediation Strategy:</em> Force an object-store mapping verification check down the storage subsystem layer:
        <div class="code-snippet">storage aggregate object-store config test -object-store-name cloud_tier_aws</div></li>
    </ul>

    <h2>Section 14: Performance Telemetry &amp; Advanced Counter Inspections</h2>
    <p>To inspect your hybrid platform health, audit tiering optimization ratios, and check throughput counters non-disruptively, execute these advanced commands inside the CLI console:</p>
    <div class="code-snippet">
:: 1. Navigate into the advanced command engineering privilege layer
set -privilege advanced

:: 2. Display the granular space reduction profiles and footprint tracking data for tiered containers
storage aggregate object-store show-space -aggregate flash_aggr_01

:: 3. Monitor live performance data plane counters, checking read latency metrics and cloud block offload speeds
statistics show -object object_store_client_op -instance cloud_tier_aws -interval 3 -samples 5</div>
`;

