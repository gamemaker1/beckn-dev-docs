---
title: 'Beckn Protocol Specification'
order: 2
---

# specification layer

## Topic Summary

Beckn Specification layer consists of the Core APIs, the Core schema, the Domain
taxonomy, the Communication protocol, and the Authentication and Smart Contracts
component.

Core APIs include Transaction APIs which are modeled after the order lifecycle
(discovery order, fulfillment, post-fulfillment) and are asynchronous, and
Supporting APIs which are mostly synchronous.

The Core schema specifies the structure of the data in the commerce interactions
and is modeled after the OpenAPI 3.0 specification. It is the data abstraction
layer for the APIs.

Domain taxonomies add industry-specific attributes to the elements of the Core
schema and specify the supported values at country, city, or network levels.

The Communication protocol contains the Core API implementation rules that make
possible for a platform or app  to become a part of a Beckn-enabled network.

The Authentication and Smart Contracts component specifies the way in which
participants authenticate on the network and the conditions under which this is
done.

## Overview

The foundation layer of a Beckn network is the Specification layer. It comprises
of five components:

- Core APIs
- Core schema
- Domain taxonomy
- Communication protocol
- Authentication and Smart Contracts

They must be implemented by any platform that wants to be part of the open
network.

The Core APIs are a set of API specifications which define the various objects
used in a commerce transaction. These objects are abstracted to the highest
possible level -- the level of the concepts that are common to all commerce
operations, like "order", "tracking", "payment", and similar. Thus the Core
schema objects are domain-agnostic (industry-agnostic) by definition. They are
reused across the specific domains (industries) with less abstract meanings and
with concrete values taken from the domain taxonomies.

The domain taxonomy defines the industry-specific objects. For example, a
taxonomy for an urban mobility network may expose as Providers taxi companies,
car rental companies, car-pooling services, the city metropolitan, etc..

The Core schema consists of a set of schemas that give structure of the message
packets that are exchanged in the communication.

The Communication protocol contains the rules for the implementation of the Core
APIs. Any platform that wants to be part of a Beckn-enabled network must follow
these rules.

The Authentication and Smart Contracts component specifies the way and the
conditions for the participants to authenticate on the network, e.g. what are
the authorized certification agencies and what data must be submitted to them,
what the authorization registries must be and how they must be maintained,
whether certifications should expire, the renewal procedure, etc..

## Core APIs

Overview Here is a list of Beckn core APIs:

- Transaction APIs
  - Discovery API
  - Order API
  - Fulfilment API
  - Post-Fulfilment API
- Supporting APIs
  - Network Security API
  - BPP Meta API
  - Open Data API (under development)
  - Certification API (under development)

As evident from their names, the transaction APIs cover the four stages of the
lifecycle of a typical
order: ![](https://developers.becknprotocol.io/wp-content/uploads/2021/07/core-api.jpg)

Every end-to-end commerce transaction can be categorized through these four
stages:

1.  Discovery -- involves searching for a provider or a catalog. Once the
    catalog is retrieved, one can browse the catalog using various filters and
    parameters.
2.  Order -- the consumer constructs the order by selecting various items or
    offers from a catalog; billing and shipping details are supplied, as well as
    any supporting credentials if required. A confirmed order marks the end of
    this stage.
3.  Fulfillment -- the actual fulfillment of the order. This consists of events
    like delivery, tracking and, occasionally, cancelation. The completion of
    the delivery of an order marks the end of this stage.
4.  Post-Fulfillment -- activities like providing rating, contacting support, or
    initiating a return

All transaction APIs are asynchronous, which means that the requested
information is not returned immediately in the same session and that there is a
callback mechanism in place through which it is obtained.

The Supporting APIs cover activities which are not themselves part of the order
lifecycle described above but enable or assist it. Typically, these APIs do not
necessarily need to be called for every order. The data returned by them is
generally meant to be cached by the requester. Unlike the Transaction APIs, most
of the Supporting APIs are synchronous.

## Transaction APIs

As mentioned in the Overview, every stage of the order lifecycle is completed by
one of the Transaction APIs (if we set aside the functionalities of the
Supporting APIs), so these APIs emulate the typical order funnel, that is, from
search, to confirmation, to tracking, and up to rating.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/07/transaction-api.jpg)

At that, the Transaction APIs do not necessarily need to be called in the
sequence of the order lifecycle (discovery, order, fulfillment, post-fulfilment)
every time: there are use cases when one might start, for example, by calling
the Order API to confirm an order without going through searching and then
through selecting and then through initializing the order.

