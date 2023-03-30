import { useSelector } from "react-redux";
import { NavBarList, NavBarItem, NavBarLink, NavBarIcon } from "./NavBar.styled";

export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <NavBarList>
      <NavBarItem>
        <NavBarLink to="/"><NavBarIcon size="20px" /></NavBarLink>
      </NavBarItem>
      {isLoggedIn && <NavBarItem><NavBarLink to="contacts">Contacts</NavBarLink></NavBarItem>}
    </NavBarList>
  );
};