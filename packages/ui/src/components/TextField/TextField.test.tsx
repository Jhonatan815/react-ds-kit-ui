import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { TextField } from './TextField'

const onChange = vi.fn()

const setupRender = ({ disabled = false } = {}) => {
  render(
    <TextField
      id='test-input'
      disabled={disabled}
      label='Test label'
      onChange={onChange}
    />,
  )
}

test('should render input', () => {
  setupRender()

  const input = screen.getByRole('textbox', { name: 'Test label' })

  expect(input).toBeInTheDocument()
  expect(input).toBeVisible()
})

test('should render disabled input', () => {
  setupRender({ disabled: true })

  const input = screen.getByRole('textbox', { name: 'Test label' })

  expect(input).toBeDisabled()
})

test('should call onChange when typing', async () => {
  setupRender()

  const input = screen.getByRole('textbox', { name: 'Test label' })

  await userEvent.type(input, 'any_text')

  expect(onChange).toHaveBeenCalledTimes(8)
})
