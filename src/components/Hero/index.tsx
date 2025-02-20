import { ComboList, Imagem, Info, Logo } from './styles'

import hero from '../../assets/images/hero_desktop.jpeg'
import logo from '../../assets/images/disneyplus.svg'
import combo from '../../assets/images/logos/disney_star_plus.png'

const Hero = () => {
  return (
    <>
      <Imagem style={{ backgroundImage: `url(${hero})` }} />
      <Info>
        <Logo src={logo} alt="Logo Disney" />
        <h1>As melhores histórias em um só lugar.</h1>
        <a style={{ color: 'white' }} href="#">
          Assinar o Disney+
        </a>
        <p>R$ 27,90/mês ou R$279,90/ano à vista*</p>
        <ComboList>
          <img src={combo} alt="" />
          <button>ASSINE AGORA</button>
        </ComboList>
      </Info>
    </>
  )
}

export default Hero
