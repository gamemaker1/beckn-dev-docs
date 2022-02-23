# MessageForSelect

> Describes a beckn message object for **Select** API call

##Schema Definition

| **Field**     | **Type**                                                                                                                                                                               | **Description**               |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| order.items   | [ { id: [Item/properties/id](/docs/core-specification/schema-reference/item), quantity: [ItemQuantity/properties/selected](/docs/core-specification/schema-reference/itemquantity) } ] | Item id and quantity selected |
| order.add_ons | [ { id: [AddOn/properties/id](/docs/core-specification/schema-reference/addon) } ]                                                                                                     | Id of the add-on              |
| order.offers  | [ { id: [Offer/properties/id](/docs/core-specification/schema-reference/offer) } ]                                                                                                     | Id of the offer               |
