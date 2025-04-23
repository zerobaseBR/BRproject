import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as S from './styles';
import PromoCard from './PromoCard';
import { promotionItems } from './promoData';

export default function PromotionSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [textAnimated, setTextAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 스크롤 핸들러 최적화
  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      setIsLoaded(true);

      // 텍스트 애니메이션 지연 적용
      const textAnimationTimer = setTimeout(() => {
        setTextAnimated(true);
      }, 800);

      // 아이템 표시 지연 적용
      const itemsTimer = setTimeout(() => {
        const showItems = () => {
          let currentItems: number[] = [];

          const showNextItem = (index = 0) => {
            if (index >= promotionItems.length) return;

            currentItems.push(promotionItems[index].id);
            setVisibleItems([...currentItems]);

            setTimeout(() => showNextItem(index + 1), 120);
          };

          showNextItem();
        };

        showItems();
      }, 300);

      window.removeEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(textAnimationTimer);
        clearTimeout(itemsTimer);
      };
    }
  }, []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드시 확인

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.PromotionWrapper ref={sectionRef}>
      <S.GlobalStyles />

      {/* 섹션 타이틀 */}
      <S.SectionTitle
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <h2 className={textAnimated ? 'animated' : ''}>Promotion</h2>
        <p
          className={textAnimated ? 'animated' : ''}
          style={{
            opacity: textAnimated ? 1 : 0,
            transform: textAnimated ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.5s ease-out 0.3s',
          }}
        >
          베라의 다양한 혜택과 이벤트를 만나보세요
        </p>
      </S.SectionTitle>

      {/* 프로모션 백그라운드 */}
      <S.PromotionBackground
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-out 0.2s',
        }}
      >
        <S.PromotionContainer>
          {promotionItems.map((promo, index) => (
            <PromoCard
              key={promo.id}
              promotion={promo}
              isVisible={visibleItems.includes(promo.id)}
              index={index}
              isHovered={hoverIndex === index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            />
          ))}
        </S.PromotionContainer>
      </S.PromotionBackground>
    </S.PromotionWrapper>
  );
}
