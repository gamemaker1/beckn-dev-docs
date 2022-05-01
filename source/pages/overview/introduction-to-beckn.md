---
title: Introduction
description: Introducting Beckn to the world!
layout: '@/layouts/page.astro'
---

## What is Beckn?

Beckn is an open protocol for location-aware, local commerce. It makes it
possible services and sales offers to be discovered across industries and
fetched by any consumer application. Thus it helps deliver offers and services
to the shopper seamlessly, by combining offer/services of any form or provider.
The protocol takes advantage of the 5G and high-speed network technologies to
implement e-commerce capability in the network and/or the transport layer. This
makes the sales offers or services open and accessible to the Application layer
of any Beckn-aware implementation. The Beckn protocol is implementable also on
middleware and firmware levels.

The Beckn Protocol is a collection of open specifications that deliver Beckn’s
functionality. The specifications consist of protocol APIs, message formats,
network design and reference algorithms, which allow multiple commercial service
provider entities to bring their services together to offer one seamless
integrated experience to their customers.

The Beckn Protocol de-couples the demand-side digital infrastructure (apps and
other channels) from the supply-side service provisioning infrastructure. It
does this by making integrated location-aware services available not just on a
single platform but potentially on any online consumer interface (online maps,
messaging, wallets, voice assistant apps and devices) that has mainstream
adoption in a city.

Beckn is a protocol, not a platform. It has a decentralized architecture that
obviates the need for creating a centralized platform in order to integrate
services from multiple providers simultaneously. The protocol ensures privacy
and security by design by enabling secure, privacy-protected interactions.

The Interoperability protocol allows two entities in an integrated ecosystem to
communicate with each other through structured flows and role definitions. The
Server-To-Server Communication protocol allows any consumer-facing online
platform to discover and transact with location-aware remote services with
minimal implementation overhead. A single message packet generated at run-time,
hence, could contain services from multiple providers.

## Multi-Layered Structure of the Protocol

The Beckn protocol consists of several specifications because the creation of an
open network requires the implementation of multiple layers of infrastructure,
and each layer has its own specification. The HTTP protocol, for example, would
not be able to deliver its functionality without its multiple layers, and the
same applies to Beckn. The table below shows a comparison between the HTTP and
Beckn protocols across various factors like methods, scaffolding,
infrastructure, etc. As you can see, Beckn draws a lot of its inspiration from
HTTP.

![Beckn-HTTP Comparison](/assets/content/beckn-http-comparison.png)

## Beckn Ecosystem Architecture

Beckn architecture prescribes multiple layers stacked on top of one another,
each with clearly defined roles and functions, as evident from this diagram:

![Beckn Ecosystem Architecture](/assets/content/ecosystem-architecture.png)

Every entity that wants to be part of the network must be in one or more of the
layers listed in the left column.

The bottom two layers — the Specification and Support layer and the
Certification layer — provide all the resources and support required to
implement the network, to test for compliance and to become certified to join
the network.

The top two layers are the actual run-time of the specification in the form of
the Application layer which constitutes the consumer and the provider
interfaces, and the Network and Transaction layer which has the server-side
applications and the routing infrastructure.

In the very middle is the Infrastructure and Security layer. This layer holds
the underlying infrastructure that transforms the Beckn-compliant platforms into
actual live transacting entities on an open network. The layer comprises of open
registries which list the various platforms and makes them this discoverable by
other platforms — a role similar to that of the domain name system (DNS) in
HTTP.

Each of these layers has undergone unique independent evolution in terms of
complexity and scale. Together, they all work in concert to create the ecosystem
of Beckn.

## Developer Ecosystem Components

This diagram shows the various components of the Beckn ecosystem, its 'building
blocks':

![Ecosystem Components](/assets/content/ecosystem-components.png)

Of these, the only component which is not on a production platform yet (as of
July 2021) is the Certification specification: it has its core specifications,
domain specific taxonomies, security and trust models designed already; the open
certification specification is still under development.

The developer ecosystem is built around some sandboxes, API wrappers (for
platforms that have their own APIs), multiple communities for the various
domains like delivery, mobility, local retail, etc., and certification agencies
which implement the open certification spec.
