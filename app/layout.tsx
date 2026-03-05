import './globals.css'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className="antialiased">{children}</body>
    </html>
  )
}
