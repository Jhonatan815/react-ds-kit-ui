import type { FC, ReactNode } from 'react'
import * as Sc from './Button.style'

type ButtonProps = {
  children: ReactNode
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, disabled = false }) => {
  return <Sc.Button disabled={disabled}>{children}</Sc.Button>
}

export default Button
