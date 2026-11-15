// «О себе» и стек. Поля вида { en, ru } переводятся, просто строки — одинаковые для обоих языков.

export const about = {
  lead: {
    en: 'I started with JavaScript in the browser. Now I write C++, flash microcontrollers and build my own tools — learning how things work',
    ru: 'Я начинал с JavaScript в браузере. Теперь пишу на C++, прошиваю микроконтроллеры и делаю свои инструменты — разбираюсь, как всё устроено,',
  },
  leadAccent: { en: 'all the way down.', ru: 'до самого дна.' },
  sub: {
    en: "Right now I'm building a 3D renderer that draws with ASCII characters, a tiny key-value database, and a home server out of an old PC I rescued from the street.",
    ru: 'Сейчас делаю 3D-рендерер, который рисует ASCII-символами, маленькую key-value базу данных и домашний сервер из старого ПК, который подобрал на улице.',
  },
  // ключи — как имена файлов в дереве, не переводятся
  tree: [
    ['based_in', { en: 'Germany', ru: 'Германия' }],
    ['focus', 'C++ · Linux · embedded'],
    ['now', { en: 'ASCII 3D engine', ru: 'ASCII 3D-движок' }],
    ['reading', 'C++ Primer Plus'],
    ['offline', { en: 'gymnastics · cycling', ru: 'гимнастика · велосипед' }],
  ],
}

export const skills = ['C++', 'CMake', 'Linux', 'Arduino', 'PostgreSQL', 'Git', 'Bash', 'raylib', 'JavaScript', 'React']

export const areas = [
  { en: 'terminal apps', ru: 'терминальные программы' },
  { en: '3D in ASCII', ru: '3D в ASCII' },
  { en: 'microcontrollers', ru: 'микроконтроллеры' },
  { en: 'soldering', ru: 'пайка' },
  { en: 'self-hosting', ru: 'свой хостинг' },
  'Arch + i3',
  { en: 'databases', ru: 'базы данных' },
  { en: 'home server', ru: 'домашний сервер' },
]
