'use client'

import type { JSX, ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  appName: string
}

export const Button = ({ children, appName }: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        className='bg-primary text-secondary px-4 py-2 rounded hover:bg-amber-400 border-4 '
        onClick={() => alert(`Hello from your ${appName} app!`)}
        type='button'
      >
        {children}
      </button>
    </>
  )
}
