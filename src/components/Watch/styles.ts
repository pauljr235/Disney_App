import styled from 'styled-components'
import { cores } from '../../styles'

export const WatchContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${cores.branco};
  padding: 80px 0;
  img {
    width: 800px;
    height: auto;
  }
`

export const WatchInfo = styled.div`
padding-left: 30px;
  h2 {
    font-size: 44px;
    font-weight: 500;
    padding-bottom: 24px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    color: ${cores.prata};
}
  }
`
