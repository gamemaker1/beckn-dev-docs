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
| context\* | [ContextForTrack](/docs/core-specification/schema-reference/contextfortrack) |
| message   | [MessageForTrack](/docs/core-specification/schema-reference/messagefortrack) |

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
