---
title: เชื่อมต่อกับอีเวนต์ภายนอก
---

Manao สามารถเชื่อมต่อกับอีเวนต์ภายนอกที่คุยกันผ่าน Socket.IO ได้ผ่านคำสั่ง
`!event` ซึ่งสามารถใช้ได้ตั้งแต่ Manao เวอร์ชัน 3.1.x เป็นต้นไป ถามว่ามีประโยชน์ยังไง?
ง่าย ๆ เลยคือ **"เว็บไซต์หรือแอปพลิเคชันอื่น ๆ สามารถรับ-ส่งข้อมูลกับ Manao ได้แบบเรียลไทม์"**

### คำสั่งพื้นฐาน

เราสามารถเชื่อมต่อกับ Socket.IO เซิร์ฟเวอร์ใด ๆ ก็ได้ผ่านคำสั่งต่อไปนี้:

```text
!event connect <URL>
```

ตัวอย่างเช่น:

```text
!event connect https://nhendle-server.fly.io/?session=RANDOM_SESSION_ID
```

เมื่อเชื่อมต่อสำเร็จ Manao จะส่งข้อความยืนยันในแชท:

```text
Event initiated
```

หากต้องการตัดการเชื่อมต่อจากเซิร์ฟเวอร์ ให้ใช้คำสั่ง:

```text
!event disconnect
```

เมื่อถอดการเชื่อมต่อสำเร็จ Manao จะส่งข้อความยืนยันในแชท:

```text
Event disconnected
```

### สำหรับผู้พัฒนา: การส่งและรับอีเวนต์

Manao ส่งและรับอีเวนต์ผ่าน Socket.IO และสามารถรองรับ **session-bound** หรือ **neutral mode** ดังนี้:

```typescript
socket.on("connect", () => {
try {
const parsed = new URL(url);
const sessionId = parsed.searchParams.get("session");

    // ถ้ามี sessionId จะเข้าห้อง session-bound
    if (sessionId) {
      socket.emit("session:join", {
        sessionId,
        role: "manao",
      });
      logger.info(`[Event] Connected in session mode: \${sessionId}`);
    } else {
      // ถ้าไม่มี sessionId จะเป็น neutral mode
      logger.info("[Event] Connected in neutral mode");
    }

    send("Event initiated!");
} catch (err) {
logger.error(`[Event] Failed to parse URL: \${err}`);
send("Error: Invalid URL provided");
}
});
```

Manao จะส่งอีเวนต์ `session:join` ให้กับเซิร์ฟเวอร์เมื่อมี Session ID เพื่อระบุว่าเป็นการเชื่อมต่อจาก Manao

### อีเวนต์ที่ Manao สามารถรับจากเซิร์ฟเวอร์
- `event:start`, { filter?: string }: เริ่มส่งข้อความไปยังเซิร์ฟเวอร์ตาม filter (ถ้ามี)
- `event:stop`: หยุดการส่งข้อความไปยังเซิร์ฟเวอร์
- `event:send`, { message: string }: ส่งข้อความที่ระบุไปยังแชทของ Twitch

### อีเวนต์ที่เซิร์ฟเวอร์สามารถรับจาก Manao
- `event:input`, { message: string, user: string }: เซิร์ฟเวอร์จะได้รับข้อความที่ผู้ใช้พิมพ์ในแชทของ Twitch พร้อมชื่อผู้ใช้
