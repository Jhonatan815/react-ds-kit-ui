import type { Meta, StoryObj } from '@storybook/react'

import styled from 'styled-components'
import ThemeProvider from './ThemeProvider'

const meta = {
  component: ThemeProvider,
  title: 'Components/ThemeProvider',
} satisfies Meta<typeof ThemeProvider>

export default meta

type Story = StoryObj<typeof meta>

const Container = styled.div`
align-items: center;
background-color: beige;
display: flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing.s};
margin: 0 auto;
padding: ${({ theme }) => theme.spacing.s};
width: 50%;
`

const Title = styled.h1`
color: ${({ theme }) => theme.colors.primary};
font-size:${({ theme }) => theme.spacing['2xl']};
`
const Paragraph = styled.p`
color: ${({ theme }) => theme.colors.secondary};
font-size:${({ theme }) => theme.spacing.m};
`

const Children = () => (
  <Container>
    <Title>Hello World</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum earum nam
      repudiandae nulla exercitationem minima deserunt debitis! Libero maxime
      voluptatum modi, tempora iusto itaque ut culpa, animi eaque quaerat
      repellat?
    </Paragraph>
  </Container>
)

export const Default: Story = {
  args: {
    children: <Children />,
  },
}

export const ResetGlobalStyles: Story = {
  args: {
    children: <Children />,
    resetGlobalStyles: true,
  },
}

export const CustomTheme: Story = {
  args: {
    children: <Children />,
    resetGlobalStyles: true,
    customTheme: { colors: { primary: '#eb17e1' } },
  },
}
