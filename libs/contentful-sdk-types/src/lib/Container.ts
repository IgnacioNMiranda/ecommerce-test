import type {
  BackgroundContainerColor,
  ContainerBlockGap,
  ContainerColumnDesktop,
  ContainerColumnMobile,
  ContainerColumnTablet,
  ContainerPaddingSize,
  Display,
  LayoutType,
} from '@lib/react/types'
import { ContentfulBlock } from '.'

export interface ContentfulContainer {
  layout: LayoutType
  backgroundColor: BackgroundContainerColor
  topContainerPadding?: ContainerPaddingSize
  bottomContainerPadding?: ContainerPaddingSize
  title?: string
  columns: ContainerColumnDesktop
  columnsTablet: ContainerColumnTablet
  columnsMobile: ContainerColumnMobile
  blocksGap: ContainerBlockGap
  blocks: ContentfulBlock[]
  display: Display
}
