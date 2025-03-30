import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 186px;
  transition: all 2s ease;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    width: 300px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  padding-bottom: 3px;
  border-bottom: 2px solid white;
  margin: 10px;
`;

export const SearchIcon = styled.img`
  margin: 5px;
`;
