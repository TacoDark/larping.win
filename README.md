# larping.win

The official high-performance, purple-themed static frontend for **larping.win** — a curated directory for Roblox tools and software.

Built with pure HTML, CSS, and Vanilla JavaScript. ZERO dependencies, ZERO build steps.

---

## 🚀 Quick Start (Local Development)

The site uses `fetch()` to load data dynamically. You **must** serve it over HTTP for it to work.

### Recommended: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.
4. Navigate to `http://127.0.0.1:5500/roblox.html`.

---

## 🛠️ Customization Guide

This project is designed to be easily modified. Below are all the options you can change and how to do it.

### 1. Adding or Modifying Tools (Cards)
Tools are stored in `public/data/roblox/`. To add a new one:
1. **Create a folder**: Name it lowercase (e.g., `mytool`).
2. **Add `info.json`**: Configure the basic metadata.
3. **Add `points.json`**: Bullet points shown on the card.
4. **Add `review.md`**: The full text shown when clicking "More info".
5. **Update `prices.json`**: (Root of `public/data/roblox/`) update pricing and free status.

### 2. Website Configuration & Socials
Global site settings are found in **`src/config/pages/global.js`** and **`src/components/global/navbar/navbar.html`**.
- **GitHub Link**: Updated to `https://github.com/TacoDark/larping.win`.
- **Discord Link**: Located in the `promo` section of global settings.

### 3. Page Labels & SEO
Specific page settings are in **`src/config/pages/roblox.js`**.
- **Labels**: Change `itemPlural` and `itemSingular`.
- **Search Placeholder**: Change `searchPlaceholder`.

---

## 🏷️ Reference Guide (info.json)

### Available Tags (`"tags": [...]`)
*   `freemium` / `keysystem` — Displays a yellow key icon.
*   `serverside` — Displays a green server icon.
*   `kernel` — Displays a yellow microchip icon.
*   `decompiler` — Displays a code icon.
*   `multi-instance` — Displays a multi-layer icon.
*   `raknet` — Displays a network icon.
*   `insecure` — Hides the card unless "Insecure Mode" is enabled.
*   `inviteonly` — Hides card unless "Show invite-only results" is enabled.
*   `open-source` — Displays a GitHub icon.
*   `ai` — Displays a robot icon.
*   `high-performance` — Displays a bolt icon.
*   `custom-ui` — Displays a paint brush icon.
*   `scripthub` — Displays a book icon.
*   `lite` — Displays a leaf icon.

### 🛡️ Available Badges (`"badges": [...]`)
*   `verified` — Green checkmark.
*   `trending` — Trending arrow.
*   `warning` — Yellow warning triangle.
*   `warningred` — Red high-risk warning.

### 💻 Supported Platforms (`"platforms": [...]`)
*   `windows`, `macos`, `linux`, `android`, `ios`

---

## 💜 Credits
Built for the community. Rebranded and optimized for **larping.win**.
**Official GitHub:** https://github.com/TacoDark/larping.win
**Official Discord:** https://discord.gg/ZNMPYWTAMx
