import styled from 'styled-components'
import { cores } from '../../styles'

export const DownloadsContainer = styled.div`
  position: relative;
  padding: 100px 0;
`

export const DownloadsInfo = styled.div`
  color: ${cores.branco};
  position: absolute;
  top: 380px;
  left: 770px;

  h2 {
    font-size: 44px;
    font-weight: 500;
    padding-bottom: 24px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    color: ${cores.prata};
  }
`

export const Imagem = styled.div`
  width: 86vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`
