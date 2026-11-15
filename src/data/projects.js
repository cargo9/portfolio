// Карточки раздела «Things I build».
//
// Видео-промо:
//   1. Положи ролик в public/videos/ (mp4 H.264 + AAC; без пережатия: ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4)
//   2. video: '/videos/имя.mp4', duration: '0:15'
//   3. poster: '/posters/имя.jpg' — кадр, который видно в карточке на паузе
//      (вырезать: ffmpeg -ss 4 -i public/videos/имя.mp4 -frames:v 1 -q:v 4 public/posters/имя.jpg)
// Пока video: null — показывается ASCII-заглушка из src/lib/ascii.js (ключ placeholder).
//
// source / live: null → кнопка не показывается / неактивна.
// kind и description — { en, ru }: перевод на два языка.

export const projects = [
  {
    id: 'asciify',
    num: '001',
    year: '2026',
    kind: { en: 'terminal app', ru: 'консольная программа' },
    title: 'asciify',
    description: {
      en: 'Images and 3D models in the terminal. Photos become true-color ASCII art, and .obj and .stl models spin in a software rasterizer I wrote from scratch, with a z-buffer, smooth normals and lighting. Drag to rotate, scroll to zoom.',
      ru: 'Картинки и 3D-модели в терминале. Фото превращаются в цветной ASCII-арт, а модели .obj и .stl крутятся в программном растеризаторе, который я написал с нуля: z-буфер, сглаженные нормали, освещение. Мышью вращать, колёсиком приближать.',
    },
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
    kind: { en: 'full-stack', ru: 'фулстек' },
    title: 'Life OS',
    description: {
      en: 'Scrub through any day with a single slider and replay it: GPS route, stops, steps and travel modes on a map. The backend, a REST API on Node.js with PostgreSQL, runs on an old Android phone and is reached over a private Tailscale network.',
      ru: 'Проматываешь любой день одним ползунком и смотришь его заново: маршрут по GPS, остановки, шаги и способ передвижения на карте. Бэкенд — REST API на Node.js с PostgreSQL — работает на старом Android-телефоне и доступен по закрытой сети Tailscale.',
    },
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
    kind: { en: 'desktop app', ru: 'десктоп' },
    title: 'Pin 3D',
    description: {
      en: 'A 3D physics sandbox for school mechanics: rigid bodies, liquids with buoyancy, ropes, springs and pulleys. Everything is in real units, with live graphs of speed, height and energy.',
      ru: '3D-песочница для школьной механики: твёрдые тела, жидкости с выталкивающей силой, верёвки, пружины и блоки. Всё в настоящих единицах, с живыми графиками скорости, высоты и энергии.',
    },
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
    kind: { en: 'offline PWA', ru: 'офлайн-приложение' },
    title: 'C++ Trainer',
    description: {
      en: '55 LeetCode-style C++ problems on the iPhone. A real Clang compiler, compiled to WebAssembly, builds your code and runs the tests right on the phone, with no server and no internet.',
      ru: '55 задач на C++ в стиле LeetCode прямо на iPhone. Настоящий компилятор Clang, собранный в WebAssembly, компилирует код и гоняет тесты на самом телефоне — без сервера и без интернета.',
    },
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
    kind: { en: 'web app', ru: 'веб-приложение' },
    title: 'Gym Tracking',
    description: {
      en: 'A gym workout tracker: strength sets and cardio, a rest timer, a training calendar and personal records.',
      ru: 'Трекер тренировок в зале: подходы и кардио, таймер отдыха, календарь тренировок и личные рекорды.',
    },
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
    kind: { en: 'website', ru: 'сайт' },
    title: 'Fast Food Restaurant',
    description: {
      en: 'A website for a family restaurant, with menu sections rendered from data through reusable React components.',
      ru: 'Сайт семейного ресторана: разделы меню собираются из данных через переиспользуемые React-компоненты.',
    },
    tags: ['React', 'Vite', 'JSX'],
    source: 'https://github.com/cargo9/Fast-Food-Restaurant',
    live: null,
    video: null,
    poster: null,
    placeholder: 'food',
  },
]
