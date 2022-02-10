---
title: Track
order: 6
---

# Track

> Track an active order

## Overview

> The BAP will send the order id to get the tracking details of the order

## Request

### URL

> /track

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                     |
| --------- | ---------------------------------------------------------------------------- |
| context\* | [ContextForTrack](/reference/0.9.3/core/schema-reference/contextfortrack) |
| message   | [MessageForTrack](/reference/0.9.3/core/schema-reference/messagefortrack) |

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
