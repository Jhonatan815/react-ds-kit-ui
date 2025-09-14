import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  title: 'Components/Button', // <--- esto determina la ruta en Storybook
  component: Button,
}
export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = { args: { children: 'Primary Button' } }
