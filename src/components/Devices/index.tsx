import { DevicesContainer, DevicesList, DevicesTitle } from './styles'

import computador from '../../assets/images/dispositivos/computador.png'
import tv from '../../assets/images/dispositivos/tv.png'
import videoGames from '../../assets/images/dispositivos/videogames.png'
import cel from '../../assets/images/dispositivos/celular.png'

const Devices = () => (
  <>
    <DevicesTitle>Disponível nos seu dispositivos favoritos</DevicesTitle>
    <DevicesContainer className="container">
      <DevicesList>
        <li>
          <img src={computador} alt="" />
          <h3>Computador</h3>
          <p>Chorme OS</p>
          <p>MacOS</p>
          <p>PC Windows</p>
        </li>
        <li>
          <img src={tv} alt="" />
          <h3>TV</h3>
          <p>Amazon Fire TV</p>
          <p>Android TV</p>
          <p>Apple TV</p>
          <p>Chromecast</p>
          <p>Samsung</p>
        </li>
        <li>
          <img src={videoGames} alt="" />
          <h3>Video Games</h3>
          <p>PS4</p>
          <p>PS5</p>
          <p>Xbox One</p>
          <p>Xbox Serix X</p>
          <p>Xbox Serix S</p>
        </li>
        <li>
          <img src={cel} alt="" />
          <h3>Celulares e Tablets</h3>
          <p>Tablets Amazon Fire</p>
          <p>Celulares e Tablets Android</p>
          <p>iPhone e iPad</p>
        </li>
      </DevicesList>
    </DevicesContainer>
  </>
)

export default Devices
