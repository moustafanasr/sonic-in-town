# 🌀 Sonic In Town: Hyper-Speed Adventure <img src="https://media.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.gif" width="50px" />

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BUILD-ID/deploy-status)](https://app.netlify.com/sites/sonic-in-town/deploys)
[![GitHub license](https://img.shields.io/github/license/moustafanasr/sonic-in-town?color=blue)](https://github.com/moustafanasr/sonic-in-town/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/moustafanasr/sonic-in-town?style=social)](https://github.com/moustafanasr/sonic-in-town/stargazers)

> 👨‍💻 Built by **Moustafa Mohammed Nasr**

A blazing-fast Sonic-inspired infinite runner built using [Kaplay](https://www.kaplay.dev/) and Vite.  
Experience classic speed platforming — straight in your browser!

<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDZ5bG9mZ3R1a2FpZ3F3Z2V4Y2x0bGZ6dW5jZ2J6eWZqY2J1eGJ1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif" width="600" alt="Gameplay Preview">
</div>

---

## ✨ Features

- ⚡ **60fps gameplay** powered by Kaplay Engine
- 🌆 **Procedurally generated city** for infinite fun
- 🎮 **Smooth keyboard & mobile-friendly controls**
- 📈 **Score tracking system** (leaderboards coming soon!)
- 🔀 **Modular game architecture** for easy customization
- 📱 **Responsive across all devices**

---

## 🚀 Live Demo

👉 [Play on Netlify](https://sonic-in-town.netlify.app)

[![Demo Button](https://img.shields.io/badge/TRY_LIVE_DEMO-FF5722?style=for-the-badge&logo=netlify&logoColor=white)](https://sonic-in-town.netlify.app)

---

## 🛠 Tech Stack

<div align="center">

| Category         | Technology                                                                 |
|------------------|----------------------------------------------------------------------------|
| 🧠 Game Engine   | <img src="https://kaplay.dev/favicon.ico" width="16"> [Kaplay](https://www.kaplay.dev/) |
| ⚡ Bundler       | <img src="https://vitejs.dev/logo.svg" width="16"> [Vite](https://vitejs.dev/) |
| 💻 Language      | <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="16"> JavaScript (ES Modules) |
| 🎨 Styling       | <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="16"> HTML5 & CSS3 |
| 🌐 Hosting       | <img src="https://www.netlify.com/v3/img/components/logomark.png" width="16"> [Netlify](https://www.netlify.com) |

</div>

---

## 🎮 Controls

Game controls are configured using Kaplay’s input system:

| Action   | Keyboard Keys             | Touch Support |
|----------|---------------------------|----------------|
| 🟢 Move Left  | `←`, `A`                      | ✅ |
| 🔴 Move Right | `→`, `D`                      | ✅ |
| 🔼 Jump       | `Space`, `↑`, `W`             | ✅ |
| 🔽 Duck/Roll  | `↓`                           | ✅ |

> Touch input is enabled via `touchToMouse: true` in the Kaplay config.

Example code from `controls.js`:

```js
buttons: {
  jump: {
    keyboard: ["space", "up", "w"],
  },
  left: {
    keyboard: ["left", "a"],
  },
  right: {
    keyboard: ["right", "d"],
  },
  up: {
    keyboard: ["up", "w"],
  }
},
touchToMouse: true,
