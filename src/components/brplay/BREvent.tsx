import * as S from '@/components/brplay/EventCard.style';
import EventTab from './EventTab';

export default function BREvent() {
  return (
    <S.EventContainer>
      <S.EventHeader>
        <S.EventTitle>Event</S.EventTitle>
      </S.EventHeader>
      <S.EventHeader>
        <S.EventDescription>
          배스킨라빈스와 함께 해피포인트 앱 / 오프라인 매장에서 진행하는
          <br />
          다양한 이벤트를 확인해보세요.
        </S.EventDescription>
      </S.EventHeader>
      <EventTab />
    </S.EventContainer>
  );
}
