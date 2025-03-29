import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f986bd;
  top: 0;
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

export const NavContainer = styled.nav`
  margin-left: 32px;
`;

export const Nav = styled.ul`
  display: flex;
  padding-left: 10px;
  gap: 20px;
`;

export const RightSection = styled.div`
  display: flex;
  margin: 30px;
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

export const UserButton = styled.button``;
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// export const NavbarContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #f986bd;
//   top: 0;
//   z-index: 30;
//   width: 100%;
// `;

// export const LeftSection = styled.div`
//   display: flex;
//   align-items: center;

//   h1 {
//     padding: 0px 10px 0px 20px;
//   }
// `;

// export const NavContainer = styled.nav`
//   margin-left: 32px;
// `;

// export const Nav = styled.ul`
//   display: flex;
//   padding-left: 10px;
//   gap: 20px;
// `;

// export const NavItem = styled.li`
//   position: relative;
//   padding: 10px;
//   font-size: 20px;

//   // &:hover::before {
//   //   content: '';
//   //   position: absolute;
//   //   top: 100%;
//   //   left: 0;
//   //   width: 1000px;
//   //   height: 80px;
//   //   background-color: red;
//   //   border: 1px solid #eee;
//   //   z-index: 5;
//   // }
// `;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-weight: bold;

//   &:hover {
//     color: black;
//   }
// `;

// export const SubMenu = styled.div`
//   display: none;
//   position: absolute;
//   top: 82px;
//   left: 0;
//   background-color: white;
//   z-index: 10;
//   border: 1px solid #eee;
//   width: max-content;
//   padding: 10px;
//   height: 100px;

//   ul {
//     display: flex;
//     gap: 40px;
//     margin: 0;
//     list-style: none;
//   }

//   strong {
//     font-size: 16px;
//     margin-bottom: 5px;
//     display: inline-block;
//   }
// `;

// export const SubList = styled.li`
//   padding: 5px 0;
// `;

// export const SubLink = styled(Link)`
//   color: black;
//   font-weight: bold;
//   font-size: 16px;

//   &:hover {
//     color: #ff4d72;
//   }
// `;

// export const RightSection = styled.div`
//   display: flex;
//   margin: 30px;
// `;

// export const UserMenu = styled.div`
//   margin: 0 20px;
//   margin-right: 10px;
// `;

// export const UserContainer = styled.div`
//   position: absolute;
//   right: 5px;
//   background-color: white;
//   border: 2px solid #f986bd;
//   border-radius: 10px;
//   padding: 10px;
// `;

// export const UserMenuItem = styled.li`
//   font-weight: bold;
//   text-align: center;
//   padding: 2px 0;

//   &:hover {
//     color: #ff4d72;
//   }
// `;

// export const UserButton = styled.button``;

// export const NavItemWrapper = styled.div`
//   position: relative;
//   padding-top: 15px;
//   padding-bottom: 15px;
//   display: flex;

//   &:hover ${StyledLink} {
//     color: black;
//   }

//   &:hover ${SubMenu} {
//     display: block;
//   }
// `;
