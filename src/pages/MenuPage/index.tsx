import * as S from '@/pages/MenuPage/index.style';

import { IceCreamList } from '@/constants/iceCreamList';

export default function MenuPage() {
  return (
    <S.MenuPageContainer>
      <S.MenuPageHeaderTitle>Ice Cream</S.MenuPageHeaderTitle>
      <S.MenuPageHeaderText>
        한 입에 물면 달콤하게 사르르 녹는 아이스크림.
        <br />
        당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을 거예요.
      </S.MenuPageHeaderText>
      <S.MenuPageList>
        {IceCreamList.map(IceCream => (
          <S.MenuPageListItem mainColor={IceCream.mainColor}>
            <S.MenuPageListItemContent>
              <S.MenuPageListItemContentImageContainer>
                <img src={IceCream.imageSrc} alt={IceCream.name} />
              </S.MenuPageListItemContentImageContainer>
              <S.MenuPageListItemContentText textColor={IceCream.textColor}>
                {IceCream.hash}
              </S.MenuPageListItemContentText>
            </S.MenuPageListItemContent>
            <S.MenuPageListItemName>{IceCream.name}</S.MenuPageListItemName>
          </S.MenuPageListItem>
        ))}
      </S.MenuPageList>
    </S.MenuPageContainer>
  );
}
