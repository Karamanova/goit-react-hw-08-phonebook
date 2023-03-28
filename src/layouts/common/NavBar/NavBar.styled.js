import styled from "styled-components";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const NavBarList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavBarItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (min-width: 480px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export const NavBarIcon = styled(RiHome2Line)`
  color: #9baacf;
`;

export const NavBarLink = styled(NavLink)`
  display: block ;
  position: relative;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #9baacf};
  &.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #9baacf;
    border-radius: 2px;
  }
`;