# HackForge Pentest Cheat Sheet

![HackForge](https://hackforge.me/favicon.ico)

## Overview

[HackForge Pentest Cheat Sheet](https://hackforge.me/) is an interactive penetration testing reference that dynamically updates enumeration and exploitation commands based on user input. This tool is particularly useful for **reconnaissance, enumeration, exploitation, and post-exploitation** during security assessments.

## Features

- **Dynamic Command Generation** – Enter hostnames, IPs, or other parameters to get real-time tailored command outputs.
- **Comprehensive Pentest Categories** – Covers everything from **host enumeration, service scanning, and privilege escalation** to **Active Directory attacks**.
- **Tool-Specific Cheatsheets** – Pre-configured commands for tools like **Nmap, Masscan, CrackMapExec, Impacket, BloodHound, Metasploit**, and more.
- **Offline & Lightweight** – The website is lightweight and easy to reference even with limited connectivity.

## Sections & Topics

### 1. **Host & Network Enumeration**
   - Port scanning (`Nmap`, `Masscan`, `RustScan`)
   - Subdomain and DNS enumeration
   - SMB, SNMP, and RPC enumeration
   - Web application reconnaissance (`Gobuster`, `Dirb`, `FFUF`)

### 2. **Service Enumeration & Exploitation**
   - FTP, SMB, RDP, SSH, and database enumeration
   - Web vulnerability scanning (`SQLMap`, `Burp Suite`, `Nikto`)
   - Exploiting misconfigurations and weak credentials

### 3. **Post Exploitation & Privilege Escalation**
   - Windows privilege escalation (`WinPEAS`, `PowerUp`)
   - Linux privilege escalation (`LinPEAS`, `GTFOBins`)
   - Extracting credentials and tokens

### 4. **Active Directory Attacks**
   - Enumerating AD users (`BloodHound`, `ldapsearch`)
   - Credential attacks (`Kerberoasting`, `Pass-the-Hash`)
   - Lateral movement and persistence (`PsExec`, `WinRM`)

### 5. **C2, Lateral Movement & Persistence**
   - `Cobalt Strike`, `Empire`, `Covenant`
   - Scheduled tasks and DLL hijacking
   - Post-exploitation techniques for persistence

## How to Use

1. **Visit the Site** – Open [HackForge Pentest Cheat Sheet](https://hackforge.me/).
2. **Enter Input Data** – Provide relevant parameters (e.g., target IP, domain name).
3. **Copy & Use the Commands** – The dynamically generated commands are ready to execute.
4. **Switch Between Categories** – Navigate through different sections for **enumeration, exploitation, and persistence**.

## Why Use HackForge?

✔️ **No need to remember complex command syntax**  
✔️ **Quickly generate tailored commands**  
✔️ **Covers a full pentest workflow**  
✔️ **Regularly updated with new tools and techniques**  

## TODO

- [ ] Add more categories tools (e.g., AD, Privesc)
- [ ] Improve AD attack section with added CrackMapExec & Impacket examples
- [ ] Add a section for evasion techniques (AMSI bypass, UAC bypass)
- [ ] Expand C2 frameworks (cobalt, Havoc)
- [ ] Optimize mobile-friendly layout for HackForge site


## Contributing

Want to contribute or suggest improvements?  
Reach out via the [HackForge GitHub](https://github.com/hackforge-me) or the official website.

## Disclaimer

This tool is meant for **legal penetration testing and security research**. Unauthorized use against systems without explicit permission is illegal.

---

### 🔗 **Visit the Site**: [HackForge Pentest Cheat Sheet](https://hackforge.me/)
