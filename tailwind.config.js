/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.{js,ts,vue,md}',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-dark': '#0056B3',
        'primary-light': '#66B2FF',
        secondary: '#6C757D',
        success: '#28A745',
        error: '#DC3545',
        warning: '#FFC107',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
