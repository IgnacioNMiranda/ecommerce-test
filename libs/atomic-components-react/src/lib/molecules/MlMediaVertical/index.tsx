import React from 'react'
import { AtButton, AtButtonProps, AtIcon, AtIconProps, AtImage } from '../../atoms'

export interface MlMediaVerticalProps {
  title: string
  subtitle: string
  imageSrc?: string
  imageAlt?: string
  icon?: AtIconProps
  button?: AtButtonProps
  className?: string
}

export const MlMediaVertical = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  icon,
  button,
  className,
}: MlMediaVerticalProps) => {
  return (
    <div className={`text-neutral-dark p-4 text-center w-full ${className ?? ''}`}>
      {!!icon && (
        <figure className="flex justify-center mb-4">
          <AtIcon {...icon} />
        </figure>
      )}
      {imageSrc && (
        <figure className="mb-8">
          <AtImage src={imageSrc} alt={imageAlt} className="inline" />
        </figure>
      )}
      <h5 className="text-xl font-bold mb-2">{title}</h5>
      <p className={`${button ? 'mb-16' : 'mb-4'} w-full`}>{subtitle}</p>
      {button && (
        <AtButton
          className="text-sm font-medium text-secondary inline-flex items-center justify-center px-8 py-2 tracking-wide bg-primary hover:bg-secondary-light uppercase mb-4"
          {...button}
        />
      )}
    </div>
  )
}
