---
title: เขียนคำสั่งแรก
---

ในระบบจัดการคำสั่งของ ManaoWeb สามารถเพิ่มคำสั่งที่สร้างขึ้นเองได้ ซึ่งอาจต้องใช้ทักษะการเขียนโปรแกรมพอสมควร แต่เราจะแนะนำในการเขียนคำสั่งแรกของ อาจต้องมีความรู้พื้นฐานเกี่ยวกับการเขียนโปรแกรมมาก่อน แต่ถ้าขี้เกียจ ก็แค่คัดลอกหน้านี้ทั้งหมดไปให้ ChatGPT ช่วยทำได้เลย

-----

### ฟังก์ชันและตัวแปรที่ใช้งานได้

วิธีการที่ ManaoBot จัดการกับคำสั่งที่ผู้ใช้สร้างขึ้นคือการรันโค้ดแบบไดนามิกภายในสภาพแวดล้อมที่ควบคุมไว้ซึ่งเรียกว่า "context" โดยเราได้เตรียมฟังก์ชันและตัวแปรที่เป็นประโยชน์ไว้ให้ใช้งานภายในโค้ด:

**ฟังก์ชันที่ใช้งานได้**

* **`say(text)`**: ส่งข้อความไปยังแชทของ Twitch
* **`getBalance(userID)`**: ดูยอดเงินคงเหลือของผู้ใช้ที่ระบุ
* **`getInput(order?)`**: ดึงข้อมูลที่ผู้ใช้พิมพ์เข้ามา (เช่น `!command bear fox dog` หากใช้ `getInput(1)` จะได้ค่า "bear") หรือจะคืนค่ามาเป็นข้อความหลังคำสั่งทั้งหมดหากไม่ระบุลำดับที่ (เช่น `!command bear fox dog` หากใช้ `getInput()` จะได้ค่า "bear fox dog") โดยลำดับจะเริ่มที่ 1
* **`addBalance(userID, amount)`**: เพิ่มเงินให้กับผู้ใช้ตามจำนวนที่ระบุ
* **`setBalance(userID, amount)`**: ตั้งค่าเงินของผู้ใช้ตามจำนวนที่ระบุ
* **`subtractBalance(userID, amount)`**: หักเงินจากผู้ใช้ตามจำนวนที่ระบุ
* **`initAccount(userID)`**: สร้างบัญชีธนาคารให้ผู้ใช้หากยังไม่มี

**ตัวแปรที่ใช้งานได้**

