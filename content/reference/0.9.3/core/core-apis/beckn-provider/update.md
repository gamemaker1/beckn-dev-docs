---
title: Update
order: 8
---

# Update

> Update an order.

## Overview

> The BAP will send the update request to the BPP with the details of which
> parts of the order is to be updated and the updated values.

## Request

### URL

> /update

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                       |
| --------- | ------------------------------------------------------------------------------ |
| context\* | [ContextForUpdate](/reference/0.9.3/core/schema-reference/contextforupdate) |
| message   | [MessageForUpdate](/reference/0.9.3/core/schema-reference/messageforupdate) |

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
