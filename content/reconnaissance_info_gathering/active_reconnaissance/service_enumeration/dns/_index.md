+++
menus = 'main'
title = 'Domain Name System (DNS)'
collapsibleMenu = true
alwaysopen = false
weight = 10
+++

## Nmap DNS Enumeration

Brute-force subdomains

```bash
nmap -p 53 --script dns-brute $ip
```

Extract name server details

```bash
nmap -p 53 --script dns-nsid $ip
```

Comprehensive scripts

```bash
nmap -n --script "(default and *dns*) or fcrdns or dns-srv-enum or dns-random-txid or dns-random-srcport" $ip
```

## Manual DNS Enumeration

### General

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

Regular DNS request

```bash
dig ANY @$ip $domain
```

IPv6 DNS request

```bash
dig AAAA @$ip $domain
```

Get TXT Records

```bash
dig TXT @$ip $domain
```

Get MX Records

```bash
dig MX @$ip $domain
```

Asks the DNS server at for the name server (NS) records of the specified $domain

```bash
dig NS @$ip $domain
```

Reverse lookup

```bash
dig -x 192.168.0.2 @$ip
```

Reverse IPv6 lookup

```bash
dig -x 2a00:1450:400c:c06::93 @$ip
```

### Zone Transfer

Try zone transfer without domain

```bash
dig axfr @$ip
```

Try zone transfer guessing the domain

```bash
dig axfr @$ip $domain
```

Will try to perform a zone transfer against every authoritative name server and if this doesn't work, will launch a dictionary attack

```bash
fierce --domain $domain --dns-servers $ip
```

## DNSRecon

DNS reverse of all of the addresses

```bash
dnsrecon -r 127.0.0.0/24 -n $ip
```

DNS reverse of all of the addresses

```bash
dnsrecon -r 127.0.1.0/24 -n $ip
```

DNS reverse of all of the addresses

```bash
dnsrecon -r $ip/24 -n $ip
```

Zone transfer

```bash
dnsrecon -d $domain -a -n $ip
```

