import EventCard from './EventCard';
import * as S from '@/components/brplay/EventTab.style';
export default function EventTab() {
  return (
    <div>
      <S.TabWrap>
        <S.TabButton>전체</S.TabButton>
        <S.TabButton>제휴혜택</S.TabButton>
        <S.TabButton>프로모션</S.TabButton>
      </S.TabWrap>
      <EventCard />
    </div>
  );
}
