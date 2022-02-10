# Intent

> Intent of a user. Used for searching for services

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |provider|object|
|provider.id|[Provider/properties/id](/reference/0.9.3/core/schema-reference/provider)|Id
of the provider
|provider.descriptor|[Descriptor](/reference/0.9.3/core/schema-reference/descriptor)|Details
of the provider
|provider.category_id|[Provider/properties/category_id](/reference/0.9.3/core/schema-reference/provider)|Category
Id of the provider |provider.locations|[ {
[Location/properties/id](/reference/0.9.3/core/schema-reference/location) }
]|List of location Ids of the provider |fulfillment|object|
|fulfillment.id|[Fulfillment/properties/id](/reference/0.9.3/core/schema-reference/fulfillment)|Unique
reference ID to the fulfillment of an order
|fulfillment.start.location|[Location](/reference/0.9.3/core/schema-reference/location)|Describes
the location of a runtime object
|fulfillment.start.time|[Time](/reference/0.9.3/core/schema-reference/time)|Describes
time in its various forms.
|fulfillment.end.location|[Location](/reference/0.9.3/core/schema-reference/location)|Describes
the location of a runtime object
|fulfillment.end.time|[Time](/reference/0.9.3/core/schema-reference/time)|Describes
time in its various forms.
|fulfillment.tags|[Tags](/reference/0.9.3/core/schema-reference/tags)|Describes
a tag. This is a simple key-value store which is used to contain extended
metadata
|fulfillment.vehicle|[Vehicle](/reference/0.9.3/core/schema-reference/vehicle)|Describes
the properties of a vehicle used in a mobility service
|payment|[Payment](/reference/0.9.3/core/schema-reference/payment)|Describes a
payment
|category|[Category](/reference/0.9.3/core/schema-reference/category)|Describes
a category
|offer|[Offer](/reference/0.9.3/core/schema-reference/offer)|Describes an offer
|item|[Item](/reference/0.9.3/core/schema-reference/item)|Describes an item.
Allows for domain extension.
|tags|[Tags](/reference/0.9.3/core/schema-reference/tags)|Describes a tag. This
is a simple key-value store which is used to contain extended metadata
