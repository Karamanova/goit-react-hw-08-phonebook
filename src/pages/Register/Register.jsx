import { MainTitle } from "components/common/MainTitle.styled";
import { RegisterForm } from "components/auth/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <>
      <MainTitle>For creating your own contacts list please register</MainTitle>
      <RegisterForm />
    </>
  );
};

export default Register;