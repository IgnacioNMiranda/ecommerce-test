import { ContentfulPage } from '@lib/contentful-sdk-types'
import { cleanContentfulEntry } from '../../utils'
import { client } from './client'

const getPageEntries = async <T = unknown>(query?: Record<string, unknown>) => {
  const result = await client.getEntries<T>({
    content_type: 'pgPage',
    ...query,
  })

  return result
}

export const getAllSlugs = async () => {
  const { items } = await getPageEntries<{ slug: string }>({
    select: 'fields.slug',
  })

  return items.map((item) => item.fields.slug)
}

export const getPageBySlug = async (slug: string): Promise<ContentfulPage | null> => {
  const collection = await getPageEntries<ContentfulPage>({ 'fields.slug': slug, include: 10 })
  const page = collection?.items && collection.items?.length ? collection.items[0] : null

  if (page) {
    return cleanContentfulEntry(page)
  }
  return null
}
