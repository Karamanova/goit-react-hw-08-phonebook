import { MainTitle } from "components/common/MainTitle.styled";
import { LoginForm } from "components/auth/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/contacts");
  };

  return (
    <>
      <MainTitle>If you already have an account, please log in</MainTitle>
      <LoginForm onSuccess={handleLoginSuccess} />
    </>
  );
};

export default Login;