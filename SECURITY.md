# Security Architecture: Algae-Plast Fuel

Because this application is a **100% static client-side site (React SPA)** with no backend API, no database, and no server-side authentication, its attack surface is minimal.

---

## 1. Zero Secrets & Zero Credentials
- No API keys, passwords, connection strings, or JWT secrets exist in this project.
- No client-side code handles or exposes sensitive credentials.

---

## 2. Static Hosting Security Best Practices
When serving the compiled static bundle (`dist/`):

1. **HTTPS Enforcement**:
   - Ensure all static assets are served strictly over TLS 1.3 / HTTPS via your CDN (Vercel, Cloudflare, Netlify).

2. **Security Headers**:
   - Configure standard static security headers:
     ```http
     X-Content-Type-Options: nosniff
     X-Frame-Options: SAMEORIGIN
     Referrer-Policy: strict-origin-when-cross-origin
     Permissions-Policy: camera=(), microphone=(), geolocation=()
     ```

3. **Content Security Policy (CSP)**:
   - Allow resources only from trusted CDNs (Google Fonts, Unsplash for imagery, Google video storage).
