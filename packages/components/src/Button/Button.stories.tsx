import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
}

export const Default = () => <Button>hola jhonata</Button>
