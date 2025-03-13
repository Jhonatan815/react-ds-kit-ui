import { defaultTheme } from '@react-web-kit/theme-provider'
import styled, { css, keyframes } from 'styled-components'
import type { RuleSet } from 'styled-components'
import type { ButtonProps } from './Button'

const colorMix = (color1: string, color2: string, percentage: number): string =>
  `color-mix(in srgb, ${color1} ${percentage}%, ${color2})`

const rippleEffect = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

const skeletonAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`

const dotFlashing = keyframes`
  0% { opacity: 1; }
  33% { opacity: 0.3; }
  66% { opacity: 1; }
  100% { opacity: 0.3; }
`

const statesByActions = (): RuleSet<object> => css`
  &:focus-visible {
    ${({ theme }): RuleSet<object> => css`
      outline: 0.125rem solid
        ${colorMix(
          theme?.colors?.primary ?? defaultTheme.colors.primary,
          theme?.colors?.white ?? defaultTheme.colors.white,
          25
        )};
    `};
  }
  &:disabled {
    border: none;
    cursor: not-allowed;
    opacity: 0.5;
    ${({ theme }): RuleSet<object> => css`
      background-color: ${colorMix(
        theme?.colors?.black ?? defaultTheme.colors.black,
        theme?.colors?.white ?? defaultTheme.colors.white,
        25
      )};
      color: ${theme?.colors?.black ?? defaultTheme.colors.black};
    `};
  }
  &::before {
    ${({ theme }): RuleSet<object> => css`
      background-color: ${colorMix(
        theme?.colors?.primary ?? defaultTheme.colors.primary,
        theme?.colors?.white ?? defaultTheme.colors.white,
        50
      )};
    `}
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 100%;
    transition: top 0.2s ease-in-out;
    width: 100%;
    z-index: -1;
  }
  &:hover:not(:disabled)::before {
    top: 0;
  }
  .ripple {
    animation: ${rippleEffect} 0.6s linear;
    border-radius: 50%;
    pointer-events: none;
    position: absolute;
    transform: scale(0);
    ${({ theme }): RuleSet<object> => css`
      background-color: ${colorMix(
        theme?.colors?.primary ?? defaultTheme.colors.primary,
        theme?.colors?.white ?? defaultTheme.colors.white,
        100
      )};
    `};
  }
`

const Button = styled.button<{
  $loading: ButtonProps['loading']
  $size: ButtonProps['size']
}>`
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
    padding: 0 ${theme?.spacing?.s ?? defaultTheme.spacing.s};
  `}
`

export const SkeletonButton = styled(Button)`
  color: transparent;
  pointer-events: none;
  position: relative;
  &::after {
    ${({ theme }): RuleSet<object> => css`
      background: linear-gradient(
        90deg,
        ${colorMix(
          theme?.colors?.black ?? defaultTheme.colors.black,
          theme?.colors?.white ?? defaultTheme.colors.white,
          8
        )}
          25%,
        ${theme?.colors?.white ?? defaultTheme.colors.white} 50%,
        ${colorMix(
          theme?.colors?.black ?? defaultTheme.colors.black,
          theme?.colors?.white ?? defaultTheme.colors.white,
          8
        )}
          75%
      );
    `}
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s infinite linear;
  }
`

export const DotLoading = styled.span<{ $isContained: boolean }>`
  ${({ $isContained, theme }): RuleSet<object> =>
    $isContained
      ? css`
          background-color: ${
            theme?.colors?.white ?? defaultTheme.colors.white
          };
        `
      : css`
          background-color: ${
            theme?.colors?.primary ?? defaultTheme.colors.primary
          };
        `}
  width: 10px;
  height: 10px;

  margin-right: 0.5rem;
  border-radius: 50%;
  display: inline-block;
  animation: ${dotFlashing} 1.5s infinite ease-in-out;
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const TextButton = styled(Button)`
  ${({ $loading }): RuleSet<object> => ($loading ? css`` : statesByActions())}
`

export const OutlinedButton = styled(Button)`
  ${({ $loading, theme }): RuleSet<object> => css`
    border: 0.0625rem solid
      ${theme?.colors?.primary ?? defaultTheme.colors.primary};
    ${$loading ? css`` : statesByActions()}
  `}
`

export const ContainedButton = styled(Button)`
  ${({ $loading }): RuleSet<object> => ($loading ? css`` : statesByActions())}
  z-index: 0;
  ${({ theme }): RuleSet<object> => css`
    background-color: ${theme?.colors?.primary ?? defaultTheme.colors.primary};
    color: ${theme?.colors?.white ?? defaultTheme.colors.white};
  `}
`
