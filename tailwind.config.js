/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        boxShadow: {
        'custom-gray': '0 4px 6px rgba(243, 244, 246, 0.5)', // Shadow with color #F3F4F6
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
