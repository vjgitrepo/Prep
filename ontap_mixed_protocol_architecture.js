
<h2>Section Roadmap</h2>

<ul>
    <li><strong>Section 1:</strong> Mixed Security Style Fundamentals</li>
    <li><strong>Section 2:</strong> SVM Configuration For Mixed Access</li>
    <li><strong>Section 3:</strong> SMB Architecture Deep Dive</li>
    <li><strong>Section 4:</strong> NFS Export Policy Deep Dive</li>
    <li><strong>Section 5:</strong> Mixed Protocol Troubleshooting</li>
    <li><strong>Section 6:</strong> Real World Mixed Mode Issues And Engineering Lessons</li>
    <li><strong>Section 7:</strong> Name Mapping Deep Dive</li>
    <li><strong>Section 8:</strong> Export Policy Auditing Methodology</li>
    <li><strong>Section 9:</strong> Real World Enterprise Case Studies</li>
</ul>


var testSet = [
    {
        title: "ONTAP Mixed Mode Deep Architecture",
        ask: "Review the sidebar study panels to analyze the comprehensive engineering logic governing this domain.",
        choices: [
            "Launch Deep Study Mode from the top menu to view structural data layouts.",
            "Analyze detailed configuration and network parameters.",
            "Verify advanced CLI command syntax guidelines.",
            "Review core blueprint metrics."
        ],
        rightIndex: 0,
        note: "Select 'Deep Study Mode' in the upper layout header to review the comprehensive structural blueprints of this storage domain."
    }
];

