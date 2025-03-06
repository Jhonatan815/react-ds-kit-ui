import { defaultTheme } from '@react-web-kit/theme-provider'
import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${defaultTheme.colors.primary};
  color: white;
  border: 1px solid ${defaultTheme.colors.primary};
  height: 50px;
  width: 250px;
`
