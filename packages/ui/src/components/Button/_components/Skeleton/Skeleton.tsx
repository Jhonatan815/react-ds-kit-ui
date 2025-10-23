import clsx from 'clsx'
import type { JSX } from 'react'
import type { SkeletonProps } from '../../types'

const Skeleton = ({ className }: SkeletonProps): JSX.Element => {
  return (
    <button
      aria-busy='true'
      aria-label='Loading content'
      className={clsx(
        'focus-visible:outline-secondary w-full animate-pulse rounded-4xl bg-gray-300 focus-visible:outline-2',
        className,
      )}
      type='button'
    />
  )
}

export default Skeleton
