module.exports = {
    darkMode: 'class',
    content: ["./public/**/*.html"],
    theme: {
      extend: {
        colors: {
          cream: '#F9F6EE',
          'brown-soft': '#A39E93',
          'brown-dark': '#615A53',
          charcoal: '#222222',
          'charcoal-light': '#333333',
          amber: '#FAB836',
          gold: '#E3A84A',
        },
        fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['"Inter"', 'sans-serif'],
        }
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  