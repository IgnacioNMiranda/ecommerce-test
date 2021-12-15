import axios, { AxiosResponse } from 'axios'
import { BffProduct } from '@lib/ecommerce-bff-types'

const baseUrl = `${process.env.NEXT_PUBLIC_BFF_URL}/products`

export const getProductById = async (id: string) => {
  let productResponse: AxiosResponse<BffProduct>

  try {
    productResponse = await axios.get(`${baseUrl}/${id}`)
  } catch (error) {
    return null
  }

  return productResponse.data
}
