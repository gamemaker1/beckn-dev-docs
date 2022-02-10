---
title: 'The Registry Infrastructure'
order: 3
---

# registry infrastructure layer

## Topic Summary

The Registry Infrastructure layer comprises a network of open registries that
store detailed information about every network participant. The registries are
maintained by entities called "network registrars".

The candidates for BAPs or BPPs submit the relevant credentials to a network
registrar and, until approved, have the status of registrants. Approved
registrants obtain INITIATED status and are called "subscribers".

The Registry Infrastructure layer consists of a network of open registries that
store detailed information about every network
participant.  ![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/Registry-Infrastructure-Layer.jpg)

To get listed on a registry, there is a there is a procedure which is mandatory
for every network participant. The registration (in terms of requirements) is
specific to each Beckn-enabled network. The actors in the Registry
Infrastructure layer are the

- Network registrar(s) -- the registrar is a trusted entity that maintains the
  registry of the participants on the network. Registrars can be formed by the
  participants of the network or by a public authority; this depends on nature
  of the network. A network can have more than one registrars, all operating by
  the same rules.
- Registrant -- any business or non-profit entity that wants its platform to be
  listed on the Registry. To be listed, the registrant must submit relevant
  credentials to a network registrar. A registrant can apply to be a Beckn
  Application Platform (BAP), Beckn Provider Platform (BPP), or Beckn Gateway
  (BG).
- Subscriber -- after the registrant is approved by the registrar, it is listed
  on the registry with INITIATED status. From this moment on, the entity being
  registered in no longer a registrant and becomes a subscriber. The subscriber
  status gives the entity the right to perform transactions on the network.

![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/Registry-Infrastructure-Layer-2.jpg)

This a sample subscriber record in a registry database:

![](https://developers.becknprotocol.io/wp-content/uploads/2021/08/Registry-Infrastructure-Layer-3.jpg)

Any receiver of an API request must authenticate the sender by looking up the
network registry and verify the signature of the sender through the sender's
public key.
