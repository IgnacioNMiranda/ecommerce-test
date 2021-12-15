import { ContentfulLink, ContentfulMenuItem } from '.'

export interface ContentfulNavbar {
  title: ContentfulLink
  menuItems?: ContentfulMenuItem[]
  icons: ContentfulLink[]
}
