'use client'

import type { JSX, ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick: () => void
  size: 'small' | 'big'
  variant: 'contained' | 'outline' | 'ghost'
}

export const Button = ({
  children,
  onClick,
  size = 'big',
  variant = 'contained',
}: ButtonProps): JSX.Element => {
  const currentSize = { big: 'h-11', small: 'h-8' }

  if (variant === 'outline') {
    return (
      <button
        className={`rounded px-4 ${currentSize[size]} bg-transparent border-1 border-gray-700 text-gray-700 hover:border-gray-400 hover:text-gray-600`}
        onClick={onClick}
        type='button'
      >
        {children}
      </button>
    )
  }
  if (variant === 'ghost') {
    return (
      <button
        className={`rounded px-4 ${currentSize[size]} hover:bg-primary/30`}
        onClick={onClick}
        type='button'
      >
        {children}
      </button>
    )
  }
  return (
    <button
      className={`rounded px-4 ${currentSize[size]} bg-primary text-white hover:bg-primary/80 border-0`}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
