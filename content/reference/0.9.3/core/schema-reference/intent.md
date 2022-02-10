# Intent

> Intent of a user. Used for searching for services

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |provider|object|
|provider.id|[Provider/properties/id](/docs/core-specification/schema-reference/provider)|Id
of the provider
|provider.descriptor|[Descriptor](/docs/core-specification/schema-reference/descriptor)|Details
of the provider
|provider.category_id|[Provider/properties/category_id](/docs/core-specification/schema-reference/provider)|Category
Id of the provider |provider.locations|[ {
[Location/properties/id](/docs/core-specification/schema-reference/location) }
]|List of location Ids of the provider |fulfillment|object|
|fulfillment.id|[Fulfillment/properties/id](/docs/core-specification/schema-reference/fulfillment)|Unique
reference ID to the fulfillment of an order
|fulfillment.start.location|[Location](/docs/core-specification/schema-reference/location)|Describes
the location of a runtime object
|fulfillment.start.time|[Time](/docs/core-specification/schema-reference/time)|Describes
time in its various forms.
|fulfillment.end.location|[Location](/docs/core-specification/schema-reference/location)|Describes
the location of a runtime object
|fulfillment.end.time|[Time](/docs/core-specification/schema-reference/time)|Describes
time in its various forms.
|fulfillment.tags|[Tags](/docs/core-specification/schema-reference/tags)|Describes
a tag. This is a simple key-value store which is used to contain extended
metadata
|fulfillment.vehicle|[Vehicle](/docs/core-specification/schema-reference/vehicle)|Describes
the properties of a vehicle used in a mobility service
|payment|[Payment](/docs/core-specification/schema-reference/payment)|Describes
a payment
|category|[Category](/docs/core-specification/schema-reference/category)|Describes
a category
|offer|[Offer](/docs/core-specification/schema-reference/offer)|Describes an
offer |item|[Item](/docs/core-specification/schema-reference/item)|Describes an
item. Allows for domain extension.
|tags|[Tags](/docs/core-specification/schema-reference/tags)|Describes a tag.
This is a simple key-value store which is used to contain extended metadata
