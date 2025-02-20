import { createGlobalStyle } from 'styled-components'

export const cores = {
  azulEscuro: '#040714',
  branco: '#f9f9f9',
  prata: 'silver',
  roxo: '#6421ff'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

}

.container{
  max-width: 1466px;
  width: 100%;
  margin: 0 auto;
}

body{
  background-color:${cores.azulEscuro};
}

`
