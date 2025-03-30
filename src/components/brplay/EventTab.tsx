import { useState } from 'react';
import EventCard from './EventCard';
import * as S from '@/components/brplay/EventTab.style';

export type TabType = '전체' | '제휴혜택' | '프로모션';

export default function EventTab() {
  const [selectedTab, setSelectedTab] = useState<TabType>('전체');

  return (
    <div>
      <S.TabWrap>
        <S.TabButton $isActive={selectedTab === '전체'} onClick={() => setSelectedTab('전체')}>
          전체
        </S.TabButton>
        <S.TabButton
          $isActive={selectedTab === '제휴혜택'}
          onClick={() => setSelectedTab('제휴혜택')}
        >
          제휴혜택
        </S.TabButton>
        <S.TabButton
          $isActive={selectedTab === '프로모션'}
          onClick={() => setSelectedTab('프로모션')}
        >
          프로모션
        </S.TabButton>
      </S.TabWrap>
      <EventCard selectedTab={selectedTab} />
    </div>
  );
}
