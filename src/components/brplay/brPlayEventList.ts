import eventImage1 from '@/assets/images/brplay/event/event_image1.png';
import eventImage2 from '@/assets/images/brplay/event/event_image2.png';
import eventImage3 from '@/assets/images/brplay/event/event_image3.png';
import eventImage4 from '@/assets/images/brplay/event/event_image4.png';
import eventImage5 from '@/assets/images/brplay/event/event_image5.png';
import eventImage6 from '@/assets/images/brplay/event/event_image6.png';
import eventImage7 from '@/assets/images/brplay/event/event_image7.png';
import eventImage8 from '@/assets/images/brplay/event/event_image8.png';
import eventImage9 from '@/assets/images/brplay/event/event_image9.png';
import eventImage10 from '@/assets/images/brplay/event/event_image10.png';
import eventImage11 from '@/assets/images/brplay/event/event_image11.png';
import eventImage12 from '@/assets/images/brplay/event/event_image12.png';
import eventImage13 from '@/assets/images/brplay/event/event_image13.png';
import eventImage14 from '@/assets/images/brplay/event/event_image14.png';

export interface Card {
  id: string;
  category: '프로모션' | '제휴혜택';
  image: string;
  title: string;
  dateRange?: string;
  tag?: string;
}

export const EventCards: Card[] = [
  {
    id: '1',
    category: '프로모션',
    image: eventImage1,
    title: '31데이 사전예약 시, 하프갤론 5,500원 OFF',
    dateRange: '2025.03.26 ~ 2025.03.30',
    tag: 'D-01',
  },
  {
    id: '2',
    category: '프로모션',
    image: eventImage2,
    title:
      '3월 이달의 더블주니어! 이달의 맛 선택시, 500원 추가하면 싱귤레귤러를 더블주니어로 더블업!',
    dateRange: '2025.03.01 ~ 2025.03.31',
    tag: 'D-02',
  },
  {
    id: '3',
    category: '프로모션',
    image: eventImage3,
    title: '유플투쁠, 쿼터(18,500원) 구매 시 최대 9천원 OFF',
    dateRange: '2025.03.20 ~ 2025.03.31',
    tag: 'D-02',
  },
  {
    id: '4',
    category: '제휴혜택',
    image: eventImage4,
    title: 'T 우주패스 구독 혜택 (모바일교환권)',
    dateRange: '2025.03.01 ~ 2026.01.31',
    tag: 'D-308',
  },
  {
    id: '5',
    category: '제휴혜택',
    image: eventImage5,
    title: 'LG U+ 구독 혜택 (모바일교환권)',
    dateRange: '2025.03.26 ~ 2026.01.31',
    tag: 'D-01',
  },
  {
    id: '6',
    category: '프로모션',
    image: eventImage6,
    title: '워크샵 by 배스킨라빈스 그랜드 오픈',
    dateRange: '상시 운영',
    tag: 'D-308',
  },
  {
    id: '7',
    category: '제휴혜택',
    image: eventImage7,
    title: '삼성카드 보너스포인트 100% 사용',
    dateRange: '상시 운영',
    tag: 'D-01',
  },
  {
    id: '8',
    category: '제휴혜택',
    image: eventImage8,
    title: '이제 배라에서도 애플페이',
    dateRange: '상시 운영',
    tag: 'D-308',
  },
  {
    id: '9',
    category: '제휴혜택',
    image: eventImage9,
    title: '해피앱에서 5% 적립 놓치지 마세요!',
    dateRange: '상시 운영',
    tag: 'D-01',
  },
  {
    id: '10',
    category: '제휴혜택',
    image: eventImage10,
    title: 'LG U+ 멤버십 배스킨라빈스 특별한 제휴 혜택!',
    dateRange: '상시 운영',
    tag: 'D-308',
  },
  {
    id: '11',
    category: '제휴혜택',
    image: eventImage11,
    title: 'KT 멤버십 배스킨라빈스 특별한 제휴 혜택!',
    dateRange: '상시 운영',
    tag: 'D-01',
  },
  {
    id: '12',
    category: '제휴혜택',
    image: eventImage12,
    title: 'T 멤버십 회원 대상 싱글레귤러 최대 50% 할인 또는 적립립',
    dateRange: '상시 운영',
    tag: 'D-308',
  },
  {
    id: '13',
    category: '제휴혜택',
    image: eventImage13,
    title: '현대카드 M포인트 50% 사용',
    dateRange: '상시 운영',
    tag: 'D-01',
  },
  {
    id: '14',
    category: '프로모션',
    image: eventImage14,
    title: '1회용 컵 사용 줄이기 안내',
    dateRange: '상시 운영',
    tag: 'D-308',
  },
];
