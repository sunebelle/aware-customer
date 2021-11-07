module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "boys-img": "url('/src/assets/img/boys.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      transitionProperty: [
        "hover",
        "focus",
        "height",
        "opacity",
        "colors",
        "scale",
      ],
    },
  },
  plugins: [
    require("tailwindcss-scrollbar"),
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
