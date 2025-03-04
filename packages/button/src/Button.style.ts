import styled from 'styled-components'
import { tokens } from '@react-web-kit/tokens'

export const Button = styled.button`
  background-color: ${tokens.colors.primary};
  color: white;
  border: 1px solid ${tokens.colors.primary};
  height: 50px;
  width: 250px;
`
