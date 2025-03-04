+++
menus = 'main'
title = 'Network File System (NFS)'
collapsibleMenu = true
alwaysopen = false
toc = true
+++

## General

Show mounts

```bash
showmount -e $ip
```

Mount Share

```bash
mount -t nfs [-o vers=2] $ip:<remote_folder> <local_folder> -o nolock
mount $IP:/ /tmp/NFS
```

Dismount Shares

```bash
umount -l tmp/NFS
```

