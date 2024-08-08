import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postRequest } from '../../services/api-create';
import {FormLoginValues }from '../../types'
import { useNavigate } from "react-router-dom"
import {LoginFormSchema} from './validator'

export const useFormLogin = () => {
const navigate = useNavigate()

type PostDataParams<T> ={
  endpoint: string;
  payload: T;
}


const postData =  async <T>(params: PostDataParams<T>) => {
  try {
    const result = await postRequest(params.endpoint, params.payload);
    const { access_token } = result

    if (!result.hasOwnProperty.call('access_token'))
      throw new Error(result.message);

    localStorage.setItem('token', access_token);
    toast.success('Login Realizado com sucesso',{
      position: "top-right",
      autoClose: 2000,
      onClose: () => {
        navigate("/wellcome");
      },
    })

    return result as T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err:any) {

    toast.error(`Erro: ${err.message}`);
       throw err;
  }
}
const handleSubmit = async (values: FormLoginValues) => {
  await postData({ endpoint: '/auth/sign-in', payload: values });
};
return {handleSubmit,postData,navigate,LoginFormSchema,ToastContainer, toast }
}