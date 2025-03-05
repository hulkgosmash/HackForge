+++
menus = 'main'
title = 'WHOIS & Domain Enumeration'
collapsibleMenu = true
alwaysopen = false
weight = 20
+++

## Basic WHOIS Lookup

### Command-Line WHOIS

Basic domain WHOIS lookup

```bash
whois $ip
```

Query a specific WHOIS server

```bash
whois -h whois.verisign-grs.com $ip
```

Show detailed results (Linux)

```bash
whois --verbose $ip
```

### Online WHOIS Services

[Whois Lookup (ICANN)](https://lookup.icann.org/en)

[Whois Domain Tools](https://whois.domaintools.com/)

[WhoXY](https://www.whoxy.com/)

## Extracting Nameservers & DNS Records

### Query Nameservers

```bash
nslookup -type=NS $ip
```

```bash
dig NS $ip
```

```bash
host -t ns $ip
```

### Query MX Records (Mail Servers)

```bash
nslookup -type=MX $ip
```

```bash
dig MX $ip
```

```bash
host -t mx $ip
```

### Query TXT Records (SPF, DKIM, DMARC, etc.)

```bash
nslookup -type=TXT $ip
```

```bash
dig TXT $ip
```

```bash
host -t txt $ip
```

## Subdomain Enumeration

### Brute-Force Subdomains

```bash
sublist3r -d $ip
```

```bash
amass enum -d $ip
```

```bash
assetfinder --subs-only $ip
```

```bash
dnsrecon -d $ip -t brt
```

### Passive Subdomain Enumeration

- [crt.sh](https://crt.sh/) → Certificate Transparency logs

- [ThreatCrowd](http://ci-www.threatcrowd.org/) → OSINT subdomain lookup

- [VirusTotal](https://www.virustotal.com/gui/home/upload) → Find subdomains via DNS queries

## Zone Transfer (AXFR Attack Check)

### Try Zone Transfer (If Misconfigured)

```bash
dig AXFR example.com @ns1.$ip
```

```bash
host -l example.com ns1.$ip
```

```bash
dnsrecon -d $ip -t axfr
```

## Reverse DNS Lookup

### Find Domain Associated with an IP

```bash
nslookup $ip
```

```bash
dig -x $ip
```

```bash
host $ip
```

### Find Subdomains via Reverse Lookups

```bash
dnsrecon -r 192.168.1.0/24
```

```bash
fierce -dns $ip
```

Use DNS module for reverse lookups

```bash
recon-ng
```

## Online DNS & WHOIS Tools

- [SecurityTrails](https://securitytrails.com/) → Historical DNS records

- [Spyse](https://spyse.com/) → Advanced domain intelligence

- [Robtex](https://www.robtex.com/) → DNS & network graphing

- [ViewDNS.info](https://viewdns.info/) → DNS & WHOIS lookup tools

## Automation & OSINT Tools for Domain Intelligence

- **theHarvester** → Email, subdomains, and hosts reconnaissance

- **Subfinder** → Fast passive subdomain discovery

- **Amass** → OSINT-powered subdomain enumeration

- **MassDNS** → High-performance DNS resolver

- **Nmap** → Scan domains for open services

```bash
nmap -p80,443 $ip
```

