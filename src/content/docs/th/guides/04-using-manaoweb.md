---
title: เริ่มใช้งานมะนาวเว็บ
---

หลังจากรันบอทเสร็จแล้ว สามารถเข้าใช้งาน [ManaoWeb](http://localhost:3000) ได้ที่ `http://localhost:3000`
ManaoWeb เป็นหน้าจอที่ช่วยจัดการการตั้งค่าต่าง ๆ ของบอทได้อย่างสะดวก
โดยมีฟังก์ชันหลักดังนี้

---

### Command Manager

![](https://github.com/user-attachments/assets/3630a0aa-3b8a-4f82-a0f8-dfa0520c8c98)

ในหน้านี้สามารถเปิด–ปิดคำสั่งที่ต้องการได้ รวมถึงสามารถสร้างคำสั่งใหม่เพิ่มเติมได้ตามต้องการ

---

### Soundboard Controller

![](https://github.com/user-attachments/assets/e5dcfc5f-3412-4a3e-bcfb-27d831b806ed)

หน้านี้ใช้สำหรับเล่นเสียงเอฟเฟกต์หรือเสียงที่กำหนดเอง เสียงที่เล่นจะไปปรากฏในหน้าของ Soundboard Player
สามารถเพิ่มเสียงใหม่ได้โดยใช้ลิงก์ของไฟล์เสียง

**การเพิ่มเสียงใหม่**

![](https://github.com/user-attachments/assets/12c4d73d-fc80-4354-89e3-8df151ad520e)

ขั้นตอนการเพิ่มเสียงใหม่:

1. ดาวน์โหลดไฟล์เสียงจากอินเทอร์เน็ต เช่นจาก [MyInstants](https://myinstants.com) ซึ่งมีเสียงเอฟเฟกต์ให้เลือกมากมาย
2. ย้ายไฟล์เสียงไปไว้ในโฟลเดอร์ ManaoBot แล้วนำไปใส่ในโฟลเดอร์ `server/public/sounds`
3. เปิดหน้า [Soundboard Controller](http://localhost:3000/soundboard/controller) แล้วเลื่อนลงไปด้านล่าง จะพบส่วน “Add new sound”
4. ตั้งชื่อเสียงตามต้องการ และกำหนด URL เป็น `/sounds/[ชื่อไฟล์].[นามสกุลไฟล์]`
   เช่น `/sounds/lucio-boop.mp3` หรือ `/sounds/sombra-boop.wav`
5. ทดสอบเล่นเสียงได้โดยกดปุ่ม “Open Sound Player” เพื่อเปิดหน้า Soundboard Player

---

### Soundboard Player

![](https://github.com/user-attachments/assets/b0fe8fe4-a365-4d98-826e-dbc87861e639)

หน้าสำหรับเล่นเสียงที่ส่งมาจาก Soundboard Controller
สามารถปรับระดับเสียงหรือซ่อนหน้าเว็บนี้ไว้เพื่อเพิ่มเป็น **browser source** ใน OBS ได้
อย่าลืมกดปุ่ม “Unmute” และตั้งค่าระดับเสียงก่อนใช้งาน

