---
title: Project installation
---

Once you retrieve your application client ID and client secret, you can now download ManaoBot!
The bot doesn't have a single-file executable (.exe) for now, so you would have to clone the repository manually.
Fortunately, I've provided an automatic installer script to use! This guide is for Windows only.

---

### 1. Download the installer

Open **Terminal app** by searching for "Terminal" app in the search bar in start menu (pressing `Windows` button then type "terminal"), then type "powershell" in the terminal.

It is recommended that you download this app at [Microsoft Store](https://apps.microsoft.com/detail/9N0DX20HK701?hl=en-us&gl=TH&ocid=pdpshare). Or press `⊞ Win + R` then type `powershell` then press `run` if you don't want to download the application.

After the terminal initiated, run the following command:

```powershell
Invoke-WebRequest "https://raw.githubusercontent.com/wrong-lang/manao/refs/heads/main/tools/windows/INSTALLER.ps1" | Invoke-Expression
```

:::note
**Explanation**: The URL is the source code for the ManaoInstaller, written in powershell. The command "Invoke-WebRequest" is used to retrieve the contents from the URL. Then, "Invoke-Expression" will run the script.
:::

You can check source code of the installation script [here](https://raw.githubusercontent.com/wrong-lang/manao/refs/heads/main/tools/windows/INSTALLER.ps1) to ensure your safety. Do not execute any suspicious script from the internet!

---

### 2. Installation process

After you have run the script, you will download required software as follows:

- **Git**: For version control - [Official Website](https://git-scm.com/)
- **Bun**: JavaScript runtime - [Official Website](https://bun.sh/)
- **Twitch CLI**: Managing Twitch credentials - [Official Website](https://dev.twitch.tv/docs/cli/)

During installation, you may be asked to accept license agreements.
Simply type y and press Enter or click Allow when prompted.

If git has been installed successfully, it should display as follows:
![](https://github.com/user-attachments/assets/6cad454b-e78a-4042-b1cc-f88352005704)
Select your preferred version or leave blank for latest version.

Then, bun and TwitchCLI installation script will be run. If successful, it will display something like this

![](https://github.com/user-attachments/assets/e72e3114-9137-49cd-af00-2e82a80bd453)

Leave blank then press `Enter` to continue to setup process.