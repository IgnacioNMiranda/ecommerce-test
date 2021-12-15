import React from 'react'
import { Filter } from '../../types/filter'
import { MlSelectedFilter } from '../MlSelectedFilter'

export interface MlSelectedFiltersProps {
  filters: Filter[]
  removeFilterHandler(filter: Filter): void
}

export const MlSelectedFilters = ({ filters, removeFilterHandler }: MlSelectedFiltersProps) => {
  return (
    <div className="flex flex-wrap items-start gap-2 lg:gap-x-7 lg:gap-y-2">
      {filters.map((filter, idx) => (
        <MlSelectedFilter key={idx} filter={filter} removeFilterHandler={removeFilterHandler} />
      ))}
    </div>
  )
}
