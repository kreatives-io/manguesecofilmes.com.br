import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'freight':['"Freight Big Pro"', 'sans-serif']
      },
      colors: {
        'persian': '#da1f1f'
        
      },
    },
  },
  plugins: [],
}
export default config
