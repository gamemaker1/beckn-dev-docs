---
title: 'Certification Layer'
order: 5
---

# certification layer

## Topic Summary

Certification on a Beckn-enabled network works by listing the network
participants on the registrars of the certification authority. Any network
participant listed on an open registry is implicitly assumed to be certified.
The certification requirements may vary based on the nature of the network.

## Certification Process

Certification is a process for any participant on a Beckn-enabled network to
show proof of compliance towards that network. This proof of compliance is in
the form of a digital certificate issued by one or more certification agencies.
After the certificate is issued, it is uploaded to a network registrar which
validates the certificate against the network rules and policies specified at
the network, city, and/or global levels.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/09/certification-layer-architecture.png)

After the certificate is validated, the registrar makes an entry for that
participant in their open registry. Any network participant listed on an open
registry is implicitly assumed to be certified.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/Certification-Process-2.jpg)

## Certificates Overview

This is what a digital certificate issued by a certification agency looks
like: ![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/Certificates-Overview.jpg) Certifications
could be for various purposes, such as compliance with some requirements or
regulations, migration to a new version of the protocol, renewal of
certification, and others. The certification agencies can create multiple
certificates in order to manage compliance across networks.
