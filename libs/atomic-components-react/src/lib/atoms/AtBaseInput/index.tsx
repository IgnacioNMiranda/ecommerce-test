import React, { InputHTMLAttributes, ReactNode } from 'react'
import { AtIcon } from '../AtIcon'
import { IconType } from '../AtIcon/icon-types'

export interface AtBaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType | ReactNode
  error?: boolean
}

const baseClass = 'border border-neutral focus:outline-none focus:ring-1 focus:ring-neutral'

export const AtBaseInput = ({
  className,
  disabled,
  onChange,
  placeholder,
  readOnly,
  type,
  defaultValue,
  icon,
  error,
  value,
  required,
}: AtBaseInputProps) => {
  const sizeClass = type !== 'radio' && type !== 'checkbox' ? 'h-10 px-6 w-full' : ''
  const statusClass = error ? 'bg-tertiary' : ''
  const hasIcon = !!icon || error
  const paddingClass = hasIcon ? 'pr-10' : ''
  const inputClassName = `${baseClass} ${sizeClass} ${statusClass} ${paddingClass} ${className ?? ''}`

  return (
    <div className="relative">
      {hasIcon && (
        <div className="absolute inset-y-0 right-4 flex items-center">
          {typeof icon === 'string' ? (
            <AtIcon type={error ? 'times' : (icon as IconType)} size={20} />
          ) : (
            (icon as ReactNode)
          )}
        </div>
      )}

      <input
        className={inputClassName}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        defaultValue={defaultValue}
        value={value}
        required={required}
      />
    </div>
  )
}
