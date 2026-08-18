# Unmattered --- Project Architecture

**HTML + CSS + VanillaJavaScript** game.

> Design philosophy: **Logic never renders. Renderers never change
> logic. State is the single source of truth.**

---

# Root Structure

```text
Unmattered/
│
├── index.html
├── css/
├── js/
├── assets/
├── docs/
└── README.md
```

The root contains only the entry page and top-level resource folders.
Everything gameplay-related lives inside `js`.

---

# css/

All visual styling is separated by responsibility.

```text
css/
├── main.css
├── reset.css
├── variables.css
├── game.css
├── ui.css
├── menus.css
├── popup.css
├── animations.css
└── responsive.css
```

### Purpose

File Responsibility

---

main.css Imports every stylesheet
reset.css Removes browser default styles
variables.css Colors, spacing, fonts, sizes
game.css Canvas and gameplay layout
ui.css Score, timer, HUD
menus.css Main menu & pause menu
popup.css Fake windows & objectives
animations.css CSS animations & transitions
responsive.css Different screen sizes

---

# js/

The JavaScript folder is divided into small modules instead of one giant
script.

```text
js/
├── main.js
├── engine/
├── objects/
├── systems/
├── render/
├── ui/
├── audio/
├── save/
├── data/
└── utils/
```

---

# engine/

The heart of the game.

```text
engine/
├── Engine.js
├── Loop.js
├── Store.js
├── Events.js
├── Mouse.js
├── Physics.js
├── Collider.js
├── Timer.js
├── RNG.js
└── Constants.js
```

### What each file does

#### Engine.js

Starts and stops the game.

Responsibilities:

- Initialize everything
- Load assets
- Reset state
- Start the game loop

#### Loop.js

Runs 60 times every second.

Typical flow:

```text
Input
 ↓
Physics
 ↓
Systems
 ↓
Collision
 ↓
Render
```

#### Store.js

The **single source of truth**.

Example:

```js
Store = {
  score: 0,
  cursor: {},
  threatBall: {},
  decoys: [],
};
```

Nothing else should keep duplicate game data.

#### Events.js

A communication hub.

Instead of:

```text
ScoreSystem → AudioManager
```

use:

```js
emit("POPUP_SUCCESS");
emit("PLAYER_DIED");
```

Every module can listen independently.

#### Mouse.js

Tracks the player's real cursor.

Responsibilities:

- Mouse X
- Mouse Y
- Movement
- Window focus

#### Physics.js

Updates movement.

- Velocity
- Direction
- Wall bouncing
- Speed calculations

#### Collider.js

Checks every collision.

Examples:

- Cursor ↔ Main Ball
- Cursor ↔ Popup button

#### Timer.js

Reusable countdowns.

Used for:

- Popup deadlines
- Decoy lifespan
- Spawn intervals

#### RNG.js

Central random number generator.

Keeps randomness consistent.

#### Constants.js

Game-wide values.

```js
BALL_RADIUS = 18;
MAX_DECOYS = 20;
```

Avoid magic numbers.

---

# objects/

Everything that physically exists in the game world.

```text
objects/
├── Cursor.js
├── ThreatBall.js
├── EchoBall.js
├── TaskPopup.js
└── Particle.js
```

### Cursor.js

Player object.

Stores only:

- x
- y

No rendering.

### ThreatBall.js

The only lethal enemy.

Contains:

- Position
- Velocity
- Radius
- Speed

### EchoBall.js

Fake balls.

Same movement as the real ball but harmless.

Additional property:

- Lifetime

### TaskPopup.js

Time-sensitive objectives.

Example:

```js
{
 title:"Close me",
 reward:150,
 timer:2
}
```

### Particle.js

Tiny visual effects.

Examples:

- Explosion
- Spark
- Flash
- Dust

---

# systems/

Game rules live here.

```text
systems/
├── SpawnSystem.js
├── DifficultySystem.js
├── ScoreSystem.js
├── TaskSystem.js
├── EchoSystem.js
├── ParticleSystem.js
├── AchievementSystem.js
└── PauseSystem.js
```

