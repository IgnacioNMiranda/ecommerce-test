export enum LayoutType {
  CONTAINER = 'container',
  CONTAINER_FLUID = 'container-fluid',
}
export const layoutClasses: Record<LayoutType, string> = {
  container: 'container mx-auto',
  'container-fluid': '',
}

export enum BackgroundContainerColor {
  WHITE = 'white',
  TERTIARY_LIGHT = 'tertiary-light',
}
export const backgroundContainerColors: Record<BackgroundContainerColor, string> = {
  white: 'bg-white',
  'tertiary-light': 'bg-tertiary-light',
}

export enum ContainerPaddingSize {
  NONE = 'none',
  MEDIUM = 'medium',
}
export const topContainerPaddings: Record<ContainerPaddingSize, string> = {
  none: '',
  medium: 'pt-8',
}
export const bottomContainerPaddings: Record<ContainerPaddingSize, string> = {
  none: '',
  medium: 'pb-8',
}

export enum ContainerColumnMobile {
  ONE = 'one',
  TWO = 'two',
}
export enum ContainerColumnTablet {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
}
export enum ContainerColumnDesktop {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
  FOUR = 'four',
  FIVE = 'five',
  SIX = 'six',
}
export const columnsMobileWidthClasses: Record<ContainerColumnMobile, string> = {
  one: 'grid-cols-1',
  two: 'grid-cols-2',
}
export const columnsTabletWidthClasses: Record<ContainerColumnTablet, string> = {
  one: 'sm:grid-cols-1',
  two: 'sm:grid-cols-2',
  three: 'sm:grid-cols-3',
}
export const columnsWidthClasses: Record<ContainerColumnDesktop, string> = {
  one: 'lg:grid-cols-1',
  two: 'lg:grid-cols-2',
  three: 'lg:grid-cols-3',
  four: 'lg:grid-cols-4',
  five: 'lg:grid-cols-5',
  six: 'lg:grid-cols-6',
}

export enum ContainerBlockGap {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XXL = 'xxl',
}
export const containerBlockGapsClasses: Record<ContainerBlockGap, string> = {
  small: 'gap-4',
  medium: 'gap-8',
  large: 'gap-10',
  xxl: 'gap-10 md:gap-20 lg:gap-40 xl:gap-60',
}

export enum Display {
  BOTH = 'both',
  MOBILE_ONLY = 'mobile-only',
  DESKTOP_ONLY = 'desktop-only',
}
export const displaysClasses: Record<Display, string> = {
  both: 'grid',
  'mobile-only': 'grid sm:hidden',
  'desktop-only': 'hidden sm:grid',
}
