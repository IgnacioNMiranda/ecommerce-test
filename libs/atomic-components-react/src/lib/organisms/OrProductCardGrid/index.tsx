import React from 'react'
import { MlProductCard, MlProductCardProps } from '../../molecules/MlProductCard'

export interface OrProductCardGridProps {
  cards: MlProductCardProps[]
}

export const OrProductCardGrid = ({ cards }: OrProductCardGridProps) => {
  return (
    <div className="inline-grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-3 md:gap-6 lg:gap-x-20">
      {cards.map((cardProps, idx) => (
        <MlProductCard {...cardProps} key={idx} />
      ))}
    </div>
  )
}
