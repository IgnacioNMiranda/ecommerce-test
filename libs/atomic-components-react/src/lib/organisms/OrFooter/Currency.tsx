import React, { useEffect, useRef, useState } from 'react'
import { BffCurrencies } from '@lib/ecommerce-bff-types'
import { AtIcon, AtLink } from '../..'

export const Currency = ({
  currencies,
  activeCurrency,
  currencyDispatch,
}: BffCurrencies & { currencyDispatch: React.Dispatch<unknown> }) => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const selectedRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsMenuActive(!isMenuActive)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectedRef.current && !selectedRef.current.contains(event.target as Node)) {
      setIsMenuActive(false)
    }
  }

  const onChange = (currency: string) => () => {
    currencyDispatch({ type: '@change-active-currency', payload: currency })
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectedRef])

  return (
    <div ref={selectedRef}>
      <AtLink onClick={handleClick} className="mb-5 flex justify-between items-center relative cursor-pointer">
        <p className="text-base font-bold leading-5">
          Currency <span className="font-normal">({activeCurrency})</span>
        </p>
        <AtIcon type={isMenuActive ? 'angle-up' : 'angle-down'} />
      </AtLink>
      <div className="relative">
        <div
          className={`absolute bg-white py-3 pl-4 -top-4 w-full h-auto max-h-36 currencyScrollbar ${
            isMenuActive ? 'block' : 'hidden'
          }`}
        >
          {currencies.map((currency, index) => (
            <button
              key={`${currency}-${index}`}
              type="button"
              onClick={onChange(currency)}
              className={`block text-secondary text-left focus:outline-none w-full text-sm leading-5 hover:font-bold cursor-pointer ${
                currency === activeCurrency ? 'border-r-4 font-bold' : ''
              }`}
            >
              {currency}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
