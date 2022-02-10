# MessageForOn_select

> Describes a beckn message object for **On_select** API call

##Schema Definition

| **Field**     | **Type**                                                         | **Description**     |
| ------------- | ---------------------------------------------------------------- | ------------------- |
| order.items   | [ [Item](/reference/0.9.3/core/schema-reference/item) ]       | Describes an item   |
| order.add_ons | [ [AddOn](/reference/0.9.3/core/schema-reference/addon) ]     | Describes an add-on |
| order.offers  | [ [Offer](/reference/0.9.3/core/schema-reference/offer) ]     | Describes an offer  |
| order.quote   | [Quotation](/reference/0.9.3/core/schema-reference/quotation) | Describes a quote   |
