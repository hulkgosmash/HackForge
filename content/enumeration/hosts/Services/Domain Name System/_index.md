+++
menus = 'main'
title = 'Domain Name System (DNS)'
collapsibleMenu = true
alwaysopen = false
toc = true
+++

## General

Try zone transfer without domain

```bash
dig axfr @$ip
```

Try zone transfer guessing the domain

```bash
dig axfr @$ip $domain
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

Get NS records of the given domain

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

dnsenum

```bash
dnsenum $domain
```

dnsrecon - automates the process of enumerating DNS records and finding related domains

```bash

```

## Subdomains

Gobuster

```bash
gobuster vhost -u $domain -w /usr/share/dirb/wordlists/big.txt
```

