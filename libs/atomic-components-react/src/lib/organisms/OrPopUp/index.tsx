import React from 'react'
import { AtIcon, AtButton, AtButtonProps } from '../../atoms'

export interface OrPopUpProps {
  imageUrl?: string
  imageAlt?: string
  hasIcon: boolean
  title: string
  paragraph: string
  button2?: AtButtonProps
  button1: AtButtonProps
}

export const OrPopUp = ({ imageUrl, imageAlt, hasIcon, title, paragraph, button2, button1 }: OrPopUpProps) => {
  const hasImage = imageUrl && imageAlt
  const titleClasses = hasIcon ? '-mt-2' : 'mt-10'

  return (
    <div
      style={{ maxWidth: 633, minWidth: 300, minHeight: 208 }}
      className="p-0.5 bg-white rounded relative border-neutral-light shadow-lg"
    >
      {hasIcon && (
        <div className="flex justify-end mt-7 mr-7">
          <AtIcon size={18} color="neutral-dark" type="multiply" />
        </div>
      )}

      {hasImage && (
        <div className="flex justify-center">
          <div className="ml-7 mr-7 mt-3 mb-4">
            <img
              style={{ minWidth: 243, maxWidth: 434 }}
              className="object-cover w-full h-full"
              src={imageUrl}
              alt={imageAlt}
            />
          </div>
        </div>
      )}

      <div
        className={`${hasImage ? 'text-center' : `${titleClasses} ml-11`} text-xl font-medium text-neutral-dark mb-2`}
      >
        {title}
      </div>

      <p className={`${hasImage ? 'text-center' : 'text-base'} mb-4 text-neutral-dark ml-12 mr-12  sm:ml-11 sm:mr-14`}>
        {paragraph}
      </p>

      <div className={`${hasImage ? 'text-center' : 'sm:text-right'} text-center sm:justify-center mb-6`}>
        {button2 && (
          <AtButton className={`${hasImage ? '' : 'sm:ml-9'} text-sm font-bold text-secondary sm:mr-2`} {...button2} />
        )}
        <AtButton
          className={`${hasImage ? '' : 'sm:mr-9'} text-sm font-bold text-white hover:bg-secondary-dark`}
          {...button1}
        />
      </div>
    </div>
  )
}
