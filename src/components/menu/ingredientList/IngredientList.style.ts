import styled from 'styled-components';

export const IngredientListContainer = styled.ul`
  display: flex;
  gap: 72px;
`;

export const IngredientListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const IngredientListItemImageContainer = styled.div`
  width: 64px;
  height: 64px;
`;

export const IngredientListItemTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
