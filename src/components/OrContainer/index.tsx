import React from 'react'
import { ContentfulBlock } from '@lib/contentful-sdk-types'
import {
  BackgroundContainerColor,
  backgroundContainerColors,
  ContainerPaddingSize,
  ContainerColumnDesktop,
  ContainerColumnMobile,
  ContainerBlockGap,
  columnsWidthClasses,
  columnsMobileWidthClasses,
  containerBlockGapsClasses,
  Display,
  displaysClasses,
  LayoutType,
  layoutClasses,
  ContainerColumnTablet,
  columnsTabletWidthClasses,
  topContainerPaddings,
  bottomContainerPaddings,
} from '@lib/react/types'
import { Block } from './Block'

export interface OrContainerProps {
  layout: LayoutType
  backgroundColor: BackgroundContainerColor
  verticalContainerPadding?: ContainerPaddingSize
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

export const OrContainer = ({
  layout,
  backgroundColor,
  topContainerPadding = ContainerPaddingSize.NONE,
  bottomContainerPadding = ContainerPaddingSize.NONE,
  title,
  columns,
  columnsTablet,
  columnsMobile,
  blocksGap,
  blocks,
  display,
}: OrContainerProps) => {
  return (
    <section
      className={`${backgroundContainerColors[backgroundColor]} ${topContainerPaddings[topContainerPadding]} ${bottomContainerPaddings[bottomContainerPadding]}`}
    >
      <div className={layoutClasses[layout]}>
        {!!title && (
          <h2 className="text-neutral-dark font-medium leading-10 text-xl sm:text-2xl text-center pb-8">{title}</h2>
        )}
        <div
          className={`${displaysClasses[display]} ${containerBlockGapsClasses[blocksGap]} ${columnsMobileWidthClasses[columnsMobile]} ${columnsTabletWidthClasses[columnsTablet]} ${columnsWidthClasses[columns]}`}
        >
          {blocks.map((block, index) => (
            <Block key={`${block.type}-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}
