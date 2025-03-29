import * as S from '@/components/brplay/EventCard.style';
import { EventCards } from './brPlayEventList';

export default function EventCard() {
  return (
    <S.CardContainer>
      <S.CardListWrap>
        {EventCards.map(item => (
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
