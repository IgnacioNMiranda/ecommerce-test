import { Target, AtButtonTypes, AtButtonActionType, AtButtonIconPosition } from '@lib/react/types'
import { ContentfulFile } from '.'

export interface ContentfulButton {
  label: string
  type: AtButtonTypes
  target?: Target
  actionType?: AtButtonActionType
  actionValue?: string
  icon?: ContentfulFile
  iconHover?: ContentfulFile
  iconPosition?: AtButtonIconPosition
  gtmData: unknown
}
