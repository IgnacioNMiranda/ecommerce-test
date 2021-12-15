import { ContentfulButton, ContentfulFile } from '.'

export interface ContentfulMediaVertical {
  title: string
  subtitle: string
  image?: ContentfulFile
  imageAlt?: string
  icon?: ContentfulFile
  button?: ContentfulButton
}
