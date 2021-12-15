import { ContentfulButton } from './Button'
import { ContentfulFile } from './File'
import { ContentfulRichText } from './RichText'

export interface ContentfulContentStrip {
  images: ContentfulFile[]
  imagePosition?: 'left' | 'right'
  textColumns: 1 | 2
  paragraphs: ContentfulRichText[]
  button: ContentfulButton
}
