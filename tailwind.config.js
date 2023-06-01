module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'figures-bg': "url('/src/image/bg-figure.png')",
      }
    },
    screens: {
      'sm': {'min': '240px', 'max': '576px'},

      'md': {'min': '577px','max': '992px'},

      'lg': {'min': '993px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},
    }
  },
  plugins: [],
}