import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Header } from '../../components/Header'
import BackgroundCoffe from '../../assets/Imagem.png'
import * as C from './styles'
export function Home() {
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
            <div>
              <div>
                <ShoppingCart size={16} />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Timer size={16} />
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>
            <div>
              <div>
                <Package size={16} />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Coffee size={16} />
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </C.Footer>
        </C.BannerContent>
        <img src={BackgroundCoffe} alt="" />
      </C.BannerSection>
    </C.HomeContainer>
  )
}
