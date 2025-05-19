// tailwind.config.js
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  safelist: [
    {
      pattern:
        /^(after:content-\[''\]|after:absolute|after:left-0|after:bottom-0|after:h-\[2px\]|after:bg-white|after:w-0|after:w-full|after:transition-all|after:duration-300|hover:after:w-full)$/,
    },
  ],
  theme: { extend: {} },
  plugins: [],
};
