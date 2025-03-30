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

export const MonthlyPageBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 32px;
  }
`;

export const MonthlyPageBodyMenuTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #37271f;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
  }
`;

export const MonthlyPageBodyMenuEnglishTitle = styled.p`
  font-size: 18px;
  color: #37271f;
  margin-top: 4px;
  margin-bottom: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;

export const MonthlyPageBodyMenuDescription = styled.p`
  font-size: 18px;
  color: #37271f;
  margin-top: 32px;
  word-break: keep-all;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export const MonthlyPageBodynNutritionContainer = styled.div`
  /* display: flex; */
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.8);
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
`;

export const MonthlyPageBodyMainImageContainer = styled.div`
  position: relative;
  margin-top: 48px;

  &:hover ${MonthlyPageBodynNutritionContainer} {
    display: flex;
  }
`;

export const MonthlyPageBodyMainImage = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
`;

export const MonthlyPageBodynNutritionTitle = styled.p`
  color: #fff;
  font-size: 24px;
  padding: 40px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px;
    font-size: 16px;
  }
`;

export const MonthlyPageBodynNutritionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 12px;
  }
`;

export const MonthlyPageBodynNutritionListItem = styled.li`
  text-align: center;
`;

export const MonthlyPageBodynNutritionListName = styled.p`
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export const MonthlyPageBodynNutritionListText = styled.p`
  color: #fff;
  font-size: 14px;
  color: #ff3f67;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;
