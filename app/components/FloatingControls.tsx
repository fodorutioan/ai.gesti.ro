'use client'

import { useEffect, useState } from 'react'

export default function FloatingControls() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const next = stored || (prefersDark ? 'dark' : 'light')
    root.classList.toggle('dark', next === 'dark')
    setTheme(next)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const next = theme === 'dark' ? 'light' : 'dark'
    root.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-5 right-5 z-[120] flex flex-col gap-2">
      <button
        onClick={toggleTheme}
        className="h-11 w-11 rounded-full bg-gray-900 text-white shadow-xl hover:bg-gray-800 transition-colors"
        aria-label="Comută tema"
        title="Comută tema"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <button
        onClick={scrollTop}
        className="h-11 w-11 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-colors"
        aria-label="Înapoi sus"
        title="Înapoi sus"
      >
        ↑
      </button>
    </div>
  )
}
