import React from 'react'
import { AtLink } from '../../atoms'

export interface MlMessageErrorProps {
  title: string
  paragraph: string
  actionUrl1?: string
  normalLabelButton1?: string
  boldLabelButton1?: string
  actionUrl2?: string
  normalLabelButton2?: string
  boldLabelButton2?: string
}

export const MlMessageError = ({
  title,
  paragraph,
  actionUrl1,
  normalLabelButton1,
  boldLabelButton1,
  actionUrl2,
  normalLabelButton2,
  boldLabelButton2,
}: MlMessageErrorProps) => {
  return (
    <div
      style={{ minWidth: 320, minHeight: 311 }}
      className="text-center bg-tertiary-light shadow-sm p-0.5 border-dashed border-neutral-dark"
    >
      <div className="text-xl sm:text-2xl mt-9 sm:mt-14">{title}</div>

      <div style={{ maxWidth: 351 }} className="inline-block mt-7 sm:mt-3">
        {paragraph}
      </div>

      <div className="mt-5">
        <AtLink actionUrl={actionUrl1} className="text-base text-secondary">
          {normalLabelButton1} <strong className="font-bold">{boldLabelButton1}</strong>
        </AtLink>
      </div>

      <div className="mt-4">
        <AtLink actionUrl={actionUrl2} className="text-base text-secondary">
          {normalLabelButton2} <strong className="font-bold">{boldLabelButton2}</strong>
        </AtLink>
      </div>
    </div>
  )
}
