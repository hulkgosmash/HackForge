+++
menus = 'main'
title = 'Port Scanning (Nmap, Masscan)'
collapsibleMenu = true
alwaysopen = false
weight = 10
+++

## Basic Nmap Scans

### Quick Scan

Basic scan (default 1000 ports)

```bash
nmap $ip
```

Scan all ports

```bash
nmap -p 1-65535 $ip
```

Stealth SYN scan

```bash
nmap -sS $ip
```

Full TCP connection scan

```bash
nmap -sT $ip
```

### Aggressive Scan

OS, services, and version detection

```bash
nmap -A $ip
```

Aggressive fast scan

```bash
nmap -T4 -A -v $ip
```

## Scanning Specific Ports

Scan specific ports

```bash
nmap -p 22,80,443 $ip
```

Scan all 65,535 ports

```bash
nmap -p- $ip
```

Scan first 1000 ports

```bash
nmap -p 1-1000 $ip
```

## Service & Version Detection

Detect services and versions

```bash
nmap -sV $ip
```

More aggressive version detection

```bash
nmap -sV --version-intensity 5 $ip
```

## OS Detection

Detect OS

```bash
nmap -O $ip
```

OS and service detection

```bash
nmap -A $ip
```

Skip host discovery (useful for firewalled hosts)

```bash
nmap -Pn $ip
```

## Evading Firewalls & IDS

Slow stealth scan

```bash
nmap -sS -T2 $ip
```

Fragmented packets scan

```bash
nmap -f $ip
```

Use custom MTU (bypass filters)

```bash
nmap --mtu 16 $ip
```

Use decoys

```bash
nmap -D RND:10 $ip
```

Randomize payload size

```bash
nmap --data-length 200 $ip
```

## UDP Scanning

Scan specific UDP ports

```bash
nmap -sU -p 53,161 $ip
```

Full UDP scan

```bash
nmap -sU -p- $ip
```

## Scanning Multiple Hosts

Scan a range of IPs

```bash
nmap 192.168.1.1-100
```

Scan from a file

```bash
nmap -iL targets.txt
```

Ping sweep to find live hosts

```bash
nmap -sn 192.168.1.0/24
```

## Output & Logging

Save output in normal format

```bash
nmap -oN output.txt $ip
```

Save output in XML

```bash
nmap -oX output.xml $ip
```

Save in greppable format

```bash
nmap -oG output.gnmap $ip
```

Save in all formats

```bash
nmap -oA fullscan $ip
```

## Advanced & Specialized Scans

### Scan Hosts Inside a Network

Identify live hosts

```bash
nmap -sn 192.168.1.0/24
```

Ping sweep

```bash
nmap -sP 192.168.1.0/24
```

### Detecting Vulnerabilities

Run built-in vulnerability scans

```bash
nmap --script vuln $ip
```

Scan for HTTP vulnerabilities

```bash
nmap --script http-vuln* $ip
```

### Scanning for Specific Services

Scan for SMB OS info

```bash
nmap -p 445 --script smb-os-discovery $ip
```

Scan MySQL version

```bash
nmap -p 3306 --script mysql-info $ip
```

## Additional Tools for Port Scanning

Masscan

```bash
masscan -p1-65535 --rate=1000 $ip
```

Unicornscan

```bash
unicornscan -i eth0 -mT $ip
```

Zmap

```bash
zmap -p 443 -o results.txt 192.168.1.0/24
```
