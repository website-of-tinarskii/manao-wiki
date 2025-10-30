---
title: Using Manao
---

Once you have run the bot, you can now access the [ManaoWeb](http://localhost:3000) at `http://localhost:3000`. ManaoWeb provides a simple interface for managing with various things. Here is what you can do in ManaoWeb

---

### Command Manager

![](https://github.com/user-attachments/assets/3630a0aa-3b8a-4f82-a0f8-dfa0520c8c98)

You can disable/enable commands via this page! Not only that, but you can also create your own custom commands!

---

### Soundboard Controller

![](https://github.com/user-attachments/assets/e5dcfc5f-3412-4a3e-bcfb-27d831b806ed)

In this page, you can play sound effects or any custom sound. The sound will be play in the Soundboard Player page.
You can add new sounds by providing the sound URL.

**Adding new sounds**

![](https://github.com/user-attachments/assets/12c4d73d-fc80-4354-89e3-8df151ad520e)

You can add new sound by following these steps:
1. Download an audio file from the internet, [MyInstants](https://myinstants.com) has a plenty of sound effects suitable for use.
2. Move an audio file to ManaoBot folder, then place it in the `server/public/sounds` directory.
3. Go to the [Soundboard Controller](http://localhost:3000/soundboard/controller) page and scroll down to the bottom, you will see an "Add new sound" section.
4. Set the name to whatever you like, and for the URL, set to `/sounds/[your-file-name].[your-file-extension]`. For example, `/sounds/lucio-boop.mp3` or `/sounds/sombra-boop.wav`.
5. Try it out by opening a soundboard player page by clicking "Open Sound Player" button

---

### Soundboard Player

![](https://github.com/user-attachments/assets/b0fe8fe4-a365-4d98-826e-dbc87861e639)

This page play sounds sent from the Soundboard Controller. You can set volume and hide the page to add this page as a browser source in OBS. Make sure to click "Unmute" button and set volume before using.

---


