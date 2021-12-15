import { ContentfulButton } from '@lib/contentful-sdk-types'

export const normalizeButton = (button?: ContentfulButton) => {
  return button
    ? {
        ...button,
        children: button.label,
        icon: button.icon?.file.url,
        iconHover: button.iconHover?.file.url,
      }
    : null
}
