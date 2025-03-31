import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardContentProps {
  category: '프로모션' | '제휴혜택';
}

export const EventContainer = styled.div`
  margin: 200px 50px 30px 50px;
`;

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
  margin: 50px 0 30px 0;
  padding: 0 25px;
  line-height: 1.5;
  font-weight: 600;
`;

export const CardContainer = styled.div`
  padding-top: 30px;
  border-top: 1px solid #d4d4d4;
`;

export const CardListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const CardListItem = styled.li`
  margin: 50px 25px 0;
  list-style: none;
  border-radius: 10px;
  border: 1px solid #d4d4d4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 20px 10px 0;
  }
`;

export const CardItem = styled(Link)`
  display: flex;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 10px;
  }

  transition: transform 0.2s ease;

  ${CardListItem}:hover & {
    transform: scale(1.05);
  }
`;

export const CardListBox = styled.div`
  width: 295px;
  height: 295px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 150px;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;

export const CardContent = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  span {
    font-weight: bold;
    color: ${({ category }) => (category === '제휴혜택' ? '#ff7aac' : '#65c8ff')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 15px;
  }
`;
