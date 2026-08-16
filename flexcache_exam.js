var testSet = [
    {
        title: "FlexCache - Core Architectural Use Case",
        ask: "An administrator is planning a new deployment and needs to understand the differences between FlexClone volumes and FlexCache volumes for read-heavy workloads. Which scenario best dictates the use of a FlexCache volume over a FlexClone volume?",
        choices: [
            "You need a point-in-time, writable copy of the data that consumes additional space on the same aggregate and requires independent snapshot policies.",
            "You need to instantiate an exact duplicate of a production LUN to perform destructive testing while keeping the parent LUN available.",
            "You require distributed, read-only (or localized read-write) copies of a heavily accessed dataset across geographically separated clusters to reduce WAN latency and distribute the read workload.",
            "You require a zero-space copy of a volume that maintains a continuous SnapMirror relationship with the original volume for disaster recovery purposes."
        ],
        rightIndex: 2,
        note: "FlexCache volumes act as sparse, dynamic caching proxies across geographic or cluster boundaries, automatically caching read data on-demand to reduce WAN overhead and accelerate localized performance."
    },
    {
        title: "FlexCache - Cache Consistency Mechanics",
        ask: "When a client application modifies a file directly on the origin volume, how does the global FlexCache consistency engine ensure that remote cache volumes do not serve stale data blocks?",
        choices: [
            "The origin volume pushes a full block-level SnapMirror replication sequence to all cache targets instantly.",
            "The origin volume broadcasts a programmatic invalidation message to all connected cache volumes, causing them to flush the metadata pointers for that specific file and refetch blocks on the next read.",
            "Remote cache volumes run a background cron schedule task to scan the origin volume every 24 hours.",
            "The client host server must execute a manual out-of-band proxy flush over the management interface."
        ],
        rightIndex: 1,
        note: "ONTAP preserves global cache coherency by sending real-time invalidation messages from the origin volume to caching targets whenever blocks undergo data plane modification paths."
    },
    {
        title: "FlexCache - Writeback Behavior Constraints",
        ask: "By default, when a remote client executes a file write operation against a standard FlexCache volume path, how is the write transaction processed across the storage fabric?",
        choices: [
            "The write is cached locally inside the remote node NVRAM and synchronized to the origin volume during a weekly schedule.",
            "The write transaction is proxied directly through to the origin volume, committed to the origin WAFL layer, and the cache volume invalidates its local copy of the modified blocks.",
            "The write operation is rejected at the protocol layer because FlexCache volumes are strictly read-only targets.",
            "The transaction forces an automated high-availability takeover to synchronize cache sectors."
        ],
        rightIndex: 1,
        note: "Standard FlexCache data paths forward client write transactions straight back to the master origin volume to preserve absolute data consistency across the environment fabric."
    },
    {
        title: "FlexCache - Global File Locking",
        ask: "Multiple cross-site application nodes connect concurrently to a shared dataset using FlexCache. How does ONTAP coordinate concurrent multi-protocol file locks across the fabric?",
        choices: [
            "By taking all caching aggregates offline until a single master lock completes.",
            "By utilizing a centralized Global File Locking mechanism where cache volumes query the origin volume to negotiate and authorize share reservations and locks.",
            "By converting the underlying data volumes exclusively to Mixed permission security styles.",
            "By forcing host operating systems to handle block-level SCSI locking strings natively."
        ],
        rightIndex: 1,
        note: "ONTAP handles cross-site concurrency by forcing cache volumes to check and register active lock reservations with the master origin volume before executing client file locks."
    },
    {
        title: "FlexCache - Sizing and Space Allocation",
        ask: "When provisioning a new sparse FlexCache volume on a target flash aggregate, what is the default behavior regarding physical space allocation relative to the size of the origin volume?",
        choices: [
            "The cache volume must be configured with thick provisioning matching 100 percent of the origin volume footprint.",
            "The cache volume is created thin-provisioned as a sparse container, initially consuming minimal local space and growing dynamically as client requests fetch data blocks.",
            "The system mandates the attachment of an external public cloud tier storage bucket.",
            "The cache volume size is fixed permanently at 20GB regardless of parent data boundaries."
        ],
        rightIndex: 1,
        note: "FlexCache volumes are sparse logical targets that allocate space on-demand as blocks are requested by local clients, maximizing media utilization across remote aggregates."
    },
    {
        title: "FlexCache - Global Namespace Junctions",
        ask: "An administrator needs to mount a FlexCache volume into an SVM junction path directory. What protocol rule applies to the hosting storage virtual machine (SVM)?",
        choices: [
            "The target cache SVM must be paired with the origin cluster using an active SVM peering relationship.",
            "The cache SVM must have its local out-of-band management data LIFs completely deactivated.",
            "The destination junction path cannot reside inside a volume formatted with UNIX permissions.",
            "The cluster master head must run a background aggregate reconstruction task first."
        ],
        rightIndex: 0,
        note: "Intercluster FlexCache architectures rely on underlying multi-tenant isolation routing paths; the caching SVM and origin SVM must carry valid peering tokens to authorize data streams."
    },
    {
        title: "FlexCache - Block eviction settings",
        ask: "When a local caching aggregate approaches 100 percent capacity fullness, what native automated task does the FlexCache engine execute to free up aggregate disk tracks?",
        choices: [
            "It drops all data plane network links to protect metadata fields.",
            "It initiates an automated block eviction loop, deleting the oldest unaccessed cached data blocks while preserving the local metadata catalog maps intact.",
            "It automatically triggers a volume move migration sequence to an alternative controller node.",
            "It deletes the volume's oldest production snapshot copies from the origin cluster."
        ],
        rightIndex: 1,
        note: "FlexCache protects aggregate capacities by executing block eviction routines that discard cold, cached file segments on a Least Recently Used (LRU) basis without touching the origin master data."
    },
    {
        title: "FlexCache - Disconnected WAN Behaviors",
        ask: "A remote office loses its WAN link connection to the primary corporate datacenter where the origin volume resides. How does the local FlexCache volume handle client access during the network outage?",
        choices: [
            "The cache volume crashes instantly, causing client mount paths to hang indefinitely.",
            "It continues serving read requests for data blocks that are already cached locally, but attempts to access un-cached blocks or execute file writes will fail with a connection timeout error.",
            "It dynamically mounts an external public cloud tape library to serve block updates.",
            "It automatically assumes control of the data plane namespace and switches to master origin status."
        ],
        rightIndex: 1,
        note: "During link drops, FlexCache acts as an isolated read target. It safely serves blocks already resident in its local media cache, but cannot fulfill queries for un-cached files or process writes until WAN routes recover."
    },
    {
        title: "FlexCache - SMB Protocol Compatibility",
        ask: "When configuring cross-cluster FlexCache capabilities for enterprise Windows workloads over SMB connections, which structural feature must be verified across the fabric?",
        choices: [
            "SMB signing must be completely deactivated on all management ports.",
            "ONTAP supports FlexCache for SMB traffic across clusters, requiring proper share layout mapping and matching active directory domain controls for path authorization.",
            "The volume must be hosted within a single-node ONTAP Select virtual appliance tier.",
            "The cache path must override the NTFS security style and force UNIX permissions."
        ],
        rightIndex: 1,
        note: "Modern ONTAP extensions support cross-cluster caching for SMB, allowing Windows environments to optimize read traffic provided authentication structures match across endpoints."
    },
    {
        title: "FlexCache - CLI Management Analytics",
        ask: "Which ONTAP command utility displays the active cache hit-and-miss ratio metrics and monitors data plane throughput streaming into a FlexCache volume?",
        choices: [
            "vserver object-store-server bucket show",
            "volume flexcache show -instance",
            "network port show -vlan-tags",
            "security login mapping test"
        ],
        rightIndex: 1,
