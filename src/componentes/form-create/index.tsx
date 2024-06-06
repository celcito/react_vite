import React from 'react';
import { Formik,  Form } from 'formik';
import {Input } from '../input'
import * as S from './styles'
import { Wrapper } from '../wraper';
import {CustomButton} from '../custom-button'
import 'react-toastify/dist/ReactToastify.css';
import {FormCreateValues }from '../../types'
import {useFormCreate} from './use-form-create'

const initialValuesFormCreate:FormCreateValues = { name:"", email: '', password: '',confirmpassword: '',birthDate:"" }
export const FormCreate: React.FC = () => {
  const {handleSubmit,CreateFormSchema,ToastContainer } =useFormCreate()
 
  return (
    
    <S.WrapperForm>
      <ToastContainer />
    <Formik
      initialValues={initialValuesFormCreate}
      validationSchema={CreateFormSchema}
      onSubmit={(values:FormCreateValues) => {
         console.log(values);
         handleSubmit(values)
      }}
    >
      {({ errors, touched,values}) => (
        <Form>
               <h1>Cadastre-se</h1>
          <Wrapper>
          <label htmlFor="name">Nome</label>
          <Input id="name" name="name" type="name" value={values.name} />
           {errors.name && touched.name? <div>{errors.name}</div> : null} 
          </Wrapper>  

          <Wrapper>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" type="email" value={values.email} />
           {errors.email && touched.email? <div>{errors.email}</div> : null} 
          </Wrapper>
          <Wrapper>
          <label htmlFor="birthDate">Data de Nascimento</label>
          <Input id="birthDate" name="birthDate" type="date" value={values.birthDate}  />
           {errors.birthDate && touched.birthDate? <div>{errors.birthDate}</div> : null} 
          </Wrapper>   
          <Wrapper>
          <label htmlFor="password">Password</label>
          <Input id="password" name="password" type="password" value={values.password}  />
           {errors.password && touched.password? <div>{errors.password}</div> : null} 
          </Wrapper>
          <Wrapper>
          <label htmlFor="password">Confirme Password</label>
          <Input id="confirmpassword" name="confirmpassword" type="password" value={values.confirmpassword}  />
           {errors.confirmpassword && touched.confirmpassword? <div>{errors.confirmpassword}</div> : null} 
          </Wrapper>

      <CustomButton type="submit">Cadastre-se</CustomButton>

        </Form>
      )}
    </Formik>

    
    </S.WrapperForm>
  );
};