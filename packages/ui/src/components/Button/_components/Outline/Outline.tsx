/* eslint-disable react/button-has-type */
import clsx from 'clsx'
import type { JSX } from 'react'
import { Icon } from '../../../Icon'
import type { OutlineProps } from '../../types'

const Outline = ({
  children,
  className,
  disabled = false,
  isLoading = false,
  onClick,
  type = 'button',
}: OutlineProps): JSX.Element => {
  return (
    <button
      className={clsx(
        'focus-visible:outline-secondary relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl px-4 focus-visible:outline-2 disabled:cursor-not-allowed',
        'hover:bg-primary/80 text-primary border-primary border bg-transparent hover:text-white disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-gray-200',
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

export default Outline
