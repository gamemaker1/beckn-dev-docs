# MessageForSelect

> Describes a beckn message object for **Select** API call

##Schema Definition

| **Field**     | **Type**                                                                                                                                                                               | **Description**               |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| order.items   | [ { id: [Item/properties/id](/reference/0.9.3/core/schema-reference/item), quantity: [ItemQuantity/properties/selected](/docs/core-specification/schema-reference/itemquantity) } ] | Item id and quantity selected |
| order.add_ons | [ { id: [AddOn/properties/id](/reference/0.9.3/core/schema-reference/addon) } ]                                                                                                     | Id of the add-on              |
| order.offers  | [ { id: [Offer/properties/id](/reference/0.9.3/core/schema-reference/offer) } ]                                                                                                     | Id of the offer               |
