---
title: On Status
order: 5
---

# On Status

> Fetch the status of the order

## Overview

> The BPP will send the order object with current status to the BAP.

## Request

### URL

> /on_status

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                             |
| --------- | ------------------------------------------------------------------------------------ |
| context\* | [ContextForOn_status](/reference/0.9.3/core/schema-reference/contextforon_status) |
| message   | [MessageForOn_status](/reference/0.9.3/core/schema-reference/messageforon_status) |
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
