import styled from 'styled-components'
import { cores } from '../../styles'

export const PlansTitle = styled.h1`
  color: ${cores.branco};
  text-align: center;
  font-size: 44px;
  padding: 80px 0;
`

export const PlansList = styled.ul`
  display: flex;
  color: ${cores.branco};
  padding-bottom: 60px;
`

export const PlansItem = styled.li`
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  list-style: none;
  img {
    padding-bottom: 50px;
    padding-top: 50px;
  }

  button {
    background: ${cores.roxo};
    color: ${cores.branco};
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
    transition: 0.3s;
    padding: 24px 100px;
  }

  p {
    padding: 24px 32px;
  }
`
