/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entry } from 'contentful'

export const cleanContentfulEntry = <T = unknown>(data: Entry<T>) => {
  let result: Partial<T> = {}
  const { fields } = data

  Object.keys(fields).forEach((key) => {
    if (fields[key].fields) {
      result = {
        ...result,
        [key]: cleanContentfulEntry(fields[key]),
      }

      if (key === 'template') {
        result[key] = {
          ...result[key],
          type: (fields as any).template.sys.contentType.sys.id,
        }
      }

      if (key === 'block') {
        result[key] = {
          ...result[key],
          type: fields[key].sys.contentType.sys.id,
        }
      }

      return
    }

    if (Array.isArray(fields[key])) {
      const hasFields = fields[key].some((item: Entry<any>) => !!item.fields)

      if (!hasFields) {
        result = { ...result, [key]: fields[key] }
        return
      }

      result = {
        ...result,
        [key]: fields[key].map((item: Entry<any>) => {
          const cleanedEntry = cleanContentfulEntry(item)

          if (key === 'blocks') {
            cleanedEntry.type = item.sys.contentType.sys.id
          }

          return cleanedEntry
        }),
      }

      return
    }

    result[key] = fields[key]
  })

  return result as T
}
