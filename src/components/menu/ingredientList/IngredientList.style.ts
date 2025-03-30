import styled from 'styled-components';

export const IngredientListContainer = styled.ul`
  display: flex;
  gap: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 48px;
  }
`;

export const IngredientListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const IngredientListItemImageContainer = styled.div`
  width: 64px;
  /* aspect-ratio: 1; */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 48px;
  }
`;

export const IngredientListItemTitle = styled.p`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;
