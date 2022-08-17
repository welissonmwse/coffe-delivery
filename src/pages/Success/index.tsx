import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import IllustrationImg from '../../assets/Illustration.svg'
import * as C from './styles'

export function Success() {
  return (
    <C.SuccessContainer>
      <main>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <C.SuccessContent>
          <C.Card>
            <C.InfoItem variant="purple">
              <div>
                <MapPin />
              </div>
              <div>
                <p>
                  Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </C.InfoItem>
            <C.InfoItem variant="yellow">
              <div>
                <Timer />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min </strong>
              </div>
            </C.InfoItem>
            <C.InfoItem variant="yellow-dark">
              <div>
                <CurrencyDollar />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </C.InfoItem>
          </C.Card>
          <img src={IllustrationImg} alt="" />
        </C.SuccessContent>
      </main>
    </C.SuccessContainer>
  )
}
