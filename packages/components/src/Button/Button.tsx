import * as Sc from './Button.style'
import * as React from 'react'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary'
}

function Button({
  children,
  disabled = false,
  variant = 'primary',
}: ButtonProps): React.ReactElement {
  if (variant === 'secondary' || variant === 'tertiary') {
    return (
      <Sc.SecondaryButton disabled={disabled}>{children}</Sc.SecondaryButton>
    )
  }
  return <Sc.StyledButton disabled={disabled}>{children}</Sc.StyledButton>
}

export default Button
