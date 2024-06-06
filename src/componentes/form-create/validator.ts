import * as Yup from 'yup';


export const CreateFormSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Senha deve ter no mínimo 8 caracteres, pelo menos uma letra, um caractere especial e um número')
      .matches(/[a-z]/, 'Senha deve ter no pelo menos uma letra')
      .matches(/\d/, 'Senha deve ter no pelo menos um número')
      .matches(/[\W_]+/, 'Senha deve ter no pelo menos um caractere especial')
      .required('Obrigatório'),
      confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Senhas Não conferem')
   });