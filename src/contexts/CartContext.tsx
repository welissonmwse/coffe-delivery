import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { Product, Stock } from '../@types'
import { api } from '../services/api'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
}

const CartContex = createContext<CartContextData>({} as CartContextData)

export function CartContexProvaider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@CoffeDelivery:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  async function addProduct(productId: number) {
    try {
      const updadteCart = [...cart]
      const productExists = updadteCart.find(
        (product) => product.id === productId,
      )
      const stock = await api.get<Stock>(`/stock/${productId}`)

      const stockAmount = stock.data.amount
      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount + 1
      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        // eslint-disable-next-line no-useless-return
        return
      }

      if (productExists) {
        productExists.amount = amount
      } else {
        const product = await api.get(`/products/${productId}`)
        const newProduct = {
          ...product.data,
          amount: 1,
        }

        updadteCart.push(newProduct)
      }
      setCart(updadteCart)
      localStorage.setItem('@CoffeDelivery:cart', JSON.stringify(updadteCart))
    } catch (error) {
      toast.error('Erro na adição do produto')
    }
  }

  // function removeProduct(productId: number) {
  //   try {
  //   } catch (error) {}
  // }

  // function updateProductAmount({ productId, amount }: UpdateProductAmount) {
  //   try {
  //   } catch (error) {}
  // }
  return (
    <CartContex.Provider value={{ cart, addProduct }}>
      {children}
    </CartContex.Provider>
  )
}
