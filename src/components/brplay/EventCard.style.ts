import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardContentProps {
  category: '프로모션' | '제휴혜택';
}

export const EventHeader = styled.div`
  text-align: center;
  color: #f986bd;
`;

export const EventTitle = styled.h2`
  font-size: 90px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
`;

export const EventDescription = styled.p`
  margin-top: 50px;
  padding: 0 25px;
  line-height: 1.5;
  font-weight: 600;
`;

export const CardContainer = styled.div`
  padding-top: 30px;
  border: 1px solid #d4d4d4;
`;

export const CardListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CardListItem = styled.li`
  margin: 50px 25px 0;
  list-style: none;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
`;

export const CardItem = styled(Link)`
  display: flex;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CardListBox = styled.div``;

export const CardImage = styled.img`
  border-radius: 10px 0px 0px 10px;
`;

export const CardContent = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  span {
    font-weight: bold;
    color: ${({ category }) => (category === '제휴혜택' ? '#ff7aac' : '#65c8ff')};
  }
`;
