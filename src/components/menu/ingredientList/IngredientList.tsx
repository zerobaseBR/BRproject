import * as S from '@/components/menu/ingredientList/IngredientList.style';

import CreamImage from '@/assets/images/menu/monthly-cream.png';
import StrawberryImage from '@/assets/images/menu/monthly-strawberry.png';
import ChapssaltteokImage from '@/assets/images/menu/monthly-chapssaltteok.png';

const ingredientListData = [
  {
    id: 1,
    name: '크림치즈',
    imageSrc: CreamImage,
  },
  {
    id: 2,
    name: '딸기 과육',
    imageSrc: StrawberryImage,
  },
  {
    id: 3,
    name: '찹쌀떡',
    imageSrc: ChapssaltteokImage,
  },
];

export default function IngredientList() {
  return (
    <S.IngredientListContainer>
      {ingredientListData.map(ingredient => (
        <S.IngredientListItem>
          <S.IngredientListItemImageContainer>
            <img src={ingredient.imageSrc} alt={`${ingredient.name} 이미지`} />
          </S.IngredientListItemImageContainer>
          <S.IngredientListItemTitle>{ingredient.name}</S.IngredientListItemTitle>
        </S.IngredientListItem>
      ))}
    </S.IngredientListContainer>
  );
}
