import { useState } from 'react'
import { Menu, ShowsList } from './styles'

import limites from '../../assets/images/em_breve/sem_limites.jpg'
import lobisomem from '../../assets/images/em_breve/lobisomem.jpg'
import willow from '../../assets/images/em_breve/willow.jpg'
import santa from '../../assets/images/em_breve/the_santa_clauses.jpg'
import aranha from '../../assets/images/em_breve/spidey.jpg'
import desencantada from '../../assets/images/em_breve/desencantada.jpg'
import bluey from '../../assets/images/mais_populares/bluey.jpg'
import cavaleiro from '../../assets/images/mais_populares/cavaleira_da_lua.jpg'
import incrivel from '../../assets/images/mais_populares/o_incrivel_dr_pol.jpg'
import obiWan from '../../assets/images/mais_populares/obi_wan.jpg'
import red from '../../assets/images/mais_populares/red.jpg'
import tudo from '../../assets/images/mais_populares/tudo_igual_sqn.jpg'
import belair from '../../assets/images/mais_no_star_plus/belair.jpg'
import libertadores from '../../assets/images/mais_no_star_plus/libertadores.jpg'
import nba from '../../assets/images/mais_no_star_plus/nba.jpg'
import simpsons from '../../assets/images/mais_no_star_plus/os_simpson.jpg'
import premiere from '../../assets/images/mais_no_star_plus/premier_league.jpg'
import kardashians from '../../assets/images/mais_no_star_plus/the_kardashians.jpg'

const menuFilmes = {
  'EM BREVE': [
    { image: aranha },
    { image: desencantada },
    { image: limites },
    { image: lobisomem },
    { image: willow },
    { image: santa }
  ],
  POPULARES: [
    { image: bluey },
    { image: cavaleiro },
    { image: incrivel },
    { image: obiWan },
    { image: red },
    { image: tudo }
  ],
  'MAIS NO STAR +': [
    { image: belair },
    { image: libertadores },
    { image: nba },
    { image: simpsons },
    { image: premiere },
    { image: kardashians }
  ]
}

const Shows = () => {
  const [isOpen, setIsOpen] = useState<keyof typeof menuFilmes>('EM BREVE')

  return (
    <div className="container">
      <Menu>
        {Object.keys(menuFilmes).map((category) => (
          <button
            key={category}
            onClick={() => setIsOpen(category as keyof typeof menuFilmes)}
            className={isOpen === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </Menu>
      <ShowsList>
        {menuFilmes[isOpen].map((item, index) => (
          <div key={index}>
            <img src={item.image} />
          </div>
        ))}
      </ShowsList>
    </div>
  )
}

export default Shows
