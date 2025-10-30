---
title: Writing your first custom command
---

In ManaoWeb Command Manager, you can add your new custom commands! Which may require a lot of programming, but I will guide you through writing your first command. You may need to have a little programming knowledge beforehand. But if you are lazy, copy this entire page into ChatGPT and ask it to do its job.

---

### Available Functions and Variables

The way ManaoBot handles its custom commands is by running the code dynamically inside a controlled environment which is called "context" in which I provide a handful of useful functions and variables for you to use within the code:

**Available functions**
- **say(text)**: Send message to Twitch chat.
- **getBalance(userID)**: Get specified user balance.
- **getInput(order?)**: Get user input from message (e.g. `!command bear fox dog`, getInput(1) -> returns "bear") or returns a full string if index is not specified (e.g. `!command bear fox dog`, getInput() -> returns "bear fox dog"). Starts at 1.
- **addBalance(userID, amount)**: Add specified amount of money to user.
- **setBalance(userID, amount)**: Set specified amount of money to user.
- **subtractBalance(userID, amount)**: Subtract specified amount of money to user.
- **initAccount(userID)**: Create a bank account for user if not exists.

**Available variables**
- **client**: Access to ChatClient, ApiClient, and Socket.IO Client, refer to [ClientServices](https://github.com/wrong-lang/manao/blob/main/types/index.d.ts#L41).
- **meta**: Collections of useful data, such as user data, refer to [CommandMeta](https://github.com/wrong-lang/manao/blob/main/types/index.d.ts#L47).
- **message**: The full message received from the chat (E.g. `!command abc`).
- **args**: An array of user inputs.
- **language**: Current language. (default is either en/th)

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

---

### Simple reply

**!hello [name]**: Greets user that execute this command or a specified text.
```
let name = getInput(1) || `@${meta.user}`
say(`Hello ${name}!`)
```

**!roll**: Roll a die.
```
let result = Math.ceil(Math.random() * 6)
say(`Result: ${result}`)
```

**!dish**: Return a random dish.
```
let dishes = [
"Kao Pad Krapao",
"Pad Thai",
"Khao Soi",
"Mango with Sticky Rice"
]
let dish = dishes[Math.floor(Math.random() * dishes.length)]
say(`You've got: ${dish}!`)
```

---

### Managing with Balances

**!transfer \<user\> \<amount\>**: Transfer money to a specific user. (A modification of an already existing command)
```
(async() => {
let targetName = getInput(1)

if (!targetName) {
  say("Error: Target not specified")
  return
}

let target = await client.api.users.getUserByName(targetName)
let amount = Number(getInput(2))

if (Number.isNaN(amount)) {
  say("Error: amount is not a number")
  return
}

if (!target) {
  say("Error: Target user not found")
  return
}

let userBalance = getBalance(meta.userID)
let targetBalance = getBalance(target.userID)

if (amount > userBalance) {
  say(`Error: not enough money, need more ${amount - userBalance} ${meta.currency}`)
  return
}

initAccount(target.id)
subtractBalance(meta.userID, amount)
addBalance(target.id, amount)

say(`Successfully transferred ${amount} ${meta.currency} from @${meta.user} to @${targetName}`)
})()
```

---

### Advanced Minigames

**!rps [rock/paper/scissors]**: Play a game of rock, paper, scissors
```
let choices = ["rock", "paper", "scissors"]
let userChoice = getInput(1)?.toLowerCase()

if (!userChoice || !choices.includes(userChoice)) {
  say(`@${meta.user} Usage: !rps [rock/paper/scissors]`)
  return
}

let botChoice = choices[Math.floor(Math.random() * choices.length)]
let result

if (userChoice === botChoice) {
  result = "It's a tie!"
} else if (
  (userChoice === "rock" && botChoice === "scissors") ||
  (userChoice === "paper" && botChoice === "rock") ||
  (userChoice === "scissors" && botChoice === "paper")
) {
  result = "You win!"
} else {
  result = "You lose!"
}

say(`✊✋✌️ You chose ${userChoice}, I chose ${botChoice}. ${result}`)
```

---

### Using Twitch API

**!followage [user]**: Check follow duration
```
(async() => {
  let targetName = getInput(1) || meta.user
  try {
    let user = await client.api.users.getUserByName(targetName)
    if (!user) {
      say("User not found")
      return
    }
    let follow = await client.api.channels.getChannelFollowers(meta.channelID, user.id)
    if (follow) {
      let diffTime = Math.abs(new Date() - follow.data[0].followDate);
      let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
      say(`@${targetName} has been following for: ${diffDays} days`)
    } else {
      say(`@${targetName} is not following`)
    }
  } catch(e) {
    say("Unable to fetch follow info")
  }
})()
```