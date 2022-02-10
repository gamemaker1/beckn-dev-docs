# On Confirm

> Send active order object

## Overview

> The BPP will send the active confirmed order object to the BAP.

## Request

### URL

> /on_confirm

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                               |
| --------- | -------------------------------------------------------------------------------------- |
| context\* | [ContextForOn_confirm](/docs/core-specification/schema-reference/contextforon_confirm) |
| message   | [MessageForOn_confirm](/docs/core-specification/schema-reference/messageforon_confirm) |
| error     | [Error](/docs/core-specification/schema-reference/error)                               |

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
