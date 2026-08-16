var testSet = [
    {
        title: "Storage Platforms - Auto-Partition Spares",
        ask: "When a new high-density storage shelf populated with unassigned NVMe SSDs is connected to an active high-availability pair, what native automation feature initializes the drives non-disruptively?",
        choices: [
            "Manual disk initialization executed from advanced boot menu options.",
            "The Auto-Partition Spares feature, which automatically slices unassigned qualifying drives into root-data segments in the background.",
            "A mandatory rolling reboot of the private cluster switch interconnects.",
            "The background aggregate reconstruction speed manager configuration layout."
        ],
        rightIndex: 1,
        note: "Modern ONTAP automation engines automatically execute Auto-Partition Spares to slice raw high-capacity drives, optimizing striping pools without admin intervention."
    },
    {
        title: "High Availability - Mailbox Disks",
        ask: "Both redundant physical fiber cables managing the private cluster interconnect network between an HA pair fail simultaneously. If the backend storage fabric is fully online, how do the controllers adapt?",
        choices: [
            "Both controllers instantly drop power to safeguard metadata against corruption.",
            "The nodes write and read transaction heartbeats to dedicated mailbox disk sectors to verify node health and prevent split-brain conditions.",
            "All active data logical interfaces (LIFs) migrate immediately onto public cloud buckets.",
            "The cluster master head initiates a disruptive format of all available spare arrays."
        ],
        rightIndex: 1,
        note: "Mailbox disks provide a crucial out-of-band communication tier for HA pairs, letting controllers track node status via physical disk blocks if the network interconnect layer drops."
    },
    {
        title: "Storage Platforms - ASA Architectures",
        ask: "What native hardware architecture advantage is delivered when migrating intensive block-storage database workloads from a standard hybrid FAS to an All-Flash SAN Array (ASA) platform?",
        choices: [
            "The ASA completely eliminates the underlying storage virtual machine abstraction tier.",
            "It serves symmetric Active/Optimized multipathing paths across both high-availability controllers concurrently, eliminating asymmetric proxy latency hops.",
            "It automatically forces an administrative ceiling limit across all fileshares.",
            "It proxies all block traffic frames across out-of-band node management interfaces."
        ],
        rightIndex: 1,
        note: "NetApp ASA systems treat all multipath links across both controllers as symmetrically optimized paths, bypassing proxy overhead over the internal cluster interconnect fabric."
    },
    {
        title: "Core ONTAP - Programmatic API Interfaces",
        ask: "An automation team needs to interact with an ONTAP cluster programmatically to orchestrate storage provisioning. Which interface features native Swagger-compliant schemas directly accessible from the cluster heads?",
        choices: [
            "The Active IQ OneCollect data utility diagnostic capture log files.",
            "The built-in ONTAP Swagger REST API documentation portal endpoint page.",
            "The Active IQ Unified Manager performance monitoring configuration panel.",
            "The Windows active directory structural management domain snap-in tool."
        ],
        rightIndex: 1,
        note: "ONTAP hosts a native Swagger-compliant UI directly from its management plane, allowing developers to test REST endpoints and explore parameters live."
    },
    {
        title: "Storage Platforms - Cloud Volumes ONTAP",
        ask: "When deploying a High Availability pair configuration of Cloud Volumes ONTAP (CVO) instances inside a public cloud provider infrastructure, how is write-cache consistency safely preserved?",
        choices: [
            "By committing all dirty transactions to an external multi-region tape library array.",
            "By utilizing private cloud provider networking links to synchronously replicate volatile NVRAM transaction data across instance boundaries.",
            "By relying entirely on host servers to execute redundant network data transfers.",
            "By deactivating volume deduplication and forcing single-plex disk writes."
        ],
        rightIndex: 1,
        note: "CVO HA architectures deploy an emulated NVRAM mirroring layer over private cloud networks to ensure write cache states remain fully coherent before data hits disk."
    },
    {
        title: "Core ONTAP - SVM Multi-Tenancy Ceilings",
        ask: "An enterprise is planning a large multi-tenant data center deployment. To maintain strict line-of-business isolation, what logical construct guarantees complete namespace and network data plane segregation?",
        choices: [
            "A global cluster-wide broadcast domain grouping all ports together.",
            "A dedicated Storage Virtual Machine (SVM) instance configured with isolated data LIFs and its own root namespace directory.",
            "Enforcing strict hard storage quotas across all underlying aggregates.",
            "Configuring intercluster peering relationships over every local data interface."
        ],
        rightIndex: 1,
        note: "Storage Virtual Machines (SVMs) encapsulate independent multi-tenant environments, providing separate administration boundaries, namespaces, and isolated logical network structures."
    },
    {
        title: "Core ONTAP - Non-Disruptive Upgrades",
        ask: "During an automated rolling upgrade sequence (ANDU) on a multi-node cluster, how does ONTAP preserve data accessibility for connected NAS protocol clients (NFS/SMB)?",
        choices: [
            "It converts all volumes to read-only raw formats during the upgrade process.",
            "It updates nodes in a staggered sequence, leveraging HA takeovers while migrating data LIFs onto active target ports on the surviving head.",
            "It requires host servers to temporarily buffer file edits inside their local memory pools.",
            "It routes file traffic streams through the out-of-band cluster management interface."
        ],
        rightIndex: 1,
        note: "ANDU orchestrates rolling node reboots by triggering high-availability failovers and logical interface migrations to guarantee continuous data plane availability for file clients."
    },
    {
        title: "Storage Platforms - ONTAP Select virtual adapters",
        ask: "When deploying a software-defined ONTAP Select storage virtual appliance inside a VMware vSphere environment, which virtual network interface card configuration is required to optimize framing performance?",
        choices: [
            "E1000 standard legacy emulation device profile mapping.",
            "VLance network card abstraction bridge array links.",
            "The VMXNET3 network interface controller assignment.",
            "A direct physical passthrough raw hardware target adapter map."
        ],
        rightIndex: 2,
        note: "ONTAP Select virtual arrays require high-performance VMXNET3 virtual adapters to process data plane framing packets and maximize network I/O efficiency."
    },
    {
        title: "Core ONTAP - SVM Mobility Limits",
        ask: "A storage administrator plans to execute a live SVM data mobility migration to move a tenant environment to an alternative HA pair. What is the maximum number of volumes supported within a single SVM migration sequence?",
        choices: [
            "100 volumes",
            "255 volumes",
            "400 volumes",
            "1000 volumes"
        ],
        rightIndex: 2,
        note: "ONTAP software enhancements expand data mobility constraints to allow up to 400 separate data volumes within a single non-disruptive SVM migration window."
    },
    {
        title: "Storage Platforms - Drive Firmware Lifecycle",
        ask: "How does modern ONTAP manage disk-level firmware upgrades across an active production aggregate without degrading user data paths?",
        choices: [
            "It takes the parent aggregate offline entirely and prompts for a manual CLI firmware flush.",
            "It processes disk firmware in the background by sequentially taking individual drives offline and using RAID parity arrays to fulfill active client I/O.",
            "It temporarily transfers all storage blocks to a public cloud object bucket.",
            "It forces the administrator to modify the volume sharing security style to Mixed."
        ],
        rightIndex: 1,
        note: "ONTAP flashes drive firmware safely by taking single drives offline sequentially, leveraging RAID parity to fulfill client reads and non-disruptively rebuilding the drive once completed."
    },
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
    },
    {
        title: "NAS Multi-Protocol Naming - Creation Logic",
        ask: "An SVM is configured with a volume using a mixed security style layout. A Windows user creates a brand-new file over an SMB share, which is later modified by a Linux user over an NFS mount. How are permissions determined at creation?",
        choices: [
            "The file inherits the exact security style of the volume's parent folder.",
            "It defaults exclusively to standard UNIX POSIX permission bits.",
            "It is determined by the specific network protocol (SMB) used by the client to create the file.",
            "It prompts the storage administrator via an advanced CLI configuration template."
        ],
        rightIndex: 2,
        note: "Inside mixed security style volumes, file permissions are determined on a file-by-file basis, matching the protocol used to generate that specific asset (SMB creates NTFS ACLs; NFS creates UNIX permissions)."
    },
    {
        title: "NAS Multi-Protocol Naming - Rule Auditing",
        ask: "An administrator modifies several UNIX-to-Windows user translation rules inside an SVM. Which operational utility allows the engineer to safely trace and verify these changes before exposing them to users?",
        choices: [
            "The statistics show -object client_permissions command string.",
            "The vserver name-mapping test command framework utility.",
            "The network port show -instance validation directory matrix.",
            "The security login create administrative profile module."
        ],
        rightIndex: 1,
        note: "The vserver name-mapping test command enables storage engineers to mock identity translations between Windows SIDs and UNIX user strings to safely evaluate routing rules."
    },
    {
        title: "NAS Multi-Protocol Naming - Fallback Routing",
        ask: "In a multiprotocol NAS environment, an external Windows user attempts to access an NFS-exported directory tree. If no explicit name-mapping conversion rule matches their ID, what occurs?",
        choices: [
            "The user automatically gains full root administrative permissions.",
            "Access is rejected with an explicit multi-protocol validation failure payload.",
            "ONTAP maps the unmapped identity down to the default guest account (pcuser).",
            "The storage array logs a critical cluster panic and blocks access to the volume."
        ],
        rightIndex: 2,
        note: "By default, ONTAP handles unmapped multi-protocol users by assigning them to low-privilege guest account profiles like the standard UNIX pcuser mapping."
    },
    {
        title: "Data Protection - SnapMirror Base Locks",
        ask: "An scheduled incremental SnapMirror update fails. Diagnostic logs flag a 'Snapshot copy lock mismatch' alert. What does this indicate?",
        choices: [
            "The destination volume is actively running an FPolicy blocking rule.",
            "The common base Snapshot copy required for incremental replication was deleted or overwritten on one of the endpoints.",
            "The underlying physical data aggregate is locked during a RAID reconstruction.",
            "The network data LIF has jumped into a different routing subnet matrix."
        ],
        rightIndex: 1,
        note: "Because incremental replication relies on identical point-in-time reference baselines, manual deletion or overwrite of the common base snapshot breaks the sync line entirely."
    },
    {
        title: "Data Protection - Disk Archives",
        ask: "A storage team needs to design an archival disk-to-disk backup framework that preserves daily and weekly snapshot histories independently of source retention rules. Which technology satisfies this parameter?",
        choices: [
            "SnapVault data protection relationship models.",
            "FlexCache real-time read mirrors.",
            "Consistency Group application groupings.",
            "Inline volume-level compaction passes."
        ],
        rightIndex: 0,
        note: "SnapVault acts as a long-term, disk-based backup solution that replicates and archives incremental snapshot sets to a secondary protection tier according to distinct retention policies."
    },
    {
        title: "Security Hardening - FPolicy Enforcements",
        ask: "An FPolicy instance runs in synchronous mandatory mode to check file extensions across an SMB share. If the connection to all external screening servers drops entirely, how does ONTAP process file operations?",
        choices: [
            "It lets client requests pass unmonitored to optimize data plane performance lines.",
            "It blocks all incoming client file modification access requests for monitored fields to enforce strict data compliance.",
            "It reboots the controller blade to reset management interfaces.",
            "It converts the volume security architecture to UNIX permissions natively."
        ],
        rightIndex: 1,
        note: "In mandatory synchronous configurations, loss of communication with the security engine forces ONTAP to reject requests to ensure security compliance."
    },
    {
        title: "Security Hardening - Encryption Horizons",
        ask: "To safeguard data assets against cross-volume leaks inside a multi-tenant layout while maximizing deduplication ratios across volumes, which security encryption tier is recommended?",
        choices: [
            "NetApp Volume Encryption (NVE)",
            "NetApp Aggregate Encryption (NAE)",
            "NetApp Storage Encryption (NSE) using SED hard drives.",
            "Software-Based Disk Encryption (SBDE)"
        ],
        rightIndex: 1,
        note: "NetApp Aggregate Encryption (NAE) deploys a unified encryption domain across an entire aggregate pool, enabling deduplication optimizations to match blocks seamlessly across volumes."
    },
    {
        title: "Security Hardening - Password Storage",
        ask: "To prevent cryptographic compromise of administrative entryways into the cluster command interfaces, what secure hashing algorithms does ONTAP execute for local password management tables?",
        choices: [
            "MD5 with standard static salts configuration loops.",
            "SHA512 and SSH A512 secure cryptographic hashing algorithms.",
            "AES-256 block text variables mapped onto tape arrays.",
            "安全 SHA1 ticketing metrics only."
        ],
        rightIndex: 1,
        note: "ONTAP hardens management-plane authentication by storing administrative credentials using strong SHA512 and SSH A512 cryptographic hashing functions."
    },
    {
        title: "Performance Metrics - Telemetry Platforms",
        ask: "A multi-protocol engineering team monitors high read response latency values on a high-churn fileshare. Which telemetry analyzer tracks threshold compliance and sends system performance alerting patterns?",
        choices: [
            "Active IQ Config Advisor collection scripts.",
            "Active IQ Unified Manager (AIQUM) performance monitoring platforms.",
            "The node-level boot sector diagnostics command terminal.",
            "Traditional 3-way NDMP diagnostic routines."
        ],
        rightIndex: 1,
        note: "Active IQ Unified Manager aggregates real-time cluster counters, delivering alerting frameworks and historical baseline comparisons to identify structural bottlenecks."
    },
    {
        title: "Performance Metrics - Workload Rebalancing",
        ask: "A scale-out FlexGroup volume spans multiple nodes across an active cluster. If a singular constituent volume runs completely out of local tracking inodes while the global group capacity remains at 40% free space, how does ONTAP resolve this?",
        choices: [
            "The client experiences an immediate 'Disk Space Full' exception error and writes fail.",
            "ONTAP dynamically reallocates unassigned inode pools across constituent members to resolve localized exhaustion non-disruptively.",
            "The cluster triggers an emergency aggregate conversion loop to convert the layout to RAID4.",
            "It enforces a background volume block compaction run to erase metadata fields."
        ],
        rightIndex: 1,
        note: "Modern ONTAP intelligence dynamically balances inode allocation limits across FlexGroup constituent boundaries, avoiding localized metadata starvation when plenty of global capacity remains."
    }
];
