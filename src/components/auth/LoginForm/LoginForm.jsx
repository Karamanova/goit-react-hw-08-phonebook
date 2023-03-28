import { Formik, ErrorMessage } from "formik";
import { loginUser } from "redux/authSlice";
import { useRedux } from "hooks/useRedux";
import { Navigate } from "react-router";
import { logSchema } from "scheme/scheme";
import { AuthForm } from "components/auth/common/AuthForm.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { ErrorText } from "components/common/ErrorText.styled";
import { Input } from "components/common/Input.styled";

export const LoginForm = () => {
  const [dispatch] = useRedux();

  const submitHandler = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(user));
    <Navigate to="contacts" replace={true} />
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={submitHandler}
      validationSchema={logSchema}
    >
      {props => (
        <AuthForm>
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
          <PrimaryButton type="submit">LOG IN</PrimaryButton>
        </AuthForm>
      )}
    </Formik>
  );
};