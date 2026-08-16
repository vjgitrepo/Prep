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
    }
];
