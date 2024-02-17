import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"], // Replace 'Roboto' with your desired font family
    },
    extend: {
      colors: {
        "best-black": "#070706",
        "rich-green": "#007460",
        "passion-orange": "#FF4300",
        "mint-green": "#D5F07D",
        "bright-orange": "#F7DE6F",
        
      },
    },
  },
  plugins: [],
};
export default config;
