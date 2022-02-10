# Support

> Contact support

## Overview

> The BAP will send the id of an entity for which support is required from the
> BPP.

## Request

### URL

> /support

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                         |
| --------- | -------------------------------------------------------------------------------- |
| context\* | [ContextForSupport](/docs/core-specification/schema-reference/contextforsupport) |
| message   | [MessageForSupport](/docs/core-specification/schema-reference/messageforsupport) |

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
