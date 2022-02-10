# Fulfillment

> Describes how a single product/service will be rendered/fulfilled to the end
> customer

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |id|string|Unique reference ID to the
fulfillment of an order |type|string|This describes the type of fulfillment
|provider_id|[Provider/properties/id](/reference/0.9.3/core/schema-reference/provider)|Id
of the provider
|state|[State](/reference/0.9.3/core/schema-reference/state)|Describes a
state |tracking|boolean|Indicates whether the fulfillment allows tracking
|customer|object|
|agent|[Agent](/reference/0.9.3/core/schema-reference/agent)|Describes an
order executor
|vehicle|[Vehicle](/reference/0.9.3/core/schema-reference/vehicle)|Describes
the properties of a vehicle used in a mobility service |start|object|Details on
the start of fulfillment
|start.location|[Location](/reference/0.9.3/core/schema-reference/location)|Describes
the location of a runtime object
|start.time|[Time](/reference/0.9.3/core/schema-reference/time)|Describes
time in its various forms.
|start.instructions|[Descriptor](/reference/0.9.3/core/schema-reference/descriptor)|Describes
pick up instructions
|start.contact|[Contact](/reference/0.9.3/core/schema-reference/contact)|Contact
information for pickup
|start.person|[Person](/reference/0.9.3/core/schema-reference/person)|Person
information for pickup |end|object|Details on the end of fulfillment
|end.location|[Location](/reference/0.9.3/core/schema-reference/location)|Describes
the location of a runtime object
|end.time|[Time](/reference/0.9.3/core/schema-reference/time)|Describes time
in its various forms.
|end.instructions|[Descriptor](/reference/0.9.3/core/schema-reference/descriptor)|Describes
pick up instructions
|end.contact|[Contact](/reference/0.9.3/core/schema-reference/contact)|Contact
information for pickup
|end.person|[Person](/reference/0.9.3/core/schema-reference/person)|Person
information for pickup
|tags|[Tags](/reference/0.9.3/core/schema-reference/tags)|Describes a tag.
This is a simple key-value store which is used to contain extended metadata
