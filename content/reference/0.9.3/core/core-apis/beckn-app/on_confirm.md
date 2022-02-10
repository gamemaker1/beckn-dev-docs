---
title: On Confirm
order: 4
---

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
| context\* | [ContextForOn_confirm](/reference/0.9.3/core/schema-reference/contextforon_confirm) |
| message   | [MessageForOn_confirm](/reference/0.9.3/core/schema-reference/messageforon_confirm) |
| error     | [Error](/reference/0.9.3/core/schema-reference/error)                               |

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
