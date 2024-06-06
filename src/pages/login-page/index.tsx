import { CustomSection } from "../../componentes/section"
import {LoginForm} from '../../componentes/login'
import * as S from './styles'                   

export const LoginPage: React.FC = () => {
    return (
           <CustomSection>
            <S.DivBackground> </S.DivBackground>
            <LoginForm />
            </CustomSection>
    )
}


