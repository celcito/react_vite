import * as S from './styles'

type Props = {
    children: React.ReactNode
}
  
export const CustomSection = ({ children }: Props) => (
  <S.CustomSection>{children}</S.CustomSection>
)