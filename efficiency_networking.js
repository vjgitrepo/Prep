var testSet = [
    {
        title: "Storage Efficiency - Inline Deduplication Metrics",
        ask: "An active database volume experiences highly repeating data write operations. How does the Write Anywhere File Layout (WAFL) system execute space reduction optimizations inline?",
        choices: [
            "By writing duplicate data blocks to physical sectors and scanning them via weekly schedules.",
            "By calculating block fingerprints within memory cache staging loops and altering metadata pointer directories to map duplicate requests to a single physical block.",
            "By compressing all active databases down to a single-plex raw status.",
            "By routing duplicate files out to an external physical tape library archive."
        ],
        rightIndex: 1,
        note: "Inline deduplication tracks storage data profiles within volatile staging caches, using mathematical signatures to replace duplicate writes with metadata pointers before they hit physical disk tracks."
    },
    {
        title: "Storage Efficiency - Compaction Mechanics",
        ask: "To mitigate storage space inflation across dense containerized or virtualization environments that write massive quantities of sub-4KB fragments, which efficiency technology should be enabled?",
        choices: [
            "Temperature-sensitive background compression routines.",
            "Data compaction executed inside memory buffers before disk writes occur.",
            "Cross-volume aggregate-wide data block deduplication sweeps.",
            "FabricPool cold tiering data allocation tracking layers."
        ],
        rightIndex: 1,
        note: "Data compaction groups multiple independent files or write operations smaller than 4KB into a single standard 4KB WAFL block, drastically reducing padding waste on flash arrays."
    },
    {
        title: "ONTAP Native S3 Setup - LIF Policies",
        ask: "An administrator needs to enable ONTAP native S3 object storage capabilities on a data SVM. Which network interface configuration parameter is strictly required to process incoming S3 API payloads?",
        choices: [
            "A data LIF configured with standard NFS/SMB file protocol capabilities.",
            "A data LIF explicitly assigned the 'data-s3' service policy infrastructure profile.",
            "An intercluster LIF paired with an active cluster peering relation.",
            "A cluster management LIF configured with an advanced mode routing table."
        ],
        rightIndex: 1,
        note: "ONTAP separates your storage traffic streams. To accept and process S3 API requests cleanly, the associated data interface must carry the explicit data-s3 service policy attribute."
    },
    {
        title: "S3 SnapMirror Architecture - Connectivity",
        ask: "You are designing an intercluster S3 SnapMirror relationship to replicate object buckets across two remote ONTAP clusters over a WAN link. Which network component must be verified first?",
        choices: [
            "Interface groups operating in static multi-mode LACP on both nodes.",
            "Intercluster LIFs configured on both clusters accompanied by a healthy Cluster Peer relationship.",
            "A 3-way NDMP control session established across management ports.",
            "A global unified NAS name mapping test pipeline running on the cluster master."
        ],
        rightIndex: 1,
        note: "Object replication mapping across separate physical clusters over a WAN demands functioning intercluster LIF nodes and active, authenticated cluster peering links."
    },
    {
        title: "Unified NAS/S3 Namespace - Concurrent Access",
        ask: "When enabling the Unified NAS/S3 namespace feature on an existing data path, what core operational advantage does this deliver to enterprise client applications?",
        choices: [
            "It converts raw S3 blocks directly into standard SCSI LUN geometries non-disruptively.",
            "It allows applications to access the exact same underlying file data concurrently using both NAS protocols (NFS/SMB) and S3 object API calls via bucket-to-path mapping.",
            "It enforces a fixed QoS maximum performance ceiling across all cloud bucket tiers automatically.",
            "It replicates the node-level root volume aggregate settings to an AWS S3 bucket."
        ],
        rightIndex: 1,
        note: "Unified namespace mappings remove typical architecture silos, enabling users to access identical underlying file data concurrently via file connections (NFS/SMB) and object APIs (S3)."
    },
    {
        title: "Object Security & Policies - IP Restrictions",
        ask: "An administrator needs to restrict access to a highly confidential ONTAP S3 object bucket so that requests are accepted only when originating from a specific corporate secure IP network range. How should this constraint be enforced?",
        choices: [
            "By assigning an igroup initiator mask handling WWPN handles to the data interface.",
            "By embedding a structured Condition block containing the target IP range filters directly into the S3 bucket policy JSON definition syntax.",
            "By switching the aggregate RAID configuration layout to single parity RAID4.",
            "By locking down the out-of-band Baseboard Management Controller parameters."
        ],
        rightIndex: 1,
        note: "Granular validation parameters (such as source IP white-listing) are written using embedded Condition arrays inside the bucket's standard JSON access control policy text."
    },
    {
        title: "ONTAP Native S3 Setup - Bucket Backbones",
        ask: "When a native ONTAP S3 bucket is provisioned within a data Storage Virtual Machine (SVM), what underlying logical container structure does ONTAP generate automatically in the background to host the object data blocks?",
        choices: [
            "A standalone physical tape array allocation line.",
            "A hidden, system-managed FlexVol or FlexGroup volume container that physically backs the S3 bucket.",
            "An isolated NVMe over Fabrics subsystem mapped using NQNs.",
            "A root volume aggregate allocation slice reserved for management tracking data."
        ],
        rightIndex: 1,
        note: "ONTAP tracks object blocks by mapping S3 requests onto its WAFL layout. Every native S3 bucket is quietly backed by a system-managed hidden volume container."
    },
    {
        title: "SAN Protocols - MPIO Failover Rules",
        ask: "If a physical port hosting an iSCSI data LIF experiences a link-down event, and its failover policy is configured to the standard SAN default value of 'disabled', what occurs at the storage layer?",
        choices: [
            "The cluster shifts the interface over to the node's management port dynamically.",
            "The LIF remains on the failed port and does not migrate, relying on host multipathing (MPIO) software to handle path failover.",
            "The interface switches over to proxy blocks across the interconnect switches.",
            "The partner node assumes control of the interface via aggregate mailbox disks."
        ],
        rightIndex: 1,
        note: "SAN interfaces must remain pinned to their designated ports because automatic logical routing jumps confuse host SCSI drivers, which depend on MPIO layers to shift traffic links."
    },
    {
        title: "Networking Architecture - Broadcast Boundaries",
        ask: "What is the structural role of a Broadcast Domain within the ONTAP network configuration manager layer?",
        choices: [
            "It defines the cryptographic boundary for secure IPsec data-in-flight encryption.",
            "It bounds physical ports that share layer-2 reachability and governs where logical data interfaces (LIFs) can safely migrate.",
            "It sets maximum throughput performance restrictions via Quality of Service limits.",
            "It handles automated multi-protocol user lookup migrations across AD directories."
        ],
        rightIndex: 1,
        note: "Broadcast domains isolate network spaces to ensure that logical interfaces migrate only onto physical links sharing identical layer-2 broadcast boundaries."
    },
    {
        title: "Networking Architecture - Port Aggregation Hashing",
        ask: "An administrative engineer is troubleshooting uneven traffic distribution across links in an active LACP interface group. Which configuration setting should be evaluated to fix this?",
        choices: [
            "The private cluster interconnect switch routing table definitions.",
            "The port distribution function hash configurations (such as MAC-based, IP-based, or layer-4 port checks).",
            "The snapshot autodelete retention window threshold parameters.",
            "The iSCSI target group namespace alignment database maps."
        ],
        rightIndex: 1,
        note: "Interface groups rely on specific distribution hashing mechanisms (like IP address hashes or layer-4 port checks) to balance client data streams evenly across physical cabling paths."
    }
];
