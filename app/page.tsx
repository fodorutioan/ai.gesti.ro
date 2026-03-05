export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">ai.gesti.ro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">Cum funcționează</a>
            <a href="#ethics" className="text-gray-600 hover:text-gray-900 transition">Filozofia noastră</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Acces anticipat
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Primul angajat virtual<br />
            care <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">nu costă un salariu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aducem puterea <strong>gesti.ro</strong> la nivelul WhatsApp-ului. Primești o factură? Trimiți-o către agenți și ei o procesează — tu doar aprobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition font-semibold text-lg">
              Înscrie-te pentru acces anticipat
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition font-semibold text-lg">
              Vizionează demo
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Cum funcționează?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Primești document', desc: 'Email, foto sau PDF — factură, contract, chitanță.' },
              { step: '2', title: 'Trimiți către agenți', desc: 'WhatsApp, chat sau email — interfață naturală.' },
              { step: '3', title: 'AI procesează', desc: 'Arhivare automată în gesti.ro, pregătire plată.' },
              { step: '4', title: 'Tu aprobi', desc: 'Notificare instant, aprobare cu un click — Done.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Pentru cine?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '💼', 
                title: 'Executivi & Antreprenori', 
                desc: 'Ai business, nu timp pentru birocrație. Vrei să delegi fără să angajezi oameni.' 
              },
              { 
                icon: '🚀', 
                title: 'Aspirational Founders', 
                desc: 'Vrei să deschizi firmă. Ai nevoie de "angajați" care nu costă salarii.' 
              },
              { 
                icon: '📊', 
                title: 'Freelanceri & Consultanți', 
                desc: 'Volume mari de facturi, puțin timp pentru administrație.' 
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section id="ethics" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Tehnologie cu conștiință
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Știm că tehnologia agentică ridică întrebări legitime despre viitorul muncii. De aceea, ne angajăm să fim <strong>transparenți, empatici și responsabili</strong> în tot ce facem.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { title: 'Transparență', desc: 'Explică clar cum funcționează AI-ul — fără magic, fără ascunzișuri.' },
              { title: 'Empatie', desc: 'Recunoaștem impactul social al automatizării și ascultăm îngrijorările legitime.' },
              { title: 'Responsabilitate', desc: 'Nu înlocuim oameni inutil — ajutăm oamenii să fie mai productivi.' },
              { title: 'Control uman', desc: 'Deciziile importante rămân ale tale. AI face munca grea, tu menții controlul.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">✓ {title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-600 mt-8 italic">
            Nu vindem utopii. Vindem soluții reale, cu bunele intenții în inimă.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Gata să-ți economisești timpul?</h2>
          <p className="text-xl mb-8 opacity-90">
            Înscrie-te pentru acces anticipat și fii printre primii care testează viitorul automatizării inteligente.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email-ul tău" 
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition">
              Înscrie-mă
            </button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            Nu spam. Doar update-uri importante despre lansare.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">ai.gesti.ro</span>
              </div>
              <p className="text-gray-600">
                Agentic Business Automation<br />
                Dezvoltat de <a href="https://astralitech.com" className="text-blue-600 hover:underline">Astrali</a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Produse</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="https://gesti.ro" className="hover:text-blue-600 transition">gesti.ro — ERP Cloud</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">ai.gesti.ro — Agentic AI</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: <a href="mailto:fodorut.ionut@gmail.com" className="text-blue-600 hover:underline">fodorut.ionut@gmail.com</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
            © 2026 Astrali. All rights reserved. Built with ❤️ and AI.
          </div>
        </div>
      </footer>
    </div>
  )
}
