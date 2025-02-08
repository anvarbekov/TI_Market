import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    daisyui: {
    themes: ["bumblebee", "dim", "dim"],
  },
  darkMode: ['class', '["dim"]'],
  plugins: [require('daisyui')],
}
export default config
