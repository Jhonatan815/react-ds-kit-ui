'use client'

import type { JSX, ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ onClick, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className='bg-primary text-secondary px-4 py-2 rounded hover:bg-amber-400 border-4 '
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
