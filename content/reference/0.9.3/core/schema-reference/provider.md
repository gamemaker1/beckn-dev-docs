# Provider

> Describes a service provider. This can be a restaurant, a hospital, a Store
> etc

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |id|string|Id of the provider
|descriptor|[Descriptor](/reference/0.9.3/core/schema-reference/descriptor)|Describes
the description of a real-world object. Maintained by Beckn Foundation
|category_id|string|Category Id of the provider
|time|[Time](/reference/0.9.3/core/schema-reference/time)|Describes time in its
various forms. It can be a single point in time; duration; or a structured
timetable of operations |categories|[
[Category](/reference/0.9.3/core/schema-reference/category) ]| |fulfillments|[
[Fulfilment](/reference/0.9.3/core/schema-reference/fulfilment) ]| |payments|[
[Payment](/reference/0.9.3/core/schema-reference/payment) ]| |locations|[
[Location](/reference/0.9.3/core/schema-reference/location) ]| |offers|[
[Offer](/reference/0.9.3/core/schema-reference/offer) ]| |items|[
[Item](/reference/0.9.3/core/schema-reference/item) ]| |exp|string|Time after
which catalog has to be refreshed
|tags|[Tags](/reference/0.9.3/core/schema-reference/tags)|Describes a tag. This
is a simple key-value store which is used to contain extended metadata
