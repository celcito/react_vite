
import styled from 'styled-components'

export const CustomSection = styled.section`

display: grid;
grid-template-columns: 1fr 1fr;
min-height: 100vh;
gap: 2rem;

@media (max-width: 40rem) {
  grid-template-columns: 1fr;
}
`


