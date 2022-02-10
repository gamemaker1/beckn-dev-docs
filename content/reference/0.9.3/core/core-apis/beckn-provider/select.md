---
title: Select
order: 2
---

# Select

> Select items from the catalog and build your order

## Overview

> The BAP will send items to the BPP to build the order

## Request

### URL

> /select

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                       |
| --------- | ------------------------------------------------------------------------------ |
| context\* | [ContextForSelect](/docs/core-specification/schema-reference/contextforselect) |
| message   | [MessageForSelect](/docs/core-specification/schema-reference/messageforselect) |

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
