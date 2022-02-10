# MessageForCancel

> Describes a beckn message object for **Cancel** API call

##Schema Definition

| **Field**              | **Type**                                                                 | **Description**                                   |
| ---------------------- | ------------------------------------------------------------------------ | ------------------------------------------------- |
| order_id               | [Order/properties/id](/docs/core-specification/schema-reference/order)   | Id of the order                                   |
| cancellation_reason_id | [Option/properties/id](/docs/core-specification/schema-reference/option) | Id of the cancellation reason                     |
| descriptor             | [Descriptor](/docs/core-specification/schema-reference/descriptor)       | Describes the description of a real-world object. |
