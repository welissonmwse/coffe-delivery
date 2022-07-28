import * as C from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

interface CardProps {
  name: string
  image: string
  tags: string
  description: string
  price: string
  amount: number
  handleAddAmount: () => void
  handleLessAmount: () => void
}

export function Card({
  name,
  image,
  tags,
  description,
  price,
  amount,
  handleAddAmount,
  handleLessAmount,
}: CardProps) {
  return (
    <C.CardContainer>
      <img src={image} alt="" />
      <C.CardContainerTitle>
        <h3>{tags}</h3>
      </C.CardContainerTitle>
      <h4>{name}</h4>
      <p>{description}</p>
      <C.CardFooter>
        <div className="priceAmount">
          <p>
            <span>R$ </span>
            {price}
          </p>
        </div>
        <div className="cartButtonsAmount">
          <div className="buttons">
            <button onClick={() => handleLessAmount()}>
              <Minus size={14} />
            </button>
            <p>{amount}</p>
            <button onClick={() => handleAddAmount()}>
              <Plus size={14} />
            </button>
          </div>
          <button className="cart">
            <ShoppingCartSimple size={22} />
          </button>
        </div>
      </C.CardFooter>
    </C.CardContainer>
  )
}
