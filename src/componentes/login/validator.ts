import * as Yup from 'yup';
export const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
    .matches(/[a-z]/, 'Senha deve ter no pelo menos uma letra')
    .matches(/\d/, 'Senha deve ter no pelo menos um número')
    .matches(/[\W_]+/, 'Senha deve ter no pelo menos um caractere especial')
    .required('Obrigatório'),
  });
  