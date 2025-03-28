import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as S from './styles';
import PromoCard from './PromoCard';
import { promotionItems } from './promoData';

export default function PromotionSection() {
  // 상태 관리 최적화
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 스크롤 이벤트 핸들러 최적화
  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        // 화면에 섹션이 보이면 프로모션 카드들이 순차적으로 나타나도록 처리
        const timer = setTimeout(() => {
          setVisibleItems(promotionItems.map(promo => promo.id));
        }, 300);

        window.removeEventListener('scroll', handleScroll);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // 마우스 이벤트 핸들러
  const handleMouseEnter = useCallback((index: number) => {
    setHoverIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 한 번 체크

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.PromotionWrapper ref={sectionRef}>
      <S.SectionTitle>
        <h2>Promotion</h2>
        <p>베라의 다양한 혜택과 이벤트를 만나보세요</p>
      </S.SectionTitle>

      <S.PromotionBackground>
        <S.PromotionContainer>
          {promotionItems.map((promo, index) => (
            <PromoCard
              key={promo.id}
              promotion={promo}
              isVisible={visibleItems.includes(promo.id)}
              index={index}
              isHovered={hoverIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </S.PromotionContainer>
      </S.PromotionBackground>
    </S.PromotionWrapper>
  );
}
