export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Înapoi la homepage
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ultima actualizare: 5 martie 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-0">
              <strong>Notă:</strong> Această politică de confidențialitate este un document temporar generat pentru MVP. 
              Versiunea finală, revizuită de un avocat specializat în GDPR, va fi publicată înainte de lansarea oficială (martie 2026).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">1. Introducere</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ai.gesti.ro (&#34;noi&#34;, &#34;nostru&#34;) este un serviciu operat de <strong>Astrali</strong> (Astralitech.com). 
              Respectăm confidențialitatea datelor tale și ne angajăm să protejăm informațiile personale pe care ni le furnizezi.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Această politică explică ce date colectăm, cum le folosim, cum le protejăm și care sunt drepturile tale conform 
              <strong> Regulamentului General privind Protecția Datelor (GDPR)</strong> — legislație europeană în vigoare în România.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">2. Ce Date Colectăm</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">2.1. Date furnizate direct de tine</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Email:</strong> când te înscrii pentru acces anticipat sau newsletter</li>
              <li><strong>Nume și detalii companie:</strong> dacă completezi formularul de contact sau demo</li>
              <li><strong>Mesaje WhatsApp:</strong> când trimiți documente (facturi, contracte) către agenții AI pentru procesare</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">2.2. Date colectate automat</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Date tehnice:</strong> adresă IP, tip browser, sistem de operare, limba preferată</li>
              <li><strong>Date de utilizare:</strong> pagini vizitate, timpul petrecut pe site, sursa accesului (ex: link din email)</li>
              <li><strong>Cookies:</strong> folosim cookies pentru funcționalitate și analiză (vezi secțiunea Cookie Policy mai jos)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 mt-6">2.3. Date din integrări (când folosești produsul)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Facturi și documente:</strong> imagini, PDF-uri, text extras de AI din documentele tale</li>
              <li><strong>Date din gesti.ro:</strong> sincronizare cu contul tău ERP (furnizori, categorii, conturi bancare)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">3. Cum Folosim Datele</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Funcționalitate:</strong> pentru a procesa documentele trimise pe WhatsApp și a le arhiva în gesti.ro</li>
              <li><strong>Comunicare:</strong> pentru a trimite update-uri despre lansare, features noi, sau asistență tehnică</li>
              <li><strong>Îmbunătățire produs:</strong> analiză anonimizată pentru a optimiza experiența utilizatorilor</li>
              <li><strong>Securitate:</strong> detectare fraude, prevenire acces neautorizat, logging pentru audit</li>
              <li><strong>Conformitate legală:</strong> dacă legislația sau autoritățile ne obligă (ex: ANAF pentru facturi)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">4. Cum Protejăm Datele</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Criptare:</strong> toate datele sunt transmise prin HTTPS (SSL/TLS) și stocate criptat</li>
              <li><strong>Stocare în UE:</strong> serverele noastre sunt localizate în Uniunea Europeană (GDPR compliant)</li>
              <li><strong>Acces limitat:</strong> doar angajații autorizați au acces la date, cu autentificare two-factor</li>
              <li><strong>Backup:</strong> backup-uri regulate, stocate separat și criptat</li>
              <li><strong>Audit:</strong> logging pentru toate acțiunile administrative (cine a accesat ce și când)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">5. Partajare Date cu Terți</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>NU vindem datele tale. Niciodată.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Partajăm date doar cu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>gesti.ro:</strong> pentru sincronizare ERP (facturi → gesti.ro)</li>
              <li><strong>WhatsApp Business API:</strong> pentru comunicare (mesaje trimise/primite)</li>
              <li><strong>Furnizori AI:</strong> pentru procesare documente (OpenAI/Anthropic — cu contracte DPA GDPR-compliant)</li>
              <li><strong>Servicii analytics:</strong> Google Analytics (anonimizat), Vercel Analytics (hosting)</li>
              <li><strong>Autorități:</strong> dacă legea ne obligă (ex: cerere ANAF pentru facturi)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              <strong>Toți partenerii noștri au contracte DPA (Data Processing Agreement) GDPR-compliant.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">6. Drepturile Tale (GDPR)</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Conform GDPR, ai următoarele drepturi:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Dreptul de acces:</strong> poți cere o copie a tuturor datelor pe care le deținem despre tine</li>
              <li><strong>Dreptul de rectificare:</strong> poți corecta date incorecte sau incomplete</li>
              <li><strong>Dreptul de ștergere (&#34;right to be forgotten&#34;):</strong> poți cere ștergerea datelor tale (cu excepții legale — ex: facturi)</li>
              <li><strong>Dreptul de restricționare:</strong> poți cere să &#34;înghețăm&#34; datele tale (nu le mai procesăm, dar le păstrăm)</li>
              <li><strong>Dreptul de portabilitate:</strong> poți exporta datele tale într-un format machine-readable (JSON, CSV)</li>
              <li><strong>Dreptul de opoziție:</strong> te poți opune procesării datelor (ex: marketing)</li>
              <li><strong>Dreptul de a retrage consimțământul:</strong> dacă procesăm date pe bază de consimțământ, îl poți retrage oricând</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Pentru a exercita aceste drepturi, trimite email la:{' '}
              <a href="mailto:contact@ai.gesti.ro" className="text-blue-600 hover:underline">
                contact@ai.gesti.ro
              </a>{' '}
              cu subiectul &#34;GDPR Request&#34;. Răspundem în maxim 30 de zile.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">7. Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Folosim cookies pentru:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Funcționalitate:</strong> autentificare, preferințe limba</li>
              <li><strong>Analytics:</strong> Google Analytics (anonimizat) pentru a înțelege cum folosești site-ul</li>
              <li><strong>Marketing:</strong> tracking pentru ads (doar cu consimțământul tău explicit)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Poți refuza cookies din browser sau prin banner-ul de consimțământ. 
              <strong> Refuzul cookie-urilor de marketing nu afectează funcționalitatea site-ului.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">8. Retenție Date</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Date marketing (email newsletter):</strong> până când te dezabonezi sau ceri ștergerea</li>
              <li><strong>Date facturi:</strong> minimum 10 ani (legislație fiscală România — Cod Fiscal art. 25)</li>
              <li><strong>Logs tehnice:</strong> 90 de zile (securitate + debugging)</li>
              <li><strong>Date inactive:</strong> dacă nu folosești contul 24 luni, îți trimitem reminder înainte de ștergere</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">9. Transfer Date Internaționale</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Datele sunt stocate în <strong>Uniunea Europeană</strong> (servere Germania/Franța prin Vercel/AWS). 
              Dacă folosim servicii din afara UE (ex: OpenAI pentru AI), acestea au <strong>Standard Contractual Clauses (SCC)</strong> aprobate de Comisia Europeană pentru transfer GDPR-compliant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">10. Modificări Politică</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Această politică poate fi actualizată. Îți vom trimite notificare email pentru schimbări majore. 
              Versiunea curentă este întotdeauna disponibilă la <a href="/legal/privacy" className="text-blue-600 hover:underline">ai.gesti.ro/legal/privacy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">11. Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Pentru întrebări despre protecția datelor:
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Email:</strong> <a href="mailto:contact@ai.gesti.ro" className="text-blue-600 hover:underline">contact@ai.gesti.ro</a></li>
              <li><strong>Companie:</strong> Astrali (Astralitech.com)</li>
              <li><strong>Adresă:</strong> [TBD — va fi completată la lansare]</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Dacă nu ești mulțumit de răspunsul nostru, ai dreptul să depui plângere la{' '}
              <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong> — 
              <a href="https://www.dataprotection.ro" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> www.dataprotection.ro</a>
            </p>
          </section>

          <div className="bg-gray-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 mt-12">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-0">
              <strong>Disclaimer legal:</strong> Această politică de confidențialitate este un template generat AI, adaptat pentru ai.gesti.ro. 
              Este conformă cu GDPR, dar <strong>înainte de lansarea oficială (martie 2026), va fi revizuită de un avocat specializat în protecția datelor</strong>. 
              Dacă ai întrebări specifice legate de GDPR, te rugăm să contactezi un consultant legal.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