var studyNotesPayload = `
    <h2>Section 1: Mixed Security Style Fundamentals</h2>

    <p>
    Mixed security style is designed for environments where Linux NFS clients and Windows SMB clients access the
    same dataset. ONTAP evaluates security information based on the protocol operation, ownership metadata,
    and active security characteristics recorded on files and directories.
    </p>

    <ul>
        <li><strong>Purpose:</strong> Support cross platform data sharing.</li>
        <li><strong>NFS Clients:</strong> Use UNIX permissions, ownership, and mode bits.</li>
        <li><strong>SMB Clients:</strong> Use NTFS ACL evaluation.</li>
        <li><strong>Mixed Style:</strong> Allows both security models to coexist.</li>
        <li><strong>Common Use Case:</strong> Engineering, DevOps, CAD, EDA, Media Rendering.</li>
    </ul>

    <h3>Security Style Comparison</h3>
    <ul>
        <li><strong>UNIX Style:</strong> Best for Linux dominant workloads.</li>
        <li><strong>NTFS Style:</strong> Best for Windows dominant workloads.</li>
        <li><strong>Mixed Style:</strong> Best when both protocols access identical files.</li>
    </ul>

    <div class="code-snippet">
volume create -vserver svm_mixed -volume eng_data -aggregate aggr1 -size 5TB -security-style mixed
volume show -fields security-style
    </div>

    <h2>Section 2: SVM Configuration For Mixed Access</h2>

    <p>
    The Storage Virtual Machine acts as the logical boundary that provides NAS services.
    Both NFS and SMB protocols must be enabled before clients can simultaneously access shared data.
    </p>

    <ol>
        <li>Create SVM.</li>
        <li>Configure management and data LIFs.</li>
        <li>Configure DNS.</li>
        <li>Configure NTP.</li>
        <li>Enable NFS.</li>
        <li>Create CIFS server.</li>
        <li>Join Active Directory.</li>
        <li>Create volumes and junction paths.</li>
    </ol>

    <h3>Network Flow</h3>

    <ul>
        <li>Linux Host → NFS Protocol → Data LIF → SVM → Volume</li>
        <li>Windows Host → SMB Protocol → Data LIF → CIFS Server → Volume</li>
    </ul>

    <div class="code-snippet">
vserver create -vserver svm_mixed -rootvolume root_svm_mixed
vserver nfs create -vserver svm_mixed
cifs create -vserver svm_mixed -cifs-server FILES01 -domain corp.local
network interface show
    </div>

    <h2>Section 3: SMB Architecture Deep Dive</h2>

    <p>
    SMB access requires Active Directory integration and CIFS server services.
    Authentication occurs through Kerberos or NTLM. Authorization is controlled through
    share permissions and NTFS permissions.
    </p>

    <h3>SMB Access Workflow</h3>

    <ol>
        <li>Client resolves SMB server through DNS.</li>
        <li>User authenticates using Active Directory credentials.</li>
        <li>CIFS server validates identity.</li>
        <li>Share permissions evaluated.</li>
        <li>NTFS ACL evaluated.</li>
        <li>Access granted or denied.</li>
    </ol>

    <h3>Important Components</h3>

    <ul>
        <li><strong>CIFS Server:</strong> SMB endpoint on the SVM.</li>
        <li><strong>Active Directory:</strong> Authentication source.</li>
        <li><strong>Share Permissions:</strong> First authorization layer.</li>
        <li><strong>NTFS ACLs:</strong> Final authorization layer.</li>
    </ul>

    <div class="code-snippet">
cifs share create -vserver svm_mixed -share-name Engineering -path /eng_data
vserver cifs share show
vserver cifs show
    </div>

    <h2>Section 4: NFS Export Policy Deep Dive</h2>

    <p>
    Export policies determine which Linux clients can mount data and what access level
    those clients receive. Every NFS volume should have an export policy assigned.
    </p>

    <h3>Export Rule Evaluation</h3>

    <ol>
        <li>Client sends mount request.</li>
        <li>ONTAP reads source IP address.</li>
        <li>Export policy rule matching occurs.</li>
        <li>Authentication rules are evaluated.</li>
        <li>Read only or read write permissions applied.</li>
    </ol>

    <h3>Real World Example</h3>

    <ul>
        <li>Linux subnet: 10.20.30.0/24</li>
        <li>Engineering volume: eng_data</li>
        <li>Read Write access granted to build servers.</li>
        <li>Read Only access granted to reporting servers.</li>
    </ul>

    <div class="code-snippet">
vserver export-policy create -vserver svm_mixed -policyname ENG_POLICY

vserver export-policy rule create \
-vserver svm_mixed \
-policyname ENG_POLICY \
-clientmatch 10.20.30.0/24 \
-rorule any \
-rwrule any \
-superuser any

volume modify -vserver svm_mixed -volume eng_data -policy ENG_POLICY

vserver export-policy rule show
    </div>
`;


    <h2>Section 14: Mixed Protocol Troubleshooting Deep Dive</h2>

    <p>
    Mixed protocol environments introduce unique troubleshooting challenges because
    both NFS and SMB authorization layers must be validated. Many administrators
    incorrectly focus on networking while the problem is actually identity mapping,
    permissions, or export policy evaluation.
    </p>

    <h3>Troubleshooting Workflow</h3>

    <ol>
        <li>Verify client connectivity.</li>
        <li>Verify DNS resolution.</li>
        <li>Verify Data LIF availability.</li>
        <li>Verify user authentication.</li>
        <li>Verify export policy rules.</li>
        <li>Verify SMB share permissions.</li>
        <li>Verify NTFS or UNIX permissions.</li>
        <li>Verify name mapping configuration.</li>
        <li>Verify security style behavior.</li>
    </ol>

    <h3>Scenario 1: Linux Mount Failed</h3>

    <ul>
        <li><strong>Symptom:</strong> mount.nfs access denied by server.</li>
        <li><strong>Common Cause:</strong> Missing export policy rule.</li>
        <li><strong>Verification:</strong> Check client subnet match.</li>
        <li><strong>Resolution:</strong> Create export policy rule allowing source network.</li>
    </ul>

    <div class="code-snippet">
