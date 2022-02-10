---
title: On Search
order: 1
---

# On Search

> Send catalog

## Overview

> The BPP will send the catalog of items/services matching the search intent to
> the BAP.

## Request

### URL

> /on_search

### Method

> _POST_

### Request Body Schema

| **Field**       | **Type**                                                                             |
| --------------- | ------------------------------------------------------------------------------------ |
| context\*       | [ContextForOn_search](/docs/core-specification/schema-reference/contextforon_search) |
| message.catalog | { [Catalog](/docs/core-specification/schema-reference/catalog) }                     |
| error           | [Error](/docs/core-specification/schema-reference/error)                             |

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
