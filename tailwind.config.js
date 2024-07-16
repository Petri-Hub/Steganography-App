/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      colors: {
         primary: '#C6C6C6',
         secondary: '#151515',
         third: '#1D1D1D',
         fourth: '#636262',
         links: '#1C74DB'
      },
      extend: {
         backgroundImage: {
            'question-mark-pattern': 'url(../../assets/images/question-mark-pattern.png)'
         }
      },
   },
   plugins: [],
}

