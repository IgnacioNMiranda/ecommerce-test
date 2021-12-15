import { FormEvent } from 'markdown-to-jsx/node_modules/@types/react'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { AtBaseInput, AtBaseInputProps, AtButton, AtButtonProps, AtLink } from '../../atoms'
import { CloseIcon } from './CloseIcon'

export interface OrFooterNewsLetterProps {
  title: string
  subTitle: string
  input: AtBaseInputProps
  button: AtButtonProps
  hidden?: boolean
  className?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export const OrFooterNewsLetter = ({
  title,
  subTitle,
  input,
  button,
  hidden,
  className,
  onSubmit,
}: OrFooterNewsLetterProps) => {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    if (hidden !== undefined) {
      setIsHidden(hidden)
    }
  }, [hidden])

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      onSubmit(event)
    }
    setIsHidden(true)
  }

  const handleOnClose = () => {
    setIsHidden(true)
  }

  if (isHidden) {
    return null
  }

  return (
    <div className={className ?? ''}>
      <div className="relative flex flex-col sm:flex-row lg:flex-col justify-center sm:items-center sm:justify-start lg:justify-center lg:items-start h-72 sm:h-40 text-white bg-secondary">
        <CloseIcon handleOnClose={handleOnClose} />
        <div className="inline-grid lg:grid-cols-2 justify-center sm:justify-start xl:pl-24 xl:grid-cols-3 lg:pl-11 sm:gap-3 xl:gap-0">
          {title && (
            <p className="leading-4 font-bold xl:mr-24 pb-10 px-8 sm:px-0 sm:pb-0 mt-2 sm:mt-0 max-w-xs sm:max-w-full text-center sm:pl-11 sm:text-left lg:pt-0 lg:pl-0">
              {title}
            </p>
          )}
          <form
            onSubmit={handleOnSubmit}
            className="flex-col sm:flex-row flex items-center sm:pl-11 lg:pl-0 lg:row-span-2 lg:items-center lg:col-span-2"
          >
            {!!input && (
              <AtBaseInput className="text-neutral rounded-none h-10 pl-5 w-full sm:w-64 sm:mr-6 lg:w-80" {...input} />
            )}
            {!!button && (
              <AtButton
                {...button}
                buttonType="submit"
                className="focus:outline-none rounded-none font-bold mt-5 h-9 w-60 sm:mt-0 sm:w-36 border-2 border-white mb-8 sm:mb-0"
              />
            )}
          </form>
          {subTitle && (
            <AtLink
              className="flex justify-center col-start-1 sm:justify-start xl:pt-2 sm:text-left sm:pl-11 lg:self-end lg:mt-0 lg:pb-0 lg:pl-0 mb-8 sm:mb-0"
              label={subTitle}
            />
          )}
        </div>
      </div>
    </div>
  )
}
