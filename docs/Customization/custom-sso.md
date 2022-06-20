---
sidebar_position: 3
id: custom-sso
title: Custom SSO
sidebar_label: Custom SSO
---

# Single Sign On - steps to set up

**How do I set up a custom Single Sign-On?**

Scenes provides Single Sign-On (SSO) via the OAuth 2.0 authentication protocol.

![ezgif.com-gif-maker_(9).gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c2534d1-2cc2-45e6-8954-5dd30b36ea34/ezgif.com-gif-maker_%289%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220620T133928Z&X-Amz-Expires=86400&X-Amz-Signature=2c6c230370a5db79b37191424a54c3da77d4e79c57696b4c4e7666101021be46&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ezgif.com-gif-maker_%289%29.gif%22&x-id=GetObject)

**Step 1: Provide the name of your OAuth provider**

The OAuth Provider field is what will display on the login button. For example, if you input
the name "Tesla", the login button will say "Continue with Tesla"

**Step 2: Insert your custom OAuth provider details**

The **Client ID**, **Secret Key**, **Authorization URL**, **Response type(**code/token**)**, **Token Fetch
URL** and **User Info API URL** should be provided to you by your OAuth provider.

**Step 3: Set up the response paths**

This is the API URL for Scenes to fetch user profile information such as email, name, and
profile picture after authentication. Your OAuth provider will provide these.

Sample response to be:

```
{

“email”: “mandatory”,
“first_name”: “mandatory”,
“last_name”: “mandatory”,
“profile_image”: “optional”,
“uid”: “mandatory”

}
```

Click "**Save Settings**" once the fields are completed.

**Step 4: Turn SSO on**

As an admin, you'll need to ensure that your existing Scenes email has a corresponding
account in your custom OAuth setup with the same email — we'll automatically match up the
two accounts when you log in, and you'll be able to use the account from your OAuth
provider going forward.

<br/>
<br/>
<br/>

**API request**

1. **Authorization API**

```
   GET https://{{your_login_url}}?
   response_type=code&
   client_id=ad398u21ijw3s9w3939&
   redirect_uri={{scenes callback url}}
```

2. **Token fetch API**

   ```
   Content-Type
   Must always be 'application/x-www-form-urlencoded'.
   POST https://{{your_api_server}}/oauth2/token&
   Content-Type='application/x-www-form-urlencoded'&
   Authorization=Basic aSdxd892iujendek328uedj
   grant_type=authorization_code&
   client_id=djc98u3jiedmi283eu928&
   code=AUTHORIZATION_CODE&
   redirect_uri={{scenes callback url}}
   ```

**3. User Info API**

```
GET https://{{your_api_server}}/oauth2/userInfo
Authorization: Bearer <access_token>
```
