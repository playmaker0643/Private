# 🌙 Islamic Greeting Website - Netlify Deployment Guide

## Overview
This is a beautiful, respectful Muslim-themed greeting website built with **React + Vite + Tailwind CSS**. It's optimized for fast loading and perfect for Netlify hosting.

## Quick Start (5 minutes)

### 1. Install Node.js
Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)

### 2. Create Project
```bash
npm create vite@latest greeting-site -- --template react
cd greeting-site
npm install
```

### 3. Add Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Configure Tailwind
Replace `tailwind.config.js` with:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. Update CSS
Replace `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Arabic';
  src: url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
}

body {
  font-family: 'Georgia', serif;
}

.font-arabic {
  font-family: 'Amiri', serif;
  direction: rtl;
}
```

### 6. Replace Main Component
Replace `src/App.jsx` with the `greeting-website.jsx` code provided.

### 7. Update index.html
Replace `index.html` head with:
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="A respectful Islamic greeting website" />
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet">
<title>Islamic Greeting</title>
```

### 8. Test Locally
```bash
npm run dev
```
Visit `http://localhost:5173`

### 9. Build
```bash
npm run build
```

---

## Deploy to Netlify

### Option A: Direct Upload (Easiest)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Sign up (free)
4. Drag & drop the `dist` folder
5. Done! You get a live URL instantly

### Option B: GitHub Integration (Recommended)
1. Create GitHub account
2. Push your code: 
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/greeting-site.git
   git push -u origin main
   ```
3. Go to [netlify.com](https://netlify.com) → "New site from Git"
4. Connect GitHub → select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Option C: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy
```
Follow prompts to connect and deploy.

---

## File Structure
```
greeting-site/
├── src/
│   ├── App.jsx          (main component)
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── dist/               (created after build)
```

---

## Customization

### Change Colors
Edit Tailwind classes in the component:
- `from-emerald-700` → any Tailwind color
- `bg-blue-50` → any background color

### Add Your Name/Message
Find this line in the component:
```jsx
<h1 className="text-6xl md:text-7xl font-bold ...">السلام عليكم</h1>
```
Change to personalize.

### Modify Greetings/Messages
Update these arrays in the component:
```javascript
const greetings = [
  { arabic: 'السلام عليكم', english: 'Assalamu Alaikum', meaning: 'Peace be upon you' },
  // Add more...
];
```

---

## Performance Tips
✅ Vite provides ultra-fast builds  
✅ Tailwind CSS is tree-shaken automatically  
✅ React 18+ optimizes re-renders  
✅ Netlify CDN serves your site globally  

Build size: ~45KB (gzipped)

---

## Need Help?
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev
- Tailwind Docs: https://tailwindcss.com
- React Docs: https://react.dev

---

## What's Included
✨ Beautiful Islamic-themed UI  
🎨 Smooth animations & transitions  
📱 Fully responsive design  
♿ Semantic HTML for accessibility  
🚀 Lightning-fast loading  
💚 Environmentally friendly (static hosting)  

**May Allah bless your efforts! 🌙**
