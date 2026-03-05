export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">ai.</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">gesti</span>
              <span className="text-gray-400">.ro</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cum-functioneaza" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Cum funcționează</a>
            <a href="#beneficii" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Beneficii</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient-shift text-white px-6 py-2.5 rounded-lg hover:shadow-xl transition font-medium text-sm">
            Acces anticipat →
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-white to-white relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>✨</span>
              <span>Automatizare Inteligentă</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Primul angajat virtual care{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                nu costă un salariu
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trimite factura pe WhatsApp. Agenții AI o procesează automat în <strong>gesti.ro</strong>.
              Tu doar aprobi plata. <strong className="text-gray-900">Fără copy-paste. Fără uitat.</strong>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient-shift text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all font-semibold text-lg">
                Vreau acces anticipat →
              </button>
              <button className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition font-semibold text-lg">
                Vizionează demo
              </button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            {[
              { emoji: '⚡', text: 'Implementare în 48h' },
              { emoji: '🇷🇴', text: 'Produs în România' },
              { emoji: '🔒', text: 'Date stocate în UE' },
              { emoji: '📞', text: 'Suport în română' },
            ].map(({ emoji, text }) => (
              <div key={text} className="flex items-center space-x-2">
                <span className="text-lg">{emoji}</span>
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="cum-functioneaza" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>Cum funcționează</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Patru pași simpli
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zero learning curve. Totul se întâmplă automat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: '📄', step: '01', title: 'Primești document', desc: 'Factură, contract sau chitanță — email, foto sau PDF.' },
              { emoji: '💬', step: '02', title: 'Trimiți pe WhatsApp', desc: 'Interfață naturală. Vorbești cu agenții ca și cu un coleg.' },
              { emoji: '🤖', step: '03', title: 'AI procesează instant', desc: 'Arhivare în gesti.ro, verificare date, pregătire plată.' },
              { emoji: '✅', step: '04', title: 'Tu doar aprobi', desc: 'Notificare, un click, done. Controlul rămâne al tău.' },
            ].map(({ emoji, step, title, desc }) => (
              <div key={step} className="relative group">
                {/* Backdrop blur card */}
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Large step number background */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-gray-200 opacity-30 select-none">{step}</div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{emoji}</div>
                    <div className="text-sm font-bold text-blue-600 mb-2">{step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Stats */}
      <section id="beneficii" className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>Beneficii</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rezultate reale, măsurabile
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cifre care vorbesc singure. Timpul tău înapoi, fără să pierzi controlul.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { value: '+60%', label: 'Timp economisit', desc: 'pe taskuri administrative' },
              { value: '10min', label: 'De la factură la plată', desc: 'vs. 2-3 zile manual' },
              { value: '0', label: 'Facturi pierdute', desc: 'totul arhivat automat' },
              { value: '24/7', label: 'Agenți activi', desc: 'nu uită, nu dorm' },
            ].map(({ value, label, desc }) => (
              <div key={label} className="text-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
                <div className="text-sm text-gray-600">{desc}</div>
              </div>
            ))}
          </div>

          {/* For Who */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '💼', title: 'Executivi & Antreprenori', desc: 'Ai business, nu timp pentru birocrație. Vrei să delegi fără să angajezi oameni.' },
              { emoji: '🚀', title: 'Fondatori în formare', desc: '"Angajați" care nu costă salarii. Scalezi rapid fără overhead operațional.' },
              { emoji: '📊', title: 'Freelanceri & Consultanți', desc: 'Volume mari de facturi, puțin timp. Automatizează administrația, focus pe client.' },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics / Philosophy */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>Filozofia noastră</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tehnologie cu conștiință
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Știm că AI-ul ridică întrebări legitime despre viitorul muncii. De aceea ne angajăm 
              să fim <strong>transparenți, empatici și responsabili</strong> în tot ce facem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔍', title: 'Transparență', desc: 'Explică clar cum funcționează AI-ul. Fără "magie", fără ascunzișuri. Tu știi exact ce se întâmplă cu datele tale.' },
              { icon: '🤝', title: 'Empatie', desc: 'Recunoaștem impactul social al automatizării. Ascultăm îngrijorările legitime și construim soluții responsabile.' },
              { icon: '⚖️', title: 'Responsabilitate', desc: 'Nu înlocuim oameni inutil. Ajutăm oamenii să fie mai productivi, să lucreze pe ce contează cu adevărat.' },
              { icon: '👤', title: 'Control uman', desc: 'Deciziile importante rămân ale tale. AI face munca grea (procesare, arhivare), tu menții controlul (aprobare, strategie).' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="text-4xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-600 mt-12 italic">
            Nu vindem utopii. Vindem soluții reale, cu bunele intenții în inimă.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gata să-ți economisești timpul?
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Înscrie-te pentru acces anticipat. Fii printre primii care testează viitorul automatizării inteligente. 
            Fără obligații. Fără carte de credit.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input 
              type="email" 
              placeholder="Email-ul tău" 
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium bg-white/95 backdrop-blur-sm"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition">
              Înscrie-mă →
            </button>
          </form>
          <p className="text-sm text-blue-100">
            Nu spam. Doar update-uri importante despre lansare. Poți anula oricând.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-blue-100">
            <div className="flex items-center space-x-2">
              <span>⭐</span>
              <span>Peste 100+ companii folosesc gesti.ro</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span>Criptare end-to-end</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">ai.</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">gesti</span>
                <span className="text-gray-500">.ro</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Automatizare inteligentă pentru ERP-urile moderne. Dezvoltat de{' '}
                <a href="https://astralitech.com" className="text-blue-400 hover:underline">Astrali</a>, 
                compania din spatele <a href="https://gesti.ro" className="text-blue-400 hover:underline">gesti.ro</a>.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>🇷🇴</span>
                <span className="text-gray-400">Produs în România</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produse</h3>
              <ul className="space-y-3">
                <li><a href="https://gesti.ro" className="text-gray-400 hover:text-blue-400 transition text-sm">gesti.ro — ERP Cloud</a></li>
                <li><a href="https://ai.gesti.ro" className="text-gray-400 hover:text-blue-400 transition text-sm">ai.gesti.ro — Agenți AI</a></li>
                <li><a href="https://astralitech.com" className="text-gray-400 hover:text-blue-400 transition text-sm">Astrali — Compania mamă</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact & Legal</h3>
              <ul className="space-y-3">
                <li><a href="mailto:fodorut.ionut@gmail.com" className="text-gray-400 hover:text-blue-400 transition text-sm">📧 Email</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Politica de confidențialitate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Termeni și condiții</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Astrali. Toate drepturile rezervate.</p>
            <p className="mt-2">Built with ❤️ and AI by the Heavenly Host team.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
