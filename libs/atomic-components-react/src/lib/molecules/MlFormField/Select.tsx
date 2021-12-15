/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { SelectHTMLAttributes, useEffect, useRef, useState } from 'react'
import { SelectOption } from '.'
import { AtIcon } from '../../atoms'

export interface MlSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
}

const baseClass =
  'appearance-none border border-neutral focus:outline-none focus:ring-1 focus:ring-neutral h-10 pl-6 pr-12 py-2 w-full cursor-pointer'

export const Select = ({ options, className = '', placeholder }: MlSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectOption>()
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectRef])

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  const handleSetValue = (option: SelectOption) => {
    if (option.disabled) {
      return
    }

    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={selectRef}>
      <div
        className="absolute inset-y-0 right-4 flex items-center"
        role="button"
        aria-hidden
        onClick={() => setIsOpen(!isOpen)}
      >
        <AtIcon type={isOpen ? 'angle-up' : 'angle-down'} size={20} />
      </div>

      <div>
        <input
          className={`${baseClass} ${className}`}
          placeholder={placeholder}
          onClick={() => setIsOpen(!isOpen)}
          value={selectedOption?.label ?? ''}
          readOnly
        />

        {isOpen && (
          <div className="absolute w-full border border-neutral border-t-0 z-50">
            {options?.map((option, index) => (
              <div
                key={index}
                className={`px-6 bg-white hover:bg-neutral-light py-2 ${option.disabled ? 'text-secondary' : ''}`}
                role="button"
                aria-hidden
                onClick={() => handleSetValue(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
