/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        iotproject: "url('./assets/project/iot.png')",
        cesca17: "url('./assets/activity/CESCa17-img.jpg')",
        cdg: "url('./assets/certificate/CDG.png')",
        SHMCER: "url('./assets/certificate/SHMCER.jpg')",
        CESCaCER: "url('./assets/certificate/CESCaCER.png')",
        LPLB: "url('./assets/activity/LPLB.png')",
        Chula:"url('https://mooc.chula.ac.th/images/favicon.ico')",
        Cafe:"url('./assets/activity/Cafe.png')"
      },
    },
  },
  plugins: [],
};
