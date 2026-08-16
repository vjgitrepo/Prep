var testSet = [
    {
        title: "MetroCluster - Tiebreaker Quorum Logic",
        ask: "In an ONTAP MetroCluster IP configuration spanning two distinct physical locations, what is the core architectural purpose of deploying an independent MetroCluster Tiebreaker software instance at a third failure domain?",
        choices: [
            "To handle inline block compression calculations for data in flight over WAN links.",
            "To continuously monitor the cluster peer nodes and automatically orchestrate a secure, unattended switchover if an entire site failure is verified, preventing split-brain conditions.",
            "To execute background data compaction tasks on local flash media storage aggregates.",
            "To proxy administrative REST API authentication requests directly to active directory domains."
        ],
        rightIndex: 1,
        note: "The MetroCluster Tiebreaker acts as an independent out-of-band quorum arbitrator. It prevents dangerous active-active split-brain data write conflicts by verifying site isolation before triggering unmanaged switchovers."
    },
    {
        title: "FabricPool - Volume Move Cloud Reference Retention",
        ask: "An aggregate hosting FabricPool-enabled tiered volumes is running out of physical capacity, requiring a Volume Move task to a secondary flash aggregate. How does ONTAP optimize this block relocation relative to the cloud object tier?",
        choices: [
            "It forces all cold data blocks residing in the cloud tier to be fully re-hydrated back into local flash SSD sectors.",
            "ONTAP relocates the local volume metadata block map safely, allowing the destination aggregate to assume direct metadata tracking pointers to the cloud object tier without data re-hydration.",
            "It temporarily converts the cloud target storage bucket into a read-only NFS file path structure.",
            "It prompts the administrator via an advanced mode warning flag to change the security style to Mixed."
        ],
        rightIndex: 1,
        note: "FabricPool volume migrations are highly block-efficient. ONTAP shifts the metadata maps within local memory loops, allowing the new aggregate to take over cloud object pointers without pulling cold blocks back over the network links."
    },
    {
        title: "MetroCluster - Planned Switchover Operations",
        ask: "A storage architect is planning an orderly, non-disruptive power maintenance window at Site A of a MetroCluster fabric. Which command execution safely shifts active operations entirely to Site B while preserving active data cache integrity?",
        choices: [
            "metrocluster switchover -controller-replacement true",
            "metrocluster switchover -type planned",
            "storage failover takeover -node *",
            "vserver object-store-server bucket modify -state offline"
        ],
        rightIndex: 1,
        note: "Executing a planned MetroCluster switchover ensures that volatile controller cache arrays are completely flushed and gracefully synchronized over mirroring lanes before shifting client data configurations to the surviving site."
    },
    {
        title: "FabricPool - Cloud Tiering Lifecycle Rules",
        ask: "To satisfy strict capacity scaling rules on a primary performance tier, an engineer configures a volume with the FabricPool 'Auto' tiering policy. What operational constraint triggers block data moves out to the cloud object store?",
        choices: [
            "Blocks are moved immediately as soon as a client application executes an initial file write task.",
            "ONTAP tracks data access states and automatically tiers out blocks that have been completely inactive (cold) for a defined number of days (the tiering minimum cooling period).",
            "Data blocks are tiered only when the local root volume (vol0) crosses a 90 percent saturation threshold.",
            "Blocks are compressed down to a single-plex raw status before being deleted entirely from memory."
        ],
        rightIndex: 1,
        note: "The FabricPool 'Auto' policy monitors write logs to classify blocks as 'cold' based on inactivity timelines. It then automatically streams those inactive chunks out to the cloud target to free up flash space."
    },
    {
        title: "MetroCluster IP - Interface Configuration Requirements",
        ask: "When designing network paths for a modern scale-out MetroCluster IP installation, which interface configuration primitive is strictly mandatory to support synchronous NVRAM replication?",
        choices: [
            "Standard data LIF network ports assigned the data-core service policy framework.",
            "Dedicated MetroCluster IP interfaces configured on specialized high-throughput ports and mapped onto isolated, non-routable layer-2 storage networks.",
            "An intercluster LIF paired with standard out-of-band management subnet gateways.",
            "A global unified multi-protocol namespace export mapping mask running over an NFS share."
        ],
        rightIndex: 1,
        note: "MetroCluster IP demands high-throughput, low-latency replication links. NVRAM and storage replication are isolated to dedicated local high-speed physical ports running over unrouted layer-2 fabrics."
    },
    {
        title: "FabricPool - Snapshot-Only Policy Parameters",
        ask: "A high-churn volume utilizes the FabricPool 'Snapshot-Only' tiering policy configuration. What occurs when a client application updates data blocks that are referenced by older snapshot copies?",
        choices: [
            "The client write request is blocked until the older snapshots are deleted from disk tracks.",
            "ONTAP retains active user blocks on the performance flash media tier, while cold data blocks associated strictly with volume snapshot copies are moved out to the object tier.",
            "The entire volume is dynamically converted into a thick-provisioned block LUN container.",
            "The system triggers a controller takeover to reload local identity name translation tables."
        ],
        rightIndex: 1,
        note: "The 'Snapshot-Only' policy specifically targets backup metadata spaces. It leaves the active production file system uncompressed on fast local flash while offloading older cold snapshot blocks to cheaper object repositories."
    },
    {
        title: "MetroCluster - Healing Validation Phases",
        ask: "Following a site disaster recovery remediation cycle, an engineer is ready to return operations back to the primary site. Which sequence of operations must be executed to safely complete the return?",
        choices: [
            "metrocluster switchback followed immediately by a hard node reboot.",
            "A metrocluster heal data phase, followed by a metrocluster heal aggregates phase, and finalized by executing a metrocluster switchback command.",
            "A metrocluster heal aggregates phase, followed by a metrocluster heal data phase, and finalized by executing a metrocluster switchback command.",
            "A simple taskkill sequence to clear out-of-band python server threads."
        ],
        rightIndex: 2,
        note: "MetroCluster healing requires a strict order. Parity aggregate mirrors must be repaired and synchronized first (heal aggregates) before local cluster data plane databases can re-synchronize (heal data) and allow a safe switchback."
    },
    {
        title: "FabricPool - Tiering Fullness Thresholds",
        ask: "An aggregate linked to a cloud object repository contains multiple child volumes using tiering policies. At what physical capacity saturation mark does the FabricPool engine begin aggressively moving cold blocks out to the cloud target?",
        choices: [
            "20 percent capacity saturation threshold.",
            "50 percent capacity saturation threshold.",
            "54 percent passing threshold criteria parameters.",
            "The default internal threshold of 50 percent free space (or when the aggregate footprint hits 50 percent fullness)."
        ],
        rightIndex: 3,
        note: "FabricPool is designed to optimize local performance. It proactively sweeps memory tables and pushes cold blocks out to the object tier when the hosting aggregate crosses its default 50% capacity fullness threshold."
    },
    {
        title: "MetroCluster - Asymmetric Link Troubleshooting",
        ask: "An administrator checks an active MetroCluster configuration and notes a severe performance lag across replicated volumes. Which diagnostic command utility is optimized to evaluate end-to-end sync status and check component replication health?",
        choices: [
            "vserver object-store-server user show",
            "metrocluster check run followed by executing metrocluster check show",
            "statistics show -object client_permissions",
            "network port show -vlan-tags -instance"
        ],
        rightIndex: 1,
        note: "The 'metrocluster check' command subsystem executes a comprehensive, end-to-end audit across configurations, checking logical sync states, cabling links, and cluster connectivity lines."
    },
    {
        title: "FabricPool - Supported Cloud Provider Targets",
        ask: "Which object storage endpoint type is fully qualified and supported as an external capacity tier target for FabricPool configurations as of modern ONTAP versions?",
        choices: [
            "An unencrypted local SMB fileshare path hosted on a legacy Windows server infrastructure.",
            "NetApp StorageGRID, Amazon Web Services (AWS) S3, Microsoft Azure Blob, and Google Cloud Storage buckets.",
            "A raw physical block SCSI LUN mapping boundary running over Fibre Channel links.",
            "A traditional 3-way NDMP tape drive directory queue setup."
        ],
