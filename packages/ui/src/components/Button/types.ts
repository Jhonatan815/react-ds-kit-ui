export interface ButtonProps {
  /**
   * Additional classes to apply to button
   */
  className?: string
  /**
   * Content of the button
   */
  children: string
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean
  /**
   * If true, the button will be in a loading state
   */
  isLoading?: boolean
  /**
   * Function to be called when the button is clicked
   */
  onClick?: (_e: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Size of the button
   */
  size: 'small' | 'big'
  /**
   * If true, the button will be a skeleton
   */
  skeleton?: boolean
  /**
   * Type of the button
   */
  type?: 'button' | 'submit'
  /**
   * Variant of the button
   */
  variant: 'contained' | 'ghost' | 'outline'
}

export type ContainedProps = Omit<ButtonProps, 'variant' | 'skeleton' | 'size'>
export type GhostProps = Omit<ButtonProps, 'variant' | 'skeleton' | 'size'>
export type OutlineProps = Omit<ButtonProps, 'variant' | 'skeleton' | 'size'>
export type SkeletonProps = Pick<ButtonProps, 'className'>
