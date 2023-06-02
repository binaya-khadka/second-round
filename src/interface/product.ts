interface Product {
  id: number,
  product_name: string,
  category_name: string,
  description: string,
  created_by: string,
  status: string,
  created_at: Date | string,
  updated_at: Date,
}

export type { Product } 