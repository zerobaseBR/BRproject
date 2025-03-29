import styled from 'styled-components';

export const TabsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
`;

export const TabsListItem = styled.li<{ $isSelected: boolean }>`
  padding: 8px 24px;
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : '#f986bd')};
  font-weight: 600;
  border-radius: 16px;
  background-color: ${({ $isSelected }) => $isSelected && '#f986bd'};
  cursor: pointer;

  ${({ $isSelected }) =>
    !$isSelected &&
    `
    &:hover {
      color: #f5b9d6;
    }
  `}
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 14px;
    padding: 4px 16px;
  }
`;
