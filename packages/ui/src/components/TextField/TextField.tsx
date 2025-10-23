import type { JSX } from 'react'
import Filled from './_components/Filled'
import Outlined from './_components/Outlined'
import Standard from './_components/Standard'
import type { TextFieldProps } from './types'

export const TextField = ({
  disabled = false,
  label = '',
  onChange,
  size = 'big',
  value = '',
  variant = 'outlined',
  id,
}: TextFieldProps): JSX.Element => {
  const hasValue = value.length > 0
  if (variant === 'outlined') {
    return (
      <Outlined
        disabled={disabled}
        hasValue={hasValue}
        id={id}
        label={label}
        onChange={onChange}
        size={size}
        value={value}
        variant={variant}
      />
    )
  }
  if (variant === 'filled') {
    return (
      <Filled
        disabled={disabled}
        id={id}
        label={label}
        onChange={onChange}
        size={size}
        value={value}
      />
    )
  }
  return (
    <Standard
      disabled={disabled}
      hasValue={hasValue}
      id={id}
      label={label}
      onChange={onChange}
      size={size}
      value={value}
    />
  )
}
