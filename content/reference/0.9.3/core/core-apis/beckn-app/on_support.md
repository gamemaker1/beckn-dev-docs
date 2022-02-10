---
title: On Support
order: 10
---

# On Support

> Contact Support

## Overview

> The BPP will send the support information to the BAP.

## Request

### URL

> /on_support

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                               |
| --------- | -------------------------------------------------------------------------------------- |
| context\* | [ContextForOn_support](/reference/0.9.3/core/schema-reference/contextforon_support) |
| message   | [MessageForOn_support](/reference/0.9.3/core/schema-reference/messageforon_support) |
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
