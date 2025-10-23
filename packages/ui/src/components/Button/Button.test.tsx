import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Button } from './Button'
import { ButtonProps } from './types'

type TestProps = {
  isLoading?: ButtonProps['isLoading']
  variant?: ButtonProps['variant']
}

const onClick = vi.fn()

const setupRender = ({ isLoading, variant = 'contained' }: TestProps = {}) => {
  render(
    <Button
      size='big'
      variant={variant}
      onClick={onClick}
      isLoading={isLoading}
    >
      Click me
    </Button>,
  )
}

test('renders button with correct text', () => {
  setupRender()

  const button = screen.getByRole('button', { name: 'Click me' })

  expect(button).toBeVisible()
})

test('adds a ripple span on click and calls remove after the animation duration', async () => {
  const removeSpy = vi.spyOn(Element.prototype, 'remove')

  setupRender()

  const button = screen.getByRole('button', { name: 'Click me' })

  await userEvent.click(button)
  const ripple = button.querySelector('.ripple')

  expect(ripple).toBeInTheDocument()
  await userEvent.click(button)

  expect(removeSpy).toHaveBeenCalled()
})

test('should render loading contained button', () => {
  setupRender({ isLoading: true, variant: 'contained' })

  const icon = screen.getByRole('img', { name: 'loading' })

  expect(icon).toBeInTheDocument()
  expect(icon).toBeVisible()
})

test('should render loading ghost button', () => {
  setupRender({ isLoading: true, variant: 'ghost' })

  const icon = screen.getByRole('img', { name: 'loading' })

  expect(icon).toBeInTheDocument()
  expect(icon).toBeVisible()
})

test('should render loading outline button', () => {
  setupRender({ isLoading: true, variant: 'outline' })

  const icon = screen.getByRole('img', { name: 'loading' })

  expect(icon).toBeInTheDocument()
  expect(icon).toBeVisible()
})
