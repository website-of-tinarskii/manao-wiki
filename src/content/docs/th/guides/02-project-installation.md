---
title: ติดตั้งโปรเจกต์
---

เมื่อได้ **Client ID** และ **Client Secret** แล้ว ก็เริ่มดาวน์โหลดมะนาวได้เลย!
ตอนนี้บอตได้มีตัวติตตั้งแบบไฟล์ .exe ให้ใช้กันง่าย ๆ แล้ว! คนใช้ Mac กับ Linux โหลดเองนะ ถือว่าเก่งแล้ว ฮรุก ๆๆ

---

### 1. ดาวน์โหลดตัวติดตั้ง

โหลดตัวติดตั้งน้องมะนาวได้ที่ลิงก์ด้านล่างนี้:
- [ManaoBot Installer for Windows](https://github.com/tinarskii/Manao/releases/download/3.0.0/ManaoBotSetup.exe)
- [ManaoBot Shell Installer Script (MacOS/Linux)](https://raw.githubusercontent.com/tinarskii/Manao/refs/heads/main/tools/linux/INSTALLER.sh)

:::danger
ถ้าไฟล์อยู่ ๆ ก็หาย ให้เปิด Windows Defender หรือแอนตี้ไวรัสที่ใช้ แล้วกดอนุญาตไฟล์นี้ในส่วนของการกักกันไฟล์ (quarantine) นะจ๊ะ
:::

สามารถตรวจสอบซอร์สโค้ดของตัวติดตั้งได้ที่กิตฮับแล้ว build เองได้เลยถ้ากลัวไวรัส (แต่ไม่มีหรอกนะ เชื่อเถอะ อิอิ)
- [installer.iss](https://github.com/tinarskii/Manao/blob/main/tools/windows/installer.iss) 
- [INSTALLER.ps1](https://github.com/tinarskii/Manao/blob/main/tools/windows/INSTALLER.ps1) 

---

### 2. ขั้นตอนการติดตั้ง

ขั้นตอนมีง่าย ๆ โหลดไฟล์เสร็จก็กดเปิดไฟล์ แค่นี้แหละ เสร็จละ
กด Next ไปเรื่อย ๆ เดี๋ยวก็เสร็จเอง ไม่ต้องอ่านหรอก ขี้เกียจ 

:::tip
โฟลเดอร์จะติดตั้งที่ `C:\Users\[ชื่อผู้ใช้]\AppData\Local\ManaoBot` \
อยากเปลี่ยนก็เปลี่ยนได้เลยในขั้นตอนการติดตั้ง
:::

ระหว่างติดตั้ง อาจจะมีหน้าต่างคำสั่งน่ากลัว ๆ โผล่ขึ้นมา
แต่ไม่ต้องกลัวเน้อ น้องไม่กัด เพราะตัวติดตั้งใช้ PowerShell ในการติดตั้งไลบรารีที่จำเป็น ตอนแรกจะซ่อนแหละแต่กลัวดีบั๊กยาก

ถ้าเสร็จแล้ว ให้ติ๊ก "Run powershell.exe" (มันติ๊กให้เองแหละ) จะได้รันสคริปต์ตั้งค่า แล้วไปหน้าต่อไปได้เลยยย