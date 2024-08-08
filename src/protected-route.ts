import React,{useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import {verifyTokenExpired} from './helpers/verify-token-expired'
import {ProtectedRouteProps} from './types'

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const token:string= localStorage.getItem('token')|| ""
  const tokenExpired =  verifyTokenExpired(token)

  useEffect(() => {
    if (!token || tokenExpired) {
      navigate('/login');
    }
  }, [token, navigate,tokenExpired]);

  return children;
};



