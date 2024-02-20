/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        sm: '375px'
      },
      colors: {
        red: {
          1: 'hsl(354, 84%, 57%)'
        },
        blue: {
          1: 'hsl(206, 94%, 87%)',
          2: 'hsl(228, 100%, 84%)',
          3: 'hsl(243, 100%, 62%)',
          4: 'hsl(213, 96%, 18%)'
        },
        neutral: {
          1: 'hsl(231, 100%, 99%)',
          2: 'hsl(217, 100%, 97%)',
          3: 'hsl(229, 24%, 87%)',
          4: 'hsl(231, 11%, 63%)'
        }
      }
    }
  },
  plugins: []
};
