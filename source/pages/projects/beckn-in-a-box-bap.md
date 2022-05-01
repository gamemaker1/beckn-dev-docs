---
title: Beckn In A Box (BAP)
description: A reference implementation of a Beckn Application
layout: '@/layouts/page.astro'
---

This is a reference implementation of a BAP. A user can search for items, view
catalogs of BPPs, place an order and view order updates on the app. The Beckn in
a Box BAP is composed of 3 layers :

- UI layer
- Client layer
- Protocol layer

## Components

> The source code for the implementation can be found on
> [GitHub](https://github.com/beckn/bap-reference-app).

### UI Layer

The UI layer is the frontend implemented using Vue.js Storefront. The UI layer
interacts with the client layer using the client protocol API definitions.

### Client Layer

The client layer receives inputs from the UI layer and initiates Beckn protocol
calls to the Beckn network. The client layer interacts with the protocol layer
to get the responses from protocol callbacks.

### Protocol Layer

The protocol layer receives protocol callback responses from the Beckn network
and saves them to the database.

## Process

One whole API request and callback would be as follows:

- The UI layer calls the Client Layer to trigger the BAP protocol calls to the
  Beckn Network
- The Client layer makes the call to the Beckn network
- The callback response comes to the BAP protocol endpoint on the protocol layer
  and the response is saved to the database.
- The UI layer polls the client layer using messageId for responses. The client
  layer calls the protocol layer to get the response saved to the database.

The logical architecture for the same can be seen below:

![BAP Reference Architecture](/assets/content/bap-reference-architecture.png)
