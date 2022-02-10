# Context

> Describes a beckn message context

| ##Schema Definition | **Field**                                                  | **Type**      | **Description** |
| ------------------- | ---------------------------------------------------------- | ------------- | --------------- |
| domain              | [Domain](/docs/core-specification/schema-reference/domain) | Describes the |

domain of an object
|country|[Country/properties/code](/docs/core-specification/schema-reference/country)|Country
code  
|city|[City/properties/code](/docs/core-specification/schema-reference/city)|City
code |action|string|Defines the Beckn API call. Any actions other than the
ennumerated actions are not supported by Beckn Protocol. Allowed values:search,
select, init, confirm, update, status, track, cancel, rating, support,
on_search, on_select, on_init, on_confirm, on_update, on_status, on_track,
on_cancel, on_rating, on_support |core_version|string|Version of Beckn core API
specification being used |bap_id|string|Unique id of the BAP.  
|bap_uri|string|URI of the BAP for accepting callbacks.  
|bpp_id|string|Unique id of the BPP.  
|bpp_uri|string|URI of the BPP.  
|transaction_id|string|This is a unique value which persists across all API
calls from search through confirm |message_id|string|This is a unique value
which persists during a request / callback cycle |timestamp|string|Time of
request generation  
|key|string|The encryption public key of the sender |ttl|string|The duration
after timestamp for which this message holds valid
