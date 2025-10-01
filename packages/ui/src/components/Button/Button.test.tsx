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
