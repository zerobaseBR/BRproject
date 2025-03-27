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

export const MenuPageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
`;

export const MenuPageListItemContent = styled.div`
  position: relative;
  border: 1px solid #f3eee4;
  width: 100%;
  aspect-ratio: 1.24;
  border-radius: 45px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const MenuPageListItemContentImageContainer = styled.div`
  width: 90%;
  transition: transform 0.4s ease;
`;

export const MenuPageListItemContentText = styled.p<{ textColor: string }>`
  position: absolute;
  top: 40%;
  padding: 0 16px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  word-break: keep-all;
  color: ${({ textColor }) => textColor};
  transition: all 0.4s ease;
  opacity: 0;
`;

export const MenuPageListItemName = styled.p`
  text-align: center;
  color: #999;
  font-size: 17px;
  font-weight: 600;
  margin-top: 20px;
`;

export const MenuPageListItem = styled.li<{ mainColor: string }>`
  &:hover ${MenuPageListItemContent} {
    background-color: ${({ mainColor }) => mainColor};
  }

  &:hover ${MenuPageListItemContentImageContainer} {
    transform: translateY(40%);
  }

  &:hover ${MenuPageListItemContentText} {
    top: 24%;
    opacity: 1;
  }

  &:hover ${MenuPageListItemName} {
    color: ${({ mainColor }) => mainColor};
  }
`;
