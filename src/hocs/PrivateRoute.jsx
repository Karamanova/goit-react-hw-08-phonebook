import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    !isLoggedIn
      ? <Navigate to='/' />
      : children
  );
};