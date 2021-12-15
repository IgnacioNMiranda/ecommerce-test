import React, { FormHTMLAttributes } from 'react'
import { FormColumn, formColumnsClasses } from '../..'
import { AtButton, AtButtonProps } from '../../atoms'
import { MlFormField, MlFormFieldProps } from '../../molecules/MlFormField'

export interface OrFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title?: string
  subtitle?: string
  controls: MlFormFieldProps[]
  button: AtButtonProps
  columns: FormColumn
}

export const OrForm = ({ title, subtitle, controls, button, columns, className = '', onSubmit }: OrFormProps) => {
  const isOneColumn = columns === FormColumn.ONE
  const titleClasses = isOneColumn
    ? 'text-base sm:text-lg font-bold mb-3 leading-5 sm:leading-6'
    : 'text-xl sm:text-2xl font-medium mb-3 leading-6 sm:leading-10'
  const titleStyle = { letterSpacing: isOneColumn ? 0.2 : 0.5 }

  const subtitleClasses = isOneColumn
    ? 'text-sm sm:text-base leading-5 sm:leading-6'
    : 'text-lg sm:text-xl font-normal leading-5 sm:leading-6'
  const subtitleStyle = { letterSpacing: 0.2 }

  const headingsClasses = isOneColumn ? 'text-neutral-dark mb-5' : 'text-center text-white sm:mt-4 mb-8 sm:mb-12'
  const formClasses = isOneColumn ? '' : ' bg-secondary p-8'

  const gapClasses = isOneColumn ? 'gap-6' : 'gap-4 sm:gap-5'

  return (
    <form noValidate className={`w-full ${formClasses} ${className}`} onSubmit={onSubmit}>
      {(!!title || !!subtitle) && (
        <div className={headingsClasses}>
          {!!title && (
            <h4 className={titleClasses} style={titleStyle}>
              {title}
            </h4>
          )}
          {!!subtitle && (
            <h6 className={subtitleClasses} style={subtitleStyle}>
              {subtitle}
            </h6>
          )}
        </div>
      )}

      <div className={`grid grid-cols-1 gap-6 ${formColumnsClasses[columns]} ${gapClasses} mb-5`}>
        {controls.map((control, index) => (
          <MlFormField key={index} {...control} />
        ))}

        <AtButton {...button} className={`${isOneColumn ? 'mt-2' : 'mt-4 sm:mt-5 col-span-1 sm:col-span-2'}`} />
      </div>
    </form>
  )
}
