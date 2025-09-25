import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Button } from './Button'

const setupRender = () => {
  render(<Button appName='TestApp'>Click me</Button>)
}

test('renders the button with correct text', () => {
  setupRender()

  const button = screen.getByRole('button', { name: 'Click me' })

  expect(button).toBeVisible()
})

test('calls alert with the correct message when clicked', async () => {
  const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

  setupRender()

  const button = screen.getByRole('button', { name: 'Click me' })

  await userEvent.click(button)

  expect(alertSpy).toHaveBeenCalledWith('Hello from your TestApp app!')

  alertSpy.mockRestore()
})
