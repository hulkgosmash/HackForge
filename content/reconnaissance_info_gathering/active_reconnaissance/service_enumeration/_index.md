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

### Banner Grabbing (Manual)

Connect to a web service

```bash
nc -v $ip 80
```

SMTP enumeration

```bash
telnet $ip 25
```

Get HTTP headers

```bash
curl -I $ip
```

## DNS Enumeration

### Nmap DNS Enumeration

Brute-force subdomains

```bash
nmap -p 53 --script dns-brute $ip
```

Extract name server details

```bash
nmap -p 53 --script dns-nsid $ip
```

### Manual DNS Enumeration

Get all available DNS records

```bash
dig $ip ANY
```

Perform DNS lookup

```bash
host -a $ip
```

Retrieve all DNS records

```bash
nslookup -query=ANY $ip
```

## FTP (File Transfer Protocol) Enumeration

### Nmap FTP Scripts

Check for anonymous login

```bash
nmap -p 21 --script ftp-anon $ip
```

Check for VSFTPD vulnerabilities

```bash
nmap -p 21 --script ftp-vsftpd-backdoor $ip
```

### Manual FTP Enumeration

Connect to FTP

```bash
ftp $ip
```

Grab FTP banner

```bash
nc -v $ip 21
```

Banner grabbing

```bash
telnet $ip 21
```



