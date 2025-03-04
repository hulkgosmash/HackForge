+++
menus = 'main'
title = 'Port Scanning'
collapsibleMenu = true
alwaysopen = false
+++

## Initial Scans

Quick Port Scan (Fast finds open ports)

```bash
masscan -e tun0 -p 1-65535 --rate 2000 $ip
```

Vulnerability scan (Run all vulnerability scripts )

```bash
nmap -script=vuln $ip
```

nmap UDP scan

```bash
nmap $ip -p- -sU -oA
```

AutoRecon

```bash
~/AutoRecon/autorecon.py --single-target --only-scans-dir $ip
```

Export TCP Ports to markdown

```bash
/opt/nmap2md/nmap2md.py results/scans/xml/_full_tcp_nmap.xml > ports.txt; mousepad ports.txt
```

Export UDP Ports to markdown

```bash
/opt/nmap2md/nmap2md.py results/scans/xml/_top_20_udp_nmap.xml > ports.txt; mousepad ports.txt
```

## NMAP

Host Discovery - Scan Network Range

```bash
nmap 10.129.2.0/24 -sn -oA tnet | grep for | cut -d" " -f5
```

Host Discovery - Scan IP List

```bash
nmap -sn -oA tnet -iL hosts.lst | grep for | cut -d" " -f5
```

Host Discovery - Scan Multiple IPs

```bash
nmap -sn -oA tnet 10.129.2.18 10.129.2.19 10.129.2.20| grep for | cut -d" " -f5
```

Host Discovery - Scan Multiple IPs

```bash
 nmap -sn -oA tnet 10.129.2.18-20| grep for | cut -d" " -f5
```

Host Discovery - Scan Single IP

```bash
nmap 10.129.2.18 -sn -oA host 
```

Discovering Open TCP Ports

```bash
nmap 10.129.2.28 --top-ports=10 
```

Discovering Open UDP Ports

```bash
nmap 10.129.2.28 -F -sU
```

Service Discovery

```bash
nmap $ip -p- -sV
```

Service Discovery

```bash
nmap 10.129.2.28 -p- -sV --stats-every=5s
```

Service Discovery

```bash
nmap 10.129.2.28 -p- -sV -v
```

Service Discovery

```bash
nmap 10.129.2.28 -p- -sV -Pn -n --disable-arp-ping --packet-trace
```

