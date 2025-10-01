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

export const Primary: Story = {
  args: { children: <span>Primary Button</span> },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Primary Button' })

    await userEvent.click(button)
  },
}
