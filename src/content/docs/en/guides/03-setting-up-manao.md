---
title: Setting up Manao
---

Setting up Manao is a simple process. This continues from the previous guide where we run the setup script in the last process of installation. This script will manage your Twitch credentials, along with managing hard process into an easy login screen.


***

### 1. Setting up Client ID and Secret

At first, you will be prompt for language (English/Thai). Use your arrow keys to select and press `Enter` to confirm.

Then, a step-by-step guide will be shown on how to retrieve client id and secrets. If you have read [this guide](https://github.com/wrong-lang/manao/wiki/Retrieving-Client-ID-and-Secret-from-Twitch) you may skip this by typing `n` and press `Enter`.

Another confirmation prompt will be shown, press `Enter` again to skip.

Next, you will be asked for Twitch Client ID, paste your Client ID in the terminal then press `Enter`, the same process also goes for Client Secret.

---

### 2. Logging in to Twitch

The following message:
`To continue, please login to your BOT Twitch account (the secondary account for the bot)`
indicates that Client ID and Secret you entered are correct.

If you have an account for the bot (can be any account), please switch to that account in the browser before pressing `Enter`. If you don't have one, you can use your broadcaster account to continue without having to logout.

Then, this message:
`To continue, please login to your BROADCASTER Twitch account (the primary account for streaming)` will be shown if you finished authorizing bot account.

Switch to your broadcaster account (or do nothing if you don't have bot account), then press `Enter` to authorize the application again.

---

### 3. Completing the Setup Process

After the setup process is finished, you will see something like this:

![](https://github.com/user-attachments/assets/ec8055fd-2b1a-4776-9fd6-0b9a67d6349c)

Pressing `y` then `Enter` will open the ManaoBot folder in file explorer.

You can run ManaoBot by navigating the ManaoBot folder, then open the `tools/windows` folder, and open the `START_MANAO.bat` file