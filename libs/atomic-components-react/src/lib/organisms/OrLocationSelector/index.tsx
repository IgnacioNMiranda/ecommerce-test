import React, { FormEventHandler } from 'react'
import { MlFormField } from '../../molecules'
import { AtButton, AtSeparator } from '../../atoms'
import { AtButtonTypes } from '../../types'
import { SelectOption } from '../../molecules/MlFormField'

export interface OrLocationSelectorProps {
  countryOptions: SelectOption[]
  languageOptions: SelectOption[]
  onSubmit: FormEventHandler<HTMLFormElement>
}

export const OrLocationSelector = ({ countryOptions, languageOptions, onSubmit }: OrLocationSelectorProps) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full bg-secondary-dark opacity-40 absolute" style={{ minHeight: 1095 }} />
      <div
        className="relative mx-auto sm:absolute sm:right-0 bg-tertiary-light z-10"
        style={{ width: 524, minHeight: 1095 }}
      >
        <div className="flex flex-col">
          <h3 className="text-2xl text-center text-neutral-dark mt-7 mb-8 leading-tight" style={{ letterSpacing: 0.5 }}>
            Select location
          </h3>
          <p className="text-base text-center text-neutral-dark mx-16 leading-tight tracking-wide">
            Dear customer, this shop only makes deliveries to US. Which shop would you like to visit?
          </p>

          <AtSeparator className="mt-8 mb-9 mx-11" />

          <form onSubmit={onSubmit} className="flex flex-col items-center mx-20">
            <div className="mb-6 w-full">
              <MlFormField type="select" options={countryOptions} placeholder="Country" />
            </div>

            <div className="mb-14 w-full">
              <MlFormField type="select" options={languageOptions} placeholder="Language" />
            </div>

            <div>
              <AtButton type={AtButtonTypes.SECONDARY}>Continue</AtButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
