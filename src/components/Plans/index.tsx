import disney from '../../assets/images/logos/disneyplus_underline.png'
import comboPlus from '../../assets/images/logos/disney_star_plus_sm.png'
import star from '../../assets/images/logos/disney_star_plus_starzplay_underline.png'
import fundo from '../../assets/images/fundo_combo_plus.png'

import { PlansItem, PlansList, PlansTitle } from './styles'

const Plans = () => (
  <div className="container">
    <PlansTitle>Escolha seu Plano</PlansTitle>
    <PlansList>
      <PlansItem>
        <img src={disney} alt="logo" />
        <h2>R$ 27,90/mês*</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero
          reprehenderit <br /> sapiente voluptas veniam culpa, doloribus,
          repudiandae earum modi praesentium nemo corporis placeat fugit aperiam
          non ducimus ipsum dicta! Illum.
        </p>
        <button>ASSINE AGORA</button>
      </PlansItem>
      <PlansItem style={{ backgroundImage: `url(${fundo})` }}>
        <img src={comboPlus} alt="" />
        <h2>R$ 47,90/mês*</h2>
        <p style={{ marginLeft: '24px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero
          reprehenderit <br /> sapiente voluptas veniam culpa, doloribus,
          repudiandae earum modi praesentium nemo corporis placeat fugit aperiam
          non ducimus ipsum dicta! Illum.
        </p>
        <button style={{ marginLeft: '24px' }}>ASSINE AGORA</button>
      </PlansItem>
      <PlansItem>
        <img src={star} alt="" />
        <h2>R$ 57,90/mês*</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero
          reprehenderit <br /> sapiente voluptas veniam culpa, doloribus,
          repudiandae earum modi praesentium nemo corporis placeat fugit aperiam
          non ducimus ipsum dicta! Illum.
        </p>
        <button>ASSINE AGORA</button>
      </PlansItem>
    </PlansList>
  </div>
)

export default Plans
