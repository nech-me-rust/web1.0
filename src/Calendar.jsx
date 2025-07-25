import React, { useRef, useEffect } from 'react'
import { Calendar as FullCalendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const translations = {
  cs: {
    register: 'Registrovat',
    event: 'Akce',
    success: 'Registrace proběhla úspěšně!',
    form: 'Registrace na akci',
    name: 'Jméno',
    email: 'Email',
    submit: 'Odeslat'
  },
  en: {
    register: 'Register',
    event: 'Event',
    success: 'Registration successful!',
    form: 'Register for Event',
    name: 'Name',
    email: 'Email',
    submit: 'Submit'
  }
}

const events = [
  {
    title: "Sázení stromů & Smích",
    date: "2025-09-07",
    id: 1
  },
  {
    title: "Forest Therapy (Bring Snacks)",
    date: "2025-09-21",
    id: 2
  },
  {
    title: "Workshop: Tree Hugging for Beginners",
    date: "2025-10-05",
    id: 3
  }
]

export default function Calendar({ lang }) {
  const calendarRef = useRef(null)
  const t = translations[lang]

  useEffect(() => {
    const calendarEl = calendarRef.current
    let calendar = new FullCalendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: events,
      eventClick: function(info) {
        const event = info.event
        showRegistrationForm(event)
      },
      height: 400
    })
    calendar.render()
    return () => {
      calendar.destroy()
    }
  }, [lang])

  function showRegistrationForm(event) {
    const name = prompt(`${t.form} - ${event.title}\n${t.name}:`)
    if (!name) return
    const email = prompt(`${t.email}:`)
    if (!email) return
    alert(`${t.success}\n${t.name}: ${name}\n${t.email}: ${email}\n${t.event}: ${event.title}`)
  }

  return (
    <div>
      <div ref={calendarRef}></div>
      <p className="text-sm text-earth mt-2">
        {lang === 'cs'
          ? 'Klikněte na akci pro registraci. (Nebojte, vaše data jsou v bezpečí – jako veverka v dutině.)'
          : 'Click on an event to register. (Don’t worry, your data is as safe as a squirrel in a hollow tree.)'}
      </p>
    </div>
  )
}