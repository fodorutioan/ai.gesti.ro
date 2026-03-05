# ai.gesti.ro Design System

**Version:** 1.0  
**Based on:** gesti.ro + astralitech.com brand language  
**Updated:** 2026-03-05

---

## Typography

### Font Stack
**Primary:** System font stack (no custom fonts for performance)
- `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Scale
- **Heading 1:** 56px / 700 weight / -0.02em tracking (mobile: 40px)
- **Heading 2:** 40px / 700 weight / -0.01em tracking (mobile: 32px)
- **Heading 3:** 24px / 600 weight
- **Body:** 16px / 400 weight / 1.6 line-height
- **Small:** 14px / 500 weight
- **Tiny:** 12px / 600 weight (labels, badges)

---

## Colors

### Primary Palette
**Blue-to-Purple Gradient** (brand signature)
- Blue start: `#2563EB` (blue-600)
- Purple mid: `#9333EA` (purple-600)
- Blue end: `#3B82F6` (blue-500)

### Backgrounds
- **Page:** `#FFFFFF` (white)
- **Section alt:** `#F9FAFB` (gray-50)
- **Accent light:** `#EFF6FF` (blue-50)
- **Accent purple:** `#FAF5FF` (purple-50)

### Text
- **Primary:** `#111827` (gray-900)
- **Secondary:** `#6B7280` (gray-600)
- **Muted:** `#9CA3AF` (gray-400)
- **On dark:** `#F3F4F6` (gray-100)

### Semantic
- **Success:** `#10B981` (green-500)
- **Warning:** `#F59E0B` (amber-500)
- **Error:** `#EF4444` (red-500)
- **Info:** `#3B82F6` (blue-500)

---

## Components

### Badges
```css
padding: 8px 16px;
border-radius: 9999px; /* pill shape */
background: linear-gradient(to right, #EFF6FF, #FAF5FF); /* blue-50 to purple-50 */
border: 1px solid rgba(59, 130, 246, 0.2);
font-size: 14px;
font-weight: 600;
color: #2563EB; /* blue-600 */
```

Example: "✨ Automatizare Inteligentă"

### Buttons

#### Primary CTA
```css
background: linear-gradient(to right, #2563EB, #9333EA, #3B82F6); /* blue → purple → blue */
color: #FFFFFF;
padding: 16px 32px;
border-radius: 12px;
font-weight: 600;
box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
transition: transform 0.2s, box-shadow 0.2s;
```

Hover: `transform: translateY(-2px); box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);`

#### Secondary CTA
```css
background: #FFFFFF;
color: #2563EB;
border: 1px solid #E5E7EB;
padding: 16px 32px;
border-radius: 12px;
font-weight: 600;
```

Hover: `background: #F9FAFB; border-color: #D1D5DB;`

### Cards
```css
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(12px);
border: 1px solid rgba(229, 231, 235, 0.5);
border-radius: 24px; /* rounded-3xl */
padding: 32px;
transition: all 0.3s;
```

Hover: `transform: translateY(-4px); border-color: rgba(59, 130, 246, 0.3); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);`

### Numbered Steps (01, 02, 03)
```css
font-size: 48px;
font-weight: 900;
color: #E5E7EB; /* gray-200, background number */
opacity: 0.3;
```

### Trust Signals
Small icons + text in horizontal row:
```
⚡ Implementare în 48h  |  🇷🇴 Produs în România  |  🔒 Date în UE  |  📞 Suport în română
```

Style:
```css
font-size: 14px;
color: #6B7280; /* gray-600 */
gap: 24px;
```

Icon: `font-size: 16px;` (emoji native)

### Stats Format
**Large number + label + description**
```html
<div>
  <div class="stat-value">+60%</div>
  <div class="stat-label">Timp economisit</div>
  <div class="stat-desc">pe taskuri administrative</div>
</div>
```

Style:
```css
.stat-value { font-size: 48px; font-weight: 700; color: #2563EB; }
.stat-label { font-size: 18px; font-weight: 600; color: #111827; margin-top: 8px; }
.stat-desc { font-size: 14px; color: #6B7280; }
```

---

## Layout

### Container
- Max-width: `1280px` (7xl)
- Padding: `0 24px` (desktop), `0 16px` (mobile)

