module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],

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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
