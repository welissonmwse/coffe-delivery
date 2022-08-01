import * as C from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { Product } from '../../@types'
import ArabeCoffe from '../../assets/arabe.svg'
import { useState } from 'react'

interface CardProps {
  product: Product
}

export function Card({ product }: CardProps) {
  const { addProduct, updateProductAmount } = useCart()
  const [amount, setAmount] = useState(0)

  function handleAddProduct(product: Product) {
    addProduct(product)
  }

  function handleProductIncrement(product: Product) {
    setAmount(amount + 1)
    updateProductAmount({
      productId: product.id,
      amount,
    })
  }

  function handleProductDecrement(product: Product) {
    setAmount(amount - 1)
    updateProductAmount({
      productId: product.id,
      amount,
    })
  }

  return (
    <C.CardContainer>
      <img src={ArabeCoffe} alt="" />
      <C.CardContainerTitle>
        <h3>{product.tags}</h3>
      </C.CardContainerTitle>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <C.CardFooter>
        <div className="priceAmount">
          <p>
            <span>R$ </span>
            {product.price}
          </p>
        </div>
        <div className="cartButtonsAmount">
          <div className="buttons">
            <button onClick={() => handleProductDecrement(product)}>
              <Minus size={14} />
            </button>
            <p>{amount}</p>
            <button onClick={() => handleProductIncrement(product)}>
              <Plus size={14} />
            </button>
          </div>
          <button className="cart" onClick={() => handleAddProduct(product)}>
            <ShoppingCartSimple size={22} />
          </button>
        </div>
      </C.CardFooter>
    </C.CardContainer>
  )
}
