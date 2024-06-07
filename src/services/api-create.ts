import axios from 'axios';
import.meta.env.REACT_APP_API_URL

const apiClient = axios.create({
 baseURL: import.meta.env.VITE_REACT_APP_API_URL
,
});


export const postRequest = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error:any) {
    throw error.response? error.response.data : error.message;
  }
};