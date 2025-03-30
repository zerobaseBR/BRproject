import styled from 'styled-components';

export const IceCreamFilterTabsContainer = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

export const IceCreamFilterTabsItem = styled.li<{ $active: boolean }>`
  padding: 8px 12px;
  color: ${({ $active }) => ($active ? '#fff' : '#F986BD')};
  background-color: ${({ $active }) => $active && '#F986BD'};
  border: 1px solid #f986bd;
  font-family: 'NanumSquareNeoBold';
  font-size: 14px;
  border-radius: 16px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;
