import React from 'react'
import { AtLink, AtLinkProps } from '../../atoms'

export interface MlCardProps {
  title: string
  paragraph: string
  imageSrc?: string
  imageAlt?: string
  link?: AtLinkProps
  className?: string
}

export const MlCard = ({ title, paragraph, imageSrc, imageAlt, link, className }: MlCardProps) => {
  return (
    <div className={`bg-white overflow-hidden shadow w-full ${className}`}>
      {imageSrc && <img className="object-cover w-full" src={imageSrc} alt={imageAlt} />}
      <div className="px-10 py-6">
        <h5 className={`${imageSrc ? 'text-lg' : 'text-xl sm:text-lg lg:text-xl'} font-bold text-neutral-dark mb-2`}>
          {title}
        </h5>
        <p className="text-gray-500 text-sm">{paragraph}</p>
        {link && (
          <div className="mt-1">
            <AtLink
              className="text-secondary font-bold"
              actionUrl={link.actionUrl}
              label={link.label}
              iconProps={{ type: 'arrow-right' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
