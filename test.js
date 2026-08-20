var testSet = [
{
  title: "ONTAP Mixed NAS Environment Architecture",
  ask: "A storage administrator must provide access to the same ONTAP volume for Linux application servers using NFS and Windows file servers using SMB. The business requires both platforms to read and write the same data set while preserving user permissions. Which design best represents a mixed security style deployment?",
  choices: [
    "Create separate volumes for NFS and SMB and never allow protocol sharing. This completely removes protocol interoperability and is the only supported design.",
    "Configure the volume with mixed security style, enable both NFS and SMB protocols on the SVM, and ensure user identity mapping allows Linux and Windows users to access shared data consistently.",
    "Enable only SMB on the SVM and mount CIFS shares from Linux systems because NFS cannot participate in mixed protocol environments.",
    "Set the volume to UNIX security style and disable name mapping because ONTAP automatically converts all Windows permissions without identity translation."
  ],
  rightIndex: 1,
  note: "Mixed security style volumes are designed for environments where both NFS and SMB clients access the same data. Proper protocol configuration, identity mapping, and permission evaluation are critical to maintain consistent access behavior."
},
{
  title: "SVM Protocol Configuration",
  ask: "An engineer creates a new Storage Virtual Machine intended for mixed Linux and Windows access. Users report that NFS mounts work, but SMB clients cannot connect. Which configuration approach is most appropriate?",
  choices: [
    "Export policies automatically provide SMB functionality, so no CIFS server configuration is required.",
    "Enable both NFS and SMB licenses and services on the SVM, create and join the CIFS server to Active Directory, and verify DNS and time synchronization.",
    "Convert the volume to NTFS security style because SMB access depends only on the security style setting.",
    "Assign an export policy to the volume and SMB connectivity will immediately become available."
  ],
  rightIndex: 1,
  note: "SMB access requires an operational CIFS server joined to Active Directory along with proper network, DNS, authentication, and SMB protocol configuration. Export policies alone control NFS access and do not enable SMB."
},
{
  title: "Identity Mapping Between Linux and Windows",
  ask: "A user named john accesses a mixed volume from Linux as a UNIX account and from Windows as an Active Directory account. File ownership appears inconsistent between protocols. What is the recommended solution?",
  choices: [
    "Disable ownership tracking so ONTAP ignores user identities entirely.",
    "Configure user name mapping between UNIX and Windows identities so ONTAP can correctly evaluate ownership and permissions across both protocols.",
    "Allow only root users to access the volume and avoid identity mapping.",
    "Create separate FlexVol volumes for every user instead of mapping identities."
  ],
  rightIndex: 1,
  note: "Name mapping associates UNIX and Windows identities, allowing ONTAP to correctly present ownership, evaluate access, and maintain a consistent security model across protocols."
},
{
  title: "Export Policy Fundamentals",
  ask: "A Linux application server cannot mount an ONTAP volume even though networking is functional. The Windows SMB share works normally. During investigation, the volume is attached to an export policy with no matching rules. What should the engineer do?",
  choices: [
    "Modify NTFS ACLs because NFS mount authorization depends on Windows permissions.",
    "Create export policy rules allowing the Linux client subnet and define appropriate access permissions such as read-only or read-write access.",
    "Disable SMB because both protocols cannot operate simultaneously on a mixed volume.",
    "Join Linux systems to Active Directory and export policies become unnecessary."
  ],
  rightIndex: 1,
  note: "NFS access is controlled by export policies. The client IP, subnet, protocol, and access level must match an export rule before ONTAP grants mount access."
},
{
  title: "SMB Share Permissions and NTFS Security",
  ask: "In a mixed environment, Windows users successfully connect to a share but receive access denied when opening files. Share permissions are open to everyone. Which layer should be examined next?",
  choices: [
    "Export policy rules because SMB authorization completely ignores NTFS permissions.",
    "NTFS file and folder permissions because SMB access is ultimately governed by the underlying file security descriptors in addition to share permissions.",
    "UNIX mode bits only because Windows always uses UNIX permissions internally.",
    "Network interfaces because access denied errors are normally routing issues."
  ],
  rightIndex: 1,
  note: "SMB access typically requires both share-level access and appropriate NTFS permissions. Even when share permissions are permissive, NTFS ACLs can deny access."
},
{
  title: "Mixed Security Style Behavior",
  ask: "A Linux user creates files through NFS in a mixed security style volume. Later a Windows administrator modifies permissions through SMB. How does ONTAP generally handle security evaluation?",
  choices: [
    "Security is permanently fixed when the volume is first created and can never change.",
    "The effective security can depend on the protocol and access operations performed, with ONTAP preserving and managing security information according to the active access model.",
    "ONTAP automatically removes all ACLs to avoid conflicts between SMB and NFS.",
    "Windows ACLs are ignored whenever the original file creator was a UNIX user."
  ],
  rightIndex: 1,
  note: "Mixed security style allows both protocols to interact with data. Understanding how ownership, ACLs, and protocol-based updates affect effective security is essential for predictable access control."
},
{
  title: "Real World Engineering Department Example",
  ask: "An engineering company stores CAD drawings on ONTAP. Linux-based rendering servers process files through NFS while Windows designers edit the same files through SMB. The company wants a single dataset and centralized management. Which design is most suitable?",
  choices: [
    "Duplicate data into separate Linux and Windows repositories and manually synchronize content every day.",
    "Use an ONTAP SVM with both NFS and SMB enabled, mixed security style where appropriate, identity mapping, SMB shares, and export policies controlling protocol-specific access.",
    "Allow SMB only and require all Linux servers to access files through desktop clients.",
    "Use independent storage arrays for each operating system and remove all integration."
  ],
  rightIndex: 1,
  note: "A unified ONTAP NAS design with proper protocol integration reduces complexity, eliminates duplicate datasets, and enables cross-platform collaboration."
},
{
  title: "Root Access Control for NFS",
  ask: "A Linux administrator attempts maintenance tasks requiring root access but receives unexpected permission restrictions. The export policy is configured with root squash equivalent behavior. What should be reviewed?",
  choices: [
    "SMB share names because root access depends on CIFS namespace configuration.",
    "Export policy rule settings including superuser access and authentication mappings that control how UNIX root credentials are treated.",
    "LIF failover groups because they determine file ownership.",
    "NTFS inheritance settings because they control NFS root authorization."
  ],
  rightIndex: 1,
  note: "Export policies define superuser treatment for NFS clients. Misconfigured root access controls can limit administrative operations even when connectivity is functioning correctly."
},
{
  title: "Authentication Flow in Mixed Mode",
  ask: "A company uses Active Directory for Windows users and LDAP for Linux users. Both user populations access the same ONTAP dataset. Which statement best describes the authentication model?",
  choices: [
    "ONTAP requires every user to authenticate through a single protocol regardless of operating system.",
    "ONTAP can integrate with multiple identity services and uses mapping mechanisms to associate Windows and UNIX identities when accessing shared data.",
    "LDAP users cannot access data if SMB is enabled anywhere in the SVM.",
    "Active Directory automatically replaces all UNIX accounts and mappings."
  ],
  rightIndex: 1,
  note: "Mixed environments frequently rely on AD, LDAP, local users, or other identity repositories. Proper mapping allows consistent ownership and authorization decisions across protocols."
},
{
  title: "Troubleshooting Access to Shared Data",
  ask: "Windows users can modify a file but Linux users receive permission denied on the same object. Administrators suspect a mixed protocol permission issue. What is the most effective first troubleshooting approach?",
  choices: [
    "Delete the file and recreate it to remove all security information.",
    "Review file ownership, effective permissions, security style, identity mappings, export policy rules, and NTFS or UNIX permissions to understand how ONTAP is evaluating access.",
    "Disable NFS so SMB permissions become the default permissions model.",
    "Reboot every client system before investigating storage permissions."
  ],
  rightIndex: 1,
  note: "Mixed protocol troubleshooting requires examination of identity translation, export policies, ACLs, security style, ownership, and protocol-specific authorization mechanisms before making changes."
}
];
