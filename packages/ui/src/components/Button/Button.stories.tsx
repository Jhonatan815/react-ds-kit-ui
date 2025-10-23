import type { Meta, StoryObj } from '@storybook/react-vite'
import { within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'
import type { ButtonProps } from './types'

const meta: Meta<ButtonProps> = {
  component: Button,
  title: 'components/Button',
}
export default meta

type Story = StoryObj<ButtonProps>

export const Contained: Story = {
  args: {
    children: 'Contained Button Test',
    variant: 'contained',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Contained Button Test' })

    await userEvent.click(button)
  },
}

export const Outline: Story = {
  args: { children: 'Outline Button', variant: 'outline' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Outline Button' })

    await userEvent.click(button)
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button text extra large',
    variant: 'ghost',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: 'Ghost Button text extra large',
    })

    await userEvent.click(button)
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'outline',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Disabled Button' })

    await userEvent.click(button)
  },
}

export const Skelton: Story = {
  args: {
    children: 'Skelton Button',
    skeleton: true,
    variant: 'outline',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Loading content' })

    await userEvent.click(button)
  },
}

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
    variant: 'contained',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: 'Loading Button loading',
    })

    await userEvent.click(button)
  },
}
