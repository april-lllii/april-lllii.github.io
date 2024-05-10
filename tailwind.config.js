module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'kite': ['"Kite One"', 'sans-serif'],
        'kiwi': ['"Kiwi Maru"', 'serif']
      },
      backgroundImage: {
        'gradient-to-b-3-5': 'linear-gradient(to bottom, #B0D7F6 60%, #F7DCDC 40%)' // Replace colors as needed
      }
    }
  },
  plugins: [],
}