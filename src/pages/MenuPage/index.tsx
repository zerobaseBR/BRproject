import { useState } from 'react';

import * as S from '@/pages/MenuPage/index.style';

import Tabs from '@/components/menu/tab/Tabs';
import IceCreamList from '@/components/menu/iceCreamList/IceCreamList';
import IceCreamFilterTabs from '@/components/menu/tab/IceCreamFilterTabs';

export default function MenuPage() {
  const [filter, setFilter] = useState<string[]>(['전체']);

  const handleFilterChange = (tab: string) => {
    if (tab === '전체') {
      setFilter(['전체']);
    } else {
      setFilter(prev => {
        const newFilters = prev.includes(tab)
          ? prev.filter(f => f !== tab)
          : [...prev.filter(f => f !== '전체'), tab];

        return newFilters.length === 0 ? ['전체'] : newFilters;
      });
    }
  };

  return (
    <S.MenuPageContainer>
      <Tabs />
      <S.MenuPageHeaderTitle>ICE CREAM</S.MenuPageHeaderTitle>
      <S.MenuPageHeaderText>
        한 입에 물면 달콤하게 사르르 녹는 아이스크림.
        <br />
        당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을 거예요.
      </S.MenuPageHeaderText>
      <IceCreamFilterTabs filter={filter} onChange={handleFilterChange} />
      <IceCreamList filter={filter} />
    </S.MenuPageContainer>
  );
}
