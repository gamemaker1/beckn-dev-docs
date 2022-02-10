# Fulfillment

> Describes how a single product/service will be rendered/fulfilled to the end
> customer

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |id|string|Unique reference ID to the
fulfillment of an order |type|string|This describes the type of fulfillment
|provider_id|[Provider/properties/id](/docs/core-specification/schema-reference/provider)|Id
of the provider
|state|[State](/docs/core-specification/schema-reference/state)|Describes a
state |tracking|boolean|Indicates whether the fulfillment allows tracking
|customer|object|
|agent|[Agent](/docs/core-specification/schema-reference/agent)|Describes an
order executor
|vehicle|[Vehicle](/docs/core-specification/schema-reference/vehicle)|Describes
the properties of a vehicle used in a mobility service |start|object|Details on
the start of fulfillment
|start.location|[Location](/docs/core-specification/schema-reference/location)|Describes
the location of a runtime object
|start.time|[Time](/docs/core-specification/schema-reference/time)|Describes
time in its various forms.
|start.instructions|[Descriptor](/docs/core-specification/schema-reference/descriptor)|Describes
pick up instructions
|start.contact|[Contact](/docs/core-specification/schema-reference/contact)|Contact
information for pickup
|start.person|[Person](/docs/core-specification/schema-reference/person)|Person
information for pickup |end|object|Details on the end of fulfillment
|end.location|[Location](/docs/core-specification/schema-reference/location)|Describes
the location of a runtime object
|end.time|[Time](/docs/core-specification/schema-reference/time)|Describes time
in its various forms.
|end.instructions|[Descriptor](/docs/core-specification/schema-reference/descriptor)|Describes
pick up instructions
|end.contact|[Contact](/docs/core-specification/schema-reference/contact)|Contact
information for pickup
|end.person|[Person](/docs/core-specification/schema-reference/person)|Person
information for pickup
|tags|[Tags](/docs/core-specification/schema-reference/tags)|Describes a tag.
This is a simple key-value store which is used to contain extended metadata
