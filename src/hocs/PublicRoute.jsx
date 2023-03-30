import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PublicRoute = ({ children, restricted = false }) => { 
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const redirect = isLoggedIn && restricted;
  
  return (
    redirect ? <Navigate to="/" /> : children
  );
}; 