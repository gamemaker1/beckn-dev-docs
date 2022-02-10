---
title: On Update
order: 8
---

# On Update

> Returns updated service with updated runtime object

## Overview

> The BPP will send the updated order object to the BAP.

## Request

### URL

> /on_update

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                             |
| --------- | ------------------------------------------------------------------------------------ |
| context\* | [ContextForOn_update](/reference/0.9.3/core/schema-reference/contextforon_update) |
| message   | [MessageForOn_update](/reference/0.9.3/core/schema-reference/messageforon_update) |
| error     | [Error](/reference/0.9.3/core/schema-reference/error)                             |

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
