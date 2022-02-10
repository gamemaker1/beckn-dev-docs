---
title: Cancel
order: 7
---

# Cancel

> Cancel an order

## Overview

> The BAP will send the order id to cancel the order

## Request

### URL

> /cancel

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                       |
| --------- | ------------------------------------------------------------------------------ |
| context\* | [ContextForCancel](/docs/core-specification/schema-reference/contextforcancel) |
| message   | [MessageForCancel](/docs/core-specification/schema-reference/messageforcancel) |

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
