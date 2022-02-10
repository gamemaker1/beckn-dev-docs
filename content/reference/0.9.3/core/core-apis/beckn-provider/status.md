---
title: Status
order: 5
---

# Status

> Fetch the latest order object

## Overview

> The BAP will send the order id to get the latest status of the order

## Request

### URL

> /status

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                       |
| --------- | ------------------------------------------------------------------------------ |
| context\* | [ContextForStatus](/docs/core-specification/schema-reference/contextforstatus) |
| message   | [MessageForStatus](/docs/core-specification/schema-reference/messageforstatus) |

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
