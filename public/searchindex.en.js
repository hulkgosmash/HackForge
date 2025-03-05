var relearn_searchindex = [
  {
    "breadcrumb": "HackForge",
    "content": "",
    "description": "",
    "tags": [],
    "title": "1. Reconnaissance \u0026 Information Gathering",
    "uri": "/reconnaissance_info_gathering/index.html"
  },
  {
    "breadcrumb": "HackForge",
    "content": "Services",
    "description": "Services",
    "tags": [],
    "title": "Brute Force",
    "uri": "/bruteforce/index.html"
  },
  {
    "breadcrumb": "HackForge",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  Enumeration \u003e  Hosts \u003e  Services",
    "content": "General Try zone transfer without domain\ndig axfr @$ip Try zone transfer guessing the domain\ndig axfr @$ip $domain Regular DNS request\ndig ANY @$ip $domain IPv6 DNS request\ndig AAAA @$ip $domain Get TXT Records\ndig TXT @$ip $domain Get MX Records\ndig MX @$ip $domain Get NS records of the given domain\ndig NS @$ip $domain Reverse lookup\ndig -x 192.168.0.2 @$ip Reverse IPv6 lookup\ndig -x 2a00:1450:400c:c06::93 @$ip dnsenum\ndnsenum $domain dnsrecon - automates the process of enumerating DNS records and finding related domains\nSubdomains Gobuster\ngobuster vhost -u $domain -w /usr/share/dirb/wordlists/big.txt",
    "description": "General Try zone transfer without domain\ndig axfr @$ip Try zone transfer guessing the domain\ndig axfr @$ip $domain Regular DNS request\ndig ANY @$ip $domain IPv6 DNS request\ndig AAAA @$ip $domain Get TXT Records\ndig TXT @$ip $domain Get MX Records\ndig MX @$ip $domain Get NS records of the given domain\ndig NS @$ip $domain Reverse lookup\ndig -x 192.168.0.2 @$ip Reverse IPv6 lookup",
    "tags": [],
    "title": "Domain Name System (DNS)",
    "uri": "/enumeration/hosts/services/domain-name-system/index.html"
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
    "breadcrumb": "HackForge",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Exploitation",
    "uri": "/exploitation/index.html"
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
    "breadcrumb": "HackForge \u003e  Enumeration \u003e  Hosts \u003e  Services",
    "content": "General Show mounts\nshowmount -e $ip Mount Share\nmount -t nfs [-o vers=2] $ip:\u003cremote_folder\u003e \u003clocal_folder\u003e -o nolock mount $IP:/ /tmp/NFS Dismount Shares\numount -l tmp/NFS",
    "description": "General Show mounts\nshowmount -e $ip Mount Share\nmount -t nfs [-o vers=2] $ip:\u003cremote_folder\u003e \u003clocal_folder\u003e -o nolock mount $IP:/ /tmp/NFS Dismount Shares\numount -l tmp/NFS",
    "tags": [],
    "title": "Network File System (NFS)",
    "uri": "/enumeration/hosts/services/network-file-system-nfs/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Passive Reconnaissance",
    "uri": "/reconnaissance_info_gathering/passive_reconnaissance/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Passive Reconnaissance",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Passive Reconnaissance",
    "uri": "/reconnaissance_info_gathering/passive_reconnaissance/osint/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  Enumeration \u003e  Hosts",
    "content": "Initial Scans Quick Port Scan (Fast finds open ports)\nmasscan -e tun0 -p 1-65535 --rate 2000 $ip Vulnerability scan (Run all vulnerability scripts )\nnmap -script=vuln $ip nmap UDP scan\nnmap $ip -p- -sU -oA AutoRecon\n~/AutoRecon/autorecon.py --single-target --only-scans-dir $ip Export TCP Ports to markdown\n/opt/nmap2md/nmap2md.py results/scans/xml/_full_tcp_nmap.xml \u003e ports.txt; mousepad ports.txt Export UDP Ports to markdown\n/opt/nmap2md/nmap2md.py results/scans/xml/_top_20_udp_nmap.xml \u003e ports.txt; mousepad ports.txt NMAP Host Discovery - Scan Network Range\nnmap 10.129.2.0/24 -sn -oA tnet | grep for | cut -d\" \" -f5 Host Discovery - Scan IP List\nnmap -sn -oA tnet -iL hosts.lst | grep for | cut -d\" \" -f5 Host Discovery - Scan Multiple IPs\nnmap -sn -oA tnet 10.129.2.18 10.129.2.19 10.129.2.20| grep for | cut -d\" \" -f5 Host Discovery - Scan Multiple IPs\nnmap -sn -oA tnet 10.129.2.18-20| grep for | cut -d\" \" -f5 Host Discovery - Scan Single IP\nnmap 10.129.2.18 -sn -oA host Discovering Open TCP Ports\nnmap 10.129.2.28 --top-ports=10 Discovering Open UDP Ports\nnmap 10.129.2.28 -F -sU Service Discovery\nnmap $ip -p- -sV Service Discovery\nnmap 10.129.2.28 -p- -sV --stats-every=5s Service Discovery\nnmap 10.129.2.28 -p- -sV -v Service Discovery\nnmap 10.129.2.28 -p- -sV -Pn -n --disable-arp-ping --packet-trace",
    "description": "Initial Scans Quick Port Scan (Fast finds open ports)\nmasscan -e tun0 -p 1-65535 --rate 2000 $ip Vulnerability scan (Run all vulnerability scripts )\nnmap -script=vuln $ip nmap UDP scan\nnmap $ip -p- -sU -oA AutoRecon\n~/AutoRecon/autorecon.py --single-target --only-scans-dir $ip Export TCP Ports to markdown\n/opt/nmap2md/nmap2md.py results/scans/xml/_full_tcp_nmap.xml \u003e ports.txt; mousepad ports.txt Export UDP Ports to markdown\n/opt/nmap2md/nmap2md.py results/scans/xml/_top_20_udp_nmap.xml \u003e ports.txt; mousepad ports.txt NMAP Host Discovery - Scan Network Range",
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
    "breadcrumb": "HackForge \u003e  Brute Force",
    "content": "Services FTP - Known user and rockyou password list\nhydra -t 1 -l $user -P /usr/share/wordlists/rockyou.txt -vV $ip ftp HTTP - hydra http-post request known user\nhydra -l $user -P /usr/share/wordlists/rockyou.txt $ip http-post-form \"\u003cLogin Page\u003e:\u003cRequest Body\u003e:\u003cError Message\u003e\" -v -V HTTP - hydra http-get request known users\nhydra -l $user -P /usr/share/wordlists/rockyou.txt -f $ip http-get /svn -V -I MYSQL - Known user and rockyou password list\nhydra -l $user -P /usr/share/wordlists/rockyou.txt $ip mysql MYSQL - Username list and rockyou password list\nhydra -L users.txt -P /usr/share/wordlists/rockyou.txt $ip mysql MYSQL - Metasploit\nuse auxiliary/scanner/mysql/mysql_login ORACLE - Hydra password attack rockyou password list\nhydra -P /usr/share/wordlists/rockyou.txt -t 32 -s 1521 $ip oracle-listener POP3 - Known user and rockyou password list\nhydra -l $user -P /usr/share/wordlists/rockyou.txt -f $ip pop3 -V RDP - Known user and rockyou password list\nhydra -t 1 -V -f -l $user -P /usr/share/wordlists/rockyou.txt rdp://$ip RDP - Known user and rockyou password list\nncrack -vv --user $user -P /usr/share/wordlists/rockyou.txt rdp://$ip SMB - Metasploit\nuse auxiliary/scanner/smb/smb_login SMB - Known user and rockyou password list\nhydra -t 1 -V -f -l $user -P /usr/share/wordlists/rockyou.txt $ip smb SMB - User \u0026 password list\ncrackmapexec smb $ip -u users.txt -p users.txt --continue-on-success SMTP - Known user and rockyou password list\nhydra -P /usr/share/wordlists/rockyou.txt $ip smtp -V SNMP - Known user and rockyou password list\nhydra -P /usr/share/wordlists/rockyou.txt -v $ip snmp SSH - Enumerate users with metasploit\nuse auxiliary/scanner/ssh/ssh_enumusers SSH - Quick Known user and rockyou password list\nhydra $ip -s 22 ssh -l $user -P /usr/share/seclists/Passwords/Common-Credentials/best1050.txt -F SSH - Known user and rockyou password list\nhydra $ip -s 22 ssh -l $user -P /usr/share/wordlists/rockyou.txt -V -F SSH - Username list and rockyou password list\nhydra -F -L users.txt -P /usr/share/wordlists/rockyou.txt -t 16 $ip",
    "description": "Services FTP - Known user and rockyou password list\nhydra -t 1 -l $user -P /usr/share/wordlists/rockyou.txt -vV $ip ftp HTTP - hydra http-post request known user\nhydra -l $user -P /usr/share/wordlists/rockyou.txt $ip http-post-form \"\u003cLogin Page\u003e:\u003cRequest Body\u003e:\u003cError Message\u003e\" -v -V HTTP - hydra http-get request known users\nhydra -l $user -P /usr/share/wordlists/rockyou.txt -f $ip http-get /svn -V -I MYSQL - Known user and rockyou password list\nhydra -l $user -P /usr/share/wordlists/rockyou.txt $ip mysql MYSQL - Username list and rockyou password list",
    "tags": [],
    "title": "Services",
    "uri": "/bruteforce/services/index.html"
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
