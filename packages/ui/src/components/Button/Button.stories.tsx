import type { Meta, StoryObj } from '@storybook/react-vite'
import { within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button, type ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  component: Button,
  title: 'components/Button',
}
export default meta

type Story = StoryObj<ButtonProps>

export const Contained: Story = {
  args: { children: <span>Contained Button</span> },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Contained Button' })

    await userEvent.click(button)
  },
}

export const Outline: Story = {
  args: { children: <span>Outline Button</span>, variant: 'outline' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Outline Button' })

    await userEvent.click(button)
  },
}

export const Ghost: Story = {
  args: { children: <span>Ghost Button</span>, variant: 'ghost' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Ghost Button' })

    await userEvent.click(button)
  },
}

export const Disabled: Story = {
  args: {
    children: <span>Disabled Button</span>,
    disabled: true,
    variant: 'outline',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Disabled Button' })

    await userEvent.click(button)
  },
}
