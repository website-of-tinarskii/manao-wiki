---
title: Adding custom replies
---

With Manao version 2.2.0, I've introduced the **Custom Replies Manager**, allowing you to automate responses to specific keywords in your Twitch chat. This guide will teach you how to add your custom replies to spice up your Twitch chat!

![](https://github.com/user-attachments/assets/5ce0fd8b-514b-4b2a-97be-804c255aaaac)

---

### Adding a Custom Reply

To create a new custom reply:

1. Navigate to the **Custom Replies Manager** page.

2. Click the `Add Reply` button at the top right corner of the table.

3. Fill in the reply details:

    * **Keyword Type**: Choose how Manao detects the message:
        * `includes`: Replies if the message contains the keyword.
        * `equals`: Replies if the message exactly matches the keyword.
    * **Keywords**: A list of words or phrases that trigger the reply.
    * **Response Type**: How Manao chooses the response:
        * `random`: Picks a random response each time.
        * `sequence`: Sends responses in order, looping back at the end.
    * **Responses**: One or more messages that Manao will send when triggered.

4. Click the `Save` button to add the new reply.

> You can edit or delete any existing reply by using the buttons in the table.

---

### Testing Your Custom Reply

After saving a custom reply, test it in your Twitch chat:

1. Send a message that matches one of the keywords you configured.
2. Manao should automatically respond with the appropriate reply.
3. For `sequence` responses, send the keyword multiple times to see the responses cycle.

---

### Troubleshooting Tips

If the reply doesn't appear in chat:

1. Ensure Manao is connected to your Twitch channel.
2. Verify that the keyword and message match correctly.
3. Confirm that your bot account has permission to type in chat.
4. If the problem persists, join the [Discord](https://discord.gg/vkW7YMyYaf) server for support.