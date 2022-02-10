# On Support

> Contact Support

## Overview

> The BPP will send the support information to the BAP.

## Request

### URL

> /on_support

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                               |
| --------- | -------------------------------------------------------------------------------------- |
| context\* | [ContextForOn_support](/docs/core-specification/schema-reference/contextforon_support) |
| message   | [MessageForOn_support](/docs/core-specification/schema-reference/messageforon_support) |
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