### Spacing Scale (Tailwind-aligned)
- `xs`: 8px
- `sm`: 12px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px

### Section Padding
- Desktop: `80px 0` (py-20)
- Mobile: `48px 0` (py-12)

---

## Patterns

### Hero Section
- Background: `linear-gradient(to bottom, rgba(239, 246, 255, 0.5), #FFFFFF)` (blue-50 fade to white)
- Centered text
- Badge above headline
- H1 with gradient text accent
- Subtitle (20px, gray-600)
- CTA row (primary + secondary)
- Trust signals below

### Before/After Comparison (Metoda veche → Cu ai.gesti.ro)
- Grid: 2 columns
- Left (red): `bg-red-50/60`, `border-red-100`
- Right (green): `bg-green-50/60`, `border-green-100`
- Icons: `❌` (red-500), `✅` (green-500)

### Footer
- Dark background: `#0F172A` (slate-900)
- Text: `#CBD5E1` (slate-300)
- Links hover: `#FFFFFF`
- Gradient overlay with blob effects

---

## Animations

### Hover Effects
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

Cards: `translateY(-4px)`  
Buttons: `translateY(-2px)` + shadow increase  
Icons: `scale(1.1)` + `rotate(12deg)` (sparkles)

### Gradient Animation (CTA buttons)
```css
background-size: 200% auto;
animation: gradient 3s ease infinite;

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## Icons

**Emoji-first approach** (no icon library needed):
- ✨ Automatizare / Features
- ⚡ Speed / Fast
- 🇷🇴 România
- 🔒 Security / GDPR
- 📞 Support
- 📄 Documents
- 💬 Messaging
- 🤖 AI / Automation
- ✅ Success / Done
- 👤 User / Control
- 🔍 Transparency
- 🤝 Empathy
- ⚖️ Responsibility

---

## Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Adjustments
- H1: 40px → 32px
- H2: 32px → 24px
- Section padding: 80px → 48px
- Grid columns: 3 → 1, 4 → 1
- Trust signals: wrap, smaller gap

---

## Accessibility

- **Contrast ratio:** Minimum 4.5:1 (WCAG AA)
- **Focus states:** 2px solid blue ring, 2px offset
- **Interactive elements:** Minimum 44x44px touch target
- **Alt text:** Required for all images
- **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<footer>`

---

## Brand Voice (Copy Guidelines)

### Tone
- **Professional** but not corporate
- **Clear** not jargon-heavy
- **Romanian** language (native, not translated feel)
- **Empathetic** (acknowledges fears about AI)
- **Confident** (tech works, proven)

### Anti-patterns
- ❌ "AI va înlocui toți angajații" (fear-mongering)
- ❌ "Viitorul e aici!" (Silicon Valley hype)
- ❌ Tech jargon without context
- ❌ Over-promising ("eliminăm 100% munca")

### Good Examples
- ✅ "Primul angajat virtual care nu costă un salariu"
- ✅ "Fără copy-paste. Fără uitat."
- ✅ "Tu doar aprobi plata"
- ✅ "Nu vindem utopii. Vindem soluții reale."

---

## File Structure

```
app/
├── globals.css          # Tailwind + custom design tokens
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Homepage
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── Ethics.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
public/
├── og-image.jpg         # 1200x630 Open Graph
├── favicon.ico
└── apple-touch-icon.png # 180x180
```

---

## Production Checklist

### Performance
- [ ] Images optimized (WebP, lazy loading)
- [ ] Fonts loaded efficiently (system fonts = instant)
- [ ] CSS purged (Tailwind production build)
- [ ] JS minimized
- [ ] Lighthouse score > 90

### SEO
- [ ] Meta title unique per page
- [ ] Meta description < 160 chars
- [ ] Open Graph image (1200x630)
- [ ] Canonical URLs
- [ ] Sitemap.xml
- [ ] Robots.txt

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Color contrast checked
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Alt text on all images

### Legal
- [ ] Privacy Policy (GDPR)
- [ ] Terms of Service
- [ ] Cookie consent (if tracking)

---

**Maintained by:** Heavenly Host team  
**Last updated:** 2026-03-05  
**Questions:** Review gesti.ro (live) for reference patterns
