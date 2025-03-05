+++
menus = 'main'
title = 'Service Enumeration'
collapsibleMenu = true
alwaysopen = false
weight = 20
+++

## General Service Enumeration

### Nmap Service Discovery

Detect service versions

```bash
nmap -sV $ip
```

Aggressive version detection

```bash
nmap -sV --version-all $ip
```

Scan all ports and detect services

```bash
nmap -p- -sV $ip
```

Run default scripts for enumeration

```bash
nmap -sC -sV $ip
```


