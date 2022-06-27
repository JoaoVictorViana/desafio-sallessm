import { apiConfig } from '@config/api'
import { httpClient } from '@config/axios'
import { Product } from 'types/api/product'

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await httpClient.get(`${apiConfig.productUri}`)

    return response.data
  } catch (error: any) {
    const errorMensage =
      'Não foi possível buscar os produtos. Tente novamente mais tarde!'
    // eslint-disable-next-line no-alert
    alert(errorMensage)
    return []
  }
}
