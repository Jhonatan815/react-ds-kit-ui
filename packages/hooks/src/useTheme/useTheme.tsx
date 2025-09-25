'use client'

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | null

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const initial = stored ?? 'light'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return { theme, toggleTheme }
}
