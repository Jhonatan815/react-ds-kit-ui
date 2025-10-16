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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault
    const duration = 600
    const button = e.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight) / 10
    const radius = diameter / 2
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`
    circle.classList.add('ripple')
    const existingRipple = button.querySelector('.ripple')

    if (existingRipple) {
      existingRipple.remove()
    }

    button.appendChild(circle)
    setTimeout(() => circle.remove(), duration)
    onClick()
  }

  return (
    <button
      className={clsx(
        'focus-visible:outline-secondary relative w-full cursor-pointer overflow-hidden rounded px-4 focus-visible:outline-2 disabled:cursor-not-allowed',
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
      onClick={handleClick}
      type='button'
    >
      {children}
    </button>
  )
}
