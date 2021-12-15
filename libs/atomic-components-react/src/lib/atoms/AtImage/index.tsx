/* eslint-disable no-unused-vars */
import React, { ImgHTMLAttributes } from 'react'

export enum ContentfulImageFocusedAreas {
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom_left',
  BOTTOM_RIGHT = 'bottom_right',
  CENTER = 'center',
  FACE = 'face',
  FACES = 'faces',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
}

export enum ContentfulImageResizes {
  CROP = 'crop',
  FILL = 'fill',
  PAD = 'pad',
  SCALE = 'scale',
  THUMB = 'thumb',
}

export enum ContentfulImageTypes {
  JPEG = 'jpg',
  PNG = 'png',
  WEBP = 'webp',
}

export type ContentfulImageProps = {
  backgroundColor?: string
  focusArea?: ContentfulImageFocusedAreas
  height?: number | string
  quality?: number | string
  radius?: number | string
  resize?: ContentfulImageResizes
  type?: ContentfulImageTypes
  width?: number | string
}

export interface AtImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  contentfulImageProps?: ContentfulImageProps
  dataTest?: string
  src: string
}

export const setUrlParam = (src: string, param: string, value: string | number | undefined) => {
  if (value !== undefined && value !== null) {
    return `${src}${src.includes('?') ? '&' : '?'}${param}=${value}`
  }
  return `${src}`
}

export const appendContentfulParams = (src: string, contentfulProps: ContentfulImageProps) => {
  let url = src
  url = setUrlParam(url, 'bg', contentfulProps.backgroundColor)
  url = setUrlParam(url, 'f', contentfulProps.focusArea)
  url = setUrlParam(url, 'h', contentfulProps.height)
  url = setUrlParam(url, 'q', contentfulProps.quality)
  url = setUrlParam(url, 'r', contentfulProps.radius)
  url = setUrlParam(url, 'fit', contentfulProps.resize)
  url = setUrlParam(url, 'fm', contentfulProps.type)
  url = setUrlParam(url, 'w', contentfulProps.width)
  return url
}

export const AtImage = ({ alt, contentfulImageProps, dataTest, src, ...props }: AtImageProps) => {
  const contentfulProps = contentfulImageProps || {}
  return <img alt={alt} data-test={dataTest} src={appendContentfulParams(src, contentfulProps)} {...props} />
}
