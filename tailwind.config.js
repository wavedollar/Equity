/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter Display"', '"Inter"', 'system-ui', 'sans-serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: '#FF3300',
      },
      borderRadius: {
        sm:  '8px',
        md:  '10px',
        lg:  '12px',
        xl:  '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
