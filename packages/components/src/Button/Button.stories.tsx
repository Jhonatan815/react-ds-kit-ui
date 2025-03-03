import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button', // Título que aparecerá en Storybook
  component: Button, // Componente a mostrar
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export const Default = () => (
  <Button variant='primary' disabled>
    hola jhonata
  </Button>
)
export const Disabled = () => <Button disabled>hola jhonata</Button>
