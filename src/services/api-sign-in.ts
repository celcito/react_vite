import axios from 'axios';
import {ENV} from '../../environment';

const apiClient = axios.create({
 baseURL: ENV.REACT_APP_API_URL,
});

export const postRequest = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error:any) {
    throw error.response? error.response.data : error.message;
  }
};