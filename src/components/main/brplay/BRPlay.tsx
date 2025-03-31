import React, { useState, useEffect } from 'react';
import * as S from './styles';

const imageCards = [
  {
    id: 1,
    src: 'https://www.baskinrobbins.co.kr/upload/main/brplay/38ec45e00b62db0f26e4ee90ce889841.png',
    alt: 'MY FLAVOR LIST',
    href: '#',
    title: 'MY FLAVOR LIST',
    description: '나만의 맛있는 조합을 찾아보세요',
  },
  {
    id: 2,
    src: 'https://www.baskinrobbins.co.kr/upload/main/brplay/99847b6c140916bfe27eceea5c2ed9dc.png',
    alt: '배라광장',
    href: '#',
    title: '배라광장',
    description: '고객님들의 특별한 이야기를 들려주세요',
  },
];

const BrPlaySection: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // 요소가 뷰포트에 들어왔을 때 애니메이션 시작
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('br-play-section');
    if (sectionElement) observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => [...prev, id]);
  };

  // 이미지 미리 로드
  useEffect(() => {
    imageCards.forEach(card => {
      const img = new Image();
      img.src = card.src;
      img.onload = () => handleImageLoad(card.id);
    });
  }, []);

  return (
    <S.Wrapper id="br-play-section" className={isVisible ? 'visible' : ''}>
      <S.Decorations>
        <S.DecorationCircle top="-50px" left="5%" size="120px" delay="0s" />
        <S.DecorationCircle top="30%" right="10%" size="80px" delay="0.3s" />
        <S.DecorationCircle bottom="10%" left="15%" size="100px" delay="0.6s" />
        <S.DecorationDot top="20%" right="20%" />
        <S.DecorationDot bottom="30%" left="10%" />
      </S.Decorations>

      <S.Title>BR Play</S.Title>
      <S.Subtitle>배라와 함께한 당신의 다양한 의견을 듣습니다</S.Subtitle>

      <S.CardsWrapper>
        {imageCards.map(({ id, src, alt, href, title, description }, index) => {
          const isLoaded = loadedImages.includes(id);

          return (
            <S.CardLink
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title}: ${description}`}
              className={isLoaded ? 'loaded' : ''}
              style={{ '--index': index } as React.CSSProperties}
            >
              <S.CardImageWrapper>
                {!isLoaded && <S.ImageLoader />}
                <S.CardImage src={src} alt={alt} onLoad={() => handleImageLoad(id)} />
                <S.CardOverlay />
                {/* 리본 제거 */}
              </S.CardImageWrapper>

              <S.CardContent>
                <S.Label>{title}</S.Label>
                <S.Description>{description}</S.Description>
                <S.ButtonWrapper>
                  <S.Button aria-hidden="true">
                    바로가기<S.Arrow>&rarr;</S.Arrow>
                  </S.Button>
                </S.ButtonWrapper>
              </S.CardContent>
              <S.CardRipple />
            </S.CardLink>
          );
        })}
      </S.CardsWrapper>

      <S.MoreButtonWrapper>
        <S.MoreButton>
          더 많은 콘텐츠 보기
          <S.ButtonIcon>+</S.ButtonIcon>
        </S.MoreButton>
      </S.MoreButtonWrapper>
    </S.Wrapper>
  );
};

export default BrPlaySection;
