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

| **Field** | **Type**                                                                      |
| --------- | ----------------------------------------------------------------------------- |
| context\* | [ContextForOn_init](/reference/0.9.3/core/schema-reference/contextforon_init) |
| message   | [MessageForOn_init](/reference/0.9.3/core/schema-reference/messageforon_init) |
| error     | [Error](/reference/0.9.3/core/schema-reference/error)                         |

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
