import type { JSX } from 'react'
import * as Icons from './icons'

export type IconName = keyof typeof Icons

export interface IconProps {
  height?: string | number
  stroke?: string
  title: string
  width?: string | number
}
export interface IconSvg extends Omit<IconProps, 'title'> {
  /** Icon name */
  icon: IconName
}

export const Icon = ({ height, icon, stroke, width }: IconSvg): JSX.Element => {
  const SvgIcon = Icons[icon]
  return <SvgIcon height={height} stroke={stroke} title={icon} width={width} />
}
