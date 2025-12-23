---
title: Connecting to External Events
---

Manao can connect to external events via Socket.IO using the `!event` command, available from Manao version 3.1.x onwards. What are the benefits? Simply put: **"Other websites or applications can send and receive data with Manao in real-time."**

### Basic Commands

You can connect to any Socket.IO server using the following command:

```text
!event connect <URL>

```

For example:

```text
!event connect https://nhendle-server.fly.io/?session=RANDOM_SESSION_ID

```

Once connected successfully, Manao will send a confirmation message in the chat:

```text
Event initiated

```

To disconnect from the server, use the command:

```text
!event disconnect

```

Upon successful disconnection, Manao will send a confirmation message in the chat:

```text
Event disconnected

```

### For Developers: Sending and Receiving Events

Manao sends and receives events via Socket.IO and supports both **session-bound** and **neutral mode** as follows:

```typescript
socket.on("connect", () => {
  try {
    const parsed = new URL(url);
    const sessionId = parsed.searchParams.get("session");

    // If sessionId exists, join the session-bound room
    if (sessionId) {
      socket.emit("session:join", {
        sessionId,
        role: "manao",
      });
      logger.info(`[Event] Connected in session mode: ${sessionId}`);
    } else {
      // If no sessionId, enter neutral mode
      logger.info("[Event] Connected in neutral mode");
    }

    send("Event initiated!");
  } catch (err) {
    logger.error(`[Event] Failed to parse URL: ${err}`);
    send("Error: Invalid URL provided");
  }
});

```

Manao will emit the `session:join` event to the server when a Session ID is present to identify the connection as originating from Manao.

### Events Manao can receive from the server:

* `event:start`, { filter?: string }: Start sending messages to the server based on the filter (if provided).
* `event:stop`: Stop sending messages to the server.
* `event:send`, { message: string }: Send the specified message to the Twitch chat.

### Events the server can receive from Manao:

* `event:input`, { message: string, user: string }: The server receives the message typed by the user in Twitch chat along with their username.

---

Would you like me to help you draft a specific implementation guide for a server-side listener to go along with this documentation?