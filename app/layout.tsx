import type { Metadata } from 'next'
import '../styles/animations.module.css'

export const metadata: Metadata = {
  title: 'ai.gesti.ro — Automatizare Inteligentă pentru ERP',
  description: 'Procesare automată facturi prin WhatsApp. Agenți AI integrați cu gesti.ro ERP. Tu doar aprobi plata. Implementare în 48h. Produs în România.',
  keywords: [
    'automatizare erp',
    'agent AI facturare',
    'procesare automată facturi',
    'software facturare AI',
    'integrare WhatsApp ERP',
    'gesti ro integrare',
    'automatizare administrativă',
    'ERP cloud România',
    'facturare automată IMM',
    'agenți virtuali business',
    'software gestiune documente',
    'AI contabilitate',
    'digitalizare firme mici',
    'automatizare taskuri repetitive',
  ],
  openGraph: {
    title: 'Primul angajat virtual din firma ta — ai.gesti.ro',
    description: 'Automatizare operațională în WhatsApp și Telegram, integrată cu gesti.ro. Tu aprobi. AI execută.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
    locale: 'ro_RO',
    siteName: 'ai.gesti.ro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ai.gesti.ro — Agentic Business Automation',
    description: 'Automatizare operațională în WhatsApp și Telegram, integrată cu gesti.ro.',
    images: ['/twitter-image'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://ai.gesti.ro'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
            }}
          />
        )}
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
        )}
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                colors: {
                  blue: { 50: '#EFF6FF', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8' },
                  purple: { 50: '#FAF5FF', 500: '#A855F7', 600: '#9333EA', 700: '#7E22CE' },
                  gray: { 50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB', 400: '#9CA3AF', 600: '#4B5563', 900: '#111827' },
                  green: { 50: '#F0FDF4', 100: '#DCFCE7', 500: '#10B981' },
                  red: { 50: '#FEF2F2', 100: '#FEE2E2', 500: '#EF4444' },
                }
              }
            }
          }
        `}} />
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            try {
              const saved = localStorage.getItem('theme')
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
              const isDark = saved ? saved === 'dark' : prefersDark
              if (isDark) document.documentElement.classList.add('dark')
            } catch (e) {}
          })();
        `}} />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-shift {
            background-size: 200% auto;
            animation: gradient-shift 3s ease infinite;
          }

          html.dark body { background: #0b1220; color: #e5e7eb; }
          html.dark .bg-white { background-color: #0f172a !important; }
          html.dark .bg-gray-50 { background-color: #111827 !important; }
          html.dark .bg-gray-50\/70 { background-color: rgba(17,24,39,.8) !important; }
          html.dark .from-gray-50 { --tw-gradient-from: #111827 var(--tw-gradient-from-position) !important; }
          html.dark .to-white { --tw-gradient-to: #0f172a var(--tw-gradient-to-position) !important; }
          html.dark .text-gray-900 { color: #f8fafc !important; }
          html.dark .text-gray-700 { color: #e2e8f0 !important; }
          html.dark .text-gray-600 { color: #cbd5e1 !important; }
          html.dark .text-gray-500 { color: #94a3b8 !important; }
          html.dark .border-gray-200 { border-color: #334155 !important; }
          html.dark .border-gray-100 { border-color: #1e293b !important; }
          html.dark .shadow-depth-md,
          html.dark .shadow-xl,
          html.dark .shadow-2xl,
          html.dark .shadow-lg { box-shadow: 0 10px 30px rgba(0,0,0,.35) !important; }
        `}} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
