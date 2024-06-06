
import * as S from './styles'

type Props = {
    type:string;
    name:string;
    id:string;
    value:string;
  }
 
export const Input= (props: Props) => (
    <S.CustomField {...props}/>
)