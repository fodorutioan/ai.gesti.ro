import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ai.gesti.ro — Automatizare inteligentă pentru ERP'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #7c3aed 100%)',
          color: 'white',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 34, opacity: 0.92, marginBottom: 18, display: 'flex' }}>ai.gesti.ro</div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: '90%', display: 'flex', flexDirection: 'column' }}>
          <span>Automatizare operațională</span>
          <span>în WhatsApp și Telegram</span>
        </div>
        <div style={{ fontSize: 30, marginTop: 24, opacity: 0.95, display: 'flex' }}>
          Integrat cu gesti.ro • Tu aprobi. AI execută.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
