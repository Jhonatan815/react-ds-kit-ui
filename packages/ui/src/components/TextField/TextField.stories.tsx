import type { Meta, StoryObj } from '@storybook/react-vite'
import { within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { JSX } from 'react'
import { useState } from 'react'
import { TextField } from './TextField'
import type { TextFieldProps } from './types'

const meta: Meta<TextFieldProps> = {
  component: TextField,
  title: 'components/TextField',
}
export default meta

type Story = StoryObj<TextFieldProps>

export const Outline: Story = {
  args: {
    id: 'outlined-textfield',
    label: 'Text outline',
    size: 'big',
    value: '',
    variant: 'outlined',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox', { name: 'Text outline' })

    await userEvent.type(input, 'any_text')
  },
  render: (args) => {
    const ControlledTextField = (): JSX.Element => {
      const [value, setValue] = useState(args.value || '')

      return (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...args}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      )
    }

    return <ControlledTextField />
  },
}

export const Filled: Story = {
  args: {
    id: 'Filled-textfield',
    label: 'Text fill',
    size: 'big',
    value: '',
    variant: 'filled',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox', { name: 'Text fill' })

    await userEvent.type(input, 'any_text')
  },
  render: (args) => {
    const ControlledTextField = (): JSX.Element => {
      const [value, setValue] = useState(args.value || '')

      return (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...args}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      )
    }

    return <ControlledTextField />
  },
}

export const Standard: Story = {
  args: {
    id: 'standard-textfield',
    label: 'Text fill',
    size: 'big',
    value: '',
    variant: 'standard',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox', { name: 'Text fill' })

    await userEvent.type(input, 'any_text')
  },
  render: (args) => {
    const ControlledTextField = (): JSX.Element => {
      const [value, setValue] = useState(args.value || '')

      return (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...args}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      )
    }

    return <ControlledTextField />
  },
}
