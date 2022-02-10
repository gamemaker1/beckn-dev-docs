# On Rating

> Provide feedback on a service

## Overview

> The BPP will send the feecback object to the BAP.

## Request

### URL

> /on_rating

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                             |
| --------- | ------------------------------------------------------------------------------------ |
| context\* | [ContextForOn_rating](/docs/core-specification/schema-reference/contextforon_rating) |
| message   | [MessageForOn_rating](/docs/core-specification/schema-reference/messageforon_rating) |
| error     | [Error](/docs/core-specification/schema-reference/error)                             |

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
