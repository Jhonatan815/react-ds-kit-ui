import type { FC, MouseEvent, ReactNode } from 'react'
import * as Sc from './Button.style'

export type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  size: 'small' | 'big'
  type: 'button' | 'submit'
  variant: 'contained' | 'outlined' | 'text'
}

const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick = null,
  size,
  type,
  variant,
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (onClick) {
      const button = event.currentTarget
      const rect = button.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const ripple = document.createElement('span')
      ripple.classList.add('ripple')
      ripple.style.left = `${x - 50}px`
      ripple.style.top = `${y - 50}px`
      button.appendChild(ripple)
      setTimeout(() => {
        ripple.remove()
      }, 60000)
      onClick(event)
    }
  }

  if (variant === 'contained') {
    return (
      <Sc.ContainedButton
        $size={size}
        disabled={disabled}
        onClick={handleClick}
        type={type}
      >
        {children}
      </Sc.ContainedButton>
    )
  }
  if (variant === 'outlined') {
    return (
      <Sc.OutlinedButton
        $size={size}
        disabled={disabled}
        onClick={handleClick}
        type={type}
      >
        {children}
      </Sc.OutlinedButton>
    )
  }
  return (
    <Sc.TextButton
      $size={size}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {children}
    </Sc.TextButton>
  )
}

export default Button
