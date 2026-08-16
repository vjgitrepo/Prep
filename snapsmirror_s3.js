// =========================================================================
// ONTAP 9.18 S3 OBJECT STORAGE & S3 SNAPMIRROR ARCHITECTURAL DEEP STUDY DATA
// =========================================================================

var testSet = [
    {
        title: "ONTAP S3 & S3 SnapMirror Deep Architecture",
        ask: "Review the sidebar study panels to analyze the comprehensive engineering logic governing ONTAP object deployments.",
        choices: [
            "Launch Deep Study Mode from the top menu to view structural data layouts.",
            "Review cascading multi-site replication models inside the sidebar panel.",
            "Analyze CORS and JSON bucket access policy criteria.",
            "Verify service policy constraints required for data plane LIF nodes."
        ],
        rightIndex: 0,
        note: "Select 'Deep Study Mode' in the upper layout header to review the comprehensive structural blueprints of ONTAP object storage networks."
    }
];

// Plain ASCII Encapsulated HTML Block for In-Depth Architectural Reading Sheets
var studyNotesPayload = `
    <h2>1. ONTAP Native S3 Storage Architecture</h2>
    <p>ONTAP object storage transforms the storage engine into an enterprise-grade S3-compliant target. Instead of running a separate middleware translation tier, S3 API operations communicate straight down to the Write Anywhere File Layout (WAFL) system file layers.</p>
    
    <h3>Core Infrastructure Primitives:</h3>
    <ul>
        <li><strong>System-Managed Volumes:</strong> Every bucket created inside an SVM is physically backed by hidden, system-managed <strong>FlexVol</strong> or scale-out <strong>FlexGroup</strong> volume containers.</li>
        <li><strong>Service Policy Restrictions:</strong> Object endpoints require data LIF network connections explicitly assigned the <code>data-s3</code> service policy. Standard file and block policies (NFS, iSCSI) will immediately refuse S3 connections.</li>
        <li><strong>Scale-Out FlexGroups:</strong> For massive object infrastructures, backing buckets with multi-node FlexGroup containers spreads object data mutations across all controller heads in the cluster concurrently to eliminate performance bottlenecks.</li>
    </ul>

    <h2>2. S3 SnapMirror Replication Topologies</h2>
    <p>S3 SnapMirror offers an asynchronous, block-efficient mirroring layer to replicate buckets across storage endpoints. It operates entirely at the object store plane, independently of standard volume-level file mirrors.</p>
    
    <h3>Supported Layout Variations (ONTAP 9.14 - 9.18):</h3>
    <ul>
        <li><strong>Fan-Out Topologies:</strong> A single primary production master bucket can safely stream continuous asynchronous update blocks out to up to 20 separate target backup mirrors concurrently.</li>
        <li><strong>Cascading Multi-Region Models:</strong> Data blocks can replicate from Cluster A (Primary) over to Cluster B (Local Vault Archive), which then initiates an automated secondary push out to a public cloud object bucket target (e.g., AWS S3 or Google Cloud Storage) using BlueXP workflows.</li>
        <li><strong>Peering Prerequisites:</strong> Intercluster S3 SnapMirror replication requires dedicated intercluster LIF configurations and functioning cluster peering structures. Authentication maps require perfectly matched Access Key and Secret Key definitions across targets.</li>
    </ul>

    <h2>3. Unified NAS / S3 Global Namespaces</h2>
    <p>Introduced to solve cross-protocol silos, the Unified Namespace feature allows regular files written over NFS or SMB connections to be viewed and pulled as objects over S3 links, and vice-versa, using precise bucket-to-path directory mappings.</p>
    
    <h3>Workload Constraints & Operational Behaviors:</h3>
    <ul>
        <li><strong>Security Style Rules:</strong> Mappings are supported on volumes configured with either standard <strong>UNIX</strong> or <strong>NTFS</strong> permissions. Mixed security style volume boundaries are strictly blocked to protect against metadata translations bugs.</li>
        <li><strong>Directory Locking Blocks:</strong> Because path consistency is mandatory to map S3 URI locations to physical file structures, ONTAP pins mapped directory trees at the protocol layer, blocking clients from renaming active target folders.</li>
        <li><strong>Multipart Invisibility:</strong> When a cloud application executes a multipart object ingest, the data blocks remain hidden from NAS file system search trees until the complete transfer payload receives its final assembly validation call.</li>
    </ul>

    <h2>4. Object Security & CORS Access Controls</h2>
    <p>ONTAP secures object endpoints using a dual-validation framework that combines standard S3 JSON bucket access policies with Cross-Origin Resource Sharing (CORS) rules to secure cross-domain web application calls.</p>
    
    <h3>CLI Administration Syntax Snippets:</h3>
    <div class="code-snippet">
:: Creating an active Object Store Server inside an isolated SVM
vserver object-store-server create -vserver svm_s3 -server-name s3_filer -is-secure true

:: Provisioning a scale-out enterprise S3 Bucket hosted on a FlexGroup layout
vserver object-store-server bucket create -vserver svm_s3 -bucket corp_vault -type nas -nas-path /vol/data

:: Verifying connection endpoints and server health parameters
vserver object-store-server show -vserver svm_s3</div>
`;
