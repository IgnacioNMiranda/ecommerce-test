import React from 'react'
import { connectCurrentRefinements, CurrentRefinementsProvided } from 'react-instantsearch-core'
import { AtIcon } from '../../../..'

const ClearHits = ({ items, refine }: CurrentRefinementsProvided) => {
  return (
    <button
      onClick={() => {
        refine(items)
      }}
      disabled={!items.length}
      type="button"
      className="focus:outline-none cursor-pointer"
    >
      <AtIcon type="times" />
    </button>
  )
}

export const ClearHitsButton = connectCurrentRefinements(ClearHits)
