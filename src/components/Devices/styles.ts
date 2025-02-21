import styled from 'styled-components'
import { cores } from '../../styles'

export const DevicesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* Centraliza o container */
  color: ${cores.branco};
  padding-top: 30px;

  align-items: center;
  h3 {
    padding-bottom: 32px;
  }

  p {
    margin-bottom: 8px;
  }
`
export const DevicesTitle = styled.h1`
  text-align: center;
  font-size: 44px;
  color: ${cores.branco};
  padding-top: 150px;
  font-weight: 500;
`

export const DevicesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;

  li {
    list-style: none;

    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }
  }

  img {
    width: 100%;
  }
`
