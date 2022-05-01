---
title: Transit Ticketing System
description:
  The transit ticketing system is a BPP which manages inventory, issues tickets
  and validates tickets issued for a transit system.
layout: '@/layouts/page.astro'
---

The transit ticketing system is a BPP which manages inventory, issues tickets
and validates tickets issued for a transit system.

Issuing tickets and validating tickets is done via a mobile application that
employees will use. It communicates with the ticketing client backend APIs to
check availability and issue tickets. Validation of tickets is based on
validating a digital signature that is created using a private key at the
ticketing client backend. The corresponding public key will be available with
the mobile application and will be used to authenticate the signature.

The protocol backend implements all the beckn protocol APIs which will enable
the BPP to connect to a beckn enabled network. The protocol backend communicates
with the same ticketing client backend APIs to check availability and issue
tickets.

The ticketing client backend manages the inventory and schedules, keeps sales
records, creates orders and signs tickets that are generated.

## Deployment

> You can find the source code for the client backend
> [here](https://github.com/beckn/transit-ticketing-client-backend), protocol
> adapter
> [here](https://github.com/beckn/transit-ticketing-bpp-protocol-adaptor) and
> employee app [here](https://github.com/beckn/transit-ticketing-app).

You can find an example deployment using Linux servers (4-core, 16GB RAM, 128GB
Storage recommended) below.

![Linux Server Deployment Architecture](/assets/content/transit-ticketing-linux-server-deployment-architecture.png)

Here is an example of deployment with AWS:

![AWS Deployment Architecture](/assets/content/transit-ticketing-aws-deployment-architecture.png)
