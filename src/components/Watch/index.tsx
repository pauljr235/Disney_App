import mandalorian from '../../assets/images/tv_pc_tablet_celular.png'
import { WatchContainer, WatchInfo } from './styles'

const Watch = () => (
  <WatchContainer className="container">
    <img src={mandalorian} alt="" />
    <WatchInfo>
      <h2>Assista do seu jeito</h2>
      <p>
        Aproveite a tela grande da TV ou assista no tablet, laptop, celular e
        outros aparelhos. Nossa seleção de títulos em 4K não para de crescer.
        Além disso, para a felicidade de todos, é possível assistir em até 4
        telas ao mesmo tempo.
      </p>
    </WatchInfo>
  </WatchContainer>
)

export default Watch
