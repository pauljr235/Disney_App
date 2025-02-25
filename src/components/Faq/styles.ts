import styled from 'styled-components'
import { cores } from '../../styles'

export const FAQContainer = styled.div`
  text-align: center;
  color: white;
  padding-bottom: 100px;
  width: 100%;
`

export const FAQItem = styled.div`
  background-color: rgb(35, 35, 35);
  padding: 50px;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #222;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 44px;
  color: ${cores.branco};
  padding-top: 150px;
  font-weight: 500;
  padding-bottom: 30px;
`

export const FAQHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`

export const FAQContent = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #b3b3b3;
`

export const Icon = styled.span`
  font-size: 24px;
  font-weight: bold;
`
