import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postRequest } from '../../services/api-create';
import {FormCreateValues }from '../../types'
import { useNavigate } from "react-router-dom"
import {CreateFormSchema} from './validator'

export const useFormCreate = () => {
const navigate = useNavigate() 
const postData = async (endpoint: any, payload: any) => {

  try {
    const result = await postRequest(endpoint, payload);
    toast.success('Cadastro realizado com sucesso',{
      position: "top-right",
      autoClose: 4000,
      onClose: () => {
        navigate("/login");
      },
    })

    return result;
  } catch (err:any) {
    toast.error(`Erro: ${err.message}`);
       throw err;
  }
}
const handleSubmit = async (values:FormCreateValues) => {
  await postData('/users', values);
}

return {handleSubmit,postData,navigate,CreateFormSchema,ToastContainer, toast }
}