---
title: Search
order: 1
---

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
| context\* | [ContextForSearch](/reference/0.9.3/core/schema-reference/contextforsearch) |
| message   | [MessageForSearch](/reference/0.9.3/core/schema-reference/messageforsearch) |

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
