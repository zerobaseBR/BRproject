import styled from 'styled-components';

export const MenuPageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 52px 24px 140px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 16px 120px;
  }
`;

export const MenuPageHeaderTitle = styled.h2`
  font-family: 'NanumSquareNeoHeavy';
  color: #f986bd;
  font-size: 72px;
  font-weight: 700;
  text-align: center;
  margin-top: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 40px;
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
