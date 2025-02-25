import styled from 'styled-components'
import { cores } from '../../styles'

export const DownloadsContainer = styled.div`
  position: relative;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 60px 20px; /* Ajuste de padding para telas menores */
  }
`

export const DownloadsInfo = styled.div`
  color: ${cores.branco};
  position: absolute;
  top: 380px;
  left: 770px;

  @media (max-width: 1024px) {
    top: 300px; /* Ajusta a posição para telas menores */
    left: 50px; /* Ajusta a posição horizontal em telas menores */
  }

  @media (max-width: 768px) {
    position: relative; /* Torna o layout mais flexível em telas pequenas */
    top: 0;
    left: 0;
    text-align: center; /* Centraliza o texto em telas pequenas */
    padding: 0 20px; /* Adiciona espaçamento */
  }

  h2 {
    font-size: 44px;
    font-weight: 500;
    padding-bottom: 24px;

    @media (max-width: 1024px) {
      font-size: 36px; /* Ajusta o tamanho do título em telas médias */
    }

    @media (max-width: 768px) {
      font-size: 28px; /* Ajusta o tamanho do título em telas pequenas */
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    color: ${cores.prata};

    @media (max-width: 1024px) {
      font-size: 18px; /* Ajusta o tamanho da fonte em telas médias */
    }

    @media (max-width: 768px) {
      font-size: 16px; /* Ajusta o tamanho da fonte em telas pequenas */
      line-height: 24px; /* Ajusta a altura da linha para melhor legibilidade */
    }
  }
`

export const Imagem = styled.div`
  width: 86vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    width: 100vw; /* Ajusta a largura para telas menores */
    height: 80vh; /* Ajusta a altura da imagem */
  }

  @media (max-width: 768px) {
    width: 100%; /* A largura se adapta 100% na tela pequena */
    height: 60vh; /* Reduz a altura da imagem em dispositivos móveis */
  }
`
