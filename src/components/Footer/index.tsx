import logo from '../../assets/images/disneyplus.svg'
import { FooterContainer, ListaFooter, LogoFooter } from './styles'

const Footer = () => {
  return (
    <FooterContainer className="container">
      <LogoFooter src={logo} alt="Disney+ Logo" />
      <br />
      <br />
      <ListaFooter>
        <li>
          <a href="#">Termos e Condições de Uso</a>
        </li>
        <li>
          <a href="#">Política de Privacidade</a>
        </li>
        <li>
          <a href="#">Proteção de Dados no Brasil</a>
        </li>
        <li>
          <a href="#">Anúncios Personalizados</a>
        </li>

        <li>
          <a href="#">Dispositivos Compatíveis</a>
        </li>
        <li>
          <a href="#">Ajuda</a>
        </li>
        <li>
          <a href="#">Sobre o Disney+</a>
        </li>
      </ListaFooter>
      <br />

      <p>
        © 2022 Disney, Disney+ e The Walt Disney Company. Todos os direitos
        reservados. Serviço de assinatura paga. Conteúdo sujeito à
        disponibilidade.
      </p>
      <br />
      <br />
      <p style={{ lineHeight: '24px' }}>
        Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e
        condições. O serviço Disney+ é comercializado por The Walt Disney
        Company (Brasil) Ltda., <br /> World Trade Center, Av. Das Nações
        Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903,
        Brasil e CNPJ/M 73.042.962/0004-20
      </p>
    </FooterContainer>
  )
}

export default Footer
