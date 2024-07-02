/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./templates/**/*.html",
    "./static/src/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#A93E00',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

