'use client'

import clsx from 'clsx'
import type { JSX } from 'react'
import Contained from './_components/Contained'
import Ghost from './_components/Ghost'
import Outline from './_components/Outline'
import Skeleton from './_components/Skeleton'
import type { ButtonProps } from './types'

export const Button = ({
  children,
  disabled = false,
  isLoading: isLodiang = false,
  onClick = () => {},
  size = 'big',
  skeleton = false,
  type = 'button',
  variant = 'contained',
}: ButtonProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    const duration = 600
    const button = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight) / 10
    const radius = diameter / 2
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add('ripple')
    const existingRipple = button.querySelector('.ripple')

    if (existingRipple) {
      existingRipple.remove()
    }

    button.appendChild(circle)
    setTimeout(() => circle.remove(), duration)
    onClick(event)
  }

  const commonStyles = clsx(
    {
      'h-12': size === 'big',
      'h-8': size === 'small',
    },
    { 'cursor-wait': isLodiang },
  )

  if (skeleton) {
    return <Skeleton className={commonStyles} />
  }

  if (variant === 'contained') {
    return (
      <Contained
        className={commonStyles}
        disabled={disabled}
        isLoading={isLodiang}
        onClick={handleClick}
        type={type}
      >
        {children}
      </Contained>
    )
  }

  if (variant === 'ghost') {
    return (
      <Ghost
        className={commonStyles}
        disabled={disabled}
        isLoading={isLodiang}
        onClick={handleClick}
        type={type}
      >
        {children}
      </Ghost>
    )
  }

  return (
    <Outline
      className={commonStyles}
      disabled={disabled}
      isLoading={isLodiang}
      onClick={handleClick}
      type={type}
    >
      {children}
    </Outline>
  )
}
