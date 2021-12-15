import { ContentfulBlock, ContentfulMenuItem } from '.'

export enum ContentfulTemplateType {
  TmSidebar = 'tmSidebar',
  TmCatalog = 'tmCatalog',
}

export interface ContentfulTemplate {
  blocks: ContentfulBlock[]
  menuItems: ContentfulMenuItem[]
  type: ContentfulTemplateType
}
