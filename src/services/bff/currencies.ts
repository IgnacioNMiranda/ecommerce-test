import axios, { AxiosResponse } from 'axios'
import { BffCurrencies } from '@lib/ecommerce-bff-types'

const baseUrl = `${process.env.NEXT_PUBLIC_BFF_URL}/currencies`

export const getCurrencies = async () => {
  let currenciesResponse: AxiosResponse<BffCurrencies>

  try {
    currenciesResponse = await axios.get<BffCurrencies>(baseUrl)
    return currenciesResponse.data
  } catch (error) {
    return null
  }
}
