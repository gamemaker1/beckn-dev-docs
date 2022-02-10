# Search

> Search for services by intent

## Overview

> The BAP will send the search intent to the BPP for services

## Request

### URL

> /search

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                       |
| --------- | ------------------------------------------------------------------------------ |
| context\* | [ContextForSearch](/docs/core-specification/schema-reference/contextforsearch) |
| message   | [MessageForSearch](/docs/core-specification/schema-reference/messageforsearch) |

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
