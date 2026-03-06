'use client'

import { useEffect, useMemo, useState } from 'react'

type Variant = 'A' | 'B'

const EXPERIMENT_KEY = 'exp_cta_split_v1'

function resolveVariant(): Variant {
  if (typeof window === 'undefined') return 'A'

  const forced = new URLSearchParams(window.location.search).get('ab')
  if (forced === 'A' || forced === 'B') {
    localStorage.setItem(EXPERIMENT_KEY, forced)
    return forced
  }

  const stored = localStorage.getItem(EXPERIMENT_KEY)
  if (stored === 'A' || stored === 'B') return stored

  const random: Variant = Math.random() < 0.5 ? 'A' : 'B'
  localStorage.setItem(EXPERIMENT_KEY, random)
  return random
}

async function trackEvent(payload: Record<string, unknown>) {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    })
  } catch {
    // no-op
  }
}

export default function HeroCtas() {
  const [variant, setVariant] = useState<Variant>('A')

  useEffect(() => {
    const v = resolveVariant()
    setVariant(v)
    document.documentElement.setAttribute('data-exp-cta-split-v1', v)

    trackEvent({
      type: 'experiment_view',
      experiment: 'cta_split_v1',
      variant: v,
      location: 'hero',
    })
  }, [])

  const ctas = useMemo(() => {
    if (variant === 'B') {
      return {
        primary: { href: '#demo-live', label: 'Programează demo live (15 min)', id: 'demo-live' },
        secondary: { href: '/demo', label: 'Vezi demo rapid (2 min)', id: 'demo-rapid' },
      }
    }

    return {
      primary: { href: '/demo', label: 'Vezi demo rapid (2 min)', id: 'demo-rapid' },
      secondary: { href: '#demo-live', label: 'Programează demo live (15 min)', id: 'demo-live' },
    }
  }, [variant])

  const onClick = (ctaId: string) => {
    trackEvent({
      type: 'cta_click',
      experiment: 'cta_split_v1',
      variant,
      ctaId,
      location: 'hero',
    })
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-5">
        <a
          href={ctas.primary.href}
          onClick={() => onClick(ctas.primary.id)}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all text-center"
        >
          {ctas.primary.label}
        </a>
        <a
          href={ctas.secondary.href}
          onClick={() => onClick(ctas.secondary.id)}
          className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg inline-block shadow-md hover:border-gray-300 hover:bg-gray-50 transition-all text-center"
        >
          {ctas.secondary.label}
        </a>
      </div>

      <p className="text-sm text-gray-600 mb-3" data-exp-active={variant}>
        Varianta activă CTA: <strong>{variant}</strong> (A/B test în rulare)
      </p>

      <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3">
        <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">Ce vezi în demo live</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          <span>• Flux complet WhatsApp/Telegram → gesti.ro</span>
          <span>• Validare + aprobare în timp real</span>
          <span>• Setup recomandat pentru firma ta</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 rounded-full border border-green-200 bg-green-50 text-green-700">🟢 WhatsApp</span>
          <span className="px-2 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-700">🔵 Telegram</span>
        </div>
      </div>
    </>
  )
}
