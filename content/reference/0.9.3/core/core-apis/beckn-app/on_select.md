---
title: On Select
order: 2
---

# On Select

> Send draft order object with quoted price for selected items

## Overview

> The BPP will send the draft order with the quoted price to the BAP.

## Request

### URL

> /on_select

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                          |
| --------- | --------------------------------------------------------------------------------- |
| context\* | [ContextForOn_select](/reference/0.9.3/core/schema-reference/contextforon_select) |
| message   | [MessageForOn_select](/reference/0.9.3/core/schema-reference/messageforon_select) |
| error     | [Error](/reference/0.9.3/core/schema-reference/error)                             |

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
