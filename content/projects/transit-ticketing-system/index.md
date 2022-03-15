---
title: Transit Ticketing System
description:
  The transit ticketing system is a BPP which manages inventory, issues tickets
  and validates tickets issued for a transit system.
---

# Transit Ticketing System

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
