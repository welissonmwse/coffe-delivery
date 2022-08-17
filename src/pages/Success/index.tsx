import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import IllustrationImg from '../../assets/Illustration.svg'
import * as C from './styles'

interface OrderDataProps {
  street: string
  district: string
  city: string
  uf: string
  type: string
  numberHouse: string
}

export function Success() {
  const [orderData, setOrderData] = useState<OrderDataProps>()

  const type = {
    creditCard: 'Cartão de Crédito',
    debitCard: 'Cartão de Débito',
    money: 'Dinheiro',
  } as const

  useEffect(() => {
    const storagedCart = localStorage.getItem('@CoffeDelivery:pedido')

    if (storagedCart) {
      const storagedCartParse = JSON.parse(storagedCart)
      const storagedCartFormatted: OrderDataProps = {
        street: storagedCartParse.street,
        district: storagedCartParse.district,
        city: storagedCartParse.city,
        uf: storagedCartParse.uf,
        type: storagedCartParse.type,
        numberHouse: storagedCartParse.numberHouse,
      }
      console.log(storagedCartFormatted)
      setOrderData(storagedCartFormatted)
    }
  }, [])

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
                  Entrega em{' '}
                  <strong>
                    {' '}
                    {orderData?.street}, {orderData?.numberHouse}
                  </strong>
                </p>
                <p>
                  {orderData?.district} - {orderData?.city},{' '}
                  {String(orderData?.uf).toLocaleUpperCase()}
                </p>
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
                <strong>{type[orderData?.type]}</strong>
              </div>
            </C.InfoItem>
          </C.Card>
          <img src={IllustrationImg} alt="" />
        </C.SuccessContent>
      </main>
    </C.SuccessContainer>
  )
}
