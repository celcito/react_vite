
import { CustomSection } from "../../componentes/section"
import {FormCreate} from '../../componentes/form-create'
import * as S from './styles'                   

export const CreatePage: React.FC = () => {
    return (
           <CustomSection>
            <S.DivBackground> </S.DivBackground>
            <FormCreate /> 
            </CustomSection>
    )
}


