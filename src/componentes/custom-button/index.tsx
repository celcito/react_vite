import * as S from './styles'

type Props = {
    children: React.ReactNode;
    type:"button" | "submit" | "reset";
}
  
export const CustomButton = ({ type,children }: Props) => (
  <S.CustonButton  type={type} >{children}</S.CustonButton>
)