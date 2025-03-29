import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as S from './styles';
import PromoCard from './PromoCard';
import { promotionItems } from './promoData';

export default function PromotionSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [textAnimated, setTextAnimated] = useState(false);

  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setIsLoaded(true);

        setTimeout(() => {
          setTextAnimated(true);
        }, 800);

        const timer = setTimeout(() => {
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
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.PromotionWrapper ref={sectionRef}>
      <S.GlobalStyles />
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
