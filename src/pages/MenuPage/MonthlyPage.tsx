import * as S from '@/pages/MenuPage/MonthlyPage.style';

import Tabs from '@/components/menu/tab/Tabs';
import IngredientList from '@/components/menu/ingredientList/IngredientList';

import PekoImage from '@/assets/images/menu/monthly-peko.png';
import NewProductList from '@/components/menu/newProductList/NewProductList';

import { nutritionListData } from '@/components/menu/nutritionListData';

export default function MonthlyPage() {
  return (
    <S.MonthlyPageContainer>
      <Tabs />
      <S.MonthlyPageHeaderTitle>3월 이달의 맛</S.MonthlyPageHeaderTitle>
      <S.MonthlyPageBodyContainer>
        <S.MonthlyPageBodyMenuTitle>말랑 딸기 찹쌀떡</S.MonthlyPageBodyMenuTitle>
        <S.MonthlyPageBodyMenuEnglishTitle>
          CHEWY STRAWBERRY CHAPSSALTTEOK
        </S.MonthlyPageBodyMenuEnglishTitle>
        <IngredientList />
        <S.MonthlyPageBodyMenuDescription>
          진한 크래프트 크림치즈 아이스크림에 쫀득한 딸기향 찹쌀떡과 상큼한 딸기 과육이 가득!
        </S.MonthlyPageBodyMenuDescription>
        <S.MonthlyPageBodyMainImageContainer>
          <S.MonthlyPageBodyMainImage>
            <img src={PekoImage} alt="peko 이미지" />
          </S.MonthlyPageBodyMainImage>
          <S.MonthlyPageBodynNutritionContainer>
            <S.MonthlyPageBodynNutritionTitle>영양정보</S.MonthlyPageBodynNutritionTitle>
            <S.MonthlyPageBodynNutritionList>
              {nutritionListData.map(nutrition => (
                <S.MonthlyPageBodynNutritionListItem key={nutrition.id}>
                  <S.MonthlyPageBodynNutritionListName>
                    {nutrition.name}
                  </S.MonthlyPageBodynNutritionListName>
                  <S.MonthlyPageBodynNutritionListText>
                    {nutrition.text}
                  </S.MonthlyPageBodynNutritionListText>
                </S.MonthlyPageBodynNutritionListItem>
              ))}
            </S.MonthlyPageBodynNutritionList>
          </S.MonthlyPageBodynNutritionContainer>
        </S.MonthlyPageBodyMainImageContainer>
      </S.MonthlyPageBodyContainer>
      <NewProductList />
    </S.MonthlyPageContainer>
  );
}
