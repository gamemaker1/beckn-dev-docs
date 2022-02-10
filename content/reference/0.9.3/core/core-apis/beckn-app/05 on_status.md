# On Status

> Fetch the status of the order

## Overview

> The BPP will send the order object with current status to the BAP.

## Request

### URL

> /on_status

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                             |
| --------- | ------------------------------------------------------------------------------------ |
| context\* | [ContextForOn_status](/docs/core-specification/schema-reference/contextforon_status) |
| message   | [MessageForOn_status](/docs/core-specification/schema-reference/messageforon_status) |
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
