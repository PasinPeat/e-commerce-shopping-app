import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        'casual': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_11.jpg')",
        'formal': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_13.jpg')",
        'party': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_12.jpg')",
        'gym': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/dress%20style/image_14.jpg')"
      }
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '1024px'},
    }
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [nextui()],
}
