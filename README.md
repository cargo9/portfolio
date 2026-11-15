# Portfolio

My personal portfolio site: C++, systems, hardware. Dark terminal-style design with a live ASCII torus, a skills conveyor belt and project cards with video promos.

Built with **React 19 + Vite**. No UI libraries.

- **English / Russian:** English is the default. UI strings live in `src/data/strings.js`, and project texts are `{ en, ru }` pairs.
- **Dark / light theme:** dark is the default. Both the theme and the language are remembered in the browser.
- Links like `?lang=ru` or `?theme=light` open that version directly.

## Run

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the build locally
```

## Structure

```
src/
├── data/
│   ├── projects.js   project cards: text, tags, links, video
│   ├── profile.js    about text, skills on the belt
│   ├── links.js      email and socials
│   └── strings.js    UI texts in English and Russian
├── components/       Header, Hero, About, Stack, Work, ProjectCard,
│                     VideoPreview (paused card), VideoModal (full-screen player), Contact, Footer
├── lib/ascii.js      ASCII torus renderer and placeholder art
└── index.css         design tokens (colors, fonts) and all styles
public/
├── videos/           project promo videos (.mp4)
└── posters/          frames shown on paused cards
```

## Adding a project video

1. Put the video in `public/videos/` (H.264 MP4). Run it through `ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4` so it starts playing quickly.
2. Grab a poster frame: `ffmpeg -ss 4 -i public/videos/name.mp4 -frames:v 1 -q:v 3 public/posters/name.jpg`.
3. In `src/data/projects.js`, set `video`, `poster` and `duration` for the project.

Cards without a video show ASCII placeholder art. On click, the video expands from the card to a full-screen player. On phones it goes to native full screen in landscape.

## Deploy

Hosted on Vercel. Every push to `main` deploys automatically, and Vercel detects the Vite preset on its own.
