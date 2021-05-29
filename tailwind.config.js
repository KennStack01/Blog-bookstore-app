module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['poppins medium', 'montserrat regular', 'ui-sans-serif', 'system-ui'],
       'serif': [ 'poppins medium', 'montserrat medium', 'ui-serif', 'Georgia'],
    },
    extend: {
      colors: {
        mirage: {  
          DEFAULT: '#192734',  
          '50': '#769BBD',  
          '100': '#648EB5',  
          '200': '#4B749B',  
          '300': '#3A5B79',  
          '400': '#2A4156',  
          '500': '#192734',  
          '600': '#080D12',  
          '700': '#000000',  
          '800': '#000000',  
          '900': '#000000'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
