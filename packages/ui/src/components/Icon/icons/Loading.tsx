import type { JSX } from 'react'
import type { IconProps } from '../Icon'

const Loading = ({
  height = 32,
  stroke = 'currentColor',
  title,
  width = 32,
}: IconProps): JSX.Element => (
  <svg
    fill='none'
    height={height}
    role='img'
    stroke={stroke}
    strokeWidth='2'
    viewBox='0 0 24 24'
    width={width}
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>{title}</title>
    <circle cx='12' cy='12' r='10' strokeOpacity='0.25' />
    <path d='M12 2a10 10 0 0 1 10 10' />
  </svg>
)

export default Loading
