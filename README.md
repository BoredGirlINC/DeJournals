
# DeJournals

A decentralized science platform focused on empowering open-access research, transparent peer review, and global collaboration. DeJournals brings together researchers, enthusiasts, and innovators under a **Neumorphic + Tailwind** aesthetic, offering features like peer-upvoted journals, trending discussions, and a community-driven forum.

---

## Table of Contents
1. [Overview](#overview)  
2. [Key Features](#key-features)  
3. [File Structure](#file-structure)  
4. [Installation & Setup](#installation--setup)  
5. [Usage](#usage)  
6. [Navigation & Pages](#navigation--pages)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## Overview

**DeJournals** is built for researchers and science enthusiasts aiming to share, discover, and discuss cutting-edge work in a **decentralized** manner. We combine **Web3** ethos (transparent on-chain reputation) with user-friendly interfaces (neumorphic design, accessible chat features, and intuitive navigation) to create an inclusive hub for research.

---

## Key Features

- **Neumorphic UI + Tailwind**  
  A sleek interface blending modern web standards with a soft, raised design aesthetic.

- **Decentralized Peer Review**  
  Upvotes, comments, and credibility scores (XP) help surface top-quality research.

- **Browse Journals**  
  A dedicated page to **search** and **discover** new papers, apply advanced filters, and quickly find relevant studies.

- **Mindshare Analysis**  
  AI-driven overview of trending topics based on user discussions, submitted papers, and upvotes.

- **DeForums**  
  A forum-like page for community discussions, featuring a search bar for topics, a carousel of trending threads, upvote counts, and user participation metrics.

- **Global Grants & Funding (Planned)**  
  Roadmap includes seamless integration for community-driven grants and decentralized funding models.

---

## File Structure

A simplified view of the project’s main files:

```
dejournals/
├── index.html          # Home page (includes hero carousel, mindshare analysis, feature highlights)
├── browse.html         # Browse Journals page (advanced search, featured carousels, etc.)
├── deforums.html       # DeForums page (search, featured topics, discussion listings, user DeForums Score)
├── scripts/
│   └── main.js         # Primary JavaScript file, containing common logic, DB fetch calls, etc.
├── styles/             # (Optional) Could contain custom CSS or placeholders if separated from Tailwind
├── package.json        # Project metadata (scripts, dependencies)
├── package-lock.json   # Lock file for npm dependencies
└── README.md           # This file
```

> Note: File structure can vary if you’re integrating a bundler, build system, or a more complex environment.

---

## Installation & Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/YourUsername/DeJournals.git
   cd DeJournals
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```
   (If you’re using Yarn, run `yarn install`)

3. **Start a Dev Server (if applicable)**  
   - If you have a local server or use a static server package (like `serve`), do:
     ```bash
     npx serve .
     ```
   - Alternatively, open `index.html` directly in your browser (though some features may require a local server).

---

## Usage

- **Home Page** (`index.html`):  
  Displays a **carousel** of science-related images with hero words, a “Why DeJournals?” section highlighting the platform’s benefits, **Mindshare Analysis** charts, and a leaderboard of top contributors.

- **Browse Journals** (`browse.html`):  
  Allows you to **search** for journals, filter them via an **Advanced Search** (collapsible) section, and view **featured** or **latest** papers. It’s ideal for discovering new research or exploring trending categories.

- **DeForums** (`deforums.html`):  
  A discussion hub with a dedicated **search bar** for forum threads, an **add topic** button, **featured/popular** topics carousel, full listing of discussion threads (upvotes, participant count, messages), and your personal **DeForums Score** (similar to XP, but for forum contributions).

---

## Navigation & Pages

Across all pages, you’ll find a **consistent top navigation bar** featuring:
- **DeForums** button (replacing any legacy “Live Chat” references).
- **Browse Journals** link.
- Branding (e.g., DeJournals logo/text).
- Upload Research (if available on certain pages).

A **standard footer** is also consistent site-wide, providing quick links, social icons, and disclaimers.

---

## Contributing

1. **Fork** this repository and **clone** your fork locally.  
2. **Create** a feature branch (`git checkout -b feature/someFeature`).  
3. **Commit** your changes (`git commit -m "Add some feature"`).  
4. **Push** to your fork (`git push origin feature/someFeature`).  
5. **Open a Pull Request**, describing your changes in detail.

We encourage collaboration and welcome bug reports, feature requests, or general feedback to help improve DeJournals.

---

## License

This project is licensed under the [MIT License](LICENSE). You’re free to modify, distribute, and use DeJournals within the terms of this license. See the [LICENSE](LICENSE) file for more information.

---

**Explore, discuss, and share cutting-edge research—decentralized and democratized with DeJournals.** Feel free to reach out or open an issue for suggestions, improvements, or questions!