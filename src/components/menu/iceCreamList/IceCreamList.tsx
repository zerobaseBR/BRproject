import * as S from '@/components/menu/iceCreamList/IceCreamList.style';

import { IceCreamListData } from '@/components/menu/iceCreamListData';

export default function IceCreamList() {
  return (
    <S.MenuPageList>
      {IceCreamListData?.map(IceCream => (
        <S.MenuPageListItem key={IceCream.id} $mainColor={IceCream.mainColor}>
          <S.MenuPageListItemContent>
            <S.MenuPageListItemContentImageContainer>
              <img src={IceCream.imageSrc} alt={IceCream.name} />
            </S.MenuPageListItemContentImageContainer>
            <S.MenuPageListItemContentText $textColor={IceCream.textColor}>
              {IceCream.hash}
            </S.MenuPageListItemContentText>
          </S.MenuPageListItemContent>
          <S.MenuPageListItemName>{IceCream.name}</S.MenuPageListItemName>
        </S.MenuPageListItem>
      ))}
    </S.MenuPageList>
  );
}
