import * as S from '@/components/brplay/EventCard.style';
import { EventCards } from './brPlayEventList';
import { TabType } from './EventTab';

interface EventCardProps {
  selectedTab: TabType;
}

export default function EventCard({ selectedTab }: EventCardProps) {
  const filterCard =
    selectedTab === '전체' ? EventCards : EventCards.filter(item => item.category === selectedTab);

  return (
    <S.CardContainer>
      <S.CardListWrap>
        {filterCard.map(item => (
          <S.CardListItem key={item.id}>
            <S.CardItem to="/">
              <S.CardListBox>
                <S.CardImage src={item.image} />
              </S.CardListBox>
              <S.CardContent category={item.category}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.dateRange}</p>
              </S.CardContent>
            </S.CardItem>
          </S.CardListItem>
        ))}
      </S.CardListWrap>
    </S.CardContainer>
  );
}
