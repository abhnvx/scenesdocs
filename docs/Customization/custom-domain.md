---
sidebar_position: 4
id: custom-domain
title: Custom Domain
sidebar_label: Custom Domain
---

# Custom Domain

### Steps:

1. Add custom domain/subdomain (Needs to be a valid domain/subdomain)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10007963-da04-4dc6-b3b2-529cff1fae27/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220622T203005Z&X-Amz-Expires=86400&X-Amz-Signature=6952137c16d82ad42293d3197ae6d1b4ae094e2a1af5aceaac53ab2c25b3b3ca&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

2. Once the domain is successfully submitted, instructions are shown below it. These instructions contain the DNS changes that are to be made on the user's end.

- CNAME record pointing to our proxy servers

- TXT record to verify domain ownership

Eg: For custom domain = community.myapp.com , DNS Records are shown in the table below.

3. The verification status of the entered custom domain if shown below. DNS verification can take upto a couple hours, and at times it could take longer (up to 12 hours). To refresh the verification status, click on the "Check Status" button.

4. The custom domain can also be modified/removed if needed. This will mean repeating the entire process for the newly entered domain.

_Eg: Domain entered  = community.myapp.com_

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4d96596e-4286-488d-b35a-2cb483cc7fce/Screenshot_2022-06-23_at_1.58.29_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220622T203104Z&X-Amz-Expires=86400&X-Amz-Signature=b927fdee9a290607ede217aaff00eaf68dc8b355df673416da2758e9e2e68c06&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202022-06-23%2520at%25201.58.29%2520AM.png%22&x-id=GetObject)

(@ means root domain, here `myapp.com` )
