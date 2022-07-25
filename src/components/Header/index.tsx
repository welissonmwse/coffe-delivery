import * as C from './styles'

import LogoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <img src={LogoImg} alt="Logo Coffe Delivery" />
        <div>
          <span>
            <MapPin size={22} />
            Porto Alegre, RS
          </span>
          <a href="">
            <ShoppingCart size={22} />
          </a>
        </div>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}
