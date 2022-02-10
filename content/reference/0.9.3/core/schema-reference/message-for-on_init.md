# MessageForOn_init

> Describes a beckn message object for **On_init** API call

##Schema Definition

| **Field**         | **Type**                                                                                                                                                                               | **Description**                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| order.items       | [ { id: [Item/properties/id](/reference/0.9.3/core/schema-reference/item), quantity: [ItemQuantity/properties/selected](/docs/core-specification/schema-reference/itemquantity) } ] | Item id and quantity selected                                                         |
| order.add_ons     | [ { id: [AddOn/properties/id](/reference/0.9.3/core/schema-reference/addon) } ]                                                                                                     | Id of the addon                                                                       |
| order.offers      | [ { id: [Offer/properties/id](/reference/0.9.3/core/schema-reference/offer) } ]                                                                                                     | Id of the offer                                                                       |
| order.billing     | [Billing](/reference/0.9.3/core/schema-reference/billing)                                                                                                                           | Describes a billing event                                                             |
| order.fulfillment | [Fulfillment](/reference/0.9.3/core/schema-reference/fulfillment)                                                                                                                   | Describes how a single product/service will be rendered/fulfilled to the end customer |
| order.quote       | [Quotation](/reference/0.9.3/core/schema-reference/quotation)                                                                                                                       | Describes a quote                                                                     |
| order.payment     | [Payment](/reference/0.9.3/core/schema-reference/payment)                                                                                                                           | Describes a payment                                                                   |
