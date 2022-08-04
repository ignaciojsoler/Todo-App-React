/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        primary: '#AB54DB',
        seccondary: '#EADAF3',
        dark: '#464255',
        light: '#F3F2F7',
        gray: '#B9B9B9',
        dangerActive: '#FF5B5B',
        danger: '#FDE5E5',
        successActive: '#02A389',
        success: '#D3EBE8'
      },
      backgroundImage: {
        'desktop': "url('/src/assets/bg-desktop.jpg')",
        'mobile': "url('/src/assets/bg-mobile.png')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}