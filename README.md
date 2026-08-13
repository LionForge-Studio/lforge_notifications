# lforge_notifications

<div align="center">

<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/183397800?s=200&v=4?v=4&h=300&w=300&fit=cover" alt="LionForge Studio" width="100" height="100"/>
<br>
<br>
</div>

<div align="center">

![JavaScript Badge](https://img.shields.io/badge/JavaScript-B19111?logo=javascript&logoColor=fff&style=flat)
![CSS Badge](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff&style=flat)
![Static Badge](https://img.shields.io/badge/mission-Making_your_live_easier-blue)
![HTML Badge](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=fff&style=flat)
![Lua Badge](https://img.shields.io/badge/Lua-2C2D72?logo=lua&logoColor=fff&style=flat)
<br/>
![GitHub stars](https://img.shields.io/github/stars/LionForgeStudio/lforge_notifications)
![GitHub issues](https://img.shields.io/github/issues/LionForgeStudio/lforge_notifications)
![GitHub forks](https://img.shields.io/github/forks/LionForgeStudio/lforge_notifications)
![GitHub PRs](https://img.shields.io/github/issues-pr/LionForgeStudio/lforge_notifications)
<a href="https://discord.gg/XyHp5GSXjx" title=""><img alt="Discord Status" src="https://discordapp.com/api/guilds/1261767435074146345/widget.png"></a>

</div>

> [!WARNING]
> Any appearance similarity to other scripts is just coincidence. This script has been made from scratch.

This FiveM notification script provides fully configurable notifications for each player, offering categories like banking, info, error, warning, and success alerts. The script allows each player to customize the notifications sound volume and position to enhance the in-game experience, ensuring players receive the right information in the right place.

## 📢 Features

- Mute/unmute notification sounds.
- Change volume of notification sounds.
- Change notification position to one of our presets.
- Modern and fluid.
- Semitransparent to not intefere with the screen content.
- Customization interface.
- Totaly Open-Source
- Fluid in-out animations.

## ⚙️ Installation

Access to the <a href="https://lionforge.gitbook.io/lionforge-studio/paid-scripts/lforge-notifications">docs</a> to know how to install and set up the script.

## 📷 Showcase

![notification panel and notifications](resources/image.png)

## 🔊 Sounds

### Info

https://github.com/LionForgeStudio/lforge_notifications/blob/main/html/sounds/info.mp3?raw=true

### Success

https://github.com/LionForgeStudio/lforge_notifications/blob/main/html/sounds/success.mp3?raw=true

### Error

https://github.com/LionForgeStudio/lforge_notifications/blob/main/html/sounds/error.mp3?raw=true

### Warning

https://github.com/LionForgeStudio/lforge_notifications/blob/main/html/sounds/warning.mp3?raw=true

### Bank

https://github.com/LionForgeStudio/lforge_notifications/blob/main/html/sounds/bank.mp3?raw=true

## 🧞 Commands

|     | Command      | Action                                      |
| :-- | :----------- | :------------------------------------------ |
| ⚙️  | `/notifymenu` | Open the notification's customization menu. |

## 📡 Exports

|     | Command      | Action                                      | Arguments                                    |
| :-- | :----------- | :------------------------------------------ | :--------------------------------------------|
| ⚙️  | `NewNotification` | Send a new notification. | **message:** string -> Text of the notification <br/> **notifyType:** string? -> Type of the notification (info, success, warning, error, bank) <br/> **duration:** number? -> Time that the notification will be visible <br/> **icon:** string? -> Fontawsome icon <br/> **title:** string? -> Title of the notification |

<sup> *If the argument type has and "?" it means that is optional.</sup>

## 📄 Changelog

### 1.1.0

> -   Changed notification menu background color.

### 1.0.0

> -   Intial Release

## 🤝 Contributing

<a href="https://github.com/LionForgeStudio/lforge_notifications/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LionForgeStudio/lforge_notifications" />
</a>
