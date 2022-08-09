import * as C from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { Product } from '../../@types'
import ArabeCoffe from '../../assets/arabe.svg'
import { NavLink } from 'react-router-dom'

interface CardProps {
  product: Product
}

interface CartItemsAmount {
  [key: number]: number
}

export function Card({ product }: CardProps) {
  const { cart, addProduct, updateProductAmount } = useCart()

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[product.id] = product.amount
    return newSumAmount
  }, {} as CartItemsAmount)

  function handleAddProduct(product: Product) {
    addProduct(product)
  }

  function handleProductDecrement(product: Product) {
    console.log(product.amount)
    updateProductAmount({
      productId: product.id,
      amount: cartItemsAmount[product.id] - 1,
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
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>
        </div>
        <div className="cartButtonsAmount">
          <div className="buttons">
            <button onClick={() => handleProductDecrement(product)}>
              <Minus size={14} />
            </button>
            <p>{cartItemsAmount[product.id] || 0}</p>
            <button onClick={() => handleAddProduct(product)}>
              <Plus size={14} />
            </button>
          </div>
          <NavLink to="/cart" className="cart">
            <ShoppingCartSimple size={22} />
          </NavLink>
        </div>
      </C.CardFooter>
    </C.CardContainer>
  )
}
