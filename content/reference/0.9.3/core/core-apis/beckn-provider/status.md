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

| **Field** | **Type**                                                                    |
| --------- | --------------------------------------------------------------------------- |
| context\* | [ContextForStatus](/reference/0.9.3/core/schema-reference/contextforstatus) |
| message   | [MessageForStatus](/reference/0.9.3/core/schema-reference/messageforstatus) |

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
