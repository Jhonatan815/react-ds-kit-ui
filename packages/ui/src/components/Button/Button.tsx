'use client'

import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  appName: string
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-red-400 border-4"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
}
