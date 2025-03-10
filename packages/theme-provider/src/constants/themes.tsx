import type { DefaultTheme } from 'styled-components'

export interface Colors {
  black: string
  error: string
  info: string
  primary: string
  secondary: string
  success: string
  warning: string
  white: string
}

export interface Spacing {
  '2xs': string
  xs: string
  s: string
  m: string
  l: string
  xl: string
  '2xl': string
  '3xl': string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    spacing: Spacing
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    black: '#000000',
    error: '#dc3545',
    info: '#17a2b8',
    primary: '#ff9934',
    secondary: '#007bff',
    success: '#28a745',
    warning: '#FFCD4C',
    white: '#ffffff',
  },
  spacing: {
    '2xs': '0.25rem',
    xs: '0.5rem',
    s: '1rem',
    m: '1.5rem',
    l: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '5rem',
  },
}

export type PartialColors = Partial<Colors>
export type PartialSpacing = Partial<Spacing>

export interface PartialDefaultTheme {
  colors?: PartialColors
  spacing?: PartialSpacing
}
