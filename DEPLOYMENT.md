# Production Deployment Guide: Algae-Plast Fuel

This is a **100% static front-end web application** built with React, Vite, and Tailwind CSS. It requires **no server-side backend, no database, and zero environment variables**.

You can deploy the built `dist/` directory instantly to any static hosting provider.

---

## 1. Quick Deploy Options

### Option A: Vercel (Static Site)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. In Vercel, click **Add New Project** and select the repository.
3. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Leave all environment variables blank.
5. Click **Deploy**.

### Option B: Cloudflare Pages / Netlify / GitHub Pages
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node.js Version**: 18+

---

## 2. Local Production Build Test

```bash
# Install dependencies
npm install

# Generate optimized static bundle in dist/
npm run build

# Preview static files locally
npm run preview
```
