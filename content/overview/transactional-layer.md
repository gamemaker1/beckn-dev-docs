---
title: "Transaction Layer"
---

transaction layer
===================

Topic Summary
---------

The Transaction layer consists of Beckn Application Platforms (BAPs), on one side, Beckn Provider Platforms (BPPs), on the other, and Beckn Gateways (BGs), in-between them. BAPs search and find consumer services, BPPs fulfill them, and BGs ensure the discoverability of the BPPs (by the BAPs) on the network and the application any compliance and regulatory policies.

After a service/offer is chosen (confirmed) by the shopper all subsequent communication occurs directly between the BAP and the BPP through asynchronous API calls. However, any activities that require real-time data exchange (like order tracking) are performed outside Beckn network.

Beckn network can form different ad-hock virtual topologies based on the needs of the use case at hand.

Overview
---------

The Transaction layer of a Beckn-enabled network is the abstraction that encompasses the network actors and the transactions that occur between them. The Transaction layer itself has three distinct parts:

-   Demand side -- the consumer-facing platforms called "Beckn Application Platforms" or, for short, "BAPs"
-   Supply side -- the Seller-facing platforms called "Beckn Provider Platforms" or, "BPPs" 
-   Routing infrastructure -- the entities between the supply and demand sides, called of "Beckn Gateways" or "BGs", which connect the BAPs and the BPPS

Let's now expound on the roles of each of these parts and see how transactions take place in this layer.

Network Actors
---------

#### Beckn App Platforms (BAPs) 

A Beckn Application Platform (BAP) is a server-side infrastructure which captures consumers' requests via its UI applications, converts them into Beckn-compliant schemas and APIs at the server side, and fires them at the network. BAPs are the initiator of the transaction and have the flexibility to communicate with multiple networks and integrate the responses from these networks into a bundled shopper experience. For example, a BAP can book a cab via an urban mobility network, order a coffee from a restaurant via a local-retail network, have it picked up via an order on a delivery network and get it delivered on the way to work. All these three services can be bundled on the BAP's server end and packaged into a single monolithic experience to the user via an option called *Get coffee delivered on the way to work* on the shopper's app. Or a BAP can bundle multiple modes of transport to offer a multi-mode journey to the a app user. For example, a BAP application can provide a cab + metropolitan + bus ride, all in the same booking.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/09/BecknApp.png)

Beckn Apps (BAs) are software applications that provide consumer services to the end-user. They take advantage of Beckn's open network infrastructure to offer integrated experiences that, seamlessly to the shopper, aggregate services from different sources which can reside on different networks. The term "BA" refers to any shopping software platform or software package on a Beckn-enabled network which has a consumer interface. Some examples of BAs are:

-   Mobile apps
-   Desktop application
-   Browser apps
-   Voice assistants
-   Wearable devices
-   NLP applications
-   Chat-bots

A BA has:

-   An API to interface with the Beckn Gateway as part of the application cloud (Beckn App API)
-   Consumer UI
-   The application cloud

A BA can be set up by any organization which intends to offer integrated, location-aware services to consumers. The implementation is done over the Beckn protocol specifications.

#### Beckn Provider Platforms (BPPs)

The other side of the network is the supply side which consists of Beckn Provider Platforms (BPPs). These are the platforms which implement the supply logic and present it in the form of a Provider Catalog. The BPP can be a single provider with a Beckn API implementation or an aggregator of merchants -- this, of course, depends upon the logic of the particular implementation.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/09/BecknProvider.png)

A Beckn Provider (BP) -- a business or non-profit entity that supplies services via BPP -- can be any organization that owns, operates or manages an inventory of one or more services. BPs may be required to register with the national or local authorities and be regulated by them. Some examples of BPs are,

-   Public transportation companies like metropolitan services, bus services, ride-hailing services, etc.
-   Restaurants
-   Final-mile delivery services for food and groceries

A BPP has:

-   An API to accept requests from BGs as part of the application cloud (Beckn Provider API)
-   Service personnel UI. This is optional and may not be required for all cases. For example, a bike rental might not require a user interface, whereas a cab service may require a driver app.
-   An application cloud to store inventory data

The implementation of the Beckn Provider API is done over the Beckn protocol specifications.

#### Beckn Gateways (BGs)

Between BAPs and BPPs are the Beckn Gateways, which form the routing infrastructure of the Transaction layer. BGs are extremely lean and stateless routing servers. The purpose of this infrastructure is to route requests from the BAP to the BPPs, and from the BPPs back to the BAP. The BG takes a request from the BAP, determines to which BPPs the message needs to forwarded and multicasts the message to them. Apart from that, it can also implement optional features like payments, registry services, and can also emit Open Data (OData). (The OData specification for Beckn is currently under development.)

![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/beckn-gateway.jpg)

A Beckn Gateway (BG) is an organization that offers these functionalities:

-   Routing of requests from Beckn Apps to Beckn Providers and vice versa
-   BAP request filtering by identifying BPPs based on the Context of the request

The purpose of a BG is to allow all BPPs on the Beckn network to have a fair chance to be discovered by any BAP. The BG broadcast the search request to all listed and active BPPs on the network registry, which ensures fair and equal access to any participant. Furthermore, there is a post-discovery lifecycle that occurs directly between the BAP and BPP after the BAP has chosen the BPP to fulfill the BAP's Intent (the BAP's search).

A BG has:

-   A cloud infrastructure with services to implement the above functionalities. The implementation is done over the Beckn protocol specifications.
-   An API to accept requests from BAs (Beckn Gateway API).

BGs validate and filter all requests based on the national and local governance policies. They can also optionally collect payments from the BAs' users, and settle disputes among BAPs and BPPs through a process of clearing.

Any organization with infrastructure to provide the above functionalities (preferably organizations that own infrastructure with high computational capacities) can be a BG. Such organizations may be regulated entities registered with the national and/or local authorities.

API Communication
---------

All Transaction APIs communicate between the BAP and the BPP, with the exception of the Discovery API. All request messages are non-blocking and are immediately acknowledged with an *ACK* or a *NACK* message in the same session. The response message is in the form of a callback. Each callback, too, is immediately responded to with an *ACK* or a *NACK* message in the same callback session. All messages are serialized in JSON.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/09/api-communication.png)

An exception to this flow is order tracking in real time. Real-time tracking data is not routed through the Beckn networks. Because tracking involves continuous streams of data through an open socket, it will not be routed through the BG. The same exception applies to any real-time communication between the BP and the BA, like chat or cold calling. In these cases, only the data source information about the real-time tracking is transmitted through the BG. For example, in the case of vehicle tracking, only the tracking URL is transmitted via the BG and not the tracking data itself.

Network Topologies
---------

Beckn-enabled networks form various configurations depending on the nature of the integration of the use cases involved. For example, when a shopper wants food delivered to their home, there are two networks which are accessed:

-   Local Retail network -- for placing the order for the food
-   Final-Mile Delivery network -- for picking up the food package from the restaurant/store and delivering it to the shopper

One way to fulfill this use case is for the customer-facing BAP to use the Local Retail network to order food, while accessing the final mile delivery network in parallel and placing a delivery request there:

![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/network-topologist.jpg)

Alternatively, the Local Retail BPP may act as a BAP and place the delivery request to the Final Mile Delivery network in a cascaded manner like this:

![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/network-topologist-2.jpg)