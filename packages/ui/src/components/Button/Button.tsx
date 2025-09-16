'use client'

import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  appName: string
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-red-400"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
}
