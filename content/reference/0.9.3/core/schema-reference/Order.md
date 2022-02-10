# Order

> Describes the details of an order

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |id|string|Hash of order object without id
|state|string|
|items|[[Item/properties/id](/docs/core-specification/schema-reference/[item)]|
Array of item ids
|add_ons|[[AddOn/properties/id](/docs/core-specification/schema-reference/[addon)]|
Array of add on ids
|offers|[[Offer/properties/id](/docs/core-specification/schema-reference/[offer)]|
Array of offer ids
|billing|[Billing](/docs/core-specification/schema-reference/billing)|Describes
a billing event
|fulfillment|[Fulfillment](/docs/core-specification/schema-reference/fulfillment)|Describes
how a single product/service will be rendered/fulfilled to the end customer
|quote|[Quotation](/docs/core-specification/schema-reference/quotation)|Describes
a quote
|payment|[Payment](/docs/core-specification/schema-reference/payment)|Describes
a payment |created_at|string| |updated_at|string|
