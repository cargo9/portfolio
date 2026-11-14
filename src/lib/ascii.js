// ASCII-картинки: крутящийся тор в hero и заглушки превью проектов.

export function torus(A, B) {
  const W = 52, H = 24, K1 = 30, K2 = 5
  const out = new Array(W * H).fill(' ')
  const zb = new Array(W * H).fill(0)
  const cA = Math.cos(A), sA = Math.sin(A), cB = Math.cos(B), sB = Math.sin(B)
  const shades = '.,-~:;=!*#$@'
  for (let t = 0; t < 6.283; t += 0.07) {
    const ct = Math.cos(t), st = Math.sin(t)
    for (let p = 0; p < 6.283; p += 0.02) {
      const cp = Math.cos(p), sp = Math.sin(p)
      const cx = 2 + ct, cy = st
      const x = cx * (cB * cp + sA * sB * sp) - cy * cA * sB
      const y = cx * (sB * cp - sA * cB * sp) + cy * cA * cB
      const ooz = 1 / (K2 + cA * cx * sp + cy * sA)
      const xp = Math.floor(W / 2 + K1 * ooz * x)
      const yp = Math.floor(H / 2 - K1 * ooz * y * 0.5)
      const lum = cp * ct * sB - cA * ct * sp - sA * st + cB * (cA * st - ct * sA * sp)
      if (lum > 0 && xp >= 0 && xp < W && yp >= 0 && yp < H) {
        const i = xp + W * yp
        if (ooz > zb[i]) {
          zb[i] = ooz
          out[i] = shades[Math.min(11, Math.floor(lum * 8))]
        }
      }
    }
  }
  const rows = []
  for (let r = 0; r < H; r++) rows.push(out.slice(r * W, r * W + W).join(''))
  return rows.join('\n')
}

export const placeholders = {
  pin3d:
    '  t = 1.20 s    v = 5.9 m/s    h = 2.1 m\n\n                    ●\n               .·´     `·.\n           .·´             `·.\n       .·´                     `·.\n    ●´                             `·\n ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔\n  g = 9.81 m/s²     m = 2.0 kg     steel',
  trainer:
    '#include <vector>\n\nint twoSum(std::vector<int>& a, int t) {\n    // your code\n}\n\n[ ▶ Check ]   clang 22 → wasm\n✓ 12 / 12 tests passed   · offline',
  gym:
    ' ▐█▌▐█▌━━━━━━━━━━━━━━━━━━━━━━▐█▌▐█▌\n\n BENCH PRESS         4 × 8 @ 80 kg\n rest ━━━━━━━━━━━━━━●────────  01:12\n PR   ▮▮▮▮▮▮▮▮▮▯                92.5 kg',
  food:
    '      .-~~~~~~~~~~~~-.\n     (  ·   ·   ·   · )\n     ~~~~~~~~~~~~~~~~~~\n     ==================\n     ##################\n      `--------------´\n\n   BURGERS  ·  PIZZA  ·  DRINKS',
  sphere:
    '                  ######**\n            %%%%%%%%%%%###***++=\n        %@@@@@@@@@%%%%%####***+++==-\n      @@@@@@@@@@@@%%%%%####***+++==--:\n    %@@@@@@@@@@@%%%%%%####****+++==--::.\n   %%%@@@@@@@@%%%%%%%####****+++===--::.\n  %%%%%%%%%%%%%%%%%#####****+++===--::.. .\n ##%%%%%%%%%%%%#######****++++===--:::.....\n ##################*****++++===---:::.. ...\n **###########*******++++====---:::..  ....\n +***************++++++====---:::... ......\n  +++++++++++++++++=====----:::... .......\n   =====++==========----::::...  ........\n    -----==---------:::::.... ..........\n      ::::::::::::::.....  ...........\n        ...........   ..............\n            ....................\n                  ........',
  kv: '$ ./kv\nkv> SET user yaroslav\nOK\nkv> SET lang c++\nOK\nkv> GET user\n"yaroslav"\nkv> SAVE\nOK\nkv> _',
  life: '┌─ DAY REPLAY ───────────────────────────┐\n│        ·  ·  ·                         │\n│     ·           ·──●                   │\n│   ·                  ·                 │\n│  ·                     ·  ·  ·  ◉ home │\n│   ·                                    │\n└────────────────────────────────────────┘\n 06:00 ━━━━━━━━━━━━━━━━●─────────── 23:59\n gps ▮▮▮▮▮▮▯▯  food ▮▮▯  screen ▮▮▮▯',
  f1frame: '┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐\n│   │  │   │  │   │  │   │  │   │\n│   │  │   │  │   │  │   │  │   │\n└───┘  └───┘  └───┘  └───┘  └───┘',
  f1dots: '                                 \n  ●      ●      ●      ●      ●  \n  ●      ●      ●      ●      ●  \n                                 ',
}

export const figlet =
  '███████╗██╗   ██╗███╗   ██╗████████╗███████╗███████╗██╗   ██╗\n██╔════╝██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝██║   ██║\n███████╗██║   ██║██╔██╗ ██║   ██║   ███████╗█████╗  ██║   ██║\n╚════██║██║   ██║██║╚██╗██║   ██║   ╚════██║██╔══╝  ╚██╗ ██╔╝\n███████║╚██████╔╝██║ ╚████║   ██║   ███████║███████╗ ╚████╔╝\n╚══════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚══════╝  ╚═══╝'
