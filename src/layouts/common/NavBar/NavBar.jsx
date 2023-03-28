import { useSelector } from "react-redux";
import { NavBarList, NavBarItem, NavBarLink, NavBarIcon } from "./NavBar.styled";

export const NavBar = () => {
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <NavBarList>
      <NavBarItem>
        <NavBarLink to="/"><NavBarIcon size="20px" /></NavBarLink>
      </NavBarItem>
      {isLogged && <NavBarItem><NavBarLink to="contacts">Contacts</NavBarLink></NavBarItem>}
    </NavBarList>
  );
};