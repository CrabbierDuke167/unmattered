# UNMATTERED

> _A minimalist cursor-survival game where your cursor is the only thing keeping you alive._

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Canvas-111111?style=for-the-badge&logo=html5&logoColor=white" alt="Canvas"/>
</p>

---

## Lore

A classified experiment went catastrophically wrong.

A mystical forbidden particle became unstable during containment and collapsed into **antimatter**, consuming everything inside the chamber. The only remaining matter is a tiny quantum cursor—you.

Trapped inside the containment vessel, your only objective is to evade the unstable particle as it grows stronger and reality begins to fracture around you.

**Don't touch the particle. Survive.**

---

## Gameplay

**Unmattered** is built around a simple premise: **movement is survival**.

The player controls a cursor trapped inside an unstable containment field while an increasingly dangerous particle attempts to consume them.

Every moment you remain alive matters.

- Move your cursor to survive.
- Avoid contact with the unstable particle.
- Survive as the threat grows.
- Adapt as the containment environment becomes increasingly unstable.
- Push your survival time as far as possible.

The game intentionally keeps its mechanics minimal, focusing on responsiveness, tension, and visual feedback.

---

## Tech Stack

| Technology             | Purpose                   |
| ---------------------- | ------------------------- |
| **HTML5**              | Structure & Canvas        |
| **CSS3**               | UI, Animations & Styling  |
| **Vanilla JavaScript** | Game Engine (ES6 Modules) |
| **HTML Canvas**        | Real-time Rendering       |

**No frameworks. No libraries. Just the browser.**

---

## Project Structure

```text
Unmattered/
├── css/
├── js/
│   ├── engine/
│   ├── objects/
│   ├── systems/
│   ├── render/
│   └── ui/
├── assets/
├── docs/
└── index.html
```

The project is designed around a modular architecture where **state**, **logic**, and **rendering** remain independent.

This separation keeps the game easier to maintain, extend, and experiment with without introducing unnecessary dependencies.

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/CrabbierDuke167/unmattered.git
cd unmattered
```

Because the project uses **ES modules**, `index.html` should be served through a local HTTP server rather than opened directly with `file://`.

For example, you can use **Live Server** in VS Code or any equivalent local HTTP server.

Once the server is running, open the provided local address in your browser.

---

## Browser Requirements

Unmattered is designed to run directly in a modern web browser.

Recommended:

- A modern Chromium-based browser
- Mozilla Firefox
- Safari
- JavaScript enabled
- HTML5 Canvas support

No installation or external runtime is required.

---

## Development Philosophy

Unmattered intentionally avoids large frameworks and unnecessary dependencies.

The goal is to keep the game:

- **Lightweight**
- **Understandable**
- **Modular**
- **Browser-native**
- **Easy to modify**
- **Independent of third-party game engines**

The codebase is structured so that individual systems can evolve without requiring the entire game to be rewritten.

---

## Lead Developer

**Diyon Daison**  
GitHub: **[@CrabbierDuke167](https://github.com/CrabbierDuke167)**

---

## Esteemed Contributor

**@[ALEX]**  
GitHub: **[@Alexxu12](https://github.com/Alexxu12)**

---

## License

**Unmattered** is **source-available** and licensed under the

**Unmattered Source-Available License © 2026 Team Unmattered**.

You may view, study, modify, and use the source for personal, educational, and other **non-commercial purposes**.

**Commercial use, monetization, resale, redistribution for commercial purposes, or commercial derivative works require prior written permission from Team Unmattered.**

This project is **not open source** and is not intended to grant the broad rights associated with open-source software licenses.

See [`LICENSE`](./LICENSE) for the full terms.

---

© 2026 Team Unmattered. All rights reserved.

> Unmattered and its original creative content are created and owned by
> Team Unmattered unless otherwise stated.

<p align="center"><i>Every frame matters. Every movement doesn't.</i></p>
