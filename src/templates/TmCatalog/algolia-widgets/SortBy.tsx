/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { AtButton, AtButtonTypes, AtIcon, AtLink } from '@lib/react'
import { connectSortBy } from 'react-instantsearch-core'

export const SortByButton = ({ items, refine }) => {
  const [isOpen, setIsOpen] = useState(false)
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

  return (
    <div className="relative w-40 md:w-44 lg:w-56 h-10" ref={selectRef}>
      <AtButton type={AtButtonTypes.PRIMARY} onClick={() => setIsOpen(!isOpen)} className="w-full">
        <div className="flex items-center lg:content-between">
          <span>Sort by</span>
          <AtIcon type={isOpen ? 'angle-up' : 'angle-down'} color="secondary" />
        </div>
      </AtButton>
      {isOpen && (
        <div className="absolute z-10 mt-0.5 md:mt-2 lg:mt-0 py-3 pl-4 lg:pl-5 pr-1 w-full bg-primary">
          <div className="flex flex-col gap-1.5 md:gap-1">
            {items.map((item) => (
              <AtLink
                label={item.label}
                key={item.value}
                className="text-sm md:text-base leading-5 md:leading-6 text-secondary lg:text-neutral-dark hover:underline cursor-pointer"
                onClick={(event) => {
                  event.preventDefault()
                  refine(item.value)
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export const SortBy = connectSortBy(SortByButton)
