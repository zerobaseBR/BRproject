import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledLinkProps {
  $active?: boolean;
  $scrolled?: boolean;
}

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  $scrolled?: boolean;
}

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    margin-right: 20px;
  }
`;

export const DivContainer = styled.div`
  margin-bottom: 120px;
`;

export const NavbarContainer = styled.div<NavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $scrolled }) => ($scrolled ? '#f986bd' : 'transparent')};
  z-index: 30;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  h1 {
    padding: 0px 10px 0px 20px;
  }
`;

export const LogoIcon = styled.img``;

export const NavContainer = styled.nav<React.HTMLAttributes<HTMLDivElement>>`
  margin-left: 32px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
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

export const UserMenu = styled.div.attrs({})`
  margin: 0 20px;
  margin-right: 10px;
` as unknown as React.FC<
  React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }
>;

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

export const UserButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  margin: 15px 0px;
`;

export const NavItem = styled.li.attrs({
  role: 'presentation',
})<React.HTMLAttributes<HTMLLIElement>>`
  padding: 10px;
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 15px;
  }
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${({ $scrolled, $active }) => {
    if (!$scrolled) return 'black';
    return $active ? 'black' : 'white';
  }};
  font-weight: bold;

  &:hover {
    color: black;
  }
`;

export const SubList = styled.li<React.HTMLAttributes<HTMLLIElement>>`
  padding: 10px;
`;

export const SubLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 22px;
  padding: 10px;

  &:hover {
    color: '#ff4d72';
  }
`;

export const SubMenu = styled.div`
  margin-left: 90px;
  background-color: white;
  z-index: 20;
  width: max-content;
`;

export const SubMenuWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
`;

export const NavItemWrapper = styled.ul`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  &:hover ${SubMenu} {
    display: block;
  }
`;

export const SubMenuItem = styled.ul<React.HTMLAttributes<HTMLUListElement>>`
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
