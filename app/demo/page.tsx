export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <a href="/" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Înapoi la homepage
          </a>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🎥</span>
            <span>Demo Video</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Cum funcționează ai.gesti.ro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Urmărește demonstrația completă: de la trimiterea facturii pe WhatsApp până la pregătirea plății în gesti.ro.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 p-8 shadow-xl mb-12">
          <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center text-white p-8">
              <div className="text-7xl mb-6">🎬</div>
              <h2 className="text-3xl font-bold mb-4">Demo video în curând</h2>
              <p className="text-xl text-blue-100 mb-8">
                Înregistrăm demonstrația completă pentru lansarea din martie 2026.
              </p>
              <div className="bg-white dark:bg-slate-900/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-sm mb-4 font-semibold">Vrei să vezi demo LIVE înainte de lansare?</p>
                <a 
                  href="mailto:contact@ai.gesti.ro?subject=Demo%20Request%20-%20ai.gesti.ro" 
                  className="inline-block bg-white dark:bg-slate-900 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition"
                >
                  Cere demo personalizat →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What you'll see */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Ce vei vedea în demo:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '📱',
                title: 'WhatsApp Interface',
                desc: 'Cum trimiți o factură către agenții AI printr-un simplu mesaj WhatsApp'
              },
              {
                icon: '🤖',
                title: 'AI Processing',
                desc: 'Cum AI-ul extrage automat datele din factură (furnizor, sumă, termen, cont bancar)'
              },
              {
                icon: '📊',
                title: 'gesti.ro Integration',
                desc: 'Cum factura apare automat în ERP-ul tău, gata pentru aprobare'
              },
              {
                icon: '✅',
                title: 'Human Approval',
                desc: 'Cum aprobi plata cu un click din WhatsApp sau dashboard'
              },
              {
                icon: '🔔',
                title: 'Notificări',
                desc: 'Cum primești remindere automate pentru termene de plată'
              },
              {
                icon: '📈',
                title: 'Dashboard Analytics',
                desc: 'Rapoarte real-time: facturi procesate, plăți pending, savings timp'
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex space-x-4 p-4 bg-gray-50 dark:bg-slate-900/60 rounded-xl">
                <div className="text-4xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Case Example */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">Exemplu real (use case)</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">1️⃣</span>
              <p><strong>Luni, 09:15</strong> — Primești factură pe email de la furnizorul X (1.250 RON, termen 15 martie)</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">2️⃣</span>
              <p><strong>Luni, 09:16</strong> — Forward email-ul către WhatsApp Business ai.gesti.ro</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">3️⃣</span>
              <p><strong>Luni, 09:17</strong> — AI-ul răspunde: "Factură procesată. Furnizor: X SRL. Sumă: 1.250 RON. Termen: 15 martie. Cont bancar validat. Vrei să pregătesc plata?"</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">4️⃣</span>
              <p><strong>Luni, 09:18</strong> — Tu: "Da, pregătește plata pentru 14 martie."</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">5️⃣</span>
              <p><strong>Luni, 09:18</strong> — AI: "Done. Plată pregătită în gesti.ro, pending aprobare finală. Reminder pe 13 martie."</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">6️⃣</span>
              <p><strong>Joi, 13 martie, 10:00</strong> — Primești reminder WhatsApp: "Plată furnizor X programată mâine (14 martie). Aprobi?"</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">7️⃣</span>
              <p><strong>Joi, 13 martie, 10:01</strong> — Tu: "Aprobat."</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">✅</span>
              <p><strong>Vineri, 14 martie, 09:00</strong> — Plata procesată automat. Factură închisă. Totul documentat în gesti.ro.</p>
            </div>
          </div>
          <div className="mt-8 bg-white dark:bg-slate-900/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <p className="text-sm mb-0">
              <strong>Total timp investit de tine:</strong> ~3 minute (vs. 30-45 min manual)
              <br/>
              <strong>Total interacțiuni:</strong> 3 mesaje WhatsApp (vs. login gesti.ro, căutare furnizor, introducere date, verificare cont, programare plată)
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Convins? Înscrie-te pentru early access
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Primii 100 utilizatori primesc <strong className="text-blue-600">50% reducere primul an</strong> + onboarding personalizat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Email-ul tău" 
              className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient-shift text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition">
              Înscrie-mă →
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Nu spam. Doar update-uri despre lansare. Poți anula oricând.
          </p>
        </div>
      </div>
    </main>
  )
}
