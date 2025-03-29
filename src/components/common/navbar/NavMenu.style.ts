import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled.li`
  padding: 10px;
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: black;
  }
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  left: 0;
  background-color: white;
  z-index: 20;
  border: 1px solid #eee;
  width: max-content;

  ul {
    display: flex;
    gap: 40px;
    padding: 10px;
    margin: 0;
    list-style: none;
  }
`;

export const SubList = styled.li`
  padding: 10px;
`;

export const SubLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 22px;
  &:hover {
    color: #ff4d72;
  }
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
