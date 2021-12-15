import { ContentfulBlock, ContentfulTemplate } from '@lib/contentful-sdk-types'

export interface Page {
  template?: ContentfulTemplate
  blocks?: ContentfulBlock[]
}
