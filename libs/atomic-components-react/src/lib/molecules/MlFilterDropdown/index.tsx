import React, { useState } from 'react'
import { AtIcon, AtLink } from '../../atoms'
import { FilterGroup, Filter } from '../../types/filter'
import { MlDropdownElements } from '../MlDropdownElements'

export interface MlFilterDropdownProps {
  filterGroup: FilterGroup
  addFilterHandler(filter: Filter): void
}

export const MlFilterDropdown = ({ filterGroup, addFilterHandler }: MlFilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AtLink className="w-full" onClick={() => setIsOpen(!isOpen)}>
        <div className="pt-0.5 pb-1 flex justify-between cursor-pointer">
          <p className="inline font-medium leading-5 text-neutral-dark">{filterGroup.category}</p>
          <AtIcon type={isOpen ? 'angle-up' : 'angle-down'} />
        </div>
      </AtLink>
      {isOpen && (
        <div className="my-4">
          <MlDropdownElements filters={filterGroup.filters} addFilterHandler={addFilterHandler} />
        </div>
      )}
    </>
  )
}
