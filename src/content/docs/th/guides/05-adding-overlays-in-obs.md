---
title: เพิ่มโอเวอร์เลย์ใน OBS
---

หลังจากตั้งค่าและรัน **ManaoBot** เสร็จแล้ว ก็ถึงเวลามาเพิ่ม **overlay** สวย ๆ ลงใน OBS เพื่อให้สตรีมดูเท่ขึ้นได้เลย
คำสั่งหลายอย่างของบอทก็เชื่อมกับ overlay ด้วย เช่นคำสั่ง `!nickname` ที่ให้ผู้ชมตั้งชื่อเล่นในกล่องแชทได้โดยตรง

---

### 1. เปิด OBS หรือ Streamlabs

เปิด **OBS Studio** หรือ **Streamlabs** แล้วไปที่ซีนที่อยากเพิ่ม overlay
ถ้าอยากแยก overlay ไว้เป็นระเบียบหน่อย ก็สร้างซีนใหม่ได้เลย
จะใช้โปรแกรมอื่นอย่าง **Xsplit Broadcaster** ก็ได้เหมือนกัน

---

### 2. เพิ่ม Browser Source

1. ที่แถบ **Sources** กดปุ่ม **+**
2. เลือก **Browser**
3. ตั้งชื่อ source เช่น `Chat Overlay`, `Alert Overlay` หรือ `Music Overlay`
4. กด **OK**

---

### 3. ตั้งค่า Overlay

จะมีหน้าต่าง properties โผล่มา ให้ตั้งค่าตามนี้

* **URL:**
  ใส่ URL ของ overlay ถ้ารัน ManaoBot อยู่ในเครื่องตัวเอง ให้ใช้ลิงก์ประมาณนี้

  ```
  http://localhost:3000/overlay/chat
  ```

  หรือสำหรับ overlay อื่น ๆ

  ```
  http://localhost:3000/soundboard/player
  http://localhost:3000/overlay/music
  http://localhost:3000/overlay/feed
  ```

* **Width / Height:**
  ปรับขนาดให้พอดีกับหน้าจอที่ต้องการ
  (สำหรับ Soundboard Player จะไม่เห็นทั้งหน้าอยู่แล้ว ขนาดเลยไม่ค่อยมีผล)

* **Shutdown source when not visible:**
  แนะนำให้ **ไม่ติ๊ก** เพื่อให้ overlay ยังเชื่อมต่ออยู่แม้จะซ่อน

* **Refresh browser when scene becomes active:**
  ให้ **ติ๊กไว้** เพื่อให้ overlay โหลดใหม่อัตโนมัติเมื่อ OBS เปิดขึ้น

:::tip
ไม่ต้องติ๊ก “Control audio via OBS” สำหรับ overlay เพลงหรือ soundboard เพราะสามารถควบคุมเสียงได้จากหน้าเว็บโดยตรง (ดูได้ในหัวข้อ [ใช้ปุ่ม Interact](#5-ใช้ปุ่ม-Interact))
:::

เสร็จแล้วกด **OK**

---

### 4. จัดตำแหน่งและปรับขนาด

หลังจากเพิ่มเสร็จ จะเห็น overlay โผล่มาในหน้าพรีวิวของซีน
สามารถ:

* ลากไปวางตรงไหนก็ได้
* ปรับขนาดให้พอดีกับกล่องแชทหรือพื้นที่แจ้งเตือน
* คลิกขวา → **Transform → Fit to Screen** เพื่อให้เต็มจอ

ถ้า overlay ไม่ขึ้นทันที ลองเช็กว่าบอทรันอยู่หรือยัง แล้วคลิกขวาที่ overlay → **Refresh Browser Source**
อย่าลืมว่า URL ต้องเป็น `http` ไม่ใช่ `https` ถ้ารันอยู่ในเครื่อง

---

### 5. ใช้ปุ่ม Interact

overlay บางตัวจะต้องกดโต้ตอบก่อนถึงจะเริ่มทำงานได้ เช่น **Music Player** กับ **Soundboard Player**
สาเหตุเพราะ [นโยบาย autoplay](https://developer.chrome.com/blog/autoplay/) ของเบราว์เซอร์ที่บล็อกเสียงอัตโนมัติ

วิธีเปิดให้เล่นเสียงได้:

1. ใน OBS คลิกขวาที่ overlay (เช่น `Music Overlay`)
2. เลือก **Interact**
   จะมีหน้าต่างเบราว์เซอร์เล็ก ๆ โผล่ขึ้นมา
3. โต้ตอบกับหน้านั้น

  * สำหรับ Music Overlay: ควบคุมเพลงได้จาก YouTube iFrame ถ้าอยากซ่อน iFrame ให้คลิกที่ **การ์ดเพลง** ด้านล่าง
  * สำหรับ Soundboard Player: กด **Unmute** แล้วเลือกเสียงหรือปรับระดับเสียง จากนั้นกด “Hide” เพื่อซ่อนหน้าได้

---

### 6. ประเภทของ Overlay ที่ใช้ได้

ตอนนี้ ManaoBot รองรับ overlay หลายแบบ ได้แก่:

| Overlay            | URL                  | รายละเอียด                                                 |
|--------------------|----------------------|------------------------------------------------------------|
| Chat Overlay       | `/overlay/chat`      | แสดงข้อความแชทจาก Twitch แบบตกแต่งสวยงาม                   |
| Feed Overlay       | `/overlay/feed`      | แสดงเหตุการณ์ในช่อง เช่น การติดตามใหม่ เงินเข้าเงินออก ฯลฯ |
| Soundboard Overlay | `/soundboard/player` | เล่นเสียงจาก Soundboard Controller                         |
| Music Overlay      | `/overlay/music`     | เล่นเพลงที่ขอผ่าน YouTube                                  |

---

### 7. ถ้ามีปัญหา Overlay ไม่ขึ้น

1. ตรวจสอบว่า **ManaoBot** และ **ManaoWeb** รันอยู่ (ลองเปิด `http://localhost:3000` ในเบราว์เซอร์ดู)
2. ตรวจสอบว่า URL ใน OBS ตรงกับ overlay ที่ใช่
3. ลองรีเฟรช overlay หรือรีสตาร์ต OBS
4. ถ้ามีไฟร์วอลล์หรือแอนติไวรัส อาจต้องตรวจสอบว่าไม่ได้บล็อกการเชื่อมต่อภายในเครื่อง

---

### เคล็ดลับเล็ก ๆ

* สามารถทำหลายซีนเพื่อใช้ overlay ต่างรูปแบบกันได้
* ถ้าอยากเปลี่ยนฟอนต์ สี หรือเลย์เอาต์ ของ overlay สามารถแก้ไฟล์ CSS ได้ใน
  `ManaoBot/server/public/styles/chat.css`
* ก่อนใช้ Music Overlay หรือ Soundboard Player อย่าลืมกด **Interact** กับหน้าเว็บก่อนทุกครั้ง
