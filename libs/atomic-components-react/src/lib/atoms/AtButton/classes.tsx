import { themeColor, AtButtonTypes } from '../../types'

export const typeClasses: Record<AtButtonTypes, { base: string; hover: string; color?: themeColor }> = {
  primary: {
    base: 'text-secondary bg-primary',
    hover: 'hover:bg-secondary-light',
  },
  'primary-outline': {
    base: 'text-primary border-2 border-primary py-0.5',
    hover: 'hover:bg-primary hover:text-secondary',
  },
  'primary-text': {
    base: 'text-primary',
    hover: 'hover:text-secondary-light',
  },
  secondary: {
    base: 'text-white bg-secondary',
    hover: 'hover:bg-secondary-dark',
    color: 'white',
  },
  'secondary-dark': {
    base: 'text-white bg-secondary-dark',
    hover: 'hover:bg-secondary-light',
    color: 'white',
  },
  'secondary-outline': {
    base: 'text-secondary border-2 border-secondary py-0.5',
    hover: 'hover:bg-secondary hover:text-white',
    color: 'white',
  },
  'secondary-text': {
    base: 'text-secondary',
    hover: 'hover:text-secondary-dark',
  },
  tertiary: {
    base: 'text-secondary bg-tertiary',
    hover: 'hover:bg-tertiary-dark',
  },
  'tertiary-dark': {
    base: 'text-secondary bg-tertiary-dark',
    hover: 'hover:bg-tertiary-light',
  },
  'tertiary-outline': {
    base: 'text-tertiary border-2 border-tertiary py-0.5',
    hover: 'hover:bg-tertiary hover:text-white',
  },
  'tertiary-text': {
    base: 'text-tertiary',
    hover: 'hover:text-tertiary-dark',
  },
  white: {
    base: 'text-secondary bg-white',
    hover: '',
  },
}
