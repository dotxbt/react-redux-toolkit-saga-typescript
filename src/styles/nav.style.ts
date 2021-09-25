import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav<any>`
  display: flex;
  flex-direction: row;
  border-radius: ${p => p.borderRadius};
  margin: 0px auto;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(0,0,0,0.8);
  bottom: ${(p) => p.bottom ?? "none"};
  top: ${(p) => p.top ?? "none"};
  position: fixed;
  box-shadow: ${p => p.boxShadow};
`;

export const NavItemContainer = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  text-align: center;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  overflow: hidden;
  :last-child {
    border-radius: inherit;
  }
`;

export const NavItem = styled.li`
  margin: 0px;
  flex-grow: 1;
  align-content: center;
  text-align: center;
  flex-flow: row;
  margin: 0px 1px;
`;

interface LinkProps {
  isSelected: boolean;
}

export const NavLink = styled(Link)<LinkProps>`
  display: flex;
  border-radius: 2px;
  padding: 24px 20px;
  color: ${(p) => (p.isSelected ? "#f51963" : "#ffffff")};
  font-weight: 700;
  justify-content: center;
  flex-grow: 1;
  transition: ease-in-out 0.34 s;
  font-style: normal;
  text-decoration: none;
  background: rgba(33, 0, 22, 0.6);
  :active {
    background: rgba(33, 0, 22, 1.0);
  }
`;
