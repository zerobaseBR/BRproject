import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const BEBETTER_ITEMS = [
  {
    id: 1,
    title: '핑크팜 캠페인',
    description: '지역 농가 상생 프로젝트',
    image: 'https://www.baskinrobbins.co.kr/assets/images/main/img_farm.png',
    link: '/about/society/pinkfarm',
  },
  {
    id: 2,
    title: '핑크드림 캠페인',
    description: '청소년 자립 지원 프로젝트',
    image: 'https://www.baskinrobbins.co.kr/assets/images/main/img_dream.png',
    link: '/about/society/pinkdream',
  },
  {
    id: 3,
    title: '핑크링크 캠페인',
    description: '중소 기업 콜라보 프로젝트',
    image: 'https://www.baskinrobbins.co.kr/assets/images/main/img_link.png',
    link: '/about/society/pinklink',
  },
];

export default function BeBetterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <S.BeBetterWrapper ref={sectionRef}>
      <S.SectionTitle>
        <h2>Be Better</h2>
        <p>배라가 사회와 함께 하는 방법</p>
        <span>가치 있는 같이</span>
      </S.SectionTitle>

      <S.BeBetterContainer>
        {BEBETTER_ITEMS.map((item, index) => (
          <S.BeBetterItem
            key={item.id}
            style={{ '--delay': `${0.2 + index * 0.15}s` } as React.CSSProperties}
          >
            <Link to={item.link} aria-label={`${item.title} - ${item.description}`}>
              <S.BeBetterImage>
                <img src={item.image} alt={item.title} loading="lazy" />
              </S.BeBetterImage>
              <S.BeBetterContent>
                <S.BeBetterTitle>{item.title}</S.BeBetterTitle>
                <S.BeBetterDescription>{item.description}</S.BeBetterDescription>
              </S.BeBetterContent>
            </Link>
          </S.BeBetterItem>
        ))}
      </S.BeBetterContainer>
    </S.BeBetterWrapper>
  );
}
