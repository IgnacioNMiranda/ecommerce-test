import React from 'react'
import {
  UilAngleDown,
  UilAngleLeft,
  UilAngleRight,
  UilAngleRightB,
  UilAngleUp,
  UilArrowCircleDown,
  UilArrowRight,
  UilBars,
  UilCheck,
  UilFilter,
  UilGithub,
  UilHeart,
  UilInfoCircle,
  UilLinkedin,
  UilMapMarker,
  UilMinus,
  UilMultiply,
  UilPlane,
  UilPlus,
  UilSearch,
  UilShoppingBag,
  UilShoppingCart,
  UilStar,
  UilTimes,
  UilTrash,
  UilUser,
} from '@iconscout/react-unicons'
import { UisStar } from '@iconscout/react-unicons-solid'
import { UisHeart } from './UisHeart'
import { UisLoading } from './UisLoading'

export type IconType =
  | 'angle-down'
  | 'angle-left'
  | 'angle-right'
  | 'angle-right-b'
  | 'arrow-right'
  | 'angle-up'
  | 'arrow-circle-down'
  | 'bars'
  | 'check'
  | 'filter'
  | 'github'
  | 'heart'
  | 'solid-heart'
  | 'info-circle'
  | 'linkedin'
  | 'loading'
  | 'map-marker'
  | 'minus'
  | 'multiply'
  | 'plane'
  | 'plus'
  | 'search'
  | 'shopping-bag'
  | 'shopping-cart'
  | 'star'
  | 'solid-star'
  | 'times'
  | 'trash'
  | 'user'

export const typeIcon = (type: IconType, color?: string, size?: number, className?: string) => {
  switch (type) {
    case 'angle-down':
      return <UilAngleDown className={className} fill={color} size={size} />
    case 'angle-left':
      return <UilAngleLeft className={className} fill={color} size={size} />
    case 'angle-right-b':
      return <UilAngleRightB className={className} fill={color} size={size} />
    case 'angle-right':
      return <UilAngleRight className={className} fill={color} size={size} />
    case 'angle-up':
      return <UilAngleUp className={className} fill={color} size={size} />
    case 'arrow-circle-down':
      return <UilArrowCircleDown className={className} fill={color} size={size} />
    case 'arrow-right':
      return <UilArrowRight className={className} fill={color} size={size} />
    case 'bars':
      return <UilBars className={className} fill={color} size={size} />
    case 'check':
      return <UilCheck className={className} fill={color} size={size} />
    case 'filter':
      return <UilFilter className={className} fill={color} size={size} />
    case 'github':
      return <UilGithub className={className} fill={color} size={size} />
    case 'heart':
      return <UilHeart className={className} fill={color} size={size} />
    case 'solid-heart':
      return <UisHeart className={className} fill={color} size={size} />
    case 'info-circle':
      return <UilInfoCircle className={className} fill={color} size={size} />
    case 'linkedin':
      return <UilLinkedin className={className} fill={color} size={size} />
    case 'loading':
      return <UisLoading className={className} fill={color} size={size} />
    case 'map-marker':
      return <UilMapMarker className={className} fill={color} size={size} />
    case 'minus':
      return <UilMinus className={className} fill={color} size={size} />
    case 'multiply':
      return <UilMultiply className={className} fill={color} size={size} />
    case 'plane':
      return <UilPlane className={className} fill={color} size={size} />
    case 'plus':
      return <UilPlus className={className} fill={color} size={size} />
    case 'search':
      return <UilSearch className={className} fill={color} size={size} />
    case 'shopping-bag':
      return <UilShoppingBag className={className} fill={color} size={size} />
    case 'shopping-cart':
      return <UilShoppingCart className={className} fill={color} size={size} />
    case 'star':
      return <UilStar className={className} fill={color} size={size} />
    case 'solid-star':
      return <UisStar className={className} fill={color} size={size} />
    case 'times':
      return <UilTimes className={className} fill={color} size={size} />
    case 'trash':
      return <UilTrash className={className} fill={color} size={size} />
    case 'user':
      return <UilUser className={className} fill={color} size={size} />
    default:
      return null
  }
}
