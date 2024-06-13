/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "FondoTarjeta": "#3C3E44",
        "FondoPrincipal": "#272B33",
        "ColorTextoSecundario": "#9E9E9E",
      },

      fontFamily: {
        "Rubik": ["Rubik", "sans-serif"],
        "Dosis": ["Dosis", "sans-serif"],
      },

      width: {
        '108': '27rem', // Agrega un nuevo tamaño de ancho
      },
    },
  },
  plugins: [],
}

