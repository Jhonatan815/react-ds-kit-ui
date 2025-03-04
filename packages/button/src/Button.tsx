import * as Sc from './Button.style'
import * as React from 'react'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false }) => {
  return <Sc.Button disabled={disabled}>{children}</Sc.Button>
}

export default Button