vserver export-policy check-access \
-vserver svm_mixed \
-volume eng_data \
-client-ip 10.20.30.15 \
-authentication-method sys \
-protocol nfs3
    </div>

    <h3>Scenario 2: SMB Access Denied</h3>

    <ul>
        <li><strong>Symptom:</strong> Share opens but files cannot be accessed.</li>
        <li><strong>Common Cause:</strong> NTFS ACL restrictions.</li>
        <li><strong>Common Misunderstanding:</strong> Share permission may allow access while NTFS ACL denies access.</li>
    </ul>

    <div class="code-snippet">
vserver cifs share show
vserver security file-directory show
    </div>

    <h3>Scenario 3: File Ownership Looks Wrong</h3>

    <ul>
        <li><strong>Symptom:</strong> Same user appears differently in Linux and Windows.</li>
        <li><strong>Root Cause:</strong> Missing or incorrect name mapping.</li>
        <li><strong>Effect:</strong> Permission inconsistencies across protocols.</li>
    </ul>

    <div class="code-snippet">
vserver name-mapping show
vserver services name-service getxxbyyy getpwbyname
    </div>

    <h3>Scenario 4: Windows User Works But Linux User Fails</h3>

    <ul>
        <li>SMB path operational.</li>
        <li>NFS export policy missing.</li>
        <li>UNIX permissions restrictive.</li>
        <li>Identity mapping failure.</li>
        <li>Security style mismatch.</li>
    </ul>

    <h2>Section 6: Real World Mixed Mode Issues And Engineering Lessons</h2>

    <p>
    The majority of enterprise mixed mode incidents are operational rather than
    infrastructure failures. Understanding how users actually work is often more
    important than understanding individual ONTAP commands.
    </p>

    <h3>Case 1: CAD Engineering Environment</h3>

    <ul>
        <li>Windows designers use SMB.</li>
        <li>Linux rendering farm uses NFS.</li>
        <li>Both access the same project volume.</li>
        <li>Engineers reported random access denied errors.</li>
    </ul>

    <p>
    Investigation showed that NTFS ACL inheritance was modified by a project lead.
    Windows users retained access through inherited groups while Linux users lost
    effective access because mapped identities no longer matched expected ACL entries.
    </p>

    <h3>Case 2: Software Development Platform</h3>

    <ul>
        <li>Developers use Windows laptops.</li>
        <li>CI pipeline runs on Linux build servers.</li>
        <li>Source code stored on a mixed ONTAP volume.</li>
    </ul>

    <p>
    Frequent file locking complaints occurred. Root cause was SMB opportunistic locks
    combined with editor behaviors and automated build processes accessing identical
    files simultaneously.
    </p>

    <h3>Case 3: Active Directory Outage</h3>

    <ul>
        <li>Windows users unable to authenticate.</li>
        <li>Linux NFS clients continue operating.</li>
        <li>Storage administrators initially suspected ONTAP failure.</li>
    </ul>

    <p>
    Root cause was Active Directory authentication outage. CIFS service relied on AD,
    while NFS clients authenticated through separate UNIX identity services.
    </p>

    <h3>Case 4: Incorrect DNS Configuration</h3>

    <ul>
        <li>SMB users experienced intermittent failures.</li>
        <li>NFS mounts continued working.</li>
        <li>CIFS session establishment randomly failed.</li>
    </ul>

    <p>
    Investigation identified stale DNS entries and incorrect domain controller
    resolution. SMB is heavily dependent on DNS and Active Directory service discovery.
    </p>

    <h3>Senior Engineer Best Practices</h3>

    <ul>
        <li>Always standardize DNS across the environment.</li>
        <li>Validate time synchronization using NTP.</li>
        <li>Document all identity mappings.</li>
        <li>Use groups instead of individual permissions.</li>
        <li>Test NFS and SMB access after every permission change.</li>
        <li>Audit export policies regularly.</li>
        <li>Review NTFS inheritance before troubleshooting storage.</li>
        <li>Keep authentication architecture diagrams current.</li>
    </ul>

    <h3>Most Common Production Issues</h3>

    <ul>
        <li>Missing export policy rules.</li>
        <li>Incorrect NTFS ACL assignments.</li>
        <li>Broken name mapping.</li>
        <li>DNS misconfiguration.</li>
        <li>Active Directory communication failures.</li>
        <li>Wrong security style selection.</li>
        <li>Data LIF placement issues.</li>
        <li>Firewall blocking SMB or NFS traffic.</li>
        <li>Kerberos ticket problems.</li>
        <li>User ownership inconsistencies.</li>
    </ul>

    <div class="code-snippet">
