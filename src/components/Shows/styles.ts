import styled from 'styled-components'
import { cores } from '../../styles'

export const ShowsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 2vw 5vw;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  img {
    width: 100%;
    max-width: 433px;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

export const Menu = styled.nav`
  text-align: center;
  margin-left: 40px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  button {
    border: none;
    background-color: transparent;
    color: ${cores.branco};
    font-size: 24px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.1s;
    padding-bottom: 5px;

    &:hover {
      border-bottom: 2px solid;
    }

    @media (max-width: 768px) {
      font-size: 20px;
      margin-right: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      margin-right: 10px;
    }
  }
`
