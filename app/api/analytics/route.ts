import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  let payload: Record<string, unknown>

  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid-json' }, { status: 400 })
  }

  const enriched = {
    ...payload,
    ts: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') || 'unknown',
    referrer: req.headers.get('referer') || 'unknown',
    ip: req.headers.get('x-forwarded-for') || 'unknown',
  }

  const webhook = process.env.ANALYTICS_WEBHOOK_URL

  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(enriched),
        signal: AbortSignal.timeout(5000),
      })
    } catch (error) {
      console.error('[analytics] webhook error', error)
    }
  }

  console.log('[analytics] event', enriched)
  return NextResponse.json({ ok: true })
}
