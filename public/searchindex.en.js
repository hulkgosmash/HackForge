var relearn_searchindex = [
  {
    "breadcrumb": "HackForge",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "HackForge",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Enumeration",
    "uri": "/enumeration/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  Enumeration \u003e  Hosts \u003e  Services",
    "content": "General Create an active connection\nftp $ip Create a passive connection (If you can’t see files it may help)\nftp -p $ip List all files\nls -lah Download multiple files\nprompt mget * Download all files using wget\nwget -r ftp://$user:$password@$ip/ View the directory contents with curl\ncurl -s -v 'ftp://$user:$password@$ip/' View directory contents with curl in passive mode\ncurl -s -v -P - 'ftp://$user:$password@$ip/' Upload a file with curl\ncurl -T \"file.txt\" -P - 'ftp://$user:$password@$ip/' nmap scripts\nnmap --script=ftp-anon,ftp-libopie,ftp-proftpd-backdoor,ftp-vsftpd-backdoor,ftp-vuln-cve2010-4221,tftp-enum -p 21 $ip",
    "description": "General Create an active connection\nftp $ip Create a passive connection (If you can’t see files it may help)\nftp -p $ip List all files\nls -lah Download multiple files\nprompt mget * Download all files using wget\nwget -r ftp://$user:$password@$ip/ View the directory contents with curl\ncurl -s -v 'ftp://$user:$password@$ip/' View directory contents with curl in passive mode\ncurl -s -v -P - 'ftp://$user:$password@$ip/' Upload a file with curl",
    "tags": [],
    "title": "File Transfer Protocol (FTP)",
    "uri": "/enumeration/hosts/services/file-transfer-protocol-ftp/index.html"
  },
  {
    "breadcrumb": "",
    "content": "This is your new home page.",
    "description": "This is your new home page.",
    "tags": [],
    "title": "HackForge",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  Enumeration",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Hosts",
    "uri": "/enumeration/hosts/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  Enumeration \u003e  Hosts",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Port Scanning",
    "uri": "/enumeration/hosts/port-scanning/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  Enumeration \u003e  Hosts \u003e  Services",
    "content": "Initial Scans Netbios scan\nnbtscan -r $ip Enumerate host name\nnmblookup -A $ip List Shares #1 (specifying guest account)\nsmbmap -H $ip -u guest List Shares #2\nsmbclient -L \\\\$ip List Shares #3\ncrackmapexec smb $ip --shares List Shares with credentials\nsmbmap -u $user -p $password -R -H $ip Exhaustive Scan\nenum4linux -a -M -l -d $ip Check Null Sessions\nsmbmap -H $ip Check Null Sessions\nrpcclient -U \"\" -N $ip Check Null Sessions\nenum4linux -a -M -l -d $ip Check Null Sessions\nsmbclient \\\\\\\\$ip\\\\$share Vulnerability scan\nnmap --script smb-vuln* -p 139,445 $ip Verify Credentials\ncrackmapexec smb $ip -u $user -p $password User brute force\ncrackmapexec smb $ip -u anonymous -p \"\" --rid-brute 10000 Connect to shares Connect\nsmbclient //$ip/$share Connect with credentials\nsmbclient //$ip/$share -U $user Connect with credentials\nsmbclient \\\\\\\\$ip\\\\$share -U \"$user\" -p \"$password\" Recursively List Contents\nsmbmap -H $ip --depth 10 -R $share Mount share\nsudo mount -t cifs -o \"username=$user,password=$password\" //$ip/$share /mnt/secure Share Permissions Check share permissions\nsmbcacls --no-pass //$ip/$share Change Password Change users password\nsmbpasswd -r $ip -U $user Download Files Download all files\nRECURSE ON PROMPT OFF mget * Download specific file\nsmbmap -H $ip --depth 10 -R $share --depth 10 -A file.txt -q",
    "description": "Initial Scans Netbios scan\nnbtscan -r $ip Enumerate host name\nnmblookup -A $ip List Shares #1 (specifying guest account)\nsmbmap -H $ip -u guest List Shares #2\nsmbclient -L \\\\$ip List Shares #3\ncrackmapexec smb $ip --shares List Shares with credentials\nsmbmap -u $user -p $password -R -H $ip Exhaustive Scan\nenum4linux -a -M -l -d $ip Check Null Sessions\nsmbmap -H $ip Check Null Sessions",
    "tags": [],
    "title": "Server Message Block (SMB)",
    "uri": "/enumeration/hosts/services/server-message-block-smb/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  Enumeration \u003e  Hosts",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Services",
    "uri": "/enumeration/hosts/services/index.html"
  },
  {
    "breadcrumb": "HackForge",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
