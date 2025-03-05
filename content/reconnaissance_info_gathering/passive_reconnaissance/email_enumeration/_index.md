+++
menus = 'main'
title = 'Email Enumeration'
collapsibleMenu = true
alwaysopen = false
weight = 30
+++

## Email Enumeration Basics

### Check if an Email Exists

- **Have I Been Pwned** – https://haveibeenpwned.com/

- **EmailRep.io** – https://emailrep.io/

- **Hunter.io** – https://hunter.io/email-verifier

- **Verify Email Address** – https://verifalia.com/

### Command-Line Email Verification

Find emails for a domain

```bash
theHarvester -d $ip -b all
```

Extract emails from a domain

```bash
emailfinder -d $ip
```

Extract emails from documents

```bash
metagoofil -d $ip -t pdf,doc,xls -o results/
```

## Finding Emails from Social Media

### LinkedIn Email Enumeration

```bash
site:linkedin.com/in "@$ip"
```

- **Lusha** – https://www.lusha.com/

- **Snov.io** – https://snov.io/

### Twitter Email Lookup

```bash
site:twitter.com "@$ip"
```

- Twitter OSINT - https://tinfoleak.com/ 

## Email Format Discovery

### Find Email Patterns for a Domain

- Hunter.io – Find email naming conventions


- VoilaNorbert – Verify email patterns


- Clearbit Connect – Gmail plugin for email discovery


### Generate Possible Emails

```bash
email-permutator -d example.com -f "John" -l "Doe"
```

Test email validity

```bash
swaks --to johndoe@$ip --server mx.example.com
```

## SMTP & MX Server Enumeration

### Identify Email Servers

```bash
nslookup -type=MX $ip
```

```bash
dig MX $ip
```

```bash
host -t mx $ip
```

### Verify Email with SMTP

```bash
telnet mail.$ip 25
```

Check if the email exists

```bash
VRFY johndoe@$ip
```

Check mailing lists

```bash
EXPN johndoe@$ip
```

## Email Header Analysis

### Extract Headers from an Email

- **Gmail**: Open email → Click More → Show original

- **Outlook**: Open email → File → Properties → Internet headers

### Analyze Headers

- **MXToolBox** – https://mxtoolbox.com/

- **Email Header Analyzer** – https://www.whatismyip.com/email-header-analyzer/

- **Google Admin Toolbox** – https://toolbox.googleapps.com/apps/messageheader/

## Automating Email OSINT

### Tools for Email Enumeration

theHarvester

```bash
theHarvester -d $ip -b google
```

Recon-ng

```bash
recon/domains-contacts/email_address
```

- **GHunt** – Analyze Google-based email accounts

- **Holehe** – Check if an email is linked to social media
