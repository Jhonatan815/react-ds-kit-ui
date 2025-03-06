import React from 'react'
import ThemeProvider from './ThemeProvider'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
}

export const Default = () => {
  return (
    <ThemeProvider
      resetGlobalStyles
      customTheme={{
        colors: {
          danger: 'blue',
          primary: '#d5ff60',
          secondary: '#d5ff60',
        },
        zindex: 10,
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum earum
        nam repudiandae nulla exercitationem minima deserunt debitis! Libero
        maxime voluptatum modi, tempora iusto itaque ut culpa, animi eaque
        quaerat repellat?
      </p>
    </ThemeProvider>
  )
}
