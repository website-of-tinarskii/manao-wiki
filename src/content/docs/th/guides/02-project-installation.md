---
title: ติดตั้งโปรเจกต์
---

เมื่อได้ **Client ID** และ **Client Secret** แล้ว ก็เริ่มดาวน์โหลดมะนาวได้เลย!
ตอนนี้บอทยังไม่มีไฟล์ executable (.exe) เดียว ดังนั้นจริงๆแล้วท่านจะต้อง **โคลน repository ด้วยตัวเอง**  
โชคดีที่เรามี **สคริปต์ติดตั้งอัตโนมัติ** ให้ใช้กันถ้วนหน้า คู่มือนี้ใช้ได้กับ **Windows เท่านั้น**

---

### 1. ดาวน์โหลดตัวติดตั้ง

เปิด **แอป Terminal** โดยค้นหา "Terminal" ในแถบค้นหาของเมนูเริ่ม (กดปุ่ม `Windows` แล้วพิมพ์ "terminal") จากนั้นพิมพ์ `powershell` ใน terminal

ถ้าเป็น Windows ใหม่ ๆ จะมีติดเครื่องให้ ถ้ายังไม่มี แนะนำให้ดาวน์โหลดแอปนี้จาก [Microsoft Store](https://apps.microsoft.com/detail/9N0DX20HK701?hl=en-us&gl=TH&ocid=pdpshare)  
หรือกด `⊞ Win + R` แล้วพิมพ์ `powershell` จากนั้นกด **Run** หากไม่ต้องการดาวน์โหลดแอป

หลังจากเปิด terminal แล้ว ให้รันคำสั่งดังนี้:

```powershell
Invoke-WebRequest "https://raw.githubusercontent.com/tinarskii/manao/refs/heads/main/tools/windows/INSTALLER.ps1" | Invoke-Expression
```

:::note
URL นี้เป็น **ซอร์สโค้ดของ ManaoInstaller** เขียนด้วย Powershell  
คำสั่ง `Invoke-WebRequest` ใช้เพื่อดึงเนื้อหาจาก URL  
จากนั้น `Invoke-Expression` จะรันสคริปต์นั้น
:::

ก่อนรันคำสั่งควรจะเช็คที่มาของโค้ดก่อน สามารถเช็คได้ที่[นี่ๆๆๆๆ](https://raw.githubusercontent.com/tinarskii/manao/refs/heads/main/tools/windows/INSTALLER.ps1) เพื่อความปลอดภัย **อย่าไปรันสคริปต์มั่วซั่วนะ ขอร้อง**

---

### 2. ขั้นตอนการติดตั้ง

หลังจากรันสคริปต์แล้ว ระบบจะดาวน์โหลดซอฟต์แวร์ที่จำเป็นดังนี้:

- **Git**: สำหรับ version control - [เว็บไซต์ทางการ](https://git-scm.com/)
- **Bun**: JavaScript runtime - [เว็บไซต์ทางการ](https://bun.sh/)
- **Twitch CLI**: สำหรับจัดการ credentials ของ Twitch - [เว็บไซต์ทางการ](https://dev.twitch.tv/docs/cli/)

ระหว่างการติดตั้ง ก็จะมีให้ **ยอมรับข้อตกลงการใช้งาน**  
แค่พิมพ์ `y` แล้วกด **Enter** หรือคลิก **Allow** ถ้ามีหน้าต่างเด้งขึ้นมา

หาก Git ติดตั้งสำเร็จ จะมีหน้าตาดังนี้:  
![](https://github.com/user-attachments/assets/6cad454b-e78a-4042-b1cc-f88352005704)  
เลือกเวอร์ชันที่อยากได้ หรือเว้นว่างเพื่อใช้ **เวอร์ชันล่าสุด**

จากนั้นจะรันสคริปต์ติดตั้ง **Bun** และ **TwitchCLI** หากสำเร็จ จะมีหน้าตาดังนี้:  
![](https://github.com/user-attachments/assets/e72e3114-9137-49cd-af00-2e82a80bd453)

เว้นว่างแล้วกด `Enter` เพื่อดำเนินการต่อไปยังขั้นตอนการตั้งค่า
