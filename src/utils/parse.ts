import { Category } from 'types/api/category'
import { Product, ProductRow } from 'types/api/product'

export function parse(product: Product, categories: Category[]): ProductRow {
  return {
    ...product,
    category:
      categories.find((category) => category.id === product.categories?.[0])
        ?.name || '',
    status: product.status ? 'Ativo' : 'Inativo',
  }
}

export function parseRows(
  rows: Product[],
  categories: Category[]
): ProductRow[] {
  return rows.map((row) => parse(row, categories))
}
