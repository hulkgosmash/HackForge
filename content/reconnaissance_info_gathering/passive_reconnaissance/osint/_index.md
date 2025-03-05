+++
menus = 'main'
title = 'OSINT'
collapsibleMenu = true
alwaysopen = false
weight = 10

+++

## Search Engines & Advanced Queries

### Google Dorking

Search within a specific site

```bash
site:$ip
```

Find open directories

```bash
intitle:"index of"
```

Find open directories

```bash
intitle:"index of"
```

Search for specific file types

```bash
filetype:pdf
```

Find admin panels

```bash
inurl:admin
```

View cached pages

```bash
cache:$ip
```

Search for emails

```bash
"$user@gmail.com"
```

### Alternative Search Engines

- **DuckDuckGo** – Privacy-focused search

- **Bing/Yandex** – Different indexing results

- **Shodan** – IoT & network scanning

## Social Media OSINT

### User Enumeration

**Facebook**: 

```bash
site:facebook.com "$user"
```

**Twitter**

```bash
site:twitter.com "@$user"
```

**LinkedIn**

```bash
site:linkedin.com/in/ "$user"
```

**Instagram**

```
site:instagram.com "@$user"
```

### Tools for Social Media Analysis

- **Sherlock** – Username lookup

- **Twint** – Twitter scraping

- **Socinvestigate** – Social media OSINT

## Dark Web OSINT

### Tools & Resources

- **OnionSearch** – Search .onion sites

- **Ahmia** – Dark web search engine

- **Tor2Web** – Access .onion without Tor

## People & Address Lookups

### General Person Search

- **Pipl** – People search engine

- **Spokeo** – Reverse lookup

- **PeekYou** – Social profile aggregation

### Geolocation & Maps

- **Google Earth** – Satellite imagery

- **GeoGuessr** – Geolocation challenge

- **IP2Location** – Locate IP addresses

## Image & Metadata Analysis

### Reverse Image Search

- **Google Reverse Image** – Find similar images

- **Yandex Images** – Strong image search

- **Tineye** – Reverse image search

### Metadata Extraction

- **ExifTool** – Extract EXIF data

- **FotoForensics** – Image analysis

- **Jeffrey’s Image Metadata Viewer** – View hidden data

## OSINT Automation Tools

- **SpiderFoot** – Automated OSINT framework

- **Maltego** – Graph-based link analysis

- **Recon-ng** – Web reconnaissance

- **theHarvester** – Email, subdomain & IP reconnaissance
