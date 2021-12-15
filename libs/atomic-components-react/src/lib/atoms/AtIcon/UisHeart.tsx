import React from 'react'

export interface UisHeartProps {
  className?: string
  fill?: string
  size?: number
}

export const UisHeart = ({ className, fill, size = 24 }: UisHeartProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className}>
      <path
        fill={fill}
        d="M20.16 5A6.29 6.29 0 0012 4.36a6.27 6.27 0 00-8.16 9.48l6.21 6.22a2.78 2.78 0 003.9 0l6.21-6.22a6.27 6.27 0 000-8.84z"
      />
    </svg>
  )
}
