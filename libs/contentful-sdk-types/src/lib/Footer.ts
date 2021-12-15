import { ContentfulLink, ContentfulMenuItem } from '.'

export interface ContentfulFooter {
  brand: ContentfulLink
  description: string
  copyright: string
  menuItems: ContentfulMenuItem[]
  socialMediaHeading: string
  socialMediaItems: ContentfulLink[]
}
