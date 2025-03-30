import styled from 'styled-components';
interface ActiveButton {
  isActive: boolean;
}

export const TabWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabButton = styled.li<ActiveButton>`
  border: 1px solid #d4d4d4;
  padding: 10px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border-bottom: ${({ isActive }) => (isActive ? 'none' : '1px solid #d4d4d4')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ isActive }) => (isActive ? 'black' : '#948780')};

  &:hover {
    color: black;
    font-weight: bold;
    background-color: #f0f0f0;
  }
`;
