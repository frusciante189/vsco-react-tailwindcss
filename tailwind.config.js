module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        99: "calc(100vh - 76px)",
        98: "calc(100vh - 60px)",
      },
      backgroundImage: {
        video:
          "url('https://theme.zdassets.com/theme_assets/116868/4458e9e0b357295b9ce46adfa2ed7dfb481faeb1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
