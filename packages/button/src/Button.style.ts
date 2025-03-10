import { defaultTheme } from '@react-web-kit/theme-provider'
import styled, { css, keyframes } from 'styled-components'
import type { RuleSet } from 'styled-components'
import type { ButtonProps } from './Button'

export const rippleEffect = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

const Button = styled.button<{ $size: ButtonProps['size'] }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  max-width: 15.625rem;
  outline: none;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  ${({ theme, $size }): RuleSet<object> => css`
    border-radius: ${theme?.spacing?.['2xs'] ?? defaultTheme.spacing['2xs']};
    color: ${theme?.colors?.primary ?? defaultTheme.colors.primary};
    height: ${$size === 'small' ? '2.5rem' : '3.125rem'};
    padding: 0 ${theme?.spacing?.['2xs'] ?? defaultTheme.spacing.xs};
  `}
  &:hover {
    ${({ theme }): RuleSet<object> => css`
      background-color: color-mix(
        in srgb,
        ${theme?.colors?.primary ?? defaultTheme.colors.primary} 25%,
        ${theme?.colors?.white ?? defaultTheme.colors.white}
      );
    `}
  }
  &:disabled {
    border: none;
    cursor: not-allowed;
    opacity: 0.5;
    ${({ theme }): RuleSet<object> => css`
      background-color: color-mix(
        in srgb,
        ${theme?.colors?.black ?? defaultTheme.colors.black} 25%,
        ${theme?.colors?.white ?? defaultTheme.colors.white}
      );
      color: ${theme?.colors?.black ?? defaultTheme.colors.black};
    `};
  }
  .ripple {
    animation: ${rippleEffect} 0.6s linear;
    border-radius: 50%;
    height: 6.25rem;
    pointer-events: none;
    position: absolute;
    transform: scale(0);
    width: 6.25rem;
    ${({ theme }): RuleSet<object> => css`
      background-color: color-mix(
        in srgb,
        ${theme?.colors?.primary ?? defaultTheme.colors.primary} 100%,
        ${theme?.colors?.white ?? defaultTheme.colors.white}
      );
    `};
  }
`

export const TextButton = styled(Button)`
  &:focus-visible {
    ${({ theme }): RuleSet<object> => css`
      outline: 0.125rem solid
        color-mix(
          in srgb,
          ${theme?.colors?.primary ?? defaultTheme.colors.primary} 25%,
          ${theme?.colors?.white ?? defaultTheme.colors.white}
        );
    `};
  }
`

export const ContainedButton = styled(Button)`
  ${({ theme }): RuleSet<object> => css`
    background-color: ${theme?.colors?.primary ?? defaultTheme.colors.primary};
    color: ${theme?.colors?.white ?? defaultTheme.colors.white};
  `}
  &:focus-visible {
    ${({ theme }): RuleSet<object> => css`
      outline: 0.125rem solid
        color-mix(
          in srgb,
          ${theme?.colors?.primary ?? defaultTheme.colors.primary} 50%,
          ${theme?.colors?.white ?? defaultTheme.colors.white}
        );
    `};
  }
  &:hover {
    ${({ theme }): RuleSet<object> => css`
      background-color: color-mix(
        in srgb,
        ${theme?.colors?.primary ?? defaultTheme.colors.primary} 75%,
        ${theme?.colors?.white ?? defaultTheme.colors.white}
      );
    `}
  }
  &:disabled {
    border: none;
    cursor: not-allowed;
    opacity: 0.5;
    ${({ theme }): RuleSet<object> => css`
      background-color: color-mix(
        in srgb,
        ${theme?.colors?.black ?? defaultTheme.colors.black} 25%,
        ${theme?.colors?.white ?? defaultTheme.colors.white}
      );
      color: ${theme?.colors?.black ?? defaultTheme.colors.black};
    `};
  }
`

export const OutlinedButton = styled(Button)`
  ${({ theme }): RuleSet<object> => css`
    border: 0.0625rem solid
      ${theme?.colors?.primary ?? defaultTheme.colors.primary};
    color: ${theme?.colors?.primary ?? defaultTheme.colors.primary};
  `}
  &:focus-visible {
    ${({ theme }): RuleSet<object> => css`
      outline: 0.125rem solid
        color-mix(
          in srgb,
          ${theme?.colors?.primary ?? defaultTheme.colors.primary} 25%,
          ${theme?.colors?.white ?? defaultTheme.colors.white}
        );
    `};
  }
`
