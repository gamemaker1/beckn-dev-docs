---
title: On Search
order: 2
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

| **Field**       | **Type**                                                                          |
| --------------- | --------------------------------------------------------------------------------- |
| context\*       | [ContextForOn_search](/reference/0.9.3/core/schema-reference/contextforon_search) |
| message.catalog | { [Catalog](/reference/0.9.3/core/schema-reference/catalog) }                     |
| error           | [Error](/reference/0.9.3/core/schema-reference/error)                             |

## Response

### Response Body Schema

| **Field** | **Type**                                              |
| --------- | ----------------------------------------------------- |
| message\* | { [Ack](/reference/0.9.3/core/schema-reference/ack) } |
| error     | [Error](/reference/0.9.3/core/schema-reference/error) |

### Response Codes

| **Code** | **Description**                     |
| -------- | ----------------------------------- |
| 200      | Acknowledgement of message received |