system services ntp server show
dns show
vserver cifs show
vserver nfs show
volume show -fields security-style
vserver export-policy show
vserver export-policy rule show
network interface show
vserver name-mapping show
security login show
    </div>


    <h2>Section 7: Name Mapping Deep Dive</h2>

    <p>
    Name mapping is one of the most important and misunderstood components in a mixed
    NAS environment. ONTAP must determine how a Windows identity relates to a UNIX
    identity when both protocols access the same files.
    </p>

    <h3>Why Name Mapping Exists</h3>

    <p>
    A Windows user is represented by a SID while a Linux user is represented by a UID.
    ONTAP cannot reliably evaluate permissions across protocols unless it knows how
    those identities relate to each other.
    </p>

    <ul>
        <li><strong>Windows Identity:</strong> CORP\\john</li>
        <li><strong>UNIX Identity:</strong> john</li>
        <li><strong>UNIX UID:</strong> 1050</li>
        <li><strong>Windows SID:</strong> S-1-5-21-xxxxxxxx</li>
        <li><strong>ONTAP Mapping:</strong> CORP\\john → john → UID 1050</li>
    </ul>

    <h3>Without Name Mapping</h3>

    <ol>
        <li>Windows user creates file via SMB.</li>
        <li>Linux user accesses file via NFS.</li>
        <li>ONTAP cannot associate ownership.</li>
        <li>Permissions become inconsistent.</li>
        <li>Access denied errors appear.</li>
    </ol>

    <h3>With Proper Mapping</h3>

    <ol>
        <li>Windows user authenticates.</li>
        <li>ONTAP translates identity.</li>
        <li>UNIX UID is determined.</li>
        <li>Ownership remains consistent.</li>
        <li>Cross protocol access becomes predictable.</li>
    </ol>

    <h3>Common Mapping Methods</h3>

    <ul>
        <li>LDAP directory integration.</li>
        <li>RFC2307 attributes in Active Directory.</li>
        <li>Explicit ONTAP name mapping rules.</li>
        <li>Local UNIX users.</li>
        <li>NIS integration.</li>
    </ul>

    <div class="code-snippet">
vserver name-mapping create \
-vserver svm_mixed \
-direction win-unix \
-position 1 \
-pattern CORP\\\\(.*) \
-replacement \\1

vserver name-mapping show
vserver services name-service getxxbyyy getpwbyname
    </div>

    <h3>Real Production Failure</h3>

    <p>
    A semiconductor company used SMB for engineers and NFS for EDA compute clusters.
    A user named CORP\\jsmith existed in Active Directory while the Linux account was
    named johnsmith. Automatic mapping failed, causing thousands of simulation jobs
    to fail because generated files were owned by unmapped users.
    </p>

    <p>
    Resolution involved implementing explicit win-unix mapping rules and validating
    ownership before production rollout.
    </p>

    <h2>Section 8: Export Policy Auditing Methodology</h2>

    <p>
    Many enterprise outages occur because export policies evolve over years and become
    difficult to understand. Regular auditing prevents unauthorized access and reduces
    troubleshooting time.
    </p>

    <h3>Audit Objective</h3>

    <ul>
        <li>Identify overly permissive exports.</li>
        <li>Validate subnet ownership.</li>
        <li>Detect stale application entries.</li>
        <li>Review root access permissions.</li>
        <li>Verify security compliance.</li>
    </ul>

    <h3>Audit Checklist</h3>

    <ol>
        <li>Enumerate all export policies.</li>
        <li>Document policy ownership.</li>
        <li>Identify business application.</li>
        <li>Validate client IP ranges.</li>
        <li>Review superuser access.</li>
        <li>Review read write access.</li>
        <li>Review any wildcard entries.</li>
        <li>Review legacy environments.</li>
    </ol>

    <div class="code-snippet">
