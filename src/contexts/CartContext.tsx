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
  addProduct: (product: Product) => Promise<void>
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}

export const CartContex = createContext<CartContextData>({} as CartContextData)

export function CartContexProvaider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@CoffeDelivery:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  async function addProduct(curruentProduct: Product) {
    try {
      const updadteCart = [...cart]
      const productExists = updadteCart.find(
        (product) => product.id === curruentProduct.id,
      )
      const stock = await api.get<Stock>(`/stock/${curruentProduct.id}`)

      const stockAmount = stock.data.amount
      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount + curruentProduct.amount

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        // eslint-disable-next-line no-useless-return
        return
      }

      if (productExists) {
        productExists.amount = amount
      } else {
        const product = await api.get(`/products/${curruentProduct.id}`)
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

  async function updateProductAmount({
    productId,
    amount,
  }: UpdateProductAmount) {
    try {
      if (amount <= 0) return

      const updadteCart = [...cart]
      const productExists = updadteCart.find(
        (product) => product.id === productId,
      )
      const stock = await api.get<Stock>(`/stock/${productId}`)

      const stockAmount = stock.data.amount

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        // eslint-disable-next-line no-useless-return
        return
      }

      if (productExists) {
        productExists.amount = amount
        setCart(updadteCart)
        localStorage.setItem('@CoffeDelivery:cart', JSON.stringify(updadteCart))
      }
      // else {
      //   const product = await api.get(`/products/${productId}`)
      //   const newProduct = {
      //     ...product.data,
      //     amount,
      //   }

      //   updadteCart.push(newProduct)
      //   setCart(updadteCart)
      // }
    } catch (error) {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }
  return (
    <CartContex.Provider value={{ cart, addProduct, updateProductAmount }}>
      {children}
    </CartContex.Provider>
  )
}
