---
title: Rating
order: 9
---

# Rating

> Provide feedback on a service.

## Overview

> The BAP will send the rating for a service to the BPP.

## Request

### URL

> /rating

### Method

> _POST_

### Request Body Schema

| **Field**     | **Type**                                                                       |
| ------------- | ------------------------------------------------------------------------------ |
| context\*     | [ContextForRating](/reference/0.9.3/core/schema-reference/contextforrating) |
| message.id    | string                                                                         |
| message.value | integer                                                                        |

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
