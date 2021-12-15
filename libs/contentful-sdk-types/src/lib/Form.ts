import { FormColumn } from '@lib/react/types'
import { ContentfulButton } from './Button'

export interface ContentfulForm {
  title?: string
  subtitle?: string
  controls: ContentfulFormControl[]
  button: ContentfulButton
  columns: FormColumn
}

export interface ContentfulFormControl {
  type: string
  placeholder: string
}
