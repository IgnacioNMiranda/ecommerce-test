import { ContentfulFile, ContentfulLink } from '.'

export interface ContentfulCard {
  title: string
  paragraph: string
  image?: ContentfulFile
  imageAlt?: string
  link?: ContentfulLink
}
