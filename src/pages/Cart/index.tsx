import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
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
        </div>
      </C.FormContainer>
    </C.CartContainer>
  )
}
