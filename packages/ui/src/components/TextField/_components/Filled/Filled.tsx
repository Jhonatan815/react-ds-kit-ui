import clsx from 'clsx'
import type { JSX } from 'react'
import type { TextFieldProps } from '../../types'

const Filled = ({
  disabled,
  id,
  label,
  onChange,
  size,
  value,
}: TextFieldProps): JSX.Element => {
  return (
    <div className={clsx('relative box-border')}>
      <label
        className={clsx(
          'focus-within:text-primary hover:text-primary text-gray-400',
        )}
        htmlFor={id}
      >
        {label}
        <input
          className={clsx(
            'w-full rounded-t-sm border-b-2 border-gray-400 bg-gray-200 px-6 text-black',
            'focus-visible:bg-primary/20 focus-visible:border-primary hover:border-primary hover:bg-primary/20 focus:outline-none',
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
      </label>
    </div>
  )
}

export default Filled
