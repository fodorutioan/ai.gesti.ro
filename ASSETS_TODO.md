# Assets TODO — ai.gesti.ro

**Status:** MVP functional, dar lipsesc assets vizuale de brand

---

## ✅ DONE (Placeholders)

- **favicon.svg** — Simple gradient circle cu "ai" text (functional, dar generic)
- **og-image.svg** — Social share image 1200x630 (functional, dar text-only)

---

## ❌ LIPSEȘTE (Needed pentru polishing)

### 1. Product Mockups (HIGHEST PRIORITY)

**Per Selafiel UX audit:** "BIGGEST visual gap = ZERO product imagery"

**Needed:**
- **WhatsApp screenshot mockup** — conversație user → AI agent (primește factură, răspunde cu confirmare)
  - Format: PNG, 800x1200px (vertical phone mockup)
  - Locație: `public/mockups/whatsapp-demo.png`
  - Usage: Hero section sau How It Works

- **gesti.ro dashboard screenshot** — factură procesată automat, vizibil în ERP
  - Format: PNG, 1920x1080px (desktop screenshot)
  - Locație: `public/mockups/gesti-dashboard.png`
  - Usage: Benefits section sau Before/After

**Cum se creează:**
- Option A: Screenshot real din gesti.ro ERP (dacă există cont test)
- Option B: Mockup Figma/design (dacă nu există încă integrare)
- Option C: Placeholder cu text "Demo va fi disponibil la lansare"

---

### 2. Favicon (Brand Quality)

**Current:** Simple SVG gradient circle cu "ai" text

**Needed:** Favicon 32x32px + 192x192px (PNG/ICO) cu logo Astrali/ai.gesti.ro oficial

**Format:** 
- `public/favicon.ico` (32x32, multi-resolution)
- `public/icon-192.png` (192x192 pentru Android)
- `public/apple-touch-icon.png` (180x180 pentru iOS)

**Cum se creează:**
- Exportă din Figma/Adobe design-ul oficial logo Astrali
- Tool: Favicon Generator (https://realfavicongenerator.net)

---

### 3. OG Image (Social Sharing)

**Current:** Simple SVG text-only (1200x630)

**Needed:** Branded OG image cu:
- Logo Astrali oficial
- Screenshot WhatsApp mockup (dacă există)
- Headline: "Primul angajat virtual care nu costă un salariu"
- Visual mai rich (nu doar text)

**Format:** `public/og-image.jpg` (1200x630, optimizat <100KB)

**Cum se creează:**
- Design in Figma/Canva
- Include: logo, mockup, gradient background (brand colors)

---

### 4. Demo Video (Optional, but STRONG impact)

**Per Selafiel:** CTA "Vizionează demo (2 min)" → link mort

**Needed:**
- 2-min screen recording: User trimite factură WhatsApp → AI procesează → apare în gesti.ro → user aprobă plată
- Format: MP4, 1920x1080, <50MB
- Locație: Upload pe YouTube/Vimeo sau host pe Vercel
- Embed în pagină `/demo` sau modal în homepage

---

### 5. Brand Assets (Long-term)

**Optional (post-launch):**
- Illustrations custom (nu emoji generic)
- Icon set custom (replace emoji cu icons SVG)
- Testimonial photos (când există early users)
- Screenshots real dashboard ai.gesti.ro (când e built)

---

## 🔧 Implementation Notes

### Cum se integrează mockups în site:

**1. WhatsApp mockup în Hero:**
```tsx
<div className="max-w-md mx-auto mt-12">
  <img 
    src="/mockups/whatsapp-demo.png" 
    alt="WhatsApp conversation cu AI agent" 
    className="rounded-3xl shadow-2xl border-8 border-gray-900"
  />
</div>
```

**2. gesti.ro dashboard în Before/After:**
```tsx
<div className="bg-green-50/60 border border-green-100 rounded-2xl p-8">
  <img 
    src="/mockups/gesti-dashboard.png" 
    alt="Factură procesată automat în gesti.ro" 
    className="rounded-xl shadow-lg mb-4"
  />
  <p>Factură automat în ERP — zero copy-paste</p>
</div>
```

---

## 📊 Priority Ranking

**P0 (URGENT — before public launch):**
1. WhatsApp mockup (BIGGEST visual gap per Selafiel)
2. Favicon PNG/ICO (current SVG may not work all browsers)

**P1 (IMPORTANT — nice-to-have for MVP):**
3. gesti.ro dashboard screenshot
4. OG image branded (current is functional but generic)

**P2 (POLISH — post-launch):**
5. Demo video
6. Custom illustrations
7. Testimonial photos (când există early users)

---

## 🎨 Design Guidelines

**Colors (brand):**
- Blue: `#2563EB`, `#3B82F6` (primary)
- Purple: `#9333EA`, `#A855F7` (accent)
- Gray: `#F9FAFB`, `#111827` (backgrounds, text)

**Typography:**
- System fonts: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`
- Bold for headlines, regular for body

**Style:**
- Clean, modern, professional (not playful/startup-y)
- Gradients blue → purple
- Backdrop blur effects
- Rounded corners (16-24px)

---

**Creat:** 2026-03-05  
**Owner:** Mihail (coordinator)  
**Responsibility:** JJ / design team să furnizeze assets reale

**Next:** Când assets sunt ready, ping Mihail pentru integration în site.
