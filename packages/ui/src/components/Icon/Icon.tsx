import type { JSX } from 'react'
import * as Icons from './icons'
import type { IconSvg } from './types'

export type IconName = keyof typeof Icons

export const Icon = ({
  className,
  height,
  icon,
  stroke,
  width,
}: IconSvg): JSX.Element => {
  const SvgIcon = Icons[icon]
  return (
    <SvgIcon
      className={className}
      height={height}
      stroke={stroke}
      title={icon}
      width={width}
    />
  )
}
