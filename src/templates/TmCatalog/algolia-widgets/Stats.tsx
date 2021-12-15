import React from 'react'
import { connectStats, StatsProvided } from 'react-instantsearch-core'

const Stats = ({ nbHits }: StatsProvided) => {
  let text: string
  switch (nbHits) {
    case 0:
      text = 'No items'
      break
    case 1:
      text = '1 item'
      break
    default:
      text = `${nbHits} items`
      break
  }

  return <div className="text-right text-sm leading-4 lg:text-base lg:leading-5">{text}</div>
}

export const StatsAlgolia = connectStats(Stats)
