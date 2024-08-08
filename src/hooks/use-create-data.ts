import { useState, useCallback } from 'react';
import { postRequest } from '../services/api-create';
type PostDataParams<T> ={
  endpoint: string;
  payload: T;
}

export const usePostData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState<Error | null>(null);

  const postData = useCallback(async <T>(params: PostDataParams<T>) => {
    setLoading(true);
    try {
      const result = await postRequest(params.endpoint, params.payload);
      console.log("result", result);
      setData(result);
      setLoading(false);
      return result as T;
    } catch (err) {
      setErrorRequest(err as Error);
      setLoading(false);
      throw err;
    }
  }, []);

  console.log("error")
  return { postData, data, loading, errorRequest };
};