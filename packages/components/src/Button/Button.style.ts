import styled from 'styled-components'
import { tokens } from '@react-web-kit/tokens'

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: ${tokens.typography.fontWeight.bold};
  line-height: 1.5;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  padding: ${tokens.spacing.small} ${tokens.spacing.medium};
  height: ${tokens.spacing.extraLarge};
  /* Default (primary) variant */
  background-color: ${tokens.colors.primary};
  color: white;
  border: 1px solid ${tokens.colors.primary};
  
  &:hover {
    background-color: #0069d9; /* darker shade of primary */
    border-color: #0069d9;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
  
  &:disabled {
    background-color: ${tokens.colors.secondary};
    border-color: ${tokens.colors.secondary};
    color: #fff;
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(StyledButton)`
  background-color: transparent;
  color: ${tokens.colors.primary};
  border: 1px solid ${tokens.colors.primary};
  
  &:hover {
    background-color: rgba(0, 123, 255, 0.1);
    color: #0069d9;
  }
  
  &:disabled {
    background-color: transparent;
    border-color: ${tokens.colors.secondary};
    color: ${tokens.colors.secondary};
  }
`

export const TextButton = styled(StyledButton)`
  background-color: transparent;
  color: ${tokens.colors.primary};
  border: none;
  padding: ${tokens.spacing.small} ${tokens.spacing.medium};
  
  &:hover {
    background-color: rgba(0, 123, 255, 0.1);
    color: #0069d9;
  }
  
  &:disabled {
    background-color: transparent;
    color: ${tokens.colors.secondary};
  }
`
