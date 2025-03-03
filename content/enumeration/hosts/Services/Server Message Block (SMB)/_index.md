+++
menus = 'main'
title = 'Server Message Block (SMB)'
collapsibleMenu = true
alwaysopen = false
toc = true
+++

## Initial Scans

Netbios scan

```bash
nbtscan -r $ip
```

Enumerate host name

```bash
nmblookup -A $ip
```

List Shares #1 (specifying guest account)

```bash
smbmap -H $ip -u guest
```

List Shares #2 

```bash
smbclient -L \\$ip
```

List Shares #3

```bash
crackmapexec smb $ip --shares
```

List Shares with credentials

```bash
smbmap -u $user -p $password -R -H $ip
```

Exhaustive Scan

```bash
enum4linux -a -M -l -d $ip
```

Check Null Sessions

```bash
smbmap -H $ip
```

Check Null Sessions

```bash
rpcclient -U "" -N $ip
```

Check Null Sessions

```bash
enum4linux -a -M -l -d $ip
```

Check Null Sessions

```bash
smbclient \\\\$ip\\$share
```

Vulnerability scan

```bash
nmap --script smb-vuln* -p 139,445 $ip
```

Verify Credentials

```bash
crackmapexec smb $ip -u $user -p $password
```

User brute force

```bash
crackmapexec smb $ip -u anonymous -p "" --rid-brute 10000
```

## Connect to shares

Connect

```bash
smbclient //$ip/$share
```

Connect with credentials

```bash
smbclient //$ip/$share -U $user
```

Connect with credentials

```bash
smbclient \\\\$ip\\$share -U "$user" -p "$password"
```

Recursively List Contents

```bash
smbmap -H $ip --depth 10 -R $share
```

Mount share

```bash
sudo mount -t cifs -o "username=$user,password=$password" //$ip/$share /mnt/secure
```

## Share Permissions

Check share permissions

```bash
smbcacls --no-pass //$ip/$share
```

## Change Password

Change users password

```bash
smbpasswd -r $ip -U $user
```

## Download Files

Download all files

```bash
RECURSE ON
PROMPT OFF
mget *
```

Download specific file

```bash
smbmap -H $ip --depth 10 -R $share --depth 10 -A file.txt -q
```

