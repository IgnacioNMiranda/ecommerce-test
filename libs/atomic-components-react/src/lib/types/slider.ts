export type sliderColumnMobile = 'one' | 'two'
export type sliderColumnTablet = sliderColumnMobile & 'three'
export type sliderColumnDesktop = sliderColumnTablet & ('four' | 'five' | 'six')
export const sliderColumns = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
}

export type sliderGap = 'small' | 'medium' | 'large'
export const sliderGaps = {
  small: 16,
  medium: 32,
  large: 40,
}
