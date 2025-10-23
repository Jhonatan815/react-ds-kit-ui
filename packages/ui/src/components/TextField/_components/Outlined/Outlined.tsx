import clsx from 'clsx'
import type { JSX } from 'react'
import type { OutlinedProps } from '../../types'

const Outlined = ({
  disabled,
  hasValue,
  id,
  label,
  onChange,
  size,
  value,
}: OutlinedProps): JSX.Element => {
  return (
    <div className='relative'>
      <input
        className={clsx(
          'peer hover:border-primary focus-visible:border-primary  w-full rounded-4xl border border-gray-400 px-6 focus:outline-none',
          {
            'h-12': size === 'big',
            'h-8': size === 'small',
          },
        )}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type='text'
        value={value}
      />
      {label && (
        <label
          className={clsx(
            'peer-focus:text-primary peer-hover:text-primary absolute left-0 text-gray-400 transition-all peer-focus:top-0.5 peer-focus:left-4 peer-focus:-translate-y-3 peer-focus:bg-white peer-focus:p-0 peer-focus:px-2 peer-focus:text-sm',
            {
              'top-0.5 left-4 m-0 -translate-y-3 bg-white px-2 text-sm':
                hasValue,
              'top-1/2 -translate-y-1/2 px-6': !hasValue,
            },
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default Outlined
