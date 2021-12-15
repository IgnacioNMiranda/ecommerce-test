import { Target } from '@lib/react/types'
import { ContentfulFile } from './File'

export interface ContentfulLink {
  label?: string
  icon?: ContentfulFile
  target: Target
  actionUrl: string
  gtmData?: unknown
}
