'use client'

import clsx from 'clsx'
import type { JSX, ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  size: 'small' | 'big'
  variant: 'contained' | 'ghost' | 'outline'
}

export const Button = ({
  children,
  disabled = false,
  onClick = () => {},
  size = 'big',
  variant = 'contained',
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        'focus-visible:outline-secondary cursor-pointer rounded px-4 focus-visible:outline-2 disabled:cursor-not-allowed',
        {
          'h-11': size === 'big',
          'h-8': size === 'small',
        },
        {
          'bg-primary hover:bg-primary/80 text-white disabled:bg-gray-400 disabled:text-gray-200':
            variant === 'contained',
          'hover:bg-primary/80 text-primary border-primary border-1 bg-transparent hover:text-white disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-gray-200':
            variant === 'outline',
          'text-primary hover:bg-primary/20 disabled:text-gray-400 disabled:hover:bg-gray-200':
            variant === 'ghost',
        },
      )}
      disabled={disabled}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
