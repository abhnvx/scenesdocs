---
sidebar_position: 1
id: receive-webhooks
title: Receive Webhooks
sidebar_label: Receive Webhooks
---

# **Steps to receive Webhooks**

You can start receiving event notifications in your app using the steps in this section:

1. Identify the notification events you want to monitor and the event payloads to parse.
2. Create a webhook endpoint as an HTTP endpoint (URL) on your local server.
3. Handle requests from Scenes by parsing each event object and returning **`2xx`** response status codes.
4. Deploy your webhook endpoint so it’s a publicly accessible HTTPS URL.
5. Register your publicly accessible HTTPS URL in the Community Settings.

   ![s1.png](https://i.imgur.com/FxWg6dm.png)

6. (Optional) Use secret_key to verify incoming HTTP Post request is from Scenes. secret_key is generated at the time of registering the webhook URL.

Webhook Payload Example for Forum Create

```json
{
"secret_key": "some_random_value",
"payload": {
	"event_type": "forum_post_new",
	"event_id": 123
	"actor_id": 1,
	"actor_id_ext": "a1",
	"affected_id": [2, 3, 4],
	"affected_ids_ext": ["a2", "a3", "a4"]
	"meta_data": {
			"channel_id": 1,
			"truncated_text": "New Forum Post!",
			"url": "https://community.avalonmeta.com/communities/1/group/1/channels/1/forumposts/1"
		}
	}
}
```

Note:

- actor_id_ext and affected_ids_ext will be external user IDs given to SSO
- Max length of affected IDs is 1000.
