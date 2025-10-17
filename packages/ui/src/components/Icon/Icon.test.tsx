import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'

const setupRender = () => {
  render(<Icon stroke='blue' height={50} width={50} icon='loading' />)
}

test('should render icon', () => {
  setupRender()

  const icon = screen.getByRole('img', { name: 'loading' })

  expect(icon).toBeVisible()

  expect(icon).toHaveAttribute('height', '50')
  expect(icon).toHaveAttribute('stroke', 'blue')
  expect(icon).toHaveAttribute('width', '50')
})
