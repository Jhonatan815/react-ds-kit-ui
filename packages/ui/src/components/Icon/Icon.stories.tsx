import type { Meta, StoryObj } from '@storybook/react-vite'
import { within } from '@testing-library/react'
import { expect } from 'storybook/test'
import { Icon } from './Icon'
import type { IconSvg } from './types'

const meta: Meta<IconSvg> = {
  component: Icon,
  title: 'components/Icon',
}
export default meta

type Story = StoryObj<IconSvg>

export const IconRender: Story = {
  args: { height: 50, icon: 'loading', stroke: 'blue', width: '50px' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { name: 'loading' })

    expect(icon).toBeVisible()
  },
}
