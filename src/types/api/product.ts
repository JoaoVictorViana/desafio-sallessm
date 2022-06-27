export type Product = {
  categories: number[]
  code: string
  id: number
  image: string
  name: string
  quantity: number
  status: boolean
}

export type ProductRow = {
  name: string
  quantity: number
  code: string
  category: string
  status: string
  id: number
  [key: string]: any
}
