import React from 'react'
import { Filter } from '../../types/filter'
import { AtIcon } from '../../atoms'

export interface MlSelectedFilterProps {
  filter: Filter
  removeFilterHandler(filter: Filter): void
}

export const MlSelectedFilter = ({ filter, removeFilterHandler }: MlSelectedFilterProps) => {
  const text = filter.hideCategory ? filter.name : `${filter.category}: ${filter.name}`

  const onClick = () => removeFilterHandler(filter)

  return (
    <div className="bg-primary rounded pl-2 inline-flex gap-1 items-center">
      <span className="text-neutral-dark text-sm leading-4 tracking-wider">{text}</span>
      <button type="button" className="focus:outline-none" style={{ transform: 'scale(0.6)' }} onClick={onClick}>
        <AtIcon type="multiply" color="neutral-dark" />
      </button>
    </div>
  )
}
