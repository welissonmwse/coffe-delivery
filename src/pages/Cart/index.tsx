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
import ArabeCoffe from '../../assets/arabe.svg'
import * as C from './styles'

export function Cart() {
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
            <div className="cardProduct">
              <img src={ArabeCoffe} alt="" />
              <div className="bodyCard">
                <div className="header">
                  <h5>Expresso Tradicional</h5>
                  <p>R$ 9.90</p>
                </div>
                <div className="footerCard">
                  <div className="buttons">
                    <button>
                      <Minus size={14} />
                    </button>
                    <p>1</p>
                    <button>
                      <Plus size={14} />
                    </button>
                  </div>
                  <button className="remove">
                    <Trash size={22} />
                    REMOVER
                  </button>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="cardProduct">
              <img src={ArabeCoffe} alt="" />
              <div className="bodyCard">
                <div className="header">
                  <h5>Expresso Tradicional</h5>
                  <p>R$ 9.90</p>
                </div>
                <div className="footerCard">
                  <div className="buttons">
                    <button>
                      <Minus size={14} />
                    </button>
                    <p>1</p>
                    <button>
                      <Plus size={14} />
                    </button>
                  </div>
                  <button className="remove">
                    <Trash size={22} />
                    REMOVER
                  </button>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <C.CartFooter>
              <div>
                <h6>Total de itens</h6>
                <p>R$ 29,70</p>
              </div>
              <div>
                <h6>Entrega</h6>
                <p>R$ 3,50</p>
              </div>
              <div className="total">
                <h6>Total</h6>
                <p>R$ 33,20</p>
              </div>
              <button type="submit">CONFIRMAR PEDIDO</button>
            </C.CartFooter>
          </C.ContentCart>
        </div>
      </C.FormContainer>
    </C.CartContainer>
  )
}
