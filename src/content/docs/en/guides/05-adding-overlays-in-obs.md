---
title: Adding overlays in OBS
---

Once you have configured and started ManaoBot, you can now add various overlays to your OBS scene to enhance your stream visuals! Many of the bot's commands are also integrated with the overlay too, such as the `!nickname` command that allows user to set their custom name in the chat overlay.

---

### 1. Open OBS/Streamlabs

Open **OBS Studio/Streamlabs** and go to the scene you want to add your overlay to. You can also create a new scene if you want to keep overlays organized separately. Any broadcasting software can also be used, such as Xsplit Broadcaster.

---

### 2. Add a Browser Source

1. In the **Sources** panel, click the **+** icon.
2. Select **Browser** from the list.
3. Give your source a name (for example: `Chat Overlay`, `Alert Overlay`, or `Music Overlay`).
4. Click **OK**.

---

### 3. Configure the Overlay

A properties window will appear. Here’s what to do:

- **URL:**  
  Enter the overlay URL. If you’re running ManaoBot locally, it should look like this:
  ```
  http://localhost:3000/overlay/chat
  ```
  or for other overlays:
  ```
  http://localhost:3000/soundboard/player
  http://localhost:3000/overlay/music
  http://localhost:3000/overlay/feed
  ```

- **Width / Height:**  
  You can try adjusting it until it looks fine, does not matter for the Soundboard Player overlay since the entire page will be hidden anyway.

- **Shutdown source when not visible:**  
  (Recommended) Keep this **unchecked**, so the overlay stays connected even when hidden.

- **Refresh browser when scene becomes active:**  
  Keep **checked**, so it automatically reloads when OBS restarts.

:::tip
Don't need to click "Control audio via OBS" for music or soundboard player overlay, you can control by interacting the page, see [this section](#5-using-the-interact-button)
:::
Then click **OK**.

---

### 4. Position and Adjustment

After adding, you’ll see the overlay appear on your scene preview. You can:
- Move it around like any other source.
- Resize it to fit your chat box or alert area.
- Right-click and select **Transform → Fit to Screen** if you want it to cover the entire canvas.

If the overlay doesn’t show right away, make sure your bot and server are running, then right-click the overlay and click **Refresh Browser Source**. Keep in mind that the URL should be in `http` not `https` if you are running on localhost.

---

### 5. Using the Interact Button

Some overlays require a manual action before they can start working properly, this includes the Music player and Soundboard Player overlay.
This is because an [autoplay policy](https://developer.chrome.com/blog/autoplay/) that blocks media playback until the user interacts with the page.

To enable music playback:

1. In OBS, right-click the overlay you added (for example, `Music Overlay`).
2. Click **Interact** from the context menu.  
   A small browser window will pop up.
3. Interact with the page.
- For music overlay, you can control the video by interacting with YouTube iFrame. To hide the YouTube iFrame, click the **song card** at the bottom of the iFrame.
- For soundboard player, click unmute then select any volume. To hide the page, click "hide" button.

---

### 6. Available Overlays

ManaoBot currently supports multiple overlay types:

| Overlay | URL | Description |
|----------|-----|-------------|
| Chat Overlay | `/overlay/chat` | Displays live Twitch chat messages beautifully styled |
| Feed Overlay | `/overlay/feed` | Displays an event in a channel (E.g. money transactions, new follower, etc.) |
| Soundboard Overlay | `/soundboard/player` | Play a sound triggered from the soundboard controller |
| Music Overlay | `/overlay/music` | Play a requested song via YouTube |

---

### 7. Troubleshooting

If an overlay does not appear:
1. Ensure that **ManaoBot** and **ManaoWeb** are running (you should be able to visit `http://localhost:3000` in your browser).
2. Double-check that the URL in OBS matches your overlay path.
3. Try refreshing the overlay or restarting OBS.
4. If you use firewall or antivirus software, make sure it does not block local connections.

---

### Tips

- You can create multiple scenes with different overlay layouts for variety.
- You can edit overlay CSS files in ManaoBot if you want to change fonts, colors, or layout. This can be done by modifying `ManaoBot/server/public/styles/chat.css`
- Make sure to `interact` with the page before use either music overlay or soundboard player overlay.