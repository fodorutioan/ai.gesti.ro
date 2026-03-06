import { NextResponse } from 'next/server'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  const formData = await req.formData()
  const email = String(formData.get('email') || '').trim().toLowerCase()
  const source = String(formData.get('source') || 'unknown').trim()
  const honeypot = String(formData.get('company') || '').trim()

  if (honeypot) {
    return NextResponse.redirect(new URL('/?lead=ok#contact', req.url), 303)
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.redirect(new URL('/?lead=invalid#contact', req.url), 303)
  }

  const payload = {
    email,
    source,
    createdAt: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') || 'unknown',
  }

  const webhook = process.env.LEAD_WEBHOOK_URL

  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (error) {
      console.error('[lead] webhook error', error)
      return NextResponse.redirect(new URL('/?lead=error#contact', req.url), 303)
    }
  } else {
    console.log('[lead] received', payload)
  }

  return NextResponse.redirect(new URL('/?lead=ok#contact', req.url), 303)
}
