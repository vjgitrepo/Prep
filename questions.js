// ==========================================
// BATCH 1: QUESTIONS 1 - 10
// ==========================================
var testSet = [
    {
        title: "ONTAP Native S3 Setup",
        ask: "An administrator needs to enable ONTAP native S3 object storage capabilities on a data SVM in ONTAP 9.18. Which network interface configuration parameter is strictly required to process incoming S3 API payloads?",
        choices: [
            "A data LIF configured with standard NFS/SMB file protocol capabilities.",
            "A data LIF explicitly assigned the data-s3 service policy infrastructure profile.",
            "An intercluster LIF paired with an active cluster peering relation.",
            "A cluster management LIF configured with an advanced mode routing table."
        ],
        rightIndex: 1,
        note: "ONTAP separates your storage traffic streams. To accept and process S3 API requests cleanly, the associated data interface must carry the explicit data-s3 service policy attribute."
    },
    {
        title: "S3 SnapMirror Architecture",
        ask: "You are designing an intercluster S3 SnapMirror relationship to replicate object buckets across two remote ONTAP 9.18 clusters over a WAN link. Which network component must be verified first?",
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
        title: "Unified NAS/S3 Namespace",
        ask: "Beginning with ONTAP 9.18, an architect enables the Unified NAS/S3 namespace feature on an existing data path. What core operational advantage does this deliver?",
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
        title: "Object Security & Policies",
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
        title: "ONTAP Native S3 Setup",
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
        title: "Object Security & Policies",
        ask: "An S3 policy statement defines an 'Effect' of 'Deny' over an object resource. If a second statement inside the same policy maps an 'Allow' action to that user, how does ONTAP resolve the privilege collision?",
        choices: [
            "The Allow statement overrides the Deny statement completely.",
            "The Deny statement always takes absolute precedence, blocking user access parameters unconditionally.",
            "The system disables the object store server to protect configuration metadata.",
            "The configuration prompts the administrator to format the storage arrays."
        ],
        rightIndex: 1,
        note: "ONTAP evaluates S3 bucket policies using a strict security framework where explicit Deny statements unconditionally block Allow instructions to prevent accidental privilege leaks."
    },
    {
        title: "S3 SnapMirror Architecture",
        ask: "An engineer checks a failed S3 SnapMirror replication state between two ONTAP clusters and notices an authentication failure error. Which security parameter must be verified to allow bucket peering relationships to authenticate?",
        choices: [
            "The local user mapping fallback setting for pcuser profiles.",
            "The matching secure Access Key and Secret Key credentials configured for the replication mirror accounts on both endpoints.",
            "The physical port speed properties on the node management links.",
            "The cryptographic SSH certificate roles assigned to the cluster CLI."
        ],
        rightIndex: 1,
        note: "ONTAP S3 SnapMirror relies on object-plane authentication boundaries. Mirroring targets require matching cryptographic access and secret key sets to authorize replication pipelines."
    },
    {
        title: "Unified NAS/S3 Namespace",
        ask: "When provisioning a Unified NAS/S3 namespace bucket mapping in an ONTAP cluster, what restriction applies to the volume security style layout hosting the target directory?",
        choices: [
            "The volume must be formatted with an NTFS security style exclusively.",
            "The volume must support either UNIX or NTFS security styles, but Mixed security style configurations are not supported for bucket-to-path mappings.",
            "The volume must reside entirely on an external StorageGRID cluster appliance tier.",
            "The volume must have all snapshot copy schedules permanently deactivated."
        ],
        rightIndex: 1,
        note: "Unified NAS/S3 bucket-to-path mappings are supported on volumes utilizing either UNIX or NTFS security styles. Mixed security styles are restricted to protect against metadata collision issues during access."
    },
    {
        title: "ONTAP Native S3 Setup",
        ask: "What is the maximum object size supported natively inside an ONTAP S3 bucket deployment as of recent software version enhancements (ONTAP 9.14+)?",
        choices: [
            "16 GB",
            "5 TB",
            "100 TB",
            "An unlimited file boundary governed only by aggregate size"
        ],
        rightIndex: 1,
        note: "To align perfectly with standard public cloud object storage parameters, ONTAP object architecture caps individual object sizes at a maximum threshold of 5 TB."
    },
    {
        title: "S3 SnapMirror Architecture",
        ask: "An administrator needs to construct a cascading data protection model where an ONTAP native S3 bucket mirrors data to a local secondary cluster, which then automatically mirrors a copy out to an external cloud provider S3 bucket. Which mechanism supports this?",
        choices: [
            "Traditional 3-way NDMP tape streams.",
            "S3 SnapMirror bucket replication targets configured with cloud tier targets using NetApp BlueXP data services.",
            "FlexCache proxy read arrays configured to point to Amazon Web Services.",
            "An active adaptive Quality of Service limit script handling data streams."
        ],
        rightIndex: 1,
        note: "S3 SnapMirror extends data workflows by letting object storage buckets peer not only to other ONTAP clusters but also out to external cloud destinations via BlueXP management integration layers."
    },
// ==========================================
// BATCH 2: QUESTIONS 11 - 20
// ==========================================
    {
        title: "Unified NAS/S3 Namespace",
        ask: "A client application attempts to perform a multi-part upload of a large file using S3 APIs into an ONTAP Unified NAS/S3 mapped bucket. When does the file become visible to standard NAS clients connecting over NFS or SMB?",
        choices: [
            "Immediately when the first chunk or part is written to memory.",
            "Only after all parts of the object are completely uploaded and the client issues the Complete Multipart Upload API call.",
            "Exactly 24 hours after the initialization event completes.",
            "Once an administrator runs an active inline deduplication rescan."
        ],
        rightIndex: 1,
        note: "To maintain file system transactional consistency, ONTAP hides incomplete object uploads from the NAS space until the multi-part sequence commits successfully via the final assembly call."
    },
    {
        title: "Object Security & Policies",
        ask: "When parsing user accounts for an ONTAP object storage server infrastructure, what role parameter maps to the standard AWS 'Principal' keyword in bucket security profiles?",
        choices: [
            "The physical host server IQN string.",
            "The unique S3 user or group string created inside the data SVM hosting the object server.",
            "The local system root user account identifier mapping profile.",
            "The network broadcast routing group subnet gateway IP address."
        ],
        rightIndex: 1,
        note: "Principal targets in ONTAP S3 policies evaluate S3 user assets managed within the parent SVM object-store infrastructure configuration layers."
    },
    {
        title: "ONTAP Native S3 Setup",
        ask: "Which command string constructs a brand-new object store server configuration instance inside an isolated virtual data plane SVM?",
        choices: [
            "vserver object-store-server create",
            "vserver security entry add",
            "storage aggregate space map",
            "network interface modify"
        ],
        rightIndex: 0,
        note: "Spawning the underlying object infrastructure inside an SVM requires executing the 'vserver object-store-server create' command with defined name handles."
    },
    {
        title: "S3 SnapMirror Architecture",
        ask: "What type of data synchronization timeline does S3 SnapMirror execute when moving object blocks from a source bucket over to an authenticated destination target tier?",
        choices: [
            "Symmetric continuous synchronous zero-RPO execution strings.",
            "Asynchronous block-level data transfers operating continuously or based on configured cron schedule rules.",
            "Manual weekly file-copy dump processes managed by third-party tools.",
            "Stateless single-plex block targets handled via 3-way NDMP."
        ],
        rightIndex: 1,
        note: "S3 SnapMirror handles bucket mirroring using asynchronous pipelines that continuously track block mutations and stream increments out to destination nodes."
    },
    {
        title: "Unified NAS/S3 Namespace",
        ask: "What occurs if a NAS user attempts to rename a directory that is currently mapped to an active ONTAP Unified S3 bucket namespace configuration?",
        choices: [
            "The system blocks the renaming operation at the protocol layer to preserve the S3 bucket path mapping structure.",
            "The directory renames instantly, and ONTAP crashes the object store server head.",
            "Data blocks are automatically purged from the aggregate disk sectors.",
            "The folder converts itself into a raw block SCSI LUN target map."
        ],
        rightIndex: 0,
        note: "Because S3 unified bucket-to-path architectures require matching logical names to anchor object calls, ONTAP pins the mapped directory structure to block modification actions."
    },
    {
        title: "Object Security & Policies",
        ask: "Which cryptographic transport configuration is recommended to secure ONTAP S3 object server API communications against packet intercept exploits?",
        choices: [
            "Standard unencrypted HTTP configurations mapping ports to 80.",
            "HTTPS with Secure Sockets Layer (SSL) certificates mapped to data LIF infrastructure interfaces.",
            "Local aggregate-level software disk encryption layers (NAE).",
            "Kerberos v4 credentials mapping metrics only."
                ],
        rightIndex: 1,
        note: "Object stores protect data-in-flight profiles by binding SSL certificates onto S3 data interfaces to enforce robust, encrypted HTTPS transport routes."
    },
    {
        title: "ONTAP Native S3 Setup",
        ask: "An environment requires a highly resilient object-store layer. What architecture does ONTAP use to scale a native S3 bucket's performance and capacity across all controllers in a cluster simultaneously?",
        choices: [
            "A single-disk aggregate configuration map.",
            "Backing the S3 bucket configuration with a scale-out FlexGroup volume spanning multiple aggregates across all cluster nodes.",
            "A local node root volume file export string mapping loop.",
            "A standalone iSCSI target group namespace arrangement profile."
        ],
        rightIndex: 1,
        note: "ONTAP scales object capabilities to enterprise levels by hosting massive buckets inside multi-node FlexGroup volumes, balancing operational loads over all cluster resources."
    },
    {
        title: "S3 SnapMirror Architecture",
        ask: "When configuring S3 SnapMirror data protection lines, which tool provides the unified automated user layout to peer buckets, initialize transfers, and mirror object states?",
        choices: [
            "Active IQ Config Advisor collection scripts",
            "NetApp BlueXP interface or updated ONTAP System Manager portals.",
            "The node-level boot sector diagnostics command terminal.",
            "Traditional 3-way NDMP diagnostic routines."
        ],
        rightIndex: 1,
        note: "Modern digital management planes (BlueXP and updated System Manager consoles) encapsulate S3 SnapMirror deployment models to orchestrate bucket mirroring mappings."
    },
    {
        title: "Unified NAS/S3 Namespace",
        ask: "A developer provisions a folder structure inside a Unified S3 bucket path via an S3 client. How does this folder asset look to a Linux engineer viewing the space over an NFS mount point?",
        choices: [
            "It presents as an unreadable binary block file layout.",
            "It displays naturally as a standard nested file directory branch inside the namespace tree.",
            "It vanishes completely from listing screens to safeguard security bounds.",
            "It forces an automatic controller takeover event to reload databases."
        ],
        rightIndex: 1,
        note: "Unified protocol architectures translate virtual S3 folder structures seamlessly into standard physical file directory listings for file-based clients."
    },
    {
        title: "Object Security & Policies",
        ask: "Which command is used to quickly retrieve the explicit JSON policy text block assigned to an active S3 bucket to inspect access anomalies?",
        choices: [
            "vserver object-store-server bucket policy show",
            "vserver security file-directory show",
            "network port show -instance",
            "statistics show -object workload"
        ],
        rightIndex: 0,
        note: "Reviewing active JSON permissions and statement blocks belonging to an object bucket utilizes the 'vserver object-store-server bucket policy show' command layout."
    },
// ==========================================
// BATCH 3: QUESTIONS 21 - 25
// ==========================================
    {
        title: "ONTAP Native S3 Setup",
        ask: "Which delivery engine handles entitlement validations and bundles authorization permissions natively for modern additions like ONTAP S3 and S3 SnapMirror?",
        choices: [
            "Manual alpha-numeric feature keys typed via boot parameters.",
            "The modern unified NetApp License File (NLF) format.",
            "An external REST API database proxy node engine.",
            "Advanced mode cluster authentication roles."
        ],
        rightIndex: 1,
        note: "Modern ONTAP installations deploy feature bundles via a single NetApp License File (NLF), which automatically registers S3 storage server and mirroring capabilities."
    },
    {
        title: "ONTAP Native S3 Setup",
        ask: "What occurs if an object bucket with active S3 SnapMirror replication undergoes an automated failover takeover event on its local physical HA controller pair?",
        choices: [
            "The S3 SnapMirror relationship terminates permanently and data is lost.",
            "The data LIFs migrate to the surviving HA partner node, and S3 SnapMirror data transfers resume non-disruptively once paths recover.",
            "The replication pipeline switches exclusively to low-speed out-of-band links.",
            "The target volume automatically reformats its drive parity configurations."
        ],
        rightIndex: 1,
        note: "S3 object storage features leverage ONTAP's core high-availability layer; data interfaces migrate to the surviving head during takeovers, preserving active data mirroring relationships."
    },
    {
        title: "Unified NAS/S3 Namespace",
        ask: "When multi-protocol users read objects as regular files over an NFS mount using the Unified namespace feature, how does ONTAP process object metadata attributes like tags or custom content-type descriptions?",
        choices: [
            "It converts the custom metadata strings into standard UNIX POSIX permission bits.",
            "ONTAP preserves the object metadata within internal system databases, but these attributes are not directly visible or editable via standard NAS file protocol attributes.",
            "It forces all custom strings to overwrite the file's ownership records.",
            "It purges the metadata fields instantly to optimize physical capacity footprints."
        ],
        rightIndex: 1,
        note: "Unified operations protect object properties by retaining S3-specific tags in specialized internal structures, hiding them from NAS protocol views while keeping them intact for S3 APIs."
    },
    {
        title: "Object Security & Policies",
        ask: "Which command in the ONTAP CLI is used to attach or update an access control policy definition file over a pre-existing native S3 bucket instance?",
        choices: [
            "vserver security file-directory modify",
            "vserver object-store-server bucket policy put",
            "network route create",
            "security login publickey create"
        ],
        rightIndex: 1,
        note: "Managing ONTAP object-store variables from the CLI utilizes the vserver object-store-server family, where the 'bucket policy put' command uploads the JSON policy layout."
    },
    {
        title: "ONTAP Native S3 Setup",
        ask: "A storage team needs to check the active health, endpoint details, and user connectivity statuses of an operational object store server layer. Which command generates this visual status check?",
        choices: [
            "vserver object-store-server show",
            "network port show -vlan-tags",
            "storage aggregate space-unmap",
            "security login publickey create"
        ],
        rightIndex: 0,
        note: "Verifying operational metrics, name states, and endpoint interfaces of an S3 server is executed using the 'vserver object-store-server show' command sequence."
    }
]; // Closing the complete array cleanly

