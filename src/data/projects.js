// Карточки раздела «Things I build».
//
// Видео-промо:
//   1. Положи ролик в public/videos/ (mp4 H.264 + AAC, 720p хватает)
//   2. video: '/videos/имя.mp4', duration: '0:15'
//   3. poster: '/posters/имя.jpg' — кадр, который видно в карточке на паузе
//      (вырезать: ffmpeg -ss 4 -i public/videos/имя.mp4 -frames:v 1 -q:v 4 public/posters/имя.jpg)
// Пока video: null — показывается ASCII-заглушка из src/lib/ascii.js (ключ placeholder).
//
// source / live: null → кнопка не показывается / неактивна.

export const projects = [
  {
    id: 'asciify',
    num: '001',
    year: '2026',
    kind: 'terminal app',
    title: 'asciify',
    description:
      'Images and 3D models in the terminal. Photos turn into true-color ASCII art; .obj and .stl models spin in a software rasterizer I wrote from scratch — z-buffer, smooth normals, lighting, mouse to rotate and zoom.',
    tags: ['C++20', 'CMake', '3D rasterizer', 'terminal'],
    source: 'https://github.com/cargo9/asciify',
    live: null,
    video: '/videos/asciify.mp4',
    poster: '/posters/asciify.jpg',
    duration: '0:15',
    placeholder: 'sphere',
  },
  {
    id: 'lifeos',
    num: '002',
    year: '2026',
    kind: 'full-stack',
    title: 'Life OS',
    description:
      'Scrub one slider through any day and replay it: GPS route, stops, steps and travel modes on a map. The backend — a REST API on Node.js with PostgreSQL — is self-hosted on an old Android phone and reached over a private Tailscale network.',
    tags: ['Node.js', 'Fastify', 'PostgreSQL', 'REST API', 'React', 'Leaflet'],
    source: 'https://github.com/cargo9/lifeos',
    live: null,
    video: '/videos/lifeos.mp4',
    poster: '/posters/lifeos.jpg',
    duration: '0:37',
    placeholder: 'life',
  },
  {
    id: 'pin3d',
    num: '003',
    year: '2026',
    kind: 'desktop app',
    title: 'Pin 3D',
    description:
      'A 3D physics sandbox for school mechanics: rigid bodies, liquids with buoyancy, ropes, springs and pulleys — all in real units, with live graphs of speed, height and energy.',
    tags: ['C++20', 'raylib', 'physics', 'CMake'],
    source: 'https://github.com/cargo9/Pin-3D',
    live: null,
    video: null,
    poster: null,
    placeholder: 'pin3d',
  },
  {
    id: 'cpp-trainer',
    num: '004',
    year: '2026',
    kind: 'offline PWA',
    title: 'C++ Trainer',
    description:
      '55 LeetCode-style C++ problems on the iPhone. A real Clang compiler, built to WebAssembly, compiles your code and runs the tests right on the phone — no server, no internet.',
    tags: ['JavaScript', 'WebAssembly', 'Clang', 'PWA'],
    source: 'https://github.com/cargo9/cpp-trainer',
    live: null,
    video: null,
    poster: null,
    placeholder: 'trainer',
  },
  {
    id: 'gym',
    num: '005',
    year: '2026',
    kind: 'web app',
    title: 'Gym Tracking',
    description:
      'A workout tracker for the gym: sets and cardio, a rest timer, a training calendar and personal records.',
    tags: ['TypeScript', 'vanilla DOM', 'localStorage', 'Vercel'],
    source: 'https://github.com/cargo9/GymTracking',
    live: 'https://gym-tracking-three.vercel.app',
    video: null,
    poster: null,
    placeholder: 'gym',
  },
  {
    id: 'fast-food',
    num: '006',
    year: '2025',
    kind: 'website',
    title: 'Fast Food Restaurant',
    description:
      'A site for a family restaurant: menu sections rendered from data through reusable React components.',
    tags: ['React', 'Vite', 'JSX'],
    source: 'https://github.com/cargo9/Fast-Food-Restaurant',
    live: null,
    video: null,
    poster: null,
    placeholder: 'food',
  },
]
