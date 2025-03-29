import styled from 'styled-components';

export const MonthlyPageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 52px 24px 140px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 16px 120px;
  }
`;

export const MonthlyPageHeaderTitle = styled.h2`
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

export const MonthlyPageBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
`;

export const MonthlyPageBodyMenuTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #37271f;
`;

export const MonthlyPageBodyMenuEnglishTitle = styled.p`
  font-size: 18px;
  color: #37271f;
  margin-top: 4px;
  margin-bottom: 28px;
`;

export const MonthlyPageBodyMenuDescription = styled.p`
  font-size: 18px;
  color: #37271f;
  margin-top: 32px;
`;

export const MonthlyPageBodyMainImageContainer = styled.div`
  margin-top: 48px;
`;

export const MonthlyPageBodyMainImage = styled.div`
  width: 400px;
  border-radius: 20px;
  overflow: hidden;
`;
