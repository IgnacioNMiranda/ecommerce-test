import { useRef, useState, useEffect } from 'react'

export const useSearchbox = () => {
  const searchbarRef = useRef<HTMLDivElement>(null)
  const [showSearchbarInMobile, setShowSearchbarInMobile] = useState(false)

  const toggleSearchbar: (event: React.MouseEvent<HTMLButtonElement>) => void = (event) => {
    setShowSearchbarInMobile(!showSearchbarInMobile)
  }

  useEffect(() => {
    const hideSearchbar = (event: MouseEvent) => {
      if (showSearchbarInMobile && searchbarRef.current && !searchbarRef.current.contains(event.target as Node)) {
        setShowSearchbarInMobile(false)
      }
    }

    document.addEventListener('click', hideSearchbar)
    return () => {
      document.removeEventListener('click', hideSearchbar)
    }
  }, [showSearchbarInMobile])

  return { searchbarRef, showSearchbarInMobile, toggleSearchbar }
}
