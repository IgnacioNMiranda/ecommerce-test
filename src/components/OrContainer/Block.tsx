import React from 'react'
import {
  ContentfulCard,
  ContentfulMediaVertical,
  ContentfulSlider,
  ContentfulBlock,
  ContentfulBannerLarge,
  ContentfulBlockTypes,
  ContentfulContentStrip,
  ContentfulFooterNewsletter,
  ContentfulForm,
  ContentfulHeroBanner,
  ContentfulRichText,
  ContentfulDiscountBar,
  ContentfulCardCategory,
  ContentfulContainer,
  ContentfulProductRef,
} from '@lib/contentful-sdk-types'
import {
  MlBannerLarge,
  BannerSlide,
  MlContentStrip,
  MlDiscountBar,
  MlFormFieldProps,
  MlRichText,
  MlRichTextProps,
  MlMediaVertical,
  MlCard,
  MlCardCategory,
  MlProductCard,
  MlMediaVerticalProps,
  MlCardProps,
  MlCardCategoryProps,
} from '@lib/react/molecules'
import { OrForm, OrHeroBanner, OrFooterNewsLetter, OrSlider } from '@lib/react/organisms'
import { OrContainer } from '.'
import { getSliderConfig, normalizeButton, normalizeFile, normalizeSliderItems } from '../../utils'

export interface BlockProps {
  block: ContentfulBlock
  className?: string
}

export const Block = ({ block, className = '' }: BlockProps) => {
  switch (block.type) {
    case ContentfulBlockTypes.OrSlider: {
      const { columns, columnsTablet, columnsMobile, gap, items } = block as ContentfulSlider
      const { defaultConfig, breakpoints } = getSliderConfig(columns, columnsTablet, columnsMobile, gap)

      return (
        <OrSlider
          {...(block as ContentfulSlider)}
          items={normalizeSliderItems(items)}
          breakpoints={breakpoints}
          defaultConfig={defaultConfig}
          className={`mx-auto ${className}`}
        />
      )
    }

    case ContentfulBlockTypes.MlRichText: {
      const { content, textAlignment } = block as ContentfulRichText
      return <MlRichText text={content} textAlignment={textAlignment} className={`mb-16 ${className}`} />
    }

    case ContentfulBlockTypes.OrForm: {
      const { title, subtitle, controls, button, columns } = block as ContentfulForm

      return (
        <OrForm
          title={title}
          subtitle={subtitle}
          controls={controls as MlFormFieldProps[]}
          button={normalizeButton(button)}
          className={className}
          columns={columns}
        />
      )
    }

    case ContentfulBlockTypes.MlContentStrip: {
      const { paragraphs, images, button, imagePosition, textColumns } = block as ContentfulContentStrip
      const imageUrls = images.map((image) => image.file.url)
      const richTextElements: MlRichTextProps[] = paragraphs.map((p) => ({
        text: p.content,
        textAlignment: p.textAlignment,
      }))

      return (
        <MlContentStrip
          images={imageUrls}
          imagePosition={imagePosition}
          textColumns={textColumns}
          paragraphs={richTextElements}
          button={normalizeButton(button)}
          className={className}
        />
      )
    }

    case ContentfulBlockTypes.MlBannerLarge: {
      const { title, subtitle, image, ...props } = block as ContentfulBannerLarge
      const slide = { title, subtitle, image: normalizeFile(image) }
      return <MlBannerLarge slide={slide} {...props} className={className} />
    }

    case ContentfulBlockTypes.OrHeroBanner: {
      const { slides, ...props } = block as ContentfulHeroBanner
      const heroBannerSlides = slides.map((slide) => {
        const { title, subtitle, image, leftButton, rightButton } = slide

        return {
          title,
          subtitle,
          image: normalizeFile(image),
          leftButton: normalizeButton(leftButton),
          rightButton: normalizeButton(rightButton),
        } as BannerSlide
      })
      return <OrHeroBanner slides={heroBannerSlides} {...props} className={className} />
    }

    case ContentfulBlockTypes.MlDiscountBar:
      return <MlDiscountBar {...(block as ContentfulDiscountBar)} className={className} />

    case ContentfulBlockTypes.OrFooterNewsletter: {
      const footerNewsLetter = block as ContentfulFooterNewsletter
      const { button } = footerNewsLetter
      return (
        <OrFooterNewsLetter
          className={`fixed bottom-0 z-10 w-full ${className}`}
          {...footerNewsLetter}
          button={normalizeButton(button)}
        />
      )
    }

    case ContentfulBlockTypes.MlMediaVertical: {
      const { image, button, icon, ...props } = block as ContentfulMediaVertical
      return (
        <MlMediaVertical
          imageSrc={normalizeFile(image)}
          button={normalizeButton(button)}
          icon={!!icon && { src: normalizeFile(icon), size: 40 }}
          {...(props as MlMediaVerticalProps)}
          className={className}
        />
      )
    }

    case ContentfulBlockTypes.MlCard: {
      const { image, ...props } = block as ContentfulCard
      return <MlCard imageSrc={normalizeFile(image)} {...(props as MlCardProps)} className={className} />
    }

    case ContentfulBlockTypes.ProductRef:
      return <MlProductCard {...(block as ContentfulProductRef)} className={className} />

    case ContentfulBlockTypes.OrContainer:
      return <OrContainer {...(block as ContentfulContainer)} />

    case ContentfulBlockTypes.MlCardCategory: {
      const { image, button, ...props } = block as ContentfulCardCategory
      return (
        <MlCardCategory
          {...(props as MlCardCategoryProps)}
          imageUrl={normalizeFile(image)}
          button={normalizeButton(button)}
          className={className}
        />
      )
    }

    default:
      return null
  }
}
