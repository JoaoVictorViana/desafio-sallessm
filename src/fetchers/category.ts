import { apiConfig } from '@config/api'
import { httpClient } from '@config/axios'
import { Category } from 'types/api/category'

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await httpClient.get(`${apiConfig.categoryUri}`)

    return response.data
  } catch (error: any) {
    const errorMensage =
      'Não foi possível buscar as categorias. Tente novamente mais tarde!'
    // eslint-disable-next-line no-alert
    alert(errorMensage)
    return []
  }
}
