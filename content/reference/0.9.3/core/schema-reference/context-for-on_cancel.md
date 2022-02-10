# ContextForOn_cancel

> Describes a beckn message context for **On_cancel** API call

##Schema Definition

| **Field**      | **Type**                                                                     | **Description**                                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| domain         | string                                                                       | Describes the domain of an object                                                                                                               |
| country        | [Country/properties/code](/reference/0.9.3/core/schema-reference/country) | Country code                                                                                                                                    |
| city           | [City/properties/code](/reference/0.9.3/core/schema-reference/city)       | City code                                                                                                                                       |
| action         | string                                                                       | Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol <br/> Allowed values : on_cancel |
| core_version   | string                                                                       | Version of Beckn core API specification being used                                                                                              |
| bap_id         | string                                                                       | Unique id of the BAP.                                                                                                                           |
| bap_uri        | string                                                                       | URI of the BAP for accepting callbacks.                                                                                                         |
| bpp_id         | string                                                                       | Unique id of the BPP.                                                                                                                           |
| bpp_uri        | string                                                                       | URI of the BPP.                                                                                                                                 |
| transaction_id | string                                                                       | This is a unique value which persists across all API calls from search through confirm                                                          |
| message_id     | string                                                                       | This is a unique value which persists during a request / callback cycle                                                                         |
| timestamp      | string                                                                       | Time of request generation                                                                                                                      |
| key            | string                                                                       | The encryption public key of the sender                                                                                                         |
| ttl            | string                                                                       | The duration after timestamp for which this message holds valid                                                                                 |