The Transaction APIs realize the order lifecycle by operating asynchronously.
This means that the request is not followed by an immediate response in the same
session. Instead, an acknowledgement is returned, and the actual payload is
supplied later to a callback API. This mode of operation is very much in line
with the way in which commerce operations occur in the physical world. In fact,
a response may take even days after the request was generated. For example, when
booking a hotel during a peak season, a booking request does not necessarily
mean that the hotel has confirmed the booking: it may take up to 24 hours for
the confirmation to be issued. Thus the async nature of these APIs.

Expanding further on the nature of the Transaction APIs, two more things has to
be pointed out. Transaction APIs are also:

- Transport-layer-agnostic -- not specific to any transport protocol. They can
  be easily implemented with any such protocol like HTTP, UDP, WebSocket, and
  others. (Do not be confused by the fact that most Beckn developer literature
  shows the Beckn protocol in HTTP implementation: this is because, due to the
  popularity of HTML, the typical implementations are for this protocol. Just
  keep in mind that it is just one option for the choice of transport protocol.)
- Server-to-server -- they are not called directly by a UI client (a mobile
  phone app, browser, smart devices, etc.). This empowers the implementer to
  flexibly customize the experience in whatever way they want it to be. For
  example, a single search request from a mobile app to a server might result in
  multiple API calls from the server to the network.

## Core Schema

The Core schema specifies the structure of the data in the commerce
interactions. The definition of these objects is presented as a structured
schema for documentation and validation purposes and complies to the OpenAPI 3.0
specification. The schema organizes that data that is passed in each of the Core
APIs into a several hierarchical component levels:

![](https://developers.becknprotocol.io/wp-content/uploads/2021/07/core-schema.jpg)

Together, these levels of components form the Core schema which constitutes the
data abstraction layer for the APIs.

The top-level is a set of highly abstracted classes which form the main message
that is passed in each API.

In the mid-level, each of these objects becomes more detailed and specific as
the various properties of the top-level objects are defined.

Further down is the level of the schema primitives -- reusable objects that
specify dimensions for the mid-level objects. For example, a location may mean
the GPS coordinates of a place, an address, an area, or a particular 3-D object
(a building). Depending on context, the location object may be used in a various
places. For instance, a fulfillment object may have a location attribute which
specifies the delivery area, whereas a provider may have a location attribute
that indicates the whereabouts of a store. These objects are so general in their
meaning that they are no longer specific to commerce -- "location", for instance
is by no means limited to commerce or any particular human activity.

The bottom level represents the primitive data types of all platform entities.
These data types, together with the adopted universal standards (IETF, JSON,
OpenAPI, ISO, Regex) through which the schema is defined, make for lesser
communication overhead when parsing messages.

## Taxonomies

Most real-life use cases cannot be represented by abstracted objects only. To
each of these objects, there has to be some domain-level context that gives
actual meaning to the nature and function of these objects. That variance across
domains is accounted for by the application of taxonomies. These taxonomies add
domain-specific attributes to the elements of the Core schema.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/07/taxonomies.jpg)

There is a particular nomenclature to these taxonomies which is constructed out
of a hierarchical layering of scopes, namely -- domain, country, city, and
network. Every domain-specific attribute has a set of supported values that can
be specified at country, city, or network levels. The list of supported values
for each attribute can be listed on a public domain like a web site or in the
API itself in the form of allowed values specific to a particular city or
network. For example, the city of New Delhi permits rickshaws as mode of travel,
whereas Bangalore does not. So the list of supported modes in New Delhi or
Bangalore should be present as a file in the protocol specifications repository
which anyone can access and implement. This list will continuously be updated as
new modes of travel come along.

The layering in taxonomies allows to create enumerations (enums), required
fields, allowed and default values, and domain-/region-/network-specific
standards. For example, in the network mobility domain, as far as location is
concerned, it suffices to specify the pick-up location in order to confirm an
order; in the domain of hyperlocal delivery however, the pickup location, as
well as the drop location, are required. So these taxonomies must be very
clearly specified in each of these domains.

The same holds true for the allowed values and defaults. Let's take for example
the Fulfilment Type object. This object describes how an order is going to be
fulfilled and this is different in each domain. In retail, for example, the
various types of fulfilment include home delivery and store pick-up, but in
healthcare, the fulfillment type might be any consultation or medical checkup.
So the mode in which an order is being fulfilled varies across the domains,
which means that there has to be enums and default values assigned to each of
the domain-specific taxonomies, and these enums and default values will, too,
vary across the domains. And then there can also be network-, domain-, and
region -specific standards (as in the rickshaw example above).

![](https://developers.becknprotocol.io/wp-content/uploads/2021/07/domain-spec-tax.jpg)

So most of these settings must be available as a separate specifications which
can be made retrievable via an API so a system integrator could be able to
simply make an API call to get the taxonomy rules for a particular domain,
country, or network and use that additional layer in to validate their platform
or to create domain-specific validation layers in your in their own API.
