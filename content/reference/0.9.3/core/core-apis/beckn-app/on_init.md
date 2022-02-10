---
title: On Init
order: 3
---

# On Init

> Send order object with payment details updated

## Overview

> The BPP will send the draft order with the payment and fulfilment terms to the
> BAP.

## Request

### URL

> /on_init

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                         |
| --------- | -------------------------------------------------------------------------------- |
| context\* | [ContextForOn_init](/docs/core-specification/schema-reference/contextforon_init) |
| message   | [MessageForOn_init](/docs/core-specification/schema-reference/messageforon_init) |
| error     | [Error](/docs/core-specification/schema-reference/error)                         |

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
