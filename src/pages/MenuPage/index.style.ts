import styled from 'styled-components';

export const MenuPageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 24px 170px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 16px 140px;
  }
`;

export const MenuPageHeaderTitle = styled.h2`
  color: #f986bd;
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  margin-top: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 60px;
  }
`;

export const MenuPageHeaderText = styled.p`
  margin: 50px 0 90px;
  color: #f986bd;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 30px 0 60px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;
