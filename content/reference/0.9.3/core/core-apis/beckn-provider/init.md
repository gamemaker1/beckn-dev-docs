---
title: Init
order: 3
---

# Init

> Initialize an order by providing billing and/or shipping details

## Overview

> The BAP will send the billing and/or shipping details the BPP to initialize
> the order

## Request

### URL

> /init

### Method

> _POST_

### Request Body Schema

| **Field** | **Type**                                                                |
| --------- | ----------------------------------------------------------------------- |
| context\* | [ContextForInit](/reference/0.9.3/core/schema-reference/contextforinit) |
| message   | [MessageForInit](/reference/0.9.3/core/schema-reference/messageforinit) |

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
