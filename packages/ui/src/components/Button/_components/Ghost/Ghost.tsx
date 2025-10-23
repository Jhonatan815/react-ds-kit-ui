/* eslint-disable react/button-has-type */
import clsx from 'clsx'
import type { JSX } from 'react'
import { Icon } from '../../../Icon'
import type { GhostProps } from '../../types'

const Ghost = ({
  children,
  className,
  disabled,
  isLoading,
  onClick,
  type = 'button',
}: GhostProps): JSX.Element => {
  return (
    <button
      className={clsx(
        'focus-visible:outline-secondary relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-4xl px-4 focus-visible:outline-2 disabled:cursor-not-allowed',
        'text-primary hover:bg-primary/20 disabled:text-gray-400 disabled:hover:bg-gray-200',
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span className='truncate'>{children}</span>
      {isLoading && (
        <Icon className='animate-spin' height={24} icon='loading' width={24} />
      )}
    </button>
  )
}

export default Ghost
