import { useState, useCallback } from 'react';
import { postRequest } from '../services/api-create';

export const usePostData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState<Error | null>(null);

  const postData = useCallback(async (endpoint: any, payload: any) => {
    setLoading(true);
    try {
      const result = await postRequest(endpoint, payload);
      console.log("result", result);
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      setErrorRequest(err as Error);
      setLoading(false);
      throw err;
    }
  }, []);

  console.log("error")
  return { postData, data, loading, errorRequest };
};