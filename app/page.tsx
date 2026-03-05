export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 glass fixed w-full z-50 shadow-depth-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">ai.</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">gesti</span>
              <span className="text-gray-600">.ro</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#cum-functioneaza" className="text-sm font-medium text-gray-600 hover:text-gray-900">Cum funcționează</a>
            <a href="#beneficii" className="text-sm font-medium text-gray-600 hover:text-gray-900">Beneficii</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <a href="#demo-live" className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient-shift text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all inline-block">
            Cere demo live →
          </a>
        </div>
      </header>

      {/* Hero Section - IMPROVED COPY */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-mesh relative overflow-hidden fadeIn">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}} />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span>✨</span>
                <span>Autopilot pentru operațiuni</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                În 10 minute, factura ajunge din WhatsApp în gesti.ro.
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent block mt-2">
                  Tu aprobi. AI execută.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Un singur flux: primire document, verificare automată, propunere de plată.
                <strong className="text-gray-900 block mt-2">Fără copy-paste. Fără blocaje operaționale.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="/demo" className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all text-center">
                  Vezi demo (2 min)
                </a>
                <a href="#demo-live" className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg inline-block shadow-md hover:border-gray-300 hover:bg-gray-50 transition-all text-center">
                  Cere demo live
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <span>⚡ Implementare în 48h</span>
                <span>🔒 Date stocate în UE</span>
                <span>🇷🇴 Suport în română</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xl" id="demo-live">
              <p className="text-sm font-semibold text-blue-700 mb-4">Flux live (exemplu)</p>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="font-semibold text-gray-900">1) Input WhatsApp</p>
                  <p className="text-gray-600">Factura primită și citită automat.</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="font-semibold text-gray-900">2) Validare</p>
                  <p className="text-gray-600">Suma, scadența și furnizorul sunt verificate.</p>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="font-semibold text-gray-900">3) Aprobare finală</p>
                  <p className="text-gray-600">Primești rezumatul, aprobi cu un click.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '1.284', label: 'documente procesate azi' },
              { value: '312h', label: 'economisite săptămâna asta' },
              { value: '98.7%', label: 'acuratețe extracție date' },
              { value: '<10m', label: 'de la document la aprobare' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-depth-md">
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className="text-xs text-gray-600 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - IMPROVED */}
      <section id="cum-functioneaza" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>Cum funcționează</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Patru pași simpli. Zero învățare.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Procesare automată a facturilor direct din WhatsApp, integrată cu gesti.ro ERP.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: '📄', step: '01', title: 'Primești document', desc: 'Factură, contract sau chitanță — email, foto sau PDF prin WhatsApp.' },
              { emoji: '💬', step: '02', title: 'Trimiți pe WhatsApp', desc: 'Interfață naturală. Vorbești cu agenții ca și cu un coleg. Zero învățare.' },
              { emoji: '🤖', step: '03', title: 'AI procesează instant', desc: 'Citire automată date, arhivare în gesti.ro, verificare cont furnizor, pregătire plată.' },
              { emoji: '✅', step: '04', title: 'Tu doar aprobi', desc: 'Notificare WhatsApp, un click, done. Controlul rămâne al tău. AI face munca grea.' },
            ].map(({ emoji, step, title, desc }) => (
              <div key={step} className="relative group">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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
              <div key={label} className="card-subtle text-center glass-blue border-gray-200 rounded-2xl p-6 shadow-depth-md">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
                <div className="text-sm text-gray-600">{desc}</div>
              </div>
            ))}
          </div>

          {/* NEW: Before/After Comparison (Gavriil) */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Înainte vs. Cu ai.gesti.ro
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-8 shadow-depth-md fadeInUp">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-3xl">❌</div>
                  <h4 className="text-xl font-bold text-gray-900">Fără ai.gesti.ro</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Primești factură pe email → o salvezi manual</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>O deschizi în 3 aplicații diferite → copy-paste date</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Cauți factura lunea trecută → nu o găsești</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Uiți de termen → plătești penalizări</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="font-semibold">2-3 zile de la primire la plată</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Stress zilnic cu administrația</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50/60 border border-green-100 rounded-2xl p-8 shadow-depth-md fadeInUp delay-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-3xl">✅</div>
                  <h4 className="text-xl font-bold text-gray-900">Cu ai.gesti.ro</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Primești factură → forward pe WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>AI extrage automat toate datele → zero copy-paste</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Toate facturile arhivate → căutare instant</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Remindere automate → nicio penalizare</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="font-semibold">10 minute de la primire la plată pregătită</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Administrația rulează pe autopilot</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* For Who */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                emoji: '💼', 
                title: 'Executivi & Antreprenori', 
                desc: 'Ai business, nu timp pentru birocrație. Vrei să delegi taskuri administrative fără să angajezi oameni.',
                useCase: 'Procesare 50-200 facturi/lună, colaborare cu 20-30 furnizori.'
              },
              { 
                emoji: '🚀', 
                title: 'Fondatori în formare', 
                desc: '"Angajați" care nu costă salarii. Scalezi rapid fără overhead operațional. Perfect pentru prima ta firmă.',
                useCase: 'Startup cu 1-3 oameni, buget limitat, focus pe produs.'
              },
              { 
                emoji: '📊', 
                title: 'Freelanceri & Consultanți', 
                desc: 'Volume mari de facturi, puțin timp. Automatizează administrația, focus pe client și pe work-ul tău.',
                useCase: '10-50 clienți activi, facturare recurentă, colaborare cu contabil.'
              },
            ].map(({ emoji, title, desc, useCase }) => (
              <div key={title} className="card-lift glass p-8 rounded-2xl border-gray-200 shadow-xl">
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{desc}</p>
                <p className="text-sm text-gray-500 italic">Use case: {useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics / Philosophy - IMPROVED */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>Filozofia noastră</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tehnologie cu conștiință
            </h2>
            {/* IMPROVED INTRO (Gavriil) */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Știm că AI-ul ridică întrebări legitime despre viitorul muncii. <strong>Mulți oameni se tem de automatizare</strong> — și au dreptate să pună întrebări.
              <br/><br/>
              De aceea ne angajăm să fim <strong>transparenți, empatici și responsabili</strong> în tot ce facem. Nu vindem utopii. Vindem soluții reale, cu bunele intenții în inimă.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { 
                icon: '🔍', 
                title: 'Transparență radicală', 
                desc: 'Explicăm clar cum funcționează AI-ul: citește factura, extrage datele (furnizor, sumă, scadență), le verifică cu gesti.ro, pregătește plata. Fără "magie", fără ascunzișuri — știi exact ce se întâmplă cu datele tale.'
              },
              { 
                icon: '🤝', 
                title: 'Empatie autentică', 
                desc: 'Recunoaștem impactul social al automatizării. De aceea construim soluții responsabile: transparent, cu control uman, fără înlocuiri inutile. Ascultăm îngrijorările și răspundem cu acțiuni concrete.'
              },
              { 
                icon: '⚖️', 
                title: 'Responsabilitate socială', 
                desc: 'Nu înlocuim oameni — automatizăm doar taskuri repetitive (procesare facturi, arhivare, notificări). Timpul câștigat? Investește-l în clienți, strategie, creație — lucruri pe care doar tu le poți face cu adevărat bine.'
              },
              { 
                icon: '👤', 
                title: 'Control uman (întotdeauna)', 
                desc: 'Deciziile importante rămân ale tale — mereu. AI pregătește plata, dar tu o aprobi. AI sugerează acțiuni, dar tu decizi. Nicio tranzacție fără acordul tău explicit. Tehnologie care asistă, nu înlocuiește.'
              },
              { 
                icon: '📚', 
                title: 'Educație & pregătire', 
                desc: 'Nu doar vindem produs — educăm utilizatorii despre AI, automatizare, cum să colaborezi eficient cu agenți. Resurse gratuite, ghiduri, suport dedicat pentru a înțelege și stăpâni tehnologia.'
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-subtle flex space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white border-gray-200 rounded-2xl shadow-depth-md">
                <div className="text-4xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6 shadow-depth-md fadeInUp">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce NU face AI-ul</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Nu aprobă plăți în locul tău</li>
                <li>• Nu trimite bani fără confirmare explicită</li>
                <li>• Nu ia decizii juridice sau fiscale finale</li>
                <li>• Nu accesează conversațiile tale private</li>
                <li>• Nu promite 0 erori — de aceea există validare umană</li>
              </ul>
            </div>
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 shadow-depth-md fadeInUp delay-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cum verifici deciziile AI</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>1. Vezi sursa datelor extrase (factură/document)</li>
                <li>2. Primești rezumat clar: ce propune AI și de ce</li>
                <li>3. Aprobi sau respingi înainte de orice acțiune critică</li>
              </ul>
            </div>
          </div>

          {/* IMPROVED CLOSING (Gavriil) */}
          <p className="text-center text-lg text-gray-600 italic mb-8">
            Nu vindem utopii. Vindem soluții reale, construite cu <strong>responsabilitate, empatie și respect pentru oameni</strong>.
            <br/>
            Dacă ești sceptic față de AI, <strong>e OK. Vrem să vorbim cu tine.</strong> 📧{' '}
            <a href="mailto:contact@ai.gesti.ro" className="text-blue-600 hover:underline">contact@ai.gesti.ro</a>
          </p>

          {/* CTA pentru ethics section (Rafail recommendation) */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-base">
              Ai întrebări despre cum folosim AI responsabil?{' '}
              <a href="mailto:contact@ai.gesti.ro" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2">
                Vorbește cu noi →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* NEW: FAQ Section (Gavriil) */}
      <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Întrebări frecvente
            </h2>
            <p className="text-lg text-gray-600">
              Ai o întrebare? Probabil nu ești primul.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Trebuie să am deja gesti.ro ERP ca să folosesc ai.gesti.ro?',
                a: 'Da, momentan ai.gesti.ro se integrează cu gesti.ro. Dacă nu ai cont, poți crea unul în paralel cu înscrierea pentru early access.'
              },
              {
                q: 'Ce se întâmplă cu datele mele?',
                a: 'Datele sunt stocate în UE (GDPR compliant). AI-ul citește doar ce trimiți explicit pe WhatsApp. Nu accesăm alte conversații.'
              },
              {
                q: 'Pot să anulez oricând?',
                a: 'Da, fără penalizări. Cancel oricând din dashboard.'
              },
              {
                q: 'Cum funcționează prețul?',
                a: 'Pricing-ul va fi anunțat la lansare (martie 2026). Early adopters primesc 50% reducere primul an.'
              },
              {
                q: 'Ce dacă AI greșește?',
                a: 'Nimic nu se plătește fără aprobarea ta explicită. AI pregătește, tu validezi. Dacă detectăm o eroare, îți trimitem notificare să corectezi.'
              },
              {
                q: 'Cum evitați bias-ul și deciziile opace?',
                a: 'AI-ul nu ia decizii finale de business. Îți arătăm datele sursă și propunerea înainte de aprobare. Pentru acțiuni critice, controlul final rămâne uman.'
              },
            ].map(({ q, a }) => (
              <div key={q} className="card-subtle glass border-gray-200 rounded-2xl p-6 shadow-depth-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - IMPROVED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gata să-ți economisești timpul?
          </h2>
          
          {/* IMPROVED SUBHEADLINE (Gavriil) */}
          <div className="text-xl mb-8 text-blue-100 leading-relaxed">
            <p className="mb-4">Înscrie-te pentru acces anticipat. <strong className="text-white">Lansare martie 2026.</strong></p>
            <p className="mb-6">Fii printre primii 100 care testează viitorul automatizării inteligente.</p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left max-w-2xl mx-auto mb-8">
              <p className="font-semibold text-white mb-3">Ce primești cu early access:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-300 mt-0.5">✓</span>
                  <span>Acces înainte de lansarea publică</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-300 mt-0.5">✓</span>
                  <span>Onboarding personalizat (1-on-1 cu echipa)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-300 mt-0.5">✓</span>
                  <span>Preț special first adopters (50% reducere primul an)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-300 mt-0.5">✓</span>
                  <span>Influență directă asupra roadmap-ului produsului</span>
                </li>
              </ul>
            </div>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6 fadeInUp delay-300">
            <input 
              type="email" 
              placeholder="Email-ul tău" 
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium glass shadow-depth-md transition-smooth"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all min-h-[48px]">
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
            <div className="flex items-center space-x-2">
              <span>🇷🇴</span>
              <span>Echipă în România</span>
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
                <span className="text-gray-600">.ro</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Automatizare inteligentă pentru ERP-urile moderne. Dezvoltat de{' '}
                <a href="https://astralitech.com" className="text-blue-400 hover:underline">Astrali</a>, 
                compania din spatele <a href="https://gesti.ro" className="text-blue-400 hover:underline">gesti.ro</a>.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>🇷🇴</span>
                <span className="text-gray-400">Produs în România • ERP cloud România</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produse</h3>
              <ul className="space-y-3">
                <li><a href="https://gesti.ro" className="text-gray-600 hover:text-blue-500 text-sm">gesti.ro — ERP Cloud</a></li>
                <li><a href="https://ai.gesti.ro" className="text-gray-600 hover:text-blue-500 text-sm">ai.gesti.ro — Agenți AI</a></li>
                <li><a href="https://astralitech.com" className="text-gray-600 hover:text-blue-500 text-sm">Astrali — Compania mamă</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact & Legal</h3>
              <ul className="space-y-3">
                <li><a href="mailto:contact@ai.gesti.ro" className="text-gray-600 hover:text-blue-500 text-sm">📧 Email</a></li>
                <li><a href="/legal/privacy" className="text-gray-600 hover:text-blue-500 text-sm">Politica de confidențialitate</a></li>
                <li><a href="/legal/terms" className="text-gray-600 hover:text-blue-500 text-sm">Termeni și condiții</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Astrali. Toate drepturile rezervate.</p>
            <p className="mt-2">Built with ❤️ and AI by the Heavenly Host team.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
