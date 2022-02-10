# MessageForOn_select

> Describes a beckn message object for **On_select** API call

##Schema Definition

| **Field**     | **Type**                                                         | **Description**     |
| ------------- | ---------------------------------------------------------------- | ------------------- |
| order.items   | [ [Item](/docs/core-specification/schema-reference/item) ]       | Describes an item   |
| order.add_ons | [ [AddOn](/docs/core-specification/schema-reference/addon) ]     | Describes an add-on |
| order.offers  | [ [Offer](/docs/core-specification/schema-reference/offer) ]     | Describes an offer  |
| order.quote   | [Quotation](/docs/core-specification/schema-reference/quotation) | Describes a quote   |
