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

| **Field** | **Type**                                                                    |
| --------- | --------------------------------------------------------------------------- |
| context\* | [ContextForCancel](/reference/0.9.3/core/schema-reference/contextforcancel) |
| message   | [MessageForCancel](/reference/0.9.3/core/schema-reference/messageforcancel) |

## Response

### Response Body Schema

| **Field** | **Type**                                              |
| --------- | ----------------------------------------------------- |
| message\* | { [Ack](/reference/0.9.3/core/schema-reference/ack) } |
| error     | [Error](/reference/0.9.3/core/schema-reference/error) |

### Response Codes

| **Code** | **Description**                     |
| -------- | ----------------------------------- |
| 200      | Acknowledgement of message received |
