import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as S from '@/components/menu/Tabs.style';

const tabsList = [
  { id: 1, text: '이달의 맛', link: '/menu/monthly' },
  { id: 2, text: '아이스크림', link: '/menu' },
  { id: 3, text: '프리팩', link: '' },
  { id: 4, text: '아이스크림케이크', link: '' },
  { id: 5, text: '디저트', link: '' },
  { id: 6, text: '음료', link: '' },
  { id: 7, text: '커피', link: '' },
];

function Tabs() {
  const [pathnameState, setPathnameState] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    setPathnameState(pathname);
  }, [pathname]);

  return (
    <S.TabsList>
      {tabsList.map(tab => {
        const isActive = Boolean(tab.link && pathnameState === tab.link);

        return tab.link ? (
          <Link to={tab.link} key={tab.id}>
            <S.TabsListItem $isSelected={isActive}>{tab.text}</S.TabsListItem>
          </Link>
        ) : (
          <S.TabsListItem key={tab.id} $isSelected={false}>
            {tab.text}
          </S.TabsListItem>
        );
      })}
    </S.TabsList>
  );
}

export default Tabs;
