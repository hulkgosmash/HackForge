var relearn_searchindex = [
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Passive Reconnaissance",
    "content": "Search Engines \u0026 Advanced Queries Google Dorking Search within a specific site\nsite:$ip Find open directories\nintitle:\"index of\" Find open directories\nintitle:\"index of\" Search for specific file types\nfiletype:pdf Find admin panels\ninurl:admin View cached pages\ncache:$ip Search for emails\n\"$user@gmail.com\" Alternative Search Engines DuckDuckGo – Privacy-focused search\nBing/Yandex – Different indexing results\nShodan – IoT \u0026 network scanning\nSocial Media OSINT User Enumeration Facebook:\nsite:facebook.com \"$user\" Twitter\nsite:twitter.com \"@$user\" LinkedIn\nsite:linkedin.com/in/ \"$user\" Instagram\nsite:instagram.com \"@$user\" Tools for Social Media Analysis Sherlock – Username lookup\nTwint – Twitter scraping\nSocinvestigate – Social media OSINT\nDark Web OSINT Tools \u0026 Resources OnionSearch – Search .onion sites\nAhmia – Dark web search engine\nTor2Web – Access .onion without Tor\nPeople \u0026 Address Lookups General Person Search Pipl – People search engine\nSpokeo – Reverse lookup\nPeekYou – Social profile aggregation\nGeolocation \u0026 Maps Google Earth – Satellite imagery\nGeoGuessr – Geolocation challenge\nIP2Location – Locate IP addresses\nImage \u0026 Metadata Analysis Reverse Image Search Google Reverse Image – Find similar images\nYandex Images – Strong image search\nTineye – Reverse image search\nMetadata Extraction ExifTool – Extract EXIF data\nFotoForensics – Image analysis\nJeffrey’s Image Metadata Viewer – View hidden data\nOSINT Automation Tools SpiderFoot – Automated OSINT framework\nMaltego – Graph-based link analysis\nRecon-ng – Web reconnaissance\ntheHarvester – Email, subdomain \u0026 IP reconnaissance",
    "description": "Search Engines \u0026 Advanced Queries Google Dorking Search within a specific site\nsite:$ip Find open directories\nintitle:\"index of\" Find open directories\nintitle:\"index of\" Search for specific file types\nfiletype:pdf Find admin panels\ninurl:admin View cached pages\ncache:$ip Search for emails\n\"$user@gmail.com\" Alternative Search Engines DuckDuckGo – Privacy-focused search\nBing/Yandex – Different indexing results\nShodan – IoT \u0026 network scanning\nSocial Media OSINT User Enumeration Facebook:",
    "tags": [],
    "title": "OSINT",
    "uri": "/reconnaissance_info_gathering/passive_reconnaissance/osint/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering",
    "content": "OSINT\nWHOIS \u0026 Domain Enumeration\nEmail Enumeration",
    "description": "OSINT\nWHOIS \u0026 Domain Enumeration\nEmail Enumeration",
    "tags": [],
    "title": "Passive Reconnaissance",
    "uri": "/reconnaissance_info_gathering/passive_reconnaissance/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Active Reconnaissance",
    "content": "Basic Nmap Scans Quick Scan Basic scan (default 1000 ports)\nnmap $ip Scan all ports\nnmap -p 1-65535 $ip Stealth SYN scan\nnmap -sS $ip Full TCP connection scan\nnmap -sT $ip Aggressive Scan OS, services, and version detection\nnmap -A $ip Aggressive fast scan\nnmap -T4 -A -v $ip Scanning Specific Ports Scan specific ports\nnmap -p 22,80,443 $ip Scan all 65,535 ports\nnmap -p- $ip Scan first 1000 ports\nnmap -p 1-1000 $ip Service \u0026 Version Detection Detect services and versions\nnmap -sV $ip More aggressive version detection\nnmap -sV --version-intensity 5 $ip OS Detection Detect OS\nnmap -O $ip OS and service detection\nnmap -A $ip Skip host discovery (useful for firewalled hosts)\nnmap -Pn $ip Evading Firewalls \u0026 IDS Slow stealth scan\nnmap -sS -T2 $ip Fragmented packets scan\nnmap -f $ip Use custom MTU (bypass filters)\nnmap --mtu 16 $ip Use decoys\nnmap -D RND:10 $ip Randomize payload size\nnmap --data-length 200 $ip UDP Scanning Scan specific UDP ports\nnmap -sU -p 53,161 $ip Full UDP scan\nnmap -sU -p- $ip Scanning Multiple Hosts Scan a range of IPs\nnmap 192.168.1.1-100 Scan from a file\nnmap -iL targets.txt Ping sweep to find live hosts\nnmap -sn 192.168.1.0/24 Output \u0026 Logging Save output in normal format\nnmap -oN output.txt $ip Save output in XML\nnmap -oX output.xml $ip Save in greppable format\nnmap -oG output.gnmap $ip Save in all formats\nnmap -oA fullscan $ip Advanced \u0026 Specialized Scans Scan Hosts Inside a Network Identify live hosts\nnmap -sn 192.168.1.0/24 Ping sweep\nnmap -sP 192.168.1.0/24 Detecting Vulnerabilities Run built-in vulnerability scans\nnmap --script vuln $ip Scan for HTTP vulnerabilities\nnmap --script http-vuln* $ip Scanning for Specific Services Scan for SMB OS info\nnmap -p 445 --script smb-os-discovery $ip Scan MySQL version\nnmap -p 3306 --script mysql-info $ip Additional Tools for Port Scanning Masscan\nmasscan -p1-65535 --rate=1000 $ip Unicornscan\nunicornscan -i eth0 -mT $ip Zmap\nzmap -p 443 -o results.txt 192.168.1.0/24",
    "description": "Basic Nmap Scans Quick Scan Basic scan (default 1000 ports)\nnmap $ip Scan all ports\nnmap -p 1-65535 $ip Stealth SYN scan\nnmap -sS $ip Full TCP connection scan\nnmap -sT $ip Aggressive Scan OS, services, and version detection\nnmap -A $ip Aggressive fast scan\nnmap -T4 -A -v $ip Scanning Specific Ports Scan specific ports\nnmap -p 22,80,443 $ip Scan all 65,535 ports",
    "tags": [],
    "title": "Port Scanning (Nmap, Masscan)",
    "uri": "/reconnaissance_info_gathering/active_reconnaissance/port_scanning/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering",
    "content": "Port Scanning (Nmap, Masscan)\nService Enumeration\nBanner_Grabbing",
    "description": "Port Scanning (Nmap, Masscan)\nService Enumeration\nBanner_Grabbing",
    "tags": [],
    "title": "Active Reconnaissance",
    "uri": "/reconnaissance_info_gathering/active_reconnaissance/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Active Reconnaissance",
    "content": "General Service Enumeration Nmap Service Discovery Detect service versions\nnmap -sV $ip Aggressive version detection\nnmap -sV --version-all $ip Scan all ports and detect services\nnmap -p- -sV $ip Run default scripts for enumeration\nnmap -sC -sV $ip Banner Grabbing (Manual) Connect to a web service\nnc -v $ip 80 SMTP enumeration\ntelnet $ip 25 Get HTTP headers\ncurl -I $ip DNS Enumeration Nmap DNS Enumeration Brute-force subdomains\nnmap -p 53 --script dns-brute $ip Extract name server details\nnmap -p 53 --script dns-nsid $ip Manual DNS Enumeration Get all available DNS records\ndig $ip ANY Perform DNS lookup\nhost -a $ip Retrieve all DNS records\nnslookup -query=ANY $ip FTP (File Transfer Protocol) Enumeration Nmap FTP Scripts Check for anonymous login\nnmap -p 21 --script ftp-anon $ip Check for VSFTPD vulnerabilities\nnmap -p 21 --script ftp-vsftpd-backdoor $ip Manual FTP Enumeration Connect to FTP\nftp $ip Grab FTP banner\nnc -v $ip 21 Banner grabbing\ntelnet $ip 21",
    "description": "General Service Enumeration Nmap Service Discovery Detect service versions\nnmap -sV $ip Aggressive version detection\nnmap -sV --version-all $ip Scan all ports and detect services\nnmap -p- -sV $ip Run default scripts for enumeration\nnmap -sC -sV $ip Banner Grabbing (Manual) Connect to a web service\nnc -v $ip 80 SMTP enumeration\ntelnet $ip 25 Get HTTP headers\ncurl -I $ip DNS Enumeration Nmap DNS Enumeration Brute-force subdomains",
    "tags": [],
    "title": "Service Enumeration",
    "uri": "/reconnaissance_info_gathering/active_reconnaissance/service_enumeration/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Active Reconnaissance \u003e  Service Enumeration",
    "content": "General Service Enumeration Nmap Service Discovery Detect service versions\nnmap -sV $ip Aggressive version detection\nnmap -sV --version-all $ip Scan all ports and detect services\nnmap -p- -sV $ip Run default scripts for enumeration\nnmap -sC -sV $ip Banner Grabbing (Manual) Connect to a web service\nnc -v $ip 80 SMTP enumeration\ntelnet $ip 25 Get HTTP headers\ncurl -I $ip DNS Enumeration Nmap DNS Enumeration Brute-force subdomains\nnmap -p 53 --script dns-brute $ip Extract name server details\nnmap -p 53 --script dns-nsid $ip Manual DNS Enumeration Get all available DNS records\ndig $ip ANY Perform DNS lookup\nhost -a $ip Retrieve all DNS records\nnslookup -query=ANY $ip FTP (File Transfer Protocol) Enumeration Nmap FTP Scripts Check for anonymous login\nnmap -p 21 --script ftp-anon $ip Check for VSFTPD vulnerabilities\nnmap -p 21 --script ftp-vsftpd-backdoor $ip Manual FTP Enumeration Connect to FTP\nftp $ip Grab FTP banner\nnc -v $ip 21 Banner grabbing\ntelnet $ip 21",
    "description": "General Service Enumeration Nmap Service Discovery Detect service versions\nnmap -sV $ip Aggressive version detection\nnmap -sV --version-all $ip Scan all ports and detect services\nnmap -p- -sV $ip Run default scripts for enumeration\nnmap -sC -sV $ip Banner Grabbing (Manual) Connect to a web service\nnc -v $ip 80 SMTP enumeration\ntelnet $ip 25 Get HTTP headers\ncurl -I $ip DNS Enumeration Nmap DNS Enumeration Brute-force subdomains",
    "tags": [],
    "title": "Service Enumeration",
    "uri": "/reconnaissance_info_gathering/active_reconnaissance/service_enumeration/dns/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Passive Reconnaissance",
    "content": "Basic WHOIS Lookup Command-Line WHOIS Basic domain WHOIS lookup\nwhois $ip Query a specific WHOIS server\nwhois -h whois.verisign-grs.com $ip Show detailed results (Linux)\nwhois --verbose $ip Online WHOIS Services Whois Lookup (ICANN)\nWhois Domain Tools\nWhoXY\nExtracting Nameservers \u0026 DNS Records Query Nameservers nslookup -type=NS $ip dig NS $ip host -t ns $ip Query MX Records (Mail Servers) nslookup -type=MX $ip dig MX $ip host -t mx $ip Query TXT Records (SPF, DKIM, DMARC, etc.) nslookup -type=TXT $ip dig TXT $ip host -t txt $ip Subdomain Enumeration Brute-Force Subdomains sublist3r -d $ip amass enum -d $ip assetfinder --subs-only $ip dnsrecon -d $ip -t brt Passive Subdomain Enumeration crt.sh → Certificate Transparency logs\nThreatCrowd → OSINT subdomain lookup\nVirusTotal → Find subdomains via DNS queries\nZone Transfer (AXFR Attack Check) Try Zone Transfer (If Misconfigured) dig AXFR example.com @ns1.$ip host -l example.com ns1.$ip dnsrecon -d $ip -t axfr Reverse DNS Lookup Find Domain Associated with an IP nslookup $ip dig -x $ip host $ip Find Subdomains via Reverse Lookups dnsrecon -r 192.168.1.0/24 fierce -dns $ip Use DNS module for reverse lookups\nrecon-ng Online DNS \u0026 WHOIS Tools SecurityTrails → Historical DNS records\nSpyse → Advanced domain intelligence\nRobtex → DNS \u0026 network graphing\nViewDNS.info → DNS \u0026 WHOIS lookup tools\nAutomation \u0026 OSINT Tools for Domain Intelligence theHarvester → Email, subdomains, and hosts reconnaissance\nSubfinder → Fast passive subdomain discovery\nAmass → OSINT-powered subdomain enumeration\nMassDNS → High-performance DNS resolver\nNmap → Scan domains for open services\nnmap -p80,443 $ip",
    "description": "Basic WHOIS Lookup Command-Line WHOIS Basic domain WHOIS lookup\nwhois $ip Query a specific WHOIS server\nwhois -h whois.verisign-grs.com $ip Show detailed results (Linux)\nwhois --verbose $ip Online WHOIS Services Whois Lookup (ICANN)\nWhois Domain Tools\nWhoXY\nExtracting Nameservers \u0026 DNS Records Query Nameservers nslookup -type=NS $ip dig NS $ip host -t ns $ip Query MX Records (Mail Servers) nslookup -type=MX $ip dig MX $ip host -t mx $ip Query TXT Records (SPF, DKIM, DMARC, etc.) nslookup -type=TXT $ip dig TXT $ip host -t txt $ip Subdomain Enumeration Brute-Force Subdomains sublist3r -d $ip amass enum -d $ip assetfinder --subs-only $ip dnsrecon -d $ip -t brt Passive Subdomain Enumeration crt.sh → Certificate Transparency logs",
    "tags": [],
    "title": "WHOIS \u0026 Domain Enumeration",
    "uri": "/reconnaissance_info_gathering/passive_reconnaissance/whois_and_domain/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Active Reconnaissance",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Banner Grabbing",
    "uri": "/reconnaissance_info_gathering/active_reconnaissance/banner_grabbing/index.html"
  },
  {
    "breadcrumb": "HackForge \u003e  1. Reconnaissance \u0026 Information Gathering \u003e  Passive Reconnaissance",
    "content": "Email Enumeration Basics Check if an Email Exists Have I Been Pwned – https://haveibeenpwned.com/\nEmailRep.io – https://emailrep.io/\nHunter.io – https://hunter.io/email-verifier\nVerify Email Address – https://verifalia.com/\nCommand-Line Email Verification Find emails for a domain\ntheHarvester -d $ip -b all Extract emails from a domain\nemailfinder -d $ip Extract emails from documents\nmetagoofil -d $ip -t pdf,doc,xls -o results/ Finding Emails from Social Media LinkedIn Email Enumeration site:linkedin.com/in \"@$ip\" Lusha – https://www.lusha.com/\nSnov.io – https://snov.io/\nTwitter Email Lookup site:twitter.com \"@$ip\" Twitter OSINT - https://tinfoleak.com/ Email Format Discovery Find Email Patterns for a Domain Hunter.io – Find email naming conventions\nVoilaNorbert – Verify email patterns\nClearbit Connect – Gmail plugin for email discovery\nGenerate Possible Emails email-permutator -d example.com -f \"John\" -l \"Doe\" Test email validity\nswaks --to johndoe@$ip --server mx.example.com SMTP \u0026 MX Server Enumeration Identify Email Servers nslookup -type=MX $ip dig MX $ip host -t mx $ip Verify Email with SMTP telnet mail.$ip 25 Check if the email exists\nVRFY johndoe@$ip Check mailing lists\nEXPN johndoe@$ip Email Header Analysis Extract Headers from an Email Gmail: Open email → Click More → Show original\nOutlook: Open email → File → Properties → Internet headers\nAnalyze Headers MXToolBox – https://mxtoolbox.com/\nEmail Header Analyzer – https://www.whatismyip.com/email-header-analyzer/\nGoogle Admin Toolbox – https://toolbox.googleapps.com/apps/messageheader/\nAutomating Email OSINT Tools for Email Enumeration theHarvester\ntheHarvester -d $ip -b google Recon-ng\nrecon/domains-contacts/email_address GHunt – Analyze Google-based email accounts\nHolehe – Check if an email is linked to social media",
    "description": "Email Enumeration Basics Check if an Email Exists Have I Been Pwned – https://haveibeenpwned.com/\nEmailRep.io – https://emailrep.io/\nHunter.io – https://hunter.io/email-verifier\nVerify Email Address – https://verifalia.com/\nCommand-Line Email Verification Find emails for a domain\ntheHarvester -d $ip -b all Extract emails from a domain\nemailfinder -d $ip Extract emails from documents\nmetagoofil -d $ip -t pdf,doc,xls -o results/ Finding Emails from Social Media LinkedIn Email Enumeration site:linkedin.com/in \"@$ip\" Lusha – https://www.lusha.com/\nSnov.io – https://snov.io/",
    "tags": [],
    "title": "Email Enumeration",
    "uri": "/reconnaissance_info_gathering/passive_reconnaissance/email_enumeration/index.html"
  },
  {
    "breadcrumb": "HackForge",
    "content": "Passive Reconnaissance\nActive Reconnaissance",
    "description": "Passive Reconnaissance\nActive Reconnaissance",
    "tags": [],
    "title": "1. Reconnaissance \u0026 Information Gathering",
    "uri": "/reconnaissance_info_gathering/index.html"
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
    "breadcrumb": "",
    "content": "Overview HackForge Pentest Cheat Sheet is an interactive penetration testing reference that dynamically updates enumeration and exploitation commands based on user input. This tool is particularly useful for reconnaissance, enumeration, exploitation, and post-exploitation during security assessments.\nFeatures Dynamic Command Generation – Enter hostnames, IPs, or other parameters to get real-time tailored command outputs. Comprehensive Pentest Categories – Covers everything from host enumeration, service scanning, and privilege escalation to Active Directory attacks. Tool-Specific Cheatsheets – Pre-configured commands for tools like Nmap, Masscan, CrackMapExec, Impacket, BloodHound, Metasploit, and more. Offline \u0026 Lightweight – The website is lightweight and easy to reference even with limited connectivity.",
    "description": "Overview HackForge Pentest Cheat Sheet is an interactive penetration testing reference that dynamically updates enumeration and exploitation commands based on user input. This tool is particularly useful for reconnaissance, enumeration, exploitation, and post-exploitation during security assessments.\nFeatures Dynamic Command Generation – Enter hostnames, IPs, or other parameters to get real-time tailored command outputs. Comprehensive Pentest Categories – Covers everything from host enumeration, service scanning, and privilege escalation to Active Directory attacks. Tool-Specific Cheatsheets – Pre-configured commands for tools like Nmap, Masscan, CrackMapExec, Impacket, BloodHound, Metasploit, and more. Offline \u0026 Lightweight – The website is lightweight and easy to reference even with limited connectivity.",
    "tags": [],
    "title": "HackForge",
    "uri": "/index.html"
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
