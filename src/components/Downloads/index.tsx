import simba from '../../assets/images/fundo_rei_leao.png'
import { DownloadsContainer, DownloadsInfo, Imagem } from './styles'

const Downloads = () => (
  <DownloadsContainer className="container">
    <Imagem style={{ backgroundImage: `url(${simba})` }} />
    <DownloadsInfo>
      <h2>Baixe filmes e séries</h2>
      <p>
        Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre{' '}
        <br />
        com você, até mesmo sem internet.
      </p>
    </DownloadsInfo>
  </DownloadsContainer>
)

export default Downloads
