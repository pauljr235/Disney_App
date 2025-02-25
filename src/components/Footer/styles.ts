import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  color: ${cores.prata};
  text-align: center;
  padding: 20px;
  font-size: 14px;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 10px;
  }
`

export const ListaFooter = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 16px;
  line-height: 24px;

  li a {
    color: ${cores.prata};
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;

    &:hover {
      color: ${cores.branco};
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`

export const LogoFooter = styled.img`
  width: 80px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
  }
`
