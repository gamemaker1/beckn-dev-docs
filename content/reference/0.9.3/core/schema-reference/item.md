# Item

> Describes an item. Allows for domain extension.

##Schema Definition |**Field**|**Type**|**Description**|
|---------|--------|---------------| |id|string|This is the most unique
identifier of a service item. An example of an Item ID could be the SKU of a
product.
|parent_item_id|[Item/properties/id](/docs/core-specification/schema-reference/item)|This
is the most unique identifier of a service item. An example of an Item ID could
be the SKU of a product.
|descriptor|[Descriptor](/docs/core-specification/schema-reference/descriptor)|Describes
the description of a real-world object. Maintained by Beckn Foundation
|price|[Price](/docs/core-specification/schema-reference/price)|Describes the
price of an item. Allows for domain extension.
|category_id|[Category/properties/id](/docs/core-specification/schema-reference/category)|Unique
id of the category
|location_id|[Location/properties/id](/docs/core-specification/schema-reference/location)|
|time|[Time](/docs/core-specification/schema-reference/time)|Describes time in
its various forms. It can be a single point in time; duration; or a structured
timetable of operations |matched|boolean| |related|boolean|
|recommended|boolean|
|tags|[Tags](/docs/core-specification/schema-reference/tags)|Describes a tag.
This is a simple key-value store which is used to contain extended metadata
