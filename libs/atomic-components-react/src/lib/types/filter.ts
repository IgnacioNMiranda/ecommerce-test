export type Filter = {
  category?: string
  name: string
  variant?: string
  hideCategory?: boolean
  isSelected?: boolean
}

export type FilterGroup = {
  category: string
  filters: Filter[]
}
