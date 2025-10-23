/* eslint-disable no-unused-vars */
export interface TextFieldProps {
  disabled?: boolean
  id: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  size?: 'small' | 'big'
  value?: string
  variant?: 'outlined' | 'filled' | 'standard'
}

export interface OutlinedProps extends TextFieldProps {
  hasValue: boolean
}

// Add hasValue StandardProps and omit variant
export type StandardProps = Omit<TextFieldProps, 'variant'> & {
  hasValue: boolean
}
