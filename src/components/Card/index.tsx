import * as C from './styles'
import CoffeImg from '../../assets/Coffee.svg'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
export function Card() {
  return (
    <C.CardContainer>
      <img src={CoffeImg} alt="" />
      <C.CardContainerTitle>
        <h3>Tradicional</h3>
      </C.CardContainerTitle>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <C.CardFooter>
        <div className="priceAmount">
          <p>
            <span>R$ </span>9,90
          </p>
        </div>
        <div className="cartButtonsAmount">
          <div className="buttons">
            <button>
              <Minus size={14} />
            </button>
            <p>1</p>
            <button>
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
