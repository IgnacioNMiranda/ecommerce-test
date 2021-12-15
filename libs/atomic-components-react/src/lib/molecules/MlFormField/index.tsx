/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { AtBaseInput, AtTextArea } from '../../atoms'
import { Select } from './Select'

export type MlFormFieldType = 'input' | 'select' | 'textarea'

export interface SelectOption {
  label: string
  value: any
  disabled?: boolean
}

export interface MlFormFieldProps {
  type: MlFormFieldType
  placeholder?: string
  defaultValue?: any
  options?: SelectOption[]
  cols?: number
  rows?: number
}

export const MlFormField = ({ type, placeholder, defaultValue, options = [], cols, rows }: MlFormFieldProps) => {
  switch (type) {
    case 'input':
      return <AtBaseInput placeholder={placeholder} defaultValue={defaultValue} />

    case 'select':
      return <Select options={options} placeholder={placeholder} />

    case 'textarea':
      return <AtTextArea placeholder={placeholder} defaultValue={defaultValue} cols={cols} rows={rows} />

    default:
      return null
  }
}
