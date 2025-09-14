import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'
import { vi } from 'vitest'

test('renders the button with correct text', () => {
  render(<Button appName='TestApp'>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

test('calls alert with the correct message when clicked', async () => {
  const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

  render(<Button appName='TestApp'>Click me</Button>)

  await userEvent.click(screen.getByText('Click me'))

  expect(alertSpy).toHaveBeenCalledWith('Hello from your TestApp app!')

  alertSpy.mockRestore()
})

test('has the correct Tailwind classes', () => {
  render(<Button appName='TestApp'>Click me</Button>)
  const button = screen.getByText('Click me')
  expect(button).toHaveClass(
    'bg-emerald-600',
    'text-white',
    'px-4',
    'py-2',
    'rounded',
    'hover:bg-red-400'
  )
})
