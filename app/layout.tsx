import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ai.gesti.ro — Agentic Business Automation',
  description: 'Primul angajat virtual care nu costă un salariu. Automatizare inteligentă pentru ERP — de la factură la plată, printr-un simplu mesaj.',
  openGraph: {
    title: 'ai.gesti.ro — ERP meets AI',
    description: 'Sistem multi-agentic care aduce puterea gesti.ro la nivelul WhatsApp-ului. Procesează facturi, pregătește plăți, tu doar aprobi.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ai.gesti.ro — Agentic Business Automation',
    description: 'Primul angajat virtual care nu costă un salariu. De la factură la plată, printr-un simplu mesaj.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
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
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  blue: { 50: '#EFF6FF', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8' },
                  purple: { 50: '#FAF5FF', 500: '#A855F7', 600: '#9333EA', 700: '#7E22CE' },
                  gray: { 50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB', 400: '#9CA3AF', 600: '#4B5563', 900: '#111827' },
                }
              }
            }
          }
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
        `}} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
