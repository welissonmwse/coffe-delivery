import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { Product } from '../../@types'
import ArabeCoffe from '../../assets/arabe.svg'
import { useCart } from '../../hooks/useCart'
import * as C from './styles'

export function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart()

  const subTotal = cart.reduce((subTotal, product) => {
    return subTotal + product.amount * product.price
  }, 0)

  const total = subTotal + 3.5

  function handleProductIncrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1,
    })
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1,
    })
  }
  return (
    <C.CartContainer>
      <C.FormContainer>
        <div className="containerLeft">
          <h4>Complete seu pedido</h4>
          <div className="address">
            <div className="addressTitle">
              <MapPin size={15} />
              <div>
                <h5>Endereço de Entrega</h5>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <div className="formInputsGrup">
              <div className="inputContentItems">
                <input type="text" placeholder="CEP" />
                <div></div>
              </div>
              <div className="inputContentItems">
                <input type="text" placeholder="Rua" />
              </div>
              <div className="inputContentItems">
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div className="inputContentItems">
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </div>
            </div>
          </div>
          <div className="payment">
            <div className="paymentTitle">
              <CurrencyDollar size={15} />
              <div>
                <h5>Pagamento</h5>
                <p>
                  O pagamento é feito na Entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <C.PaymentTypeContainer>
              <C.RadioBox>
                <CreditCard size={15} />
                <span>Cartão de crédito</span>
              </C.RadioBox>
              <C.RadioBox>
                <Bank size={15} />
                <span>cartão de débito</span>
              </C.RadioBox>
              <C.RadioBox>
                <Money size={15} />
                <span>dinheiro</span>
              </C.RadioBox>
            </C.PaymentTypeContainer>
          </div>
        </div>
        <div className="containerRight">
          <h4>Cafés selecionados</h4>
          <C.ContentCart>
            {cart.map((product) => (
              <>
                <div key={product.id} className="cardProduct">
                  <img src={ArabeCoffe} alt="" />
                  <div className="bodyCard">
                    <div className="header">
                      <h5>{product.name}l</h5>
                      <p>
                        {new Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.price)}
                      </p>
                    </div>
                    <div className="footerCard">
                      <div className="buttons">
                        <button
                          type="button"
                          onClick={() => handleProductDecrement(product)}
                        >
                          <Minus size={14} />
                        </button>
                        <p>{product.amount}</p>
                        <button
                          type="button"
                          onClick={() => handleProductIncrement(product)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        className="remove"
                        onClick={() => removeProduct(product.id)}
                      >
                        <Trash size={22} />
                        REMOVER
                      </button>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
              </>
            ))}
            <C.CartFooter>
              <div>
                <h6>Total de itens</h6>
                <p>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(subTotal)}
                </p>
              </div>
              <div>
                <h6>Entrega</h6>
                <p>R$ 3,50</p>
              </div>
              <div className="total">
                <h6>Total</h6>
                <p>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total)}
                </p>
              </div>
              <button type="submit">CONFIRMAR PEDIDO</button>
            </C.CartFooter>
          </C.ContentCart>
        </div>
      </C.FormContainer>
    </C.CartContainer>
  )
}
