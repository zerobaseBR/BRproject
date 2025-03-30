import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledLinkProps {
  $active?: boolean;
}

export const DivContainer = styled.div``;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f986bd;
  z-index: 30;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  h1 {
    padding: 0px 10px 0px 20px;
  }
`;

export const LogoIcon = styled.img``;

export const NavContainer = styled.nav`
  margin-left: 32px;
  padding: 10px;
`;

export const Nav = styled.ul`
  display: flex;
  padding-left: 10px;
  gap: 20px;
`;

export const RightSection = styled.div`
  display: flex;
  margin: 20px;
`;

export const UserMenu = styled.div`
  margin: 0 20px;
  margin-right: 10px;
`;

export const UserContainer = styled.div`
  position: absolute;
  right: 5px;
  background-color: white;
  border: 2px solid #f986bd;
  border-radius: 10px;
  padding: 10px;
`;

export const UserMenuItem = styled.li`
  font-weight: bold;
  text-align: center;
  padding: 2px 0;

  &:hover {
    color: #ff4d72;
  }
`;

export const UserButton = styled.button`
  margin: 15px 0px;
`;

export const NavItem = styled.li`
  padding: 10px;
  font-size: 20px;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${({ $active }) => ($active ? 'black' : 'white')};
  font-weight: bold;

  &:hover {
    color: black;
  }
`;

export const SubList = styled.li`
  padding: 10px;
`;

export const SubLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 22px;
  padding: 10px;

  &:hover {
    color: #ff4d72;
  }
`;
export const SubMenu = styled.div`
  background-color: white;
  z-index: 20;
  width: max-content;
`;

export const SubMenuWrap = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  margin: 20px 80px 0 0;
  background-color: white;
`;

export const NavItemWrapper = styled.div`
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  &:hover ${SubMenu} {
    display: block;
  }
`;
export const SubMenuItem = styled.ul`
  display: flex;
  gap: 40px;
  padding: 10px;
  margin: 0;
  list-style: none;
`;

export const MenuCategory = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: #948780;
  &:hover {
    color: #ff4d72;
  }
`;
