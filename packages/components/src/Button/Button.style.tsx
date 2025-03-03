import styled from 'styled-components'
import { tokens } from '@ds/tokens'

export const Button = styled.button`
  background-color: ${tokens.colors.primary};
  padding: ${tokens.spacing.medium};
  font-size: ${tokens.typography.fontSize.medium};
  font-weight: ${tokens.typography.fontWeight.bold};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${tokens.colors.secondary};
  }
`
