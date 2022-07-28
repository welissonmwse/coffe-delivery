import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Header } from '../../components/Header'
import BackgroundCoffe from '../../assets/Imagem.png'
import * as C from './styles'
import { Card } from '../../components/Card'
import { products } from '../../utils/products'
import { useEffect, useState } from 'react'

interface CoffeDataType {
  id: number
  name: string
  image: string
  tags: string
  description: string
  price: string
  amount: number
}

export function Home() {
  const [coffes, setCoffes] = useState<CoffeDataType[]>([])
  const [amount, setAmount] = useState(1)

  function handleAddAmount(id: number) {
    // const coffe = coffes.filter((coffe) => coffe.id === id)
    // if (coffe) {
    //   coffe.amount = amount + 1
    // }
    setAmount(amount + 1)
  }

  function handleLessAmount(id: number) {
    setAmount(amount - 1)
  }

  useEffect(() => {
    setCoffes(products)
  }, [])

  return (
    <C.HomeContainer>
      <Header />
      <C.BannerSection>
        <C.BannerContent>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </p>
          <C.Footer>
            <C.Items>
              <div>
                <C.Icon variant="yellow_dark">
                  <ShoppingCart size={16} />
                </C.Icon>
                <span>Compra simples e segura</span>
              </div>
              <div>
                <C.Icon variant="yellow">
                  <Timer size={16} />
                </C.Icon>
                <span>Entrega rápida e rastreada</span>
              </div>
            </C.Items>
            <C.Items>
              <div>
                <C.Icon variant="base_text">
                  <Package size={16} />
                </C.Icon>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <C.Icon variant="purple">
                  <Coffee size={16} />
                </C.Icon>
                <span>O café chega fresquinho até você</span>
              </div>
            </C.Items>
          </C.Footer>
        </C.BannerContent>
        <img src={BackgroundCoffe} alt="" />
      </C.BannerSection>
      <C.CoffeSection>
        <h2>Nossos cafés</h2>
        <C.CoffeContent>
          {coffes.map((coffe) => (
            <Card
              key={coffe.id}
              name={coffe.name}
              image={coffe.image}
              price={coffe.price}
              tags={coffe.tags}
              description={coffe.description}
              amount={amount}
              handleAddAmount={() => handleAddAmount(coffe.id)}
              handleLessAmount={() => handleLessAmount(coffe.id)}
            />
          ))}
        </C.CoffeContent>
      </C.CoffeSection>
    </C.HomeContainer>
  )
}
