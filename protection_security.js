var testSet = [
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
        ask: "A scheduled incremental SnapMirror update fails. Diagnostic logs flag a 'Snapshot copy lock mismatch' alert. What does this indicate?",
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
            "Security SHA1 ticketing metrics only."
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
