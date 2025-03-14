import { defaultTheme } from '@react-web-kit/theme-provider'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
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

// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
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
  play: ({ canvasElement }) => {
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    expect(button).toBeVisible()
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

export const LoadingButton: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    const dotLoading = canvas.getAllByRole('presentation')

    expect(button).toBeVisible()
    expect(dotLoading).toHaveLength(3)
    expect(dotLoading[0]).toHaveStyle('animation-delay: 0s')
    expect(dotLoading[1]).toHaveStyle('animation-delay: 0.2s')
    expect(dotLoading[2]).toHaveStyle('animation-delay: 0.4s')
  },
  args: {
    children: 'Aceptar',
    disabled: false,
    loading: true,
    onClick: fn(),
    size: 'small',
    skeleton: false,
    type: 'button',
    variant: 'text',
  },
}
