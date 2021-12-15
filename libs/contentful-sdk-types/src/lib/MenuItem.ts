import { ContentfulLink } from './Link'

export interface ContentfulMenuItem {
  title: ContentfulLink
  children: (ContentfulLink | ContentfulMenuItem)[]
}
