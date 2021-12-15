import React from 'react'

export interface AtSeparatorProps {
  className?: string
}

export const AtSeparator = ({ className }: AtSeparatorProps) => {
  return <hr className={`${className} border-secondary-light`} />
}
