import { CustomSection } from "../../componentes/section"
import * as S from './styles'                   

export const NotFoundPage: React.FC = () => {
    return (
           <CustomSection>
            <S.DivBackground></S.DivBackground>
            <S.DivOnlyText>Pagina Não encontrada    </S.DivOnlyText>
            </CustomSection>
    )
}