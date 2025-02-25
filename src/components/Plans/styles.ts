import styled from 'styled-components'
import { cores } from '../../styles'

export const PlansTitle = styled.h1`
  color: ${cores.branco};
  text-align: center;
  font-size: 44px;
  padding: 80px 0;

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 40px 0;
  }
`

export const PlansList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  color: ${cores.branco};
  padding-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const PlansItem = styled.li`
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  list-style: none;
  width: 100%;
  max-width: 300px;

  img {
    padding-bottom: 50px;
    padding-top: 50px;
    max-width: 100%;
    height: auto;
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

    @media (max-width: 768px) {
      padding: 15px 50px;
      font-size: 14px;
    }
  }

  p {
    padding: 24px 32px;

    @media (max-width: 768px) {
      padding: 16px;
    }
  }
`
