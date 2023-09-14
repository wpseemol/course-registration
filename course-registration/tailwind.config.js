/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode

    themes: [
      {
        mytheme: {
          primary: "#2F80ED",
          secondary: "#35ba8e",
          accent: "#bf4648",
          neutral: "#19161d",
          "base-100": "#F3F3F3", //body background color
          info: "#7fd3e6",
          success: "#15c16b",
          warning: "#efb034",
          error: "#f32420",
        },
      },
    ],
  },
};