vserver export-policy show

vserver export-policy rule show

volume show -fields policy

vserver export-policy show-expanded
    </div>

    <h3>Dangerous Rules To Investigate</h3>

    <ul>
        <li><strong>clientmatch 0.0.0.0/0</strong></li>
        <li><strong>rwrule any</strong></li>
        <li><strong>superuser any</strong></li>
        <li><strong>Very old application subnets</strong></li>
        <li><strong>Unknown client ranges</strong></li>
    </ul>

    <h3>Recommended Audit Questions</h3>

    <ul>
        <li>Who owns the application?</li>
        <li>Does this subnet still exist?</li>
        <li>Is read write truly required?</li>
        <li>Should root access be allowed?</li>
        <li>Does the application still use NFS?</li>
    </ul>

    <h2>Section 9: Real World Case Studies From Enterprise Environments</h2>

    <h3>Case Study 1: Financial Trading Platform</h3>

    <p>
    Linux trading engines generated market data through NFS while Windows analysts
    consumed reports through SMB.
    </p>

    <p>
    An unauthorized export rule was added allowing an entire data center subnet.
    Hundreds of test servers suddenly gained access to sensitive data volumes.
    The issue was discovered during an export policy audit.
    </p>

    <p>
    Lesson learned: Every export rule must have a documented business owner.
    </p>

    <h3>Case Study 2: Pharmaceutical Research</h3>

    <p>
    Scientists used Windows SMB shares while Linux compute farms processed genome
    sequencing workloads.
    </p>

    <p>
    Access failures occurred after a Linux team migrated LDAP servers.
    UID assignments changed unexpectedly. Existing ownership mappings no longer matched
    previous identities.
    </p>

    <p>
    Millions of files appeared to belong to incorrect users.
    Investigation identified identity service drift rather than ONTAP failure.
    </p>

    <h3>Case Study 3: Media Rendering Farm</h3>

    <p>
    Video editors used Windows workstations.
    Render nodes used Linux.
    Both environments shared petabytes of content through mixed protocol access.
    </p>

    <p>
    A project administrator accidentally removed inherited NTFS permissions.
    Windows users retained access through local administrator privileges while Linux
    rendering jobs immediately failed due to ownership and ACL inconsistencies.
    </p>

    <h3>Case Study 4: Global Manufacturing Environment</h3>

    <p>
    Multiple factories accessed engineering drawings through SMB while automated
    production systems used NFS.
    </p>

    <p>
    DNS replication failed between regional sites. SMB users reported intermittent
    authentication failures while NFS workloads remained operational.
    The storage team initially focused on ONTAP networking instead of Active Directory.
    The root cause was DNS infrastructure instability.
    </p>

    <h3>Case Study 5: Large DevOps Environment</h3>

    <p>
    Source code repositories were stored on mixed protocol volumes.
    Developers accessed SMB shares while container build systems accessed NFS mounts.
    </p>

    <p>
    Build pipelines randomly failed because multiple naming standards existed:
    jsmith, john.smith, and johnsmith all represented the same employee.
    Explicit naming conventions and centralized identity mapping eliminated recurring
    access problems.
    </p>

    <div class="code-snippet">
:: Daily export policy audit commands

vserver export-policy show

vserver export-policy rule show

vserver export-policy show-expanded

volume show -fields policy

volume show -fields security-style

vserver name-mapping show

vserver services name-service unix-user show

vserver services name-service unix-group show

security login show

event log show
    </div>

