import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BackgroundCoffe from '../../assets/Imagem.png'
import * as C from './styles'
import { Card } from '../../components/Card'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Product } from '../../@types'

// interface CoffeDataType {
//   id: number
//   name: string
//   image: string
//   tags: string
//   description: string
//   price: string
// }

export function Home() {
  const [products, setProducts] = useState<Product[]>([])
  // const [amount, setAmount] = useState(0)

  useEffect(() => {
    ;(async () => {
      const response = await api.get<Product[]>('/products')
      const data = response.data.map((product) => ({ ...product, amount: 0 }))
      setProducts(data)
      console.log(data)
    })()
    // setCoffes(products)
  }, [])

  return (
    <C.HomeContainer>
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
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </C.CoffeContent>
      </C.CoffeSection>
    </C.HomeContainer>
  )
}
