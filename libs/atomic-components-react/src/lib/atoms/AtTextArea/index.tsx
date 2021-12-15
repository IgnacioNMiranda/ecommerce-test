import React, { TextareaHTMLAttributes } from 'react'

const baseClass = 'border border-neutral px-6 py-2 w-full focus:outline-none focus:ring-1 focus:ring-neutral'

export const AtTextArea = ({
  className = '',
  disabled,
  onChange,
  placeholder,
  readOnly,
  rows,
  defaultValue,
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={`${baseClass} ${className ?? ''}`}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      defaultValue={defaultValue}
    />
  )
}
