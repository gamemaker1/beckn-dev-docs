---
title: Confirm
order: 4
---

# Confirm

> Confirms an order by agreeing to the terms of the order.

## Overview

> The BAP will send the confirm request to the BPP after agreeing to the payment
> and fulfilment terms sent by the BPP.

## Request

### URL

> /confirm

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                         |
| --------- | -------------------------------------------------------------------------------- |
| context\* | [ContextForContext](/reference/0.9.3/core/schema-reference/contextforcontext) |
| message   | [MessageForConfirm](/reference/0.9.3/core/schema-reference/messageforconfirm) |

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
