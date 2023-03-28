import { MainTitle } from "components/common/MainTitle.styled";
import { LoginForm } from "components/auth/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <MainTitle>If you already have account, please log in</MainTitle>
      <LoginForm />
    </>
  );
};

export default Login;