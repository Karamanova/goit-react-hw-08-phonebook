import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/authSlice";
import { UserBarInfo, UserName, UserActionsList, UserActionsListItem, UserActionsLink } from "./UserBar.styled";
import { PrimaryButton } from "components/common/PrimaryButton.styled";
import { Navigate } from "react-router";

export const UserBar = () => {
  const name = useSelector(state => state.auth.user.name);
  const isLogged = useSelector(state => state.auth.isLogged);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    <Navigate to="/" replace={true} />
  }
  
  return (
    <>
      {isLogged
        ? <UserBarInfo>
            <UserName>You are logged in as: {name}</UserName>
            <PrimaryButton type="button" onClick={logoutHandler}>LOG OUT</PrimaryButton>
          </UserBarInfo> 
        : <UserActionsList>
            <UserActionsListItem>
                <UserActionsLink to="register">Register</UserActionsLink>
            </UserActionsListItem>
            <UserActionsListItem>
                <UserActionsLink to="login">Login</UserActionsLink>
            </UserActionsListItem>
          </UserActionsList>
      }
    </>
  );
};