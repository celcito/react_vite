import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postRequest } from '../../services/api-create';
import {FormLoginValues }from '../../types'
import { useNavigate } from "react-router-dom"
import {LoginFormSchema} from './validator'

export const useFormLogin = () => {
const navigate = useNavigate()

const postData = async (endpoint: string, payload: any) => {
  try {
    const result = await postRequest(endpoint, payload);
    const { access_token } = result

    if (!result.hasOwnProperty('access_token'))
      throw new Error(result.message);

    localStorage.setItem('token', access_token);
    toast.success('Login Realizado com sucesso',{
      position: "top-right",
      autoClose: 2000,
      onClose: () => {
        navigate("/wellcome");
      },
    })

    return result;
  } catch (err:any) {

    toast.error(`Erro: ${err.message}`);
       throw err;
  }
}
const handleSubmit = async (values:FormLoginValues) => {
  await postData('/auth/sign-in', values);
}

return {handleSubmit,postData,navigate,LoginFormSchema,ToastContainer, toast }
}