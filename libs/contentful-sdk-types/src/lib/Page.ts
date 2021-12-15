import { ContentfulTemplate } from '.'
import { ContentfulBlock } from './Block'
import { ContentfulFooter } from './Footer'
import { ContentfulNavbar } from './Navbar'

export interface ContentfulPage {
  title: string
  slug: string
  navbar: ContentfulNavbar
  template?: ContentfulTemplate
  blocks?: ContentfulBlock[]
  footer: ContentfulFooter
}
