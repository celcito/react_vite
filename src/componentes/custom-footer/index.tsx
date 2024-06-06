import * as S from './sytles'

type Props = {
    children: React.ReactNode
}
  
export const CustomFooter = ({ children }: Props) => (
  <S.CustomFooter>{children}</S.CustomFooter>
)