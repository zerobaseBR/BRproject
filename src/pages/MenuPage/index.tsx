import * as S from '@/pages/MenuPage/index.style';

import Tabs from '@/components/menu/tab/Tabs';
import IceCreamList from '@/components/menu/iceCreamList/IceCreamList';

export default function MenuPage() {
  return (
    <S.MenuPageContainer>
      <Tabs />
      <S.MenuPageHeaderTitle>ICE CREAM</S.MenuPageHeaderTitle>
      <S.MenuPageHeaderText>
        한 입에 물면 달콤하게 사르르 녹는 아이스크림.
        <br />
        당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을 거예요.
      </S.MenuPageHeaderText>
      <IceCreamList />
    </S.MenuPageContainer>
  );
}
