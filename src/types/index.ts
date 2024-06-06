import {ReactNode} from 'react'
export  type FormCreateValues={
    name:string;
    email:string,
    password:string;
    confirmpassword:string;
    birthDate:string;
  }
  
  export  type FormLoginValues={
    email:string,
    password:string;
  }

  export type ProtectedRouteProps = {
    children: ReactNode;
  };