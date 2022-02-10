# Provider

> Describes a service provider. This can be a restaurant, a hospital, a Store
> etc

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |id|string|Id of the provider
|descriptor|[Descriptor](/docs/core-specification/schema-reference/descriptor)|Describes
the description of a real-world object. Maintained by Beckn Foundation
|category_id|string|Category Id of the provider
|time|[Time](/docs/core-specification/schema-reference/time)|Describes time in
its various forms. It can be a single point in time; duration; or a structured
timetable of operations |categories|[
[Category](/docs/core-specification/schema-reference/category) ]|
|fulfillments|[
[Fulfilment](/docs/core-specification/schema-reference/fulfilment) ]|
|payments|[ [Payment](/docs/core-specification/schema-reference/payment) ]|
|locations|[ [Location](/docs/core-specification/schema-reference/location) ]|
|offers|[ [Offer](/docs/core-specification/schema-reference/offer) ]| |items|[
[Item](/docs/core-specification/schema-reference/item) ]| |exp|string|Time after
which catalog has to be refreshed
|tags|[Tags](/docs/core-specification/schema-reference/tags)|Describes a tag.
This is a simple key-value store which is used to contain extended metadata
