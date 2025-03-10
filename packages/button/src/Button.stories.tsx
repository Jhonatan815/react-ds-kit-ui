import type { Meta, StoryObj } from '@storybook/react'

import { defaultTheme } from '@react-web-kit/theme-provider'
import { MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import Button from './Button'

const meta = {
  component: Button,
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

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  console.info('click', event)
}

export const TextButton: Story = {
  args: {
    children: 'Aceptar',
    disabled: false,
    onClick: handleClick,
    size: 'small',
    type: 'button',
    variant: 'text',
  },
}

export const ContainedButton: Story = {
  args: {
    children: 'Aceptar',
    disabled: false,
    onClick: handleClick,
    size: 'small',
    type: 'button',
    variant: 'contained',
  },
}

export const OutlineButton: Story = {
  args: {
    children: 'Aceptar',
    disabled: false,
    onClick: handleClick,
    size: 'small',
    type: 'button',
    variant: 'outlined',
  },
}
