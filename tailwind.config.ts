import type { Config } from 'tailwindcss'
const konstaConfig = require('konsta/config')

const config: Config = konstaConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'media', // or 'class'
  plugins: [],
})

export default config
