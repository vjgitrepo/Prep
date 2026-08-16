var testSet = [
    {
        title: "ARP - Heuristic Profiling Matrix",
        ask: "During the automated active shielding state, how does the ONTAP Autonomous Ransomware Protection algorithm distinguish between legitimate heavy application file migrations and an active ransomware encryption threat?",
        choices: [
            "By evaluating CPU scheduling spikes on the master control heads.",
            "By tracking the simultaneous combination of high file rename frequency, unusual extension alterations, and a sharp mathematical increase in write block entropy.",
            "By routing a 3-way NDMP metadata verify task out to tape libraries.",
            "By tracking client connection counts on management interfaces."
        ],
        rightIndex: 1,
        note: "ARP relies on combined heuristic signals. High write volumes alone are ignored unless they are tightly bound to high write entropy and atypical extension modifications."
    },
    {
        title: "ARP - Threat Warning Notifications",
        ask: "When the ARP engine flags a high-entropy encryption write spike with high confidence, what programmatic status behavior is instantly visible via the ONTAP REST API interface?",
        choices: [
            "The cluster drops all data plane network links instantly.",
            "The targeted volume attribute state updates to 'attack' while simultaneously generating structured EMS threat alerts.",
            "A 404 resource missing error payload terminates the connection route.",
            "The underlying physical data aggregate switches to single parity RAID4."
        ],
        rightIndex: 1,
        note: "Ransomware detection flags alter the volume data object model and trigger real-time Event Management System (EMS) warnings for external orchestration tool capture."
    },
    {
        title: "ARP - Snapshot Lock Constraints",
        ask: "To prevent a ransomware strain from deleting the automated backup snapshot baseline generated during an active ARP attack state, what native storage locking attribute is enforced?",
        choices: [
            "A standard volume snapshot retention window lock constraint.",
            "An anti-ransomware snapshot lock that renders the recovery copy completely immutable and undeletable by any user profile during the attack window.",
            "Forced aggregate re-keying actions across the Onboard Key Manager.",
            "Switching the parent SVM file export policy variables to Mixed."
        ],
        rightIndex: 1,
        note: "ONTAP locks ARP-generated snapshots, protecting them from deletion attempts by unauthorized or compromised administrator user credentials during a security incident."
    },
    {
        title: "ARP - False Positive Baseline Training",
        ask: "An active development volume triggers a false ransomware warning due to a planned software file compilation sequence. What specific command workflow clears the threat state and adds the pattern to the baseline?",
        choices: [
            "vserver security anti-ransomware threat resolve -all",
            "vserver security anti-ransomware threat false-positive -vserver svm_data -volume vol_dev",
            "storage aggregate space-unmap -aggregate aggr_1",
            "network interface service-policy update -policy data-s3"
        ],
        rightIndex: 1,
        note: "Executing the false-positive command registers the benign high-churn application file signature into the ARP baseline model, preventing future false alarms."
    },
    {
        title: "ARP - Learning Horizon Deviations",
        ask: "An administrator notes that a newly protected high-churn volume has been in the ARP learning state for 45 days instead of the standard 30-day window. What scenario causes this?",
        choices: [
            "The underlying data aggregate failed a triple-parity RAID-TEC check.",
            "The volume has not processed a sufficient diversity of unique file writes to establish a baseline, causing ONTAP to automatically extend the learning duration.",
            "The data LIF hosting the volume dropped into an unoptimized SAN path.",
            "The volume requires an active external KMIP encryption key attachment."
        ],
        rightIndex: 1,
        note: "If a volume experiences sparse or highly repetitive data writes, the ARP engine self-extends its learning horizon to ensure it builds an accurate tracking baseline."
    },
    {
        title: "ARP - File Extension Tracking Controls",
        ask: "How does the ARP software engine manage tracking unrecognized file extensions that appear inside a volume during its active protection lifecycle?",
        choices: [
            "It drops the client session immediately to protect data structures.",
            "It dynamically maintains a volume-level adaptive checklist of known safe extensions versus newly observed unclassified mutations.",
            "It forces all unclassified data blocks to tier out to cloud object buckets.",
            "It requests a manual name-mapping validation lookup test via LDAP."
        ],
        rightIndex: 1,
        note: "ARP continuously appends new extension anomalies to its temporary evaluation logs, escalating the warning tier if structural metadata alterations begin to match threat templates."
    },
    {
        title: "ARP - Paused Processing Operations",
        ask: "A system administration group plans a massive data migration task that will insert thousands of new files. What advanced CLI parameter accommodates this task without triggering false ARP alerts?",
        choices: [
            "vserver security anti-ransomware volume modify -state off",
            "vserver security anti-ransomware volume modify -state paused",
            "network routing-groups create -filter dynamic",
            "security login publickey clear -username root"
        ],
        rightIndex: 1,
        note: "Setting the state to paused suspends live file inspection tasks during planned heavy maintenance events, while preserving all existing baseline profiling data intact."
    },
    {
        title: "ARP - Restoration Verification Pipelines",
        ask: "Following a ransomware attack, an administrator needs to execute a single-file snaprestore task from an ARP-locked backup copy. What step must be performed before the file can be restored?",
        choices: [
            "The entire storage virtual machine must undergo an svm_dr failover.",
            "The administrator must explicitly identify and clear the active threat state flag inside the anti-ransomware dashboard console.",
            "The private cluster interconnect switches must undergo a hardware restart.",
            "The volume security settings must be converted to standard UNIX bits."
        ],
        rightIndex: 1,
        note: "ONTAP locks restoration targets during an active attack state. Clearing the threat status flag is an essential prerequisite before executing file recovery pipelines."
    },
    {
        title: "ARP - Supported Volume Architecture Limits",
        ask: "Which core volume layout environment is natively compatible with Autonomous Ransomware Protection deployments as of modern ONTAP releases?",
        choices: [
            "Traditional single-plex node root volumes (vol0).",
            "Standard FlexVol volumes and scale-out FlexGroup volumes containing active customer workloads.",
            "Infinite Volumes configured with object storage tiering pools.",
            "FlexCache read-only local mirror proxy aggregate targets."
        ],
        rightIndex: 1,
        note: "ARP shields enterprise customer data workloads natively across standard FlexVol layouts and massive scale-out FlexGroup architectures."
    },
    {
        title: "ARP - Advanced REST API Query Primitives",
        ask: "Which programmatic REST API URI string extracts the granular real-time ransomware status indicators and threat analytics directly from an operational ONTAP cluster node?",
        choices: [
            "/api/cluster/nodes/performance/latency",
            "/api/storage/volumes/{uuid}/anti-ransomware",
            "/api/protocols/san/iscsi/initiators",
            "/api/security/authentication/mfa/status"
        ],
        rightIndex: 1,
        note: "Modern ONTAP automation paths map ransomware status attributes straight under the storage volume endpoint schemas for rapid software query integrations."
    }
];
