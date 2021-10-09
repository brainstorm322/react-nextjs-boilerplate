import React from 'react'
import cx from 'classnames'

export type InputProps = {
  fullWidth?: boolean
  filled?: boolean
  readOnly?: boolean
  value?: string
  invalid?: boolean
  type?: 'text' | 'date' | 'time' | 'email' | 'number' | 'tel' | 'password'
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      fullWidth = false,
      disabled = false,
      invalid = false,
      onFocus,
      onBlur,
      type,
      className,
      ...rest
    } = props

    return (
      <div
        className={cx('relative inline-flex', {
          'w-full': fullWidth,
        })}
      >
        <input
          className={cx(
            'h-10 focus:outline-none bg-transparent border rounded-lg px-3 py-2 appearance-none',
            'bg-white placeholder-gray-500',
            'text-sm appearance-none w-full block',
            {
              'border-red-600 text-red-900': invalid,
              'border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-1':
                !invalid,
            },
            className,
          )}
          {...rest}
          ref={ref}
          disabled={disabled}
        />
      </div>
    )
  },
)

export default Input