### Why systems exist

Objects contain **data**.

Systems contain **behavior**.

Example:

Object System

---

Ball Physics
Popup TaskSystem
Decoy EchoSystem

### DifficultySystem

Gradually increases challenge.

Can modify:

- Ball speed
- Spawn rate
- Popup frequency

### SpawnSystem

Creates new entities.

Examples:

- New decoy
- New popup
- Particle burst

### ScoreSystem

Calculates:

- Survival score
- Bonus score
- High score

Never draw UI here.

### PauseSystem

Freezes:

- Physics
- Timers
- Spawns

Without resetting the game.

---

# render/

Draws everything.

```text
render/
├── Canvas.js
├── Render.js
├── BallRender.js
├── PopupRender.js
├── ParticleRender.js
├── CursorRender.js
└── DebugRender.js
```

### Important rule

Renderers **read** state.

They never modify it.

Example:

```text
Store.score
      ↓
UIRender
      ↓
Screen
```

Not the opposite.

### DebugRender

Optional development overlay.

Shows:

- FPS
- Hitboxes
- Object count
- Mouse coordinates

Disable in production.

---

# ui/

DOM interface only.

```text
ui/
├── HUD.js
├── MainMenu.js
├── PauseMenu.js
├── GameOver.js
├── Settings.js
├── PopupWindow.js
└── Notification.js
```

These manipulate HTML elements, not gameplay.

Examples:

- Score label
- Restart button
- Settings modal

---

# audio/

Everything related to sound.

```text
audio/
├── AudioManager.js
├── Music.js
└── SFX.js
```

### AudioManager

Responsible for:

- Loading audio
- Volume
- Mute
- Looping
- Caching

Never play sounds directly from gameplay files.

Use:

```js
Audio.play("hit");
```

---

# save/

Persistent data.

```text
save/
├── SaveManager.js
├── LocalStorage.js
└── HighScores.js
```

Stores:

- Best score
- Total games
- Settings
- Achievements

Future cloud saves can replace LocalStorage without changing gameplay
code.

---

# data/

Pure configuration.

```text
data/
├── popupData.js
├── achievements.js
├── settings.js
└── levels.js
```

Contains no logic.

Example:

```js
export const POPUPS = [{ title: "Click OK", reward: 100 }];
```

Designers can edit this without touching engine code.

---

# utils/

Reusable helper functions.

```text
utils/
├── Vector2.js
├── Math.js
├── Clamp.js
├── Helpers.js
└── DOM.js
```

Examples:

- Distance calculation
- Clamp values
- Random helpers
- DOM shortcuts

These should remain generic enough to use anywhere.

---

# assets/

All external resources.

```text
assets/
├── audio/
│   ├── music/
│   └── sfx/
│
├── images/
│   ├── ui/
│   ├── icons/
│   └── effects/
│
├── fonts/
└── cursors/
```

Keeping assets organized prevents hundreds of files from sitting in one
folder.

---

# docs/

Project documentation.

```text
docs/
├── roadmap.md
├── changelog.md
└── mechanics.md
```

Suggested usage:

File Purpose

---

roadmap.md Planned features
changelog.md Version history
mechanics.md Gameplay rules

---

# Data Flow

```text
Mouse
   │
   ▼
Store
   │
   ├──────────────┐
   ▼              ▼
Systems        Render
   │              │
   └──────► Screen
```

The **Store** sits in the center. Every system updates it, and every
renderer reads from it.

---

# Golden Rules

1.  One responsibility per file.
2.  Store is the only source of truth.
3.  Systems modify data.
4.  Renderers only draw.
5.  Events connect independent modules.
6.  Never mix DOM logic with gameplay logic.
7.  Keep configs inside `data/`, not hardcoded.

Following this architecture makes it easy to add new enemies, power-ups,
achievements, particles, audio, and save systems without restructuring
the project later.
