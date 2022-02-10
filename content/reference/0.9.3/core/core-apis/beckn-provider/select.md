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
| context\* | [ContextForSelect](/reference/0.9.3/core/schema-reference/contextforselect) |
| message   | [MessageForSelect](/reference/0.9.3/core/schema-reference/messageforselect) |

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
