import { useEffect, useState } from 'react'

export const useHamburguer = () => {
  const [isHamburguerActive, setIsHamburguerActive] = useState(false)

  const toggleHamburguer = () => {
    setIsHamburguerActive(!isHamburguerActive)
  }

  useEffect(() => {
    if (isHamburguerActive) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isHamburguerActive])

  return { isHamburguerActive, toggleHamburguer }
}
