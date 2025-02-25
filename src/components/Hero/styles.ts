import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 99vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Info = styled.div`
  h1 {
    color: ${cores.branco};
    position: absolute;
    top: 350px;
    left: 140px;
  }
  a {
    position: absolute;
    top: 450px;
    left: 340px;
    font-size: 20px;
  }
  p {
    color: ${cores.prata};
    position: absolute;
    top: 480px;
    left: 260px;
    font-size: 18px;
  }
`

export const Logo = styled.img`
  width: 400px;
  height: auto;
  position: absolute;
  top: 100px;
  left: 200px;
`
export const ComboList = styled.ul`
  img {
    position: absolute;
    top: 540px;
    left: 320px;
    width: 200px;
    height: auto;
    margin-right: 24px;
  }

  button {
    display: block;
    padding: 18px 100px;
    position: absolute;
    top: 650px;
    left: 240px;
    font-size: 22px;
    border: none;
    border-radius: 8px;
    background-color: ${cores.roxo};
    color: ${cores.branco};
  }
`
