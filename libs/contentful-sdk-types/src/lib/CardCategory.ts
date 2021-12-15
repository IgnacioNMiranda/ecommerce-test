import { ContentfulButton, ContentfulFile } from '.'

export interface ContentfulCardCategory {
  title: string
  actionUrl: string
  image: ContentfulFile
  button: ContentfulButton
}
