import type { Product } from '../types/product'

export const products: Product[] = [
  // físicos
  {
    id: 1,
    type: 'physical',
    name: 'Teclado Mecânico RGB',
    price: 450.00,
    rating: 4.5,
    reviews: 230,
    badges: ['new', 'low-stock'],
    stock: 5,
    shipping: 'Frete grátis'
  },
  {
    id: 2,
    type: 'physical',
    name: 'Mouse Gamer Wireless',
    price: 289.90,
    rating: 4.7,
    reviews: 445,
    badges: ['most-sold'],
    stock: 23,
    shipping: 'Frete grátis'
  },

  // digitais
  {
    id: 4,
    type: 'digital',
    name: 'Curso Completo de React',
    price: 297.00,
    rating: 4.8,
    reviews: 1543,
    badges: ['most-sold', 'highlights'],
    downloadSize: '2.5GB',
    format: 'Video HD + PDF'
  },
  {
    id: 5,
    type: 'digital',
    name: 'eBook: JavaScript Moderno',
    price: 49.90,
    rating: 4.6,
    reviews: 892,
    badges: ['promo'],
    downloadSize: '45MB',
    format: 'PDF + EPUB'
  },

  // serviços
  {
    id: 7,
    type: 'service',
    name: 'Consultoria Web Development',
    price: 150.00,
    rating: 5.0,
    reviews: 89,
    badges: ['highlights'],
    duration: '1 hora',
    availability: 'Disponível hoje'
  },
  {
    id: 8,
    type: 'service',
    name: 'Mentoria Carreira Tech',
    price: 120.00,
    rating: 4.8,
    reviews: 234,
    badges: [],
    duration: '1 hora',
    availability: 'Disponível amanhã'
  }
]