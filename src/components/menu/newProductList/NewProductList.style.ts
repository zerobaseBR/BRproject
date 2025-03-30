import styled from 'styled-components';

export const NewProductListContainer = styled.div`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewProductListTitle = styled.p`
  font-size: 24px;
  color: #41332c;
  font-weight: 600;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

export const NewProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NewProductItemImage = styled.div`
  width: 84%;
  height: 84%;
  aspect-ratio: 1;
  transition: transform 300ms;
`;

export const NewProductItem = styled.li`
  max-width: 250px;
  border-radius: 16px;
  border: 1px solid #d4d4d4;
  cursor: pointer;

  &:hover ${NewProductItemImage} {
    transform: scale(1.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 400px;
  }
`;

export const NewProductItemImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  background-color: #f0b6b5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewProductItemName = styled.p`
  padding: 40px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
