import React from 'react'
import { Filter } from '../../types/filter'
import { AtDropdownElement } from '../../atoms'

export interface MlDropdownElementsProps {
  filters: Filter[]
  addFilterHandler(filter: Filter): void
}

export const MlDropdownElements = ({ filters, addFilterHandler }: MlDropdownElementsProps) => {
  if (filters[0]?.category?.toLowerCase() !== 'color' && filters[0]?.category?.toLowerCase() !== 'size') {
    return (
      <div className="flex flex-col gap-4 items-start">
        {filters.map((filter, idx) => (
          <AtDropdownElement filter={filter} addFilterHandler={addFilterHandler} key={idx} />
        ))}
      </div>
    )
  }
  return (
    <div
      className="grid gap-1 md:w-11/12 lg:w-4/5"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))' }}
    >
      {filters.map((filter, idx) => (
        <AtDropdownElement filter={filter} addFilterHandler={addFilterHandler} key={idx} />
      ))}
    </div>
  )
}
