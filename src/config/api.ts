const apiUri = 'https://62b6997642c6473c4b454068.mockapi.io/api/v1/'

type ApiConfig = {
  productUri: string
  categoryUri: string
}

export const apiConfig: ApiConfig = {
  productUri: `${apiUri}/Product`,
  categoryUri: `${apiUri}/Category`,
}
