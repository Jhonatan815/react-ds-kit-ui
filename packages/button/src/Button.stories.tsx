import { defaultTheme } from '@react-web-kit/theme-provider'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, screen, userEvent, within } from '@storybook/test'
import { MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import Button from './Button'

const meta = {
  component: Button,
  args: {
    onClick: fn(),
  },
  title: 'Components/Button',
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const TextButton: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Aceptar' })

    expect(button).toBeVisible()
    expect(button).toBeEnabled()

    await userEvent.click(button)

    const ripple = button.querySelector('.ripple')

    expect(ripple).toBeInTheDocument()
    setTimeout(() => {
      expect(ripple).not.toBeInTheDocument()
    }, 600)
    expect(args.onClick).toHaveBeenCalledTimes(1)
  },
  args: {
    children: 'Aceptar',
    disabled: false,
    loading: false,
    onClick: fn(),
    size: 'small',
    skeleton: false,
    type: 'button',
    variant: 'text',
  },
}

export const ContainedButton: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Aceptar' })

    expect(button).toBeVisible()
    expect(button).toBeEnabled()

    await userEvent.click(button)

    const ripple = button.querySelector('.ripple')

    expect(ripple).toBeInTheDocument()
    setTimeout(() => {
      expect(ripple).not.toBeInTheDocument()
    }, 600)
    expect(args.onClick).toHaveBeenCalledTimes(1)
  },
  args: {
    children: 'Aceptar',
    disabled: false,
    loading: false,
    onClick: fn(),
    size: 'small',
    skeleton: false,
    type: 'button',
    variant: 'contained',
  },
}

export const OutlineButton: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Aceptar' })

    expect(button).toBeVisible()
    expect(button).toBeEnabled()

    await userEvent.click(button)

    const ripple = button.querySelector('.ripple')

    expect(ripple).toBeInTheDocument()
    setTimeout(() => {
      expect(ripple).not.toBeInTheDocument()
    }, 600)
    expect(args.onClick).toHaveBeenCalledTimes(1)
  },
  args: {
    children: 'Aceptar',
    disabled: false,
    loading: false,
    onClick: fn(),
    size: 'small',
    skeleton: false,
    type: 'button',
    variant: 'outlined',
  },
}

export const DisabledButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Aceptar' })
    const ripple = button.querySelector('.ripple')

    expect(button).toBeVisible()
    expect(button).toBeDisabled()
    expect(ripple).not.toBeInTheDocument()

    userEvent.hover(button)
  },
  args: {
    children: 'Aceptar',
    disabled: true,
    loading: false,
    onClick: fn(),
    size: 'small',
    skeleton: false,
    type: 'button',
    variant: 'text',
  },
}

export const SkeletonButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Aceptar' })

    expect(button).toBeVisible()
    expect(button).toBeEnabled()
  },
  args: {
    children: 'Aceptar',
    disabled: false,
    loading: false,
    onClick: fn(),
    size: 'small',
    skeleton: true,
    type: 'button',
    variant: 'text',
  },
}
