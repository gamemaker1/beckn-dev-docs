---
title: On Rating
order: 9
---

# On Rating

> Provide feedback on a service

## Overview

> The BPP will send the feecback object to the BAP.

## Request

### URL

> /on_rating

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                             |
| --------- | ------------------------------------------------------------------------------------ |
| context\* | [ContextForOn_rating](/reference/0.9.3/core/schema-reference/contextforon_rating) |
| message   | [MessageForOn_rating](/reference/0.9.3/core/schema-reference/messageforon_rating) |
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
