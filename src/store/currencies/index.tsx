import React, { ReactNode, createContext, useReducer, useEffect, useMemo } from 'react'
import { BffCurrencies } from '@lib/ecommerce-bff-types'
import { getCurrencies } from '../../services/bff'
import { CURRENCIES_INITIAL_STATE, getLocalState, setLocalState } from '../../utils'

const LOCAL_CURRENCIES_KEY = 'currencyData'

/* Actions */
export enum CurrencyActionTypes {
  SET_CURRENCIES = '@set-currencies',
  CHANGE_ACTIVE_CURRENCY = '@change-active-currency',
}
export interface CurrencyAction {
  type: CurrencyActionTypes
  payload?: BffCurrencies | string
}

/** Reducer */
const currencyReducer = (state = CURRENCIES_INITIAL_STATE, action: CurrencyAction): BffCurrencies => {
  switch (action.type) {
    case CurrencyActionTypes.SET_CURRENCIES: {
      return action.payload as BffCurrencies
    }
    case CurrencyActionTypes.CHANGE_ACTIVE_CURRENCY: {
      const localCurrencyData = getLocalState(LOCAL_CURRENCIES_KEY) as BffCurrencies
      if (localCurrencyData) {
        setLocalState(LOCAL_CURRENCIES_KEY, { ...localCurrencyData, activeCurrency: action.payload as string })
      }
      return { currencies: state.currencies, activeCurrency: action.payload as string }
    }
    default:
      return state
  }
}

/** Context */
export const CurrencyContext = createContext<{ state: BffCurrencies; dispatch: React.Dispatch<CurrencyAction> }>({
  state: CURRENCIES_INITIAL_STATE,
  dispatch: () => ({}),
})

/** Provider */
interface CurrencyProviderProps {
  children: ReactNode
}

export const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [state, dispatch] = useReducer(currencyReducer, CURRENCIES_INITIAL_STATE)
  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  useEffect(() => {
    const localCurrencyData = getLocalState(LOCAL_CURRENCIES_KEY)

    if (!localCurrencyData) {
      getCurrencies().then((currencyData) => {
        if (currencyData) {
          dispatch({ type: CurrencyActionTypes.SET_CURRENCIES, payload: currencyData })
          setLocalState(LOCAL_CURRENCIES_KEY, currencyData)
        }
      })
    } else {
      dispatch({
        type: CurrencyActionTypes.SET_CURRENCIES,
        payload: localCurrencyData,
      })
    }
  }, [])

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}
