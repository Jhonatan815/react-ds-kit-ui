import type * as React from "react"
import * as Sc from "./Button.style"

type ButtonProps = {
	children: React.ReactNode
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false }) => {
	return <Sc.Button disabled={disabled}>{children}</Sc.Button>
}

export default Button
