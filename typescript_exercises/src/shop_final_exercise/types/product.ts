export type BadgeType = 'new' | 'promo' | 'low-stock' | 'highlights' | 'most-sold'

export interface BaseProduct {
  id: number
  name: string
  price: number
  rating: number
  reviews: number
  badges: BadgeType[]
}

export interface PhysicalProduct extends BaseProduct {
  type: 'physical'
  stock: number
  shipping: string
}

export interface DigitalProduct extends BaseProduct {
  type: 'digital'
  downloadSize: string
  format: string
}

export interface ServiceProduct extends BaseProduct {
  type: 'service'
  duration: string
  availability: string
}

export type Product = ServiceProduct | DigitalProduct | PhysicalProduct

 export interface CartItem {
  product: Product
  quantity: number
}