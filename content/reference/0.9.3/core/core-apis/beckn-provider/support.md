---
title: Support
order: 10
---

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
| context\* | [ContextForSupport](/reference/0.9.3/core/schema-reference/contextforsupport) |
| message   | [MessageForSupport](/reference/0.9.3/core/schema-reference/messageforsupport) |

## Response

### Response Body Schema

| **Field** | **Type**                                                 |
| --------- | -------------------------------------------------------- |
| message\* | { [Ack](/reference/0.9.3/core/schema-reference/ack) } |
| error     | [Error](/reference/0.9.3/core/schema-reference/error) |

### Response Codes

| **Code** | **Description**                     |
| -------- | ----------------------------------- |
| 200      | Acknowledgement of message received |
