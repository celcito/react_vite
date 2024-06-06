import React from 'react';
import { Formik,  Form } from 'formik';
import {Input } from '../input'
import * as S from './styles'
import { Wrapper } from '../wraper';
import { Link } from 'react-router-dom';
import {CustomButton} from '../custom-button'
import {useFormLogin} from './use-form-login'
import {FormLoginValues}from '../../types/'

const initialValuesFormLogin:FormLoginValues = { email: '', password: '' }
export const LoginForm: React.FC = () => {
  const  {handleSubmit,LoginFormSchema,ToastContainer } = useFormLogin()
  return (
    <S.WrapperForm>
       <ToastContainer />
    <Formik
      initialValues={initialValuesFormLogin}
      validationSchema={LoginFormSchema}
      onSubmit={(values:FormLoginValues) => {
        console.log(values);
        handleSubmit(values)
      }}
    >
      {({ errors, touched,values}) => (
        <Form>
               <h1>Login</h1>
          <Wrapper>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" type="email" value={values.email} />
           {errors.email && touched.email? <div>{errors.email}</div> : null} 
          </Wrapper>

          <Wrapper>
          <label htmlFor="password">Password</label>
          <Input id="password" name="password" type="password" value={values.password}  />
           {errors.password && touched.password? <div>{errors.password}</div> : null} 
          </Wrapper>
          <CustomButton type="submit">Login</CustomButton>
        </Form>
      )}
    </Formik>
    <S.DivCreate >

<S.Customh2>Cadastre-se</S.Customh2>
<p>Ainda não possui conta? Cadastre-se no site.</p>
</S.DivCreate>
<Link to="/create">
<CustomButton type="button">Cadastro</CustomButton>
</Link>
    </S.WrapperForm>
  );
};

