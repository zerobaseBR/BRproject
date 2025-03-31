import React from 'react';
import styled from 'styled-components';
interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
  $scrolled?: boolean;
}

export const SearchInput = styled.input`
  width: 186px;
  transition: all 2s ease;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const SearchContainer = styled.div<StyleProps>`
  display: flex;
  padding-bottom: 3px;
  border-bottom: 3px solid ${({ $scrolled }) => ($scrolled ? 'white' : '#ff4d72')};
  margin: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border: none;
  }
`;

export const SearchIcon = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
  margin: 5px;
`;
