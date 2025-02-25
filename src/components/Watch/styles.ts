import styled from 'styled-components'
import { cores } from '../../styles'

export const WatchContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${cores.branco};
  padding: 80px 0;
  flex-wrap: wrap; /* Garante que os elementos se ajustem em telas menores */

  img {
    width: 800px;
    height: auto;

    @media (max-width: 1024px) {
      width: 70%; /* Ajusta a imagem em telas menores que 1024px */
    }

    @media (max-width: 768px) {
      width: 100%; /* Imagem com 100% de largura em telas pequenas */
    }
  }
`

export const WatchInfo = styled.div`
  padding-left: 30px;

  @media (max-width: 1024px) {
    padding-left: 20px; /* Reduz a margem esquerda em telas médias */
  }

  h2 {
    font-size: 44px;
    font-weight: 500;
    padding-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 32px; /* Diminui o tamanho da fonte em telas pequenas */
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    color: ${cores.prata};

    @media (max-width: 768px) {
      font-size: 16px; /* Ajusta o tamanho da fonte do parágrafo em telas pequenas */
      line-height: 24px; /* Ajusta o espaçamento entre as linhas */
    }
  }
`
