import { ContentfulFile } from '@lib/contentful-sdk-types'

export const normalizeFile = (contentfulFile?: ContentfulFile) => {
  return contentfulFile?.file?.url
}
