import { useContext } from 'react'
import { CartContex } from '../contexts/CartContext'

export function useCart() {
  const context = useContext(CartContex)

  return context
}
