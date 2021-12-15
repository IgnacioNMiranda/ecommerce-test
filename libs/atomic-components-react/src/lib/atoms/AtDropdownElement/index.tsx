import React from 'react'
import { Filter } from '../../types/filter'

export interface AtDropdownElementProps {
  filter: Filter
  addFilterHandler(filter: Filter): void
}

export const AtDropdownElement = ({ filter, addFilterHandler }: AtDropdownElementProps) => {
  const { category, name, variant, isSelected } = filter

  const onClick = () => addFilterHandler(filter)

  const sizeVariantBorder = isSelected ? 'border-neutral-dark' : 'border-secondary-light border-opacity-50'
  const colorVariantBorder = !isSelected ? 'border-transparent' : ''

  switch (category?.toLowerCase()) {
    case 'size':
      return (
        <button
          type="button"
          className={`${sizeVariantBorder} border flex items-center justify-center w-12 h-10 focus:border-neutral-dark focus:outline-none`}
          onClick={onClick}
        >
          <span className="text-neutral-dark leading-4">{name}</span>
        </button>
      )

    case 'color':
      return (
        <button
          type="button"
          className={`${colorVariantBorder} border flex flex-col gap-1 items-center justify-center w-12 h-10 focus:border-neutral-dark focus:outline-none`}
          onClick={onClick}
        >
          {/* Hex color */}
          <div className="rounded-full w-4 h-4" style={{ backgroundColor: variant }} />
          <div className="text-neutral-dark text-xs leading-3">{name}</div>
        </button>
      )
    default:
      break
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs md:text-base lg:text-sm leading-3 md:leading-5 text-neutral-dark focus:outline-none w-full text-left"
    >
      {name}
    </button>
  )
}
