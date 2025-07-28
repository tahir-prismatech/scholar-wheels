import { useState } from "react";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import BusinessDetail from "./authPages/BusinessDetail";
import LoginPage from "./authPages/LoginPage";


export default function AuthPage() {

    const [isLoginPage, setPage] = useState(true)
  return (
    <AuthLayout>
      {isLoginPage? (<LoginPage func={()=>setPage(false)}/>) : (<BusinessDetail func={()=>setPage(true)}/>)}
    </AuthLayout>
  );
}
