/**
 * Constructs a simple category query for Algolia's Configure widget
 * @param route Next's router asPath field
 * @param filterName Attribute in Algolia that represents the category
 * @returns an string containing category filters for Algolia
 */
export const filterBuilder = (route: string, filterName: string) => {
  // TODO: check for whitespace characters
  // TODO: refactor for variant filters
  const filters = route.split('/')

  if (filters.length <= 1) {
    return ''
  }
  filters.shift()
  const appliedFilters = filters.splice(1).map((filter) => `${filterName}:'${filter}'`)
  return appliedFilters.length > 1 ? appliedFilters.join(' AND ') : appliedFilters[0]
}
