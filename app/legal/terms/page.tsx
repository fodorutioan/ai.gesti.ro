export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <a href="/" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Înapoi la homepage
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Termeni și Condiții
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ultima actualizare: 5 martie 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-0">
              <strong>Notă:</strong> Aceștia sunt termenii temporari pentru MVP (pre-lansare). 
              Versiunea finală, revizuită de un avocat, va fi publicată înainte de lansarea oficială (martie 2026).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">1. Acceptarea Termenilor</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Prin accesarea sau utilizarea ai.gesti.ro (&#34;Serviciul&#34;, &#34;Platforma&#34;), operată de <strong>Astrali</strong> (Astralitech.com), 
              confirmi că ai citit, înțeles și accep să fii legat de acești Termeni și Condiții (&#34;Termeni&#34;).
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Dacă nu ești de acord cu aceștii Termeni, <strong>te rugăm să nu folosești Serviciul</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">2. Descrierea Serviciului</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ai.gesti.ro este un sistem multi-agentic bazat pe AI care automatizează procesarea documentelor (facturi, contracte, chitanțe) 
              prin interfață WhatsApp și se integrează cu gesti.ro ERP pentru arhivare și pregătire plăți.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Serviciul include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Procesare automată documente via WhatsApp (OCR + AI extraction)</li>
              <li>Integrare cu gesti.ro ERP (sincronizare facturi, furnizori, plăți)</li>
              <li>Notificări și remindere automate</li>
              <li>Dashboard pentru monitorizare și control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">3. Eligibilitate</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Pentru a folosi Serviciul, trebuie să:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Ai minimum 18 ani sau vârsta legală în țara ta</li>
              <li>Reprezinți o companie sau organizație cu autoritate legală de a semna contracte</li>
              <li>Deții un cont gesti.ro activ (sau creezi unul în paralel cu înscrierea)</li>
              <li>Furnizi informații corecte și complete la înregistrare</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">4. Cont Utilizator</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">4.1. Creare Cont</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Pentru a folosi Serviciul, trebuie să creezi un cont. Ești responsabil pentru:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Confidențialitatea credențialelor de autentificare (parolă, token WhatsApp)</li>
              <li>Toate activitățile realizate sub contul tău</li>
              <li>Notificarea imediată a oricărei utilizări neautorizate</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">4.2. Suspendare & Închidere Cont</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ne rezervăm dreptul de a suspenda sau închide contul tău dacă:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Încalci acești Termeni</li>
              <li>Furnizezi informații false sau înșelătoare</li>
              <li>Folosești Serviciul pentru activități ilegale</li>
              <li>Nu plătești abonamentul (la lansare)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">5. Utilizare Acceptabilă</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">5.1. Poți să:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Folosești Serviciul pentru scopuri comerciale legitime</li>
              <li>Trimiți documente reale ale companiei tale (facturi, contracte)</li>
              <li>Integrezi cu gesti.ro ERP-ul tău</li>
              <li>Exportezi datele tale oricând (GDPR portability)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">5.2. NU poți să:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Folosești Serviciul pentru fraudă, spălare bani sau alte activități ilegale</li>
              <li>Trimiți documente false sau falsificate</li>
              <li>Încerci să accesezi conturile altor utilizatori</li>
              <li>Reverse-engineer, decompile sau dezasamblezi Serviciul</li>
              <li>Supraîncarci serverele (spam, flood, DDoS)</li>
              <li>Copiezi, distribui sau vinzi accesul la Serviciu fără permisiune scrisă</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">6. Proprietate Intelectuală</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Serviciul, inclusiv design, logo, cod sursă, algoritmi AI, sunt proprietatea <strong>Astrali</strong> și sunt protejate de 
              legile dreptului de autor și proprietății intelectuale.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              <strong>Datele tale (facturi, contracte, informații companie) rămân proprietatea ta.</strong> 
              Le folosim doar pentru a furniza Serviciul, conform <a href="/legal/privacy" className="text-blue-600 hover:underline">Politicii de Confidențialitate</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">7. Prețuri & Plăți</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Notă (MVP):</strong> Serviciul este în pre-lansare. Prețurile finale vor fi anunțate la lansarea oficială (martie 2026).
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Early adopters (primii 100 utilizatori) primesc <strong>50% reducere primul an</strong>.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">7.1. Facturare</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Abonament lunar sau anual (detalii la lansare)</li>
              <li>Plata prin card bancar (Stripe) sau transfer bancar (pentru companii)</li>
              <li>Facturi emise conform legislației fiscale România</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">7.2. Rambursări</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Oferim <strong>30 de zile money-back guarantee</strong> de la prima plată. 
              Dacă nu ești mulțumit, ne contactezi și îți returnăm banii, fără întrebări.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">8. Garanții & Limitări Răspundere</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">8.1. Serviciul &#34;AS IS&#34;</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Serviciul este furnizat <strong>&#34;as is&#34; și &#34;as available&#34;</strong>. 
              Nu garantăm că va funcționa 100% fără întreruperi sau erori. AI-ul poate face greșeli — 
              <strong> de aceea ceri aprobare umană pentru plăți</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">8.2. Limitare Răspundere</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Responsabilitatea noastră maximă</strong> este limitată la suma plătită de tine pentru Serviciu în ultimele 12 luni.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              <strong>Nu răspundem pentru:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Pierderi de profit sau venituri indirecte</li>
              <li>Erori în facturi generate de AI (tu validezi înainte de plată)</li>
              <li>Downtime cauzat de furnizori terți (WhatsApp, gesti.ro, AWS)</li>
              <li>Acțiuni făcute de tine bazate pe sugestii AI (decizia finală e a ta)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">8.3. Uptime & SLA</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Țintim <strong>99% uptime</strong>. Dacă avem downtime planificat (maintenance), îți trimitem notificare cu 48h înainte.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">9. Încetare Serviciu</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">9.1. Anulare de către tine</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Poți anula oricând din dashboard. <strong>Fără penalizări.</strong> 
              Datele tale rămân disponibile 30 de zile după anulare, apoi sunt șterse (conform GDPR).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">9.2. Încetare de către noi</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Putem închide Serviciul cu <strong>90 de zile pre-aviz</strong> dacă:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Business-ul nu este viabil</li>
              <li>Schimbări legislative majore ne forțează</li>
              <li>Fuziune/achiziție Astrali</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Îți returnăm proporțional abonamentul plătit în avans + îți oferim export complet date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">10. Legislație Aplicabilă</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Aceștii Termeni sunt guvernați de <strong>legile României</strong>. 
              Orice litigiu va fi rezolvat de instanțele competente din București, România.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">11. Modificări Termeni</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ne rezervăm dreptul de a modifica acești Termeni. 
              Îți trimitem notificare email cu 30 de zile înainte pentru schimbări majore. 
              Continuarea utilizării Serviciului după modificări înseamnă acceptarea noilor Termeni.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">12. Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Întrebări despre acești Termeni?
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 mt-4">
              <li><strong>Email:</strong> <a href="mailto:contact@ai.gesti.ro" className="text-blue-600 hover:underline">contact@ai.gesti.ro</a></li>
              <li><strong>Companie:</strong> Astrali (Astralitech.com)</li>
              <li><strong>Adresă:</strong> [TBD — va fi completată la lansare]</li>
            </ul>
          </section>

          <div className="bg-gray-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 mt-12">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-0">
              <strong>Disclaimer legal:</strong> Acești Termeni și Condiții sunt un template generat AI, adaptat pentru ai.gesti.ro. 
              <strong> Înainte de lansarea oficială (martie 2026), vor fi revizuiți de un avocat specializat în dreptul contractelor și tech law.</strong> 
              Dacă ai întrebări juridice specifice, te rugăm să consulți un avocat.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
