import { Formik, ErrorMessage } from "formik";
import { AuthForm } from "components/auth/common/AuthForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { useRedux } from "hooks/useRedux";
import { registerUser } from "redux/authSlice";
import { Navigate } from "react-router";
import { registerSchema } from "scheme/scheme";
import { ErrorText } from "components/common/ErrorText.styled";
import { Input } from "components/common/Input.styled";

export const RegisterForm = () => {
  const [dispatch] = useRedux();

  const submitHandler = (values) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUser(user));
    <Navigate to="contacts" replace={true}/>
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={submitHandler}
      validationSchema={registerSchema}
    >
      {props => (
        <AuthForm>
          <Input
            type="text"
            name="name"
            placeholder="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <ErrorMessage name="name" render={msg => <ErrorText>{msg}</ErrorText>} />
          <Input
            type="text"
            name="email"
            placeholder="email"
            onChange={props.handleChange}
            value={props.values.email} />
          <ErrorMessage name="email" render={msg => <ErrorText>{msg}</ErrorText>} />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={props.handleChange}
            value={props.values.password} />
          <ErrorMessage name="password" render={msg => <ErrorText>{msg}</ErrorText>} />
          <PrimaryButton type="submit">REGISTER</PrimaryButton>
        </AuthForm>
      )}
    </Formik>
  );
};