* **`client`**: ใช้สำหรับเข้าถึง ChatClient, ApiClient, และ Socket.IO Client, อ้างอิงจาก [ClientServices](https://github.com/tinarskii/manao/blob/main/types/index.d.ts#L41)
* **`meta`**: ชุดข้อมูลที่เป็นประโยชน์ เช่น ข้อมูลผู้ใช้, อ้างอิงจาก [CommandMeta](https://github.com/tinarskii/manao/blob/main/types/index.d.ts#L47)
* **`message`**: ข้อความทั้งหมดที่ได้รับจากแชท (เช่น `!command abc`)
* **`args`**: array ของข้อมูลที่ผู้ใช้พิมพ์เข้ามา
* **`language`**: ภาษาที่ใช้งานอยู่ (ค่าเริ่มต้นคือ en/th)

```ts
export interface ClientServices {
  chat: ChatClient;
  io: SocketIOServer;
  api: ApiClient;
}

export interface CommandMeta {
  user: string;
  channel: string;
  channelID: string;
  userID: string;
  commands: Map<string, Command>;
  lang: Language;
  currency: string;
}
```

-----

### การตอบกลับอย่างง่าย

**`!hello [name]`**: ทักทายผู้ใช้ที่เรียกใช้คำสั่งนี้ หรือทักทายตามชื่อที่ระบุ

```javascript
let name = getInput(1) || `@${meta.user}`
say(`สวัสดี ${name}!`)
```

**`!roll`**: ทอยลูกเต๋า

```javascript
let result = Math.ceil(Math.random() * 6)
say(`ได้เลข: ${result}`)
```

**`!dish`**: สุ่มรายชื่ออาหาร

```javascript
let dishes = [
"ข้าวกะเพรา",
"ผัดไทย",
"ข้าวซอย",
"ข้าวเหนียวมะม่วง"
]
let dish = dishes[Math.floor(Math.random() * dishes.length)]
say(`ได้: ${dish}!`)
```

-----

### การจัดการยอดเงิน

**`!transfer <user> <amount>`**: โอนเงินให้กับผู้ใช้ที่ระบุ (เป็นการดัดแปลงจากคำสั่งที่มีอยู่แล้ว)

```javascript
(async() => {
let targetName = getInput(1)

if (!targetName) {
  say("ข้อผิดพลาด: ไม่ได้ระบุเป้าหมาย")
  return
}

let target = await client.api.users.getUserByName(targetName)
let amount = Number(getInput(2))

if (Number.isNaN(amount)) {
  say("ข้อผิดพลาด: จำนวนเงินไม่ถูกต้อง")
  return
}

if (!target) {
  say("ข้อผิดพลาด: ไม่พบผู้ใช้เป้าหมาย")
  return
}

let userBalance = getBalance(meta.userID)
let targetBalance = getBalance(target.userID)

if (amount > userBalance) {
  say(`ข้อผิดพลาด: เงินไม่พอ ขาดอีก ${amount - userBalance} ${meta.currency}`)
  return
}

initAccount(target.id)
subtractBalance(meta.userID, amount)
addBalance(target.id, amount)

say(`โอนเงินจำนวน ${amount} ${meta.currency} จาก @${meta.user} ไปยัง @${targetName} สำเร็จแล้ว`)
})()
```

-----

### มินิเกมขั้นสูง

**`!rps <rock/paper/scissors>`**: เล่นเกมเป่ายิ้งฉุบ

```javascript
let choices = ["ค้อน", "กระดาษ", "กรรไกร"]
let userChoice = getInput(1)?.toLowerCase()

if (userChoice === "ค้อน") userChoice = "rock"
if (userChoice === "กระดาษ") userChoice = "paper"
if (userChoice === "กรรไกร") userChoice = "scissors"

let engChoices = ["rock", "paper", "scissors"]

if (!userChoice || !engChoices.includes(userChoice)) {
  say(`@${meta.user} วิธีใช้: !rps [ค้อน/กระดาษ/กรรไกร]`)
  return
}

let botChoice = engChoices[Math.floor(Math.random() * engChoices.length)]
let result
let userChoiceDisplay = userChoice
let botChoiceDisplay = botChoice

if (userChoiceDisplay === "rock") userChoiceDisplay = "ค้อน"
if (userChoiceDisplay === "paper") userChoiceDisplay = "กระดาษ"
if (userChoiceDisplay === "scissors") userChoiceDisplay = "กรรไกร"
if (botChoiceDisplay === "rock") botChoiceDisplay = "ค้อน"
if (botChoiceDisplay === "paper") botChoiceDisplay = "กระดาษ"
if (botChoiceDisplay === "scissors") botChoiceDisplay = "กรรไกร"

if (userChoice === botChoice) {
  result = "เสมอ!"
} else if (
  (userChoice === "rock" && botChoice === "scissors") ||
  (userChoice === "paper" && botChoice === "rock") ||
  (userChoice === "scissors" && botChoice === "paper")
) {
  result = "ชนะ!"
} else {
  result = "แพ้!"
}

say(`✊✋✌️ เลือก ${userChoiceDisplay}, ฉันเลือก ${botChoiceDisplay}. ${result}`)
```

-----

### การใช้งาน Twitch API

**`!followage [user]`**: ตรวจสอบระยะเวลาที่ติดตาม

```javascript
(async() => {
  let targetName = getInput(1) || meta.user
  try {
    let user = await client.api.users.getUserByName(targetName)
    if (!user) {
      say("ไม่พบผู้ใช้นี้")
      return
    }
    let follow = await client.api.channels.getChannelFollowers(meta.channelID, user.id)
    if (follow && follow.data.length > 0) {
      let diffTime = Math.abs(new Date() - follow.data[0].followDate);
      let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
      say(`@${targetName} ติดตามมาเป็นเวลา: ${diffDays} วัน`)
    } else {
      say(`@${targetName} ยังไม่ได้ติดตาม`)
    }
  } catch(e) {
    say("ไม่สามารถดึงข้อมูลการติดตามได้")
  }
})()
```