/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        darkPurple: "#150E28",
        lightBlue: "#903AFF",
        violet: "#D434FE",
        pinkRed: "#FF26B9"
      },
      fontFamily: {
        montserrat: ["montserrat"],
        clashDisplay: ["clashDisplay"],
        unicaOne: ["unicaOne"],
      },
      backgroundImage: {
        'primary': "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        'primary2': "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
        'primary3': "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
        'contactBg': "url('./src/assets/images/bg/ContactPage.png')",
      },
      order: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      }
    },
  },
  plugins: [],
}

