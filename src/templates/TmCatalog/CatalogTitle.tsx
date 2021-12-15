import React from 'react'

export interface CatalogTitleProps {
  text: string
}
export const CatalogTitle = ({ text }: CatalogTitleProps) => {
  return (
    <h1 className="text-center text-neutral-dark text-xl leading-7 font-medium md:text-2xl md:leading-10 md:tracking-wide">
      {text}
    </h1>
  )
}
