import type { FC, MouseEvent, ReactNode } from 'react'
import * as Sc from './Button.style'

export type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  size?: 'small' | 'big'
  skeleton?: boolean
  type?: 'button' | 'submit'
  variant?: 'contained' | 'outlined' | 'text'
}

const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  loading = false,
  onClick = null,
  size = 'big',
  skeleton = false,
  type = 'button',
  variant = 'text',
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (onClick) {
      const sizeRiple = 50
      const half = 2
      const button = event.currentTarget
      const rect = button.getBoundingClientRect()
      const positionX = event.clientX - rect.left
      const positionY = event.clientY - rect.top
      const ripple = document.createElement('span')
      ripple.classList.add('ripple')
      ripple.style.width = `${sizeRiple}px`
      ripple.style.height = `${sizeRiple}px`
      ripple.style.left = `${positionX - sizeRiple / half}px`
      ripple.style.top = `${positionY - sizeRiple / half}px`
      button.appendChild(ripple)
      setTimeout(() => {
        ripple.remove()
      }, 600)
      onClick(event)
    }
  }

  const renderLoading = (): ReactNode => (
    <>
      <Sc.DotLoading $isContained={variant === 'contained'} />
      <Sc.DotLoading $isContained={variant === 'contained'} />
      <Sc.DotLoading $isContained={variant === 'contained'} />
    </>
  )

  if (skeleton) {
    return (
      <Sc.SkeletonButton $size={size} $loading={loading}>
        <span>{children}</span>
      </Sc.SkeletonButton>
    )
  }

  if (variant === 'contained') {
    return (
      <Sc.ContainedButton
        $loading={loading}
        $size={size}
        disabled={disabled}
        onClick={handleClick}
        type={type}
      >
        {loading ? renderLoading() : <span>{children}</span>}
      </Sc.ContainedButton>
    )
  }
  if (variant === 'outlined') {
    return (
      <Sc.OutlinedButton
        $loading={loading}
        $size={size}
        disabled={disabled}
        onClick={handleClick}
        type={type}
      >
        {loading ? renderLoading() : <span>{children}</span>}
      </Sc.OutlinedButton>
    )
  }

  return (
    <Sc.TextButton
      $loading={loading}
      $size={size}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {loading ? renderLoading() : <span>{children}</span>}
    </Sc.TextButton>
  )
}

export default Button
