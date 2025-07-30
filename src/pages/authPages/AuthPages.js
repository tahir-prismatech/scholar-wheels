import { useState } from "react";
import AuthLayout from "../../layouts/authLayout/AuthLayout";
import BusinessDetail from "./BusinessDetail";
import LoginPage from "./LoginPage";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    phoneNumber: "",
    passWord: "",
    confirmPassword: "",
    tradingName: "",
    registrationNumber: "",
    firstName: "",
    surName: "",
    businessAddress: "",
    city: "",
    postalCode: "",
  });
  console.log(data);

  const [isLoginPage, setPage] = useState(true);
  return (
    <AuthLayout>
      {isLoginPage ? (
        <LoginPage
          dataSetter={(data) => setData((prev) => ({ ...prev, ...data }))}
          func={() => {
            setPage(false);
          }}
        />
      ) : (
        <BusinessDetail
          dataSetter={(data) => setData((prev) => ({ ...prev, ...data }))}
          func={() => {
            login(data)
            navigate("/")
          }}
        />
      )}
    </AuthLayout>
  );
}
