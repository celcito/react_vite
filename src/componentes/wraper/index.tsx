import * as S from './styles'

type Props = {
    children: React.ReactNode
  }

export const Wrapper=(props:Props)=>(

<S.Wrapper>
{props.children}
</S.Wrapper>
)