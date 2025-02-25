import styled from 'styled-components'
import { cores } from '../../styles'

export const ShowsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
  padding: 2vw 0;
  padding-left: 35px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  img {
    width: 433px;
    height: 260px;
    border-radius: 8px;
  }
`
export const Menu = styled.nav`
  text-align: center;
  margin-left: 40px;
  padding-top: 50px;
  button {
    border: none;
    background-color: transparent;
    color: ${cores.branco};
    font-size: 24px;
    margin-right: 50px;

    font-weight: 400;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      border-bottom: 2px solid;
    }
  }
`
