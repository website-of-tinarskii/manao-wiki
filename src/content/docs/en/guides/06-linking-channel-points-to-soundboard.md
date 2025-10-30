---
title: Linking channel points to soundboard
---

Biggest feature added in Manao version 2.1.0 was the Channel points manager, user can now redeem channel points to play
sound!

![](https://github.com/user-attachments/assets/129f1c89-beb7-4527-bfac-37c98f998586)

---

### Adding channel point reward

To play the sound using Manao, you will have to create new channel point reward. You cannot link it to an existing one, only the one that has been created using the Channel Points Manager.

Click the `Add reward` button at the top right corner of the table, you can modify the reward as follows:

1. **Name**: The name of your channel point reward.
2. **Cost**: Cost of your reward (Default: 100).
3. **Description**: This will be visible when people are trying to redeem the reward.
4. **Cooldown (s)**: Cooldown of the redemption, set to `0` for no cooldown.
5. **Sound**: An audio snippet to play during the redemption.

Click the `Save` button to create new reward.

---

### Testing out

Once you are done, check it out by opening an [Soundboard Player](http://localhost:3000/soundboard/player) page then redeem the channel point reward (Don't forget to unmute the soundboard player).

If the audio doesn't play, try one of these options:

1. Check if the audio exists by append sound URL to the URL string
2. Check if the audio file is corrupted
3. Try restarting Manao
4. Socket.IO port (3001) is available for use

If the problem still occurs, try reaching out in the [Discord](https://discord.gg/vkW7YMyYaf) server.