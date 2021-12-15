import React, { useState } from 'react'
import { AtIcon } from '..'

export type Ratings = 0 | 1 | 2 | 3 | 4 | 5

export interface AtRatingProps {
  stars?: Ratings
  initialRating?: Ratings
  onChange?: ({ selectedRating }: { selectedRating: Ratings }) => void
}

export const AtRating = ({ stars = 5, initialRating = 0, onChange }: AtRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(-1)
  const [selectedRatingIndex, setSelectedRatingIndex] = useState(initialRating - 1)

  const handleRatingSelected = (index: number) => {
    setSelectedRatingIndex(index)
    if (onChange) {
      onChange({ selectedRating: (index + 1) as Ratings })
    }
  }

  const ratingStars = Array(stars).fill(0)

  return (
    <div className="flex justify-items-center gap-0.5">
      {ratingStars.map((rating, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleRatingSelected(index)}
          className="relative focus:outline-none"
          onMouseEnter={() => setHoveredRating(index)}
          onMouseLeave={() => setHoveredRating(-1)}
        >
          <AtIcon type="star" color="tertiary-dark" size={24} />
          {((hoveredRating === -1 && index <= selectedRatingIndex) || index <= hoveredRating) && (
            <AtIcon
              type="solid-star"
              color="tertiary-dark"
              size={24}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          )}
        </button>
      ))}
    </div>
  )
}
