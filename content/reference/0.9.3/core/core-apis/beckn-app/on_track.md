---
title: On Track
order: 6
---

# On Track

> Send tracking details of an active order

## Overview

> The BPP will send the tracking details of an active order object to the BAP.

## Request

### URL

> /on_track

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                           |
| --------- | ---------------------------------------------------------------------------------- |
| context\* | [ContextForOn_track](/docs/core-specification/schema-reference/contextforon_track) |
| message   | [MessageForOn_track](/docs/core-specification/schema-reference/messageforon_track) |
| error     | [Error](/docs/core-specification/schema-reference/error)                           |

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
