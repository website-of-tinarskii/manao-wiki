---
title: Retrieving Client ID and Secret from Twitch
---

Before you can interact with chat in Twitch, you need to login to your Twitch account first. The same goes for ManaoBot. If the user has username and password, ManaoBot has client id and client secret.
Here is step-by-step guide on how to retrieve your client id and secret.

---

### 1. Login to Twitch Developer Portal

This process is simple, login to your preferred Twitch account at [Twitch Developer Portal](https://dev.twitch.tv/). This account will be the bot's main account. It can be the same with broadcaster account.

:::caution
Make sure the bot's account has **2FA enabled**, if not, read [Setting up Two-Factor Authentication (2FA)
](https://help.twitch.tv/s/article/two-factor-authentication)
:::

---

### 2. Register Twitch App

Visit [register your application page](https://dev.twitch.tv/console/apps/create). Here is where you can create your application to let your bot interact with Twitch. Fill in the form as follows:

- Name: You may use any name 
- OAuth Redirect URLs: Fill `http://localhost:3000` exactly like this. (`http` not `https`, and no `/` symbol at the end)
- Category: Pick `Chat bot`
- Client type: Choose `Confidential`

Then click the "create" button at the bottom end at the page. 
If done correctly, you will be redirected to [Developer Applications](https://dev.twitch.tv/console/apps) page and your application name listed.

---

### 3. Retrieving Client ID and Secret

If you see your application name listed in the [Developer Applications](https://dev.twitch.tv/console/apps) page, click the "Manage" button. After that, scroll down to the bottom of the page, you will see "Client ID" and "Client Secret". After you press the "New Secret" button, make sure to keep it somewhere safe, since you cannot view your secret anymore. 

:::danger
**IMPORTANT**: Never share your client id and secret to anyone!
:::