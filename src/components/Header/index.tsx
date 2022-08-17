import * as C from './styles'

import LogoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useCart()
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <NavLink to="/" title="Home">
          <img src={LogoImg} alt="Logo Coffe Delivery" />
        </NavLink>
        <div>
          <span>
            <MapPin size={22} />
            Porto Alegre, RS
          </span>
          {cart.length > 0 ? (
            <NavLink to="/cart" title="Carrinho">
              <ShoppingCart size={22} />
              {cart.length > 0 && <p>{cart.length}</p>}
            </NavLink>
          ) : (
            <NavLink to="" title="Carrinho">
              <ShoppingCart size={22} />
              {cart.length > 0 && <p>{cart.length}</p>}
            </NavLink>
          )}
        </div>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}
