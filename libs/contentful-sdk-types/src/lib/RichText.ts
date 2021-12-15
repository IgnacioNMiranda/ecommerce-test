import { Document } from '@contentful/rich-text-types'

export interface ContentfulRichText {
  content: Document
  textAlignment: 'start' | 'center' | 'end'
}
