import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 99vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    width: 100vw; /* Ajusta a largura da imagem em telas menores que 1024px */
    height: 80vh; /* Ajusta a altura em telas menores */
  }

  @media (max-width: 768px) {
    height: 60vh; /* Ajusta a altura em telas pequenas */
    background-size: 100vw;
  }
`

export const Info = styled.div`
  position: absolute;
  top: 350px;
  left: 140px;
  text-align: left;

  @media (max-width: 1024px) {
    top: 270px;
    left: 50px; /* Ajusta a posição para telas menores que 1024px */
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    padding: 0 20px; /* Adiciona espaçamento nas laterais em telas pequenas */
  }

  h1 {
    color: ${cores.branco};
    font-size: 36px;

    @media (max-width: 1024px) {
      font-size: 32px; /* Ajusta o tamanho da fonte para telas médias */
    }

    @media (max-width: 768px) {
      font-size: 28px; /* Ajusta o tamanho do título em telas pequenas */
    }
  }

  a {
    position: absolute;
    top: 450px;
    left: 340px;
    font-size: 20px;

    @media (max-width: 1024px) {
      top: 370px; /* Ajusta a posição do link em telas menores */
      left: 50%;
      transform: translateX(-50%); /* Centraliza o link */
    }

    @media (max-width: 768px) {
      font-size: 18px; /* Ajusta o tamanho da fonte em telas pequenas */
      display: none;
    }
  }

  p {
    color: ${cores.prata};
    position: absolute;
    top: 480px;
    left: 260px;
    font-size: 18px;

    @media (max-width: 1024px) {
      top: 410px; /* Ajusta a posição para telas médias */
      left: 50%;
      transform: translateX(-50%); /* Centraliza o texto */
    }

    @media (max-width: 768px) {
      font-size: 16px; /* Ajusta o tamanho da fonte em telas pequenas */
      display: none;
    }
  }
`

export const Logo = styled.img`
  width: 400px;
  height: auto;
  position: absolute;
  top: 100px;
  left: 200px;

  @media (max-width: 1024px) {
    width: 300px; /* Ajusta a largura do logo em telas médias */
    top: 50px;
    left: 50%;
    transform: translateX(-50%); /* Centraliza o logo */
  }

  @media (max-width: 768px) {
    width: 250px; /* Ajusta o logo para telas pequenas */
    position: relative;
    left: 25%;
    top: 0;
  }
`

export const ComboList = styled.ul`
  img {
    position: absolute;
    top: 540px;
    left: 320px;
    width: 200px;
    height: auto;
    margin-right: 24px;

    @media (max-width: 1024px) {
      top: 470px; /* Ajusta a posição da imagem em telas médias */
      left: 50%;
      transform: translateX(-50%); /* Centraliza a imagem */
      width: 150px; /* Reduz o tamanho da imagem */
    }

    @media (max-width: 768px) {
      display: none;
      top: 400px; /* Ajusta a posição em telas pequenas */
      width: 120px; /* Ajusta o tamanho da imagem em telas pequenas */
    }
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

    @media (max-width: 1024px) {
      top: 580px; /* Ajusta a posição do botão em telas médias */
      left: 50%;
      transform: translateX(-50%); /* Centraliza o botão */
      padding: 15px 80px; /* Ajusta o padding em telas médias */
    }

    @media (max-width: 768px) {
      font-size: 18px; /* Ajusta o tamanho da fonte em telas pequenas */
      top: 520px; /* Ajusta a posição do botão em telas pequenas */
      padding: 12px 60px; /* Ajusta o padding em telas pequenas */
      display: none;
    }
  }
`
