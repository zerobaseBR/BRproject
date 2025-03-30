import * as S from '@/components/menu/tab/IceCreamFilterTabs.style';
import { iceCreamFilterTabsData } from './iceCreamFilterTabsData';

export default function IceCreamFilterTabs({
  filter,
  onChange,
}: {
  filter: string[];
  onChange: (tab: string) => void;
}) {
  return (
    <S.IceCreamFilterTabsContainer>
      {['전체', ...iceCreamFilterTabsData].map(tab => (
        <S.IceCreamFilterTabsItem
          key={tab}
          onClick={() => onChange(tab)}
          $active={filter.includes(tab)}
        >
          {tab}
        </S.IceCreamFilterTabsItem>
      ))}
    </S.IceCreamFilterTabsContainer>
  );
}
