import * as S from '@/components/menu/iceCreamList/IceCreamList.style';

import { IceCreamListData } from '@/components/menu/iceCreamList/iceCreamListData';

export default function IceCreamList({ filter }: { filter: string[] }) {
  const filteredList =
    filter.includes('전체') || filter.length === 0
      ? IceCreamListData
      : IceCreamListData.filter(item =>
          filter.some((keyword: string) => item.keyword.includes(keyword))
        );

  return (
    <S.MenuPageList>
      {filteredList?.map(IceCream => (
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
