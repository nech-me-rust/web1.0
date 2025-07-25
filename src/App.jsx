import React, { useState } from 'react'
import Calendar from './Calendar'

const translations = {
  cs: {
    title: "Nech mě růst",
    subtitle: "Neziskovka s kořeny v lese a hlavou v oblacích",
    vision: "Naším cílem je zasadit semínko v srdci každého z nás. Stromy, humor a společnost, která se nebojí růst.",
    philosophy: "Věříme, že každý strom má právo na svůj prostor – a každý člověk taky. Sázíme, smějeme se, učíme se, a občas se i ztratíme v lese (vždy se najdeme).",
    calendar: "Kalendář akcí & registrace",
    instagram: "Sledujte nás na Instagramu",
    register: "Registrovat",
    language: "Jazyk",
    english: "Anglicky",
    czech: "Česky",
    manual: "Návod na spuštění webu"
  },
  en: {
    title: "Let Me Grow",
    subtitle: "A nonprofit with roots in the forest and head in the clouds",
    vision: "Our goal is to plant a seed in every heart. Trees, humor, and a society that isn’t afraid to grow.",
    philosophy: "We believe every tree deserves its space – and so does every person. We plant, we laugh, we learn, and sometimes get lost in the woods (we always find our way).",
    calendar: "Event Calendar & Registration",
    instagram: "Follow us on Instagram",
    register: "Register",
    language: "Language",
    english: "English",
    czech: "Czech",
    manual: "Website setup manual"
  }
}

export default function App() {
  const [lang, setLang] = useState('cs')
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-b from-moss via-earth to-forest bg-opacity-80">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl text-forest font-bold drop-shadow-lg">{t.title}</h1>
        <p className="text-xl md:text-2xl text-earth mt-4 font-humor">{t.subtitle}</p>
        <div className="mt-2 flex justify-center gap-4">
          <button
            onClick={() => setLang('cs')}
            className={`px-4 py-2 rounded border ${lang === 'cs' ? 'bg-forest text-white' : 'bg-moss text-forest'}`}
          >
            {t.czech}
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded border ${lang === 'en' ? 'bg-forest text-white' : 'bg-moss text-forest'}`}
          >
            {t.english}
          </button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-forest">{lang === 'cs' ? 'Vize' : 'Vision'}</h2>
          <p className="mt-2">{t.vision}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-forest">{lang === 'cs' ? 'Filosofie' : 'Philosophy'}</h2>
          <p className="mt-2 font-humor">{t.philosophy}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-forest">{t.calendar}</h2>
          <Calendar lang={lang} />
        </section>
        <section className="mb-8 text-center">
          <a
            href="https://www.instagram.com/nech_me_rust"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest text-white px-4 py-2 rounded hover:bg-moss transition"
          >
            <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
            {t.instagram}
          </a>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-bold text-forest">{t.manual}</h2>
          <a href="/README.md" target="_blank" className="text-blue-700 underline">
            {lang === 'cs' ? 'Návod v češtině & anglicky' : 'Manual in Czech & English'}
          </a>
        </section>
      </main>
      <footer className="text-center py-4 text-earth font-humor">
        {lang === 'cs'
          ? '© 2025 Nech mě růst. Stromy nejsou jen na ozdobu.'
          : '© 2025 Let Me Grow. Trees are not just for decoration.'}
      </footer>
    </div>
  )
}