import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Button } from './Button'

const onClick = vi.fn()

const setupRender = () => {
  render(
    <Button size='big' variant='contained' onClick={onClick}>
      Click me
    </Button>,
  )
}

test('renders the button with correct text', () => {
  setupRender()

  const button = screen.getByRole('button', { name: 'Click me' })

  expect(button).toBeVisible()
})

test('calls alert with the correct message when clicked', async () => {
  setupRender()

  const button = screen.getByRole('button', { name: 'Click me' })

  await userEvent.click(button)

  expect(onClick).toHaveBeenCalled()
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
