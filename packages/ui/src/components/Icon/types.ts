import type { IconName } from './Icon'

export interface IconProps {
  /**
   * Additional classes to apply to the icon
   */
  className?: string
  /**
   * Height of the icon
   */
  height?: string | number
  /**
   * Color of the icon
   */
  stroke?: string
  /**
   * Width of the icon
   */
  width?: string | number
  /**
   * Accessible title for the icon
   */
  title: string
}
export interface IconSvg extends Omit<IconProps, 'title'> {
  /**
   * Icon name
   */
  icon: IconName
}
