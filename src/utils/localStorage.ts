export const clearStorage = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.clear()
  }
}

export const setLocalState = (key: string, value: unknown) => {
  if (typeof window !== 'undefined') {
    try {
      const stringifiedValue = JSON.stringify(value)
      window.localStorage.setItem(key, stringifiedValue)
    } catch (error) {
      //
    }
  }
}

export const getLocalState = (key: string) => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key)
    return JSON.parse(value)
  }

  return null
}
