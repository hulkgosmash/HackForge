+++
menus = 'main'
title = 'File Transfer Protocol (FTP)'
collapsibleMenu = true
alwaysopen = false
toc = true
+++

## General

Create an active connection

```bash
ftp $ip
```

Create a passive connection (If you can't see files it may help)

```bash
ftp -p $ip
```

List all files

```bash
ls -lah
```

Download multiple files

```bash
prompt
mget *
```

Download all files using wget

```bash
wget -r ftp://$user:$password@$ip/
```

View the directory contents with curl

```bash
curl -s -v 'ftp://$user:$password@$ip/'
```

View directory contents with curl in passive mode

```bash
curl -s -v -P - 'ftp://$user:$password@$ip/'
```

Upload a file with curl

```bash
curl -T "file.txt" -P - 'ftp://$user:$password@$ip/'
```

nmap scripts

```bash
nmap --script=ftp-anon,ftp-libopie,ftp-proftpd-backdoor,ftp-vsftpd-backdoor,ftp-vuln-cve2010-4221,tftp-enum -p 21 $ip
```

