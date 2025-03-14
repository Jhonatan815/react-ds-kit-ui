import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import ThemeProvider from './ThemeProvider'
import { Container, Paragraph, Title } from './ThemeProvider.style'
import { defaultTheme } from './constants/themes'

const meta = {
  component: ThemeProvider,
  title: 'Components/ThemeProvider',
} satisfies Meta<typeof ThemeProvider>

// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', {
      level: 1,
      name: 'Hello World',
    })
    const paragraph = canvas.getByRole('paragraph')

    expect(title).toBeVisible()
    expect(title).toHaveStyle({ color: defaultTheme.colors.primary })
    expect(paragraph).toBeVisible()
    expect(paragraph).toHaveStyle({
      color: defaultTheme.colors.secondary,
      'margin-block-start': '24px',
    })
  },
  args: {
    children: (
      <Container>
        <Title>Hello World</Title>
        <Paragraph role="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum earum
          nam repudiandae nulla exercitationem minima deserunt debitis! Libero
          maxime voluptatum modi, tempora iusto itaque ut culpa, animi eaque
          quaerat repellat?
        </Paragraph>
      </Container>
    ),
    customTheme: undefined,
    resetGlobalStyles: false,
  },
}

export const ResetGlobalStyles: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const paragraph = canvas.getByRole('paragraph')

    expect(paragraph).toHaveStyle({
      'margin-block-start': '0px',
    })
  },
  args: {
    children: (
      <Container>
        <Title>Hello World</Title>
        <Paragraph role="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum earum
          nam repudiandae nulla exercitationem minima deserunt debitis! Libero
          maxime voluptatum modi, tempora iusto itaque ut culpa, animi eaque
          quaerat repellat?
        </Paragraph>
      </Container>
    ),
    resetGlobalStyles: true,
  },
}

export const CustomTheme: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', {
      level: 1,
      name: 'Hello World',
    })

    expect(title).toBeVisible()
    expect(title).toHaveStyle({ color: '#eb17e1' })
  },
  args: {
    children: (
      <Container>
        <Title>Hello World</Title>
        <Paragraph role="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum earum
          nam repudiandae nulla exercitationem minima deserunt debitis! Libero
          maxime voluptatum modi, tempora iusto itaque ut culpa, animi eaque
          quaerat repellat?
        </Paragraph>
      </Container>
    ),
    resetGlobalStyles: true,
    customTheme: { colors: { primary: '#eb17e1' }, spacing: { m: '3rem' } },
  },
}
