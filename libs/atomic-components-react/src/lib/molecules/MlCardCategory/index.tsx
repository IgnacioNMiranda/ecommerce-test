import React from 'react'
import { AtLink, AtButton, AtButtonProps } from '../../atoms'

export interface MlCardCategoryProps {
  title: string
  actionUrl: string
  imageUrl: string
  button: AtButtonProps
  className?: string
}

export const MlCardCategory = ({ title, actionUrl, imageUrl, button, className }: MlCardCategoryProps) => {
  return (
    <div
      className={`flex flex-col justify-between bg-cover bg-no-repeat p-0.5 ${className}`}
      style={{ backgroundImage: `url(${imageUrl})`, minHeight: 400 }}
    >
      <div className="mt-7 sm:mt-10">
        <p className="text-center text-2xl text-white">{title}</p>
      </div>

      {!!button && (
        <div className="flex justify-center mb-6 sm:mb-5 mt-6 mx-4">
          <AtLink actionUrl={actionUrl}>
            <AtButton {...button} />
          </AtLink>
        </div>
      )}
    </div>
  )
}
