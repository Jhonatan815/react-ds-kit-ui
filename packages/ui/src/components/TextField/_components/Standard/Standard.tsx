import clsx from 'clsx'
import type { JSX } from 'react'
import type { StandardProps } from '../../types'

const Standard = ({
  disabled,
  hasValue,
  id,
  label,
  onChange,
  size,
  value,
}: StandardProps): JSX.Element => {
  return (
    <div className='relative'>
      <input
        className={clsx(
          'peer focus-visible:border-primary hover:border-primary w-full border-b-2 border-gray-500 outline-0',
          {
            'h-12': size === 'big',
            'h-8': size === 'small',
          },
        )}
        disabled={disabled}
        id={id}
        onChange={onChange}
        value={value}
      />
      <label
        className={clsx(
          'absolute text-gray-500 transition-all',
          {
            'top-0 left-0 m-0 -translate-y-3 bg-transparent text-sm': hasValue,
            'top-1/2 left-0 -translate-y-1/2': !hasValue,
          },
          'peer-focus-visible:text-primary peer-hover:text-primary peer-focus-visible:top-0 peer-focus-visible:-translate-y-3 peer-focus-visible:text-sm',
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Standard
