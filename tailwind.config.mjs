/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sky: {
          bg: '#070114',
          surface: '#110329',
          card: '#19073b',
          cardHover: '#230a52',
          magenta: '#ff007a',
          magentaHover: '#e6006e',
          purple: '#7928ca',
          purpleLight: '#9d4edd',
          yellow: '#ffcc00',
          yellowHover: '#e6b800',
          cyan: '#00f0ff',
          text: '#f8fafc',
          muted: '#94a3b8',
          border: 'rgba(255, 0, 122, 0.25)',
          borderPurple: 'rgba(121, 40, 202, 0.35)'
        }
      },
      aspectRatio: {
        'poster': '2 / 3',
        'backdrop': '16 / 9'
      },
      boxShadow: {
        'magenta-glow': '0 0 35px rgba(255, 0, 122, 0.45)',
        'purple-glow': '0 0 35px rgba(121, 40, 202, 0.5)',
        'yellow-glow': '0 0 30px rgba(255, 204, 0, 0.4)',
        'card-glow': '0 10px 30px -10px rgba(121, 40, 202, 0.3)'
      }
    },
  },
  plugins: [],
};

