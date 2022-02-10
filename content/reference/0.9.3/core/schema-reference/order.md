# Order

> Describes the details of an order

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |id|string|Hash of order object without id
|state|string|
|items|[[Item/properties/id](/reference/0.9.3/core/schema-reference/[item)]|
Array of item ids
|add_ons|[[AddOn/properties/id](/reference/0.9.3/core/schema-reference/[addon)]|
Array of add on ids
|offers|[[Offer/properties/id](/reference/0.9.3/core/schema-reference/[offer)]|
Array of offer ids
|billing|[Billing](/reference/0.9.3/core/schema-reference/billing)|Describes
a billing event
|fulfillment|[Fulfillment](/reference/0.9.3/core/schema-reference/fulfillment)|Describes
how a single product/service will be rendered/fulfilled to the end customer
|quote|[Quotation](/reference/0.9.3/core/schema-reference/quotation)|Describes
a quote
|payment|[Payment](/reference/0.9.3/core/schema-reference/payment)|Describes
a payment |created_at|string| |updated_at|string|
