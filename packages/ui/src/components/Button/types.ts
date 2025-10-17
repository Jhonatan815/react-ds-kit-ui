import type { ReactNode } from 'react'

export interface ButtonProps {
  /**
   * Content of the button
   */
  children: ReactNode
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean
  /**
   * If true, the button will be in a loading state
   */
  isLodiang?: boolean
  /**
   * Function to be called when the button is clicked
   */
  onClick?: () => void
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
