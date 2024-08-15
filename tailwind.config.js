import {nextui} from "@nextui-org/theme"

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
        'hoka': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/Trail_collection_men.jpg')",
        'kailas': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/kailas.jpg')",
        'asics': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/sport_vision_blog_asics_gel_nimbus24_cover_photo.jpg')",
        'nike': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/the-best-beginner-nike-running-shoes.jpg')",
        'altra': "url('https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/running-pic/homepage-brand-choose/24F_Olympus6_Homepage_MainHero_Product-Focused_Desktop_8x3.avif')"
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
