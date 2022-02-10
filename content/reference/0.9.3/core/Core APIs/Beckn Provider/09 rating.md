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
| context\*     | [ContextForRating](/docs/core-specification/schema-reference/contextforrating) |
| message.id    | string                                                                         |
| message.value | integer                                                                        |

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
