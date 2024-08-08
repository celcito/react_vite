import * as S from './sytles'
import React from  'react'
import {verifyTokenExpired} from '../../helpers/verify-token-expired'
type Props = {
    children: React.ReactNode
}
const handleLogout=()=>{
  localStorage.setItem('token','')
  window.location.href = '/login';
}

const token:string= localStorage.getItem('token')|| ""
const tokenExpired =  verifyTokenExpired(token)
export const CustomHeader = ({ children }: Props) => {
  const Logout  = (tokenExpired!==undefined && !tokenExpired) ?
      <div onClick={handleLogout}>Logout</div>:<div></div>
 return(
 <>
  <S.CustomHeader>{children}
  {Logout}
  </S.CustomHeader>
  </>
 )
}

