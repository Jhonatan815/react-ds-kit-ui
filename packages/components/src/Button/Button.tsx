import * as Sc from './Button.style'
import * as React from 'react'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
}

const Button = ({
  children,
  disabled = false,
}: ButtonProps): React.ReactElement => {
  return <Sc.StyledButton disabled={disabled}>{children}</Sc.StyledButton>
}

export default Button
