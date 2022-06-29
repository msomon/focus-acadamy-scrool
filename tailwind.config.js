/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme :{
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#37CDBE",
          neutral: "#570df8",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
