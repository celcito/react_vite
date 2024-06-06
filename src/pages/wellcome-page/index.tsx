import { CustomSection } from "../../componentes/section"
import * as S from './styles'                   

export const WelcomePage: React.FC = () => {
    return (
           <CustomSection>
            <S.DivBackground></S.DivBackground>
            <S.DivOnlyText>Bem Vindo!</S.DivOnlyText>
            </CustomSection>
    )
}