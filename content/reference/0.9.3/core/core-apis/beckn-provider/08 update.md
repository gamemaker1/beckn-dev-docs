# Update

> Update an order.

## Overview

> The BAP will send the update request to the BPP with the details of which
> parts of the order is to be updated and the updated values.

## Request

### URL

> /update

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                       |
| --------- | ------------------------------------------------------------------------------ |
| context\* | [ContextForUpdate](/docs/core-specification/schema-reference/contextforupdate) |
| message   | [MessageForUpdate](/docs/core-specification/schema-reference/messageforupdate) |

## Response

### Response Body Schema

| **Field** | **Type**                                                 |
| --------- | -------------------------------------------------------- |
| message\* | { [Ack](/docs/core-specification/schema-reference/ack) } |
| error     | [Error](/docs/core-specification/schema-reference/error) |

### Response Codes

| **Code** | **Description**                     |
| -------- | ----------------------------------- |
| 200      | Acknowledgement of message received |
