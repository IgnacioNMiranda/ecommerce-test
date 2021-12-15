import React from 'react'
import { AtIcon } from '../../../..'

export const SearchButton = ({
  onClick,
  className,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}) => {
  return (
    <button type="button" onClick={onClick} className={`focus:outline-none ${className ?? ''}`}>
      <AtIcon type="search" />
    </button>
  )
}
