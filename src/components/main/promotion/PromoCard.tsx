import React from 'react';
import * as S from './styles';
import { PromoCardProps } from './types';

const PromoCard: React.FC<PromoCardProps> = ({
  promotion,
  isVisible,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <S.PromotionCard
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `perspective(1000px) translateY(0) rotateX(0)`
          : `perspective(1000px) translateY(30px) rotateX(5deg)`,
        transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.12}s`,
        zIndex: isHovered ? 10 : 1,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={promotion.url} aria-label={promotion.title}>
        <S.CardImageWrapper>
          <img
            src={promotion.image}
            alt={promotion.title}
            loading="lazy"
            onError={e => {
              e.currentTarget.src =
                'https://www.baskinrobbins.co.kr/assets/images/common/img_default.png';
            }}
          />
          <S.CardOverlay>
            <S.ViewButton>자세히 보기</S.ViewButton>
          </S.CardOverlay>
        </S.CardImageWrapper>
        <S.CardContent>
          <div>
            <S.CardPeriod>{promotion.period}</S.CardPeriod>
            <S.CardTitle
              className={isHovered ? 'highlighted' : ''}
              style={{
                textShadow: isHovered ? '0px 2px 2px rgba(255, 84, 132, 0.2)' : 'none',
                fontWeight: isHovered ? '800' : '700',
              }}
            >
              {promotion.title}
            </S.CardTitle>
            <S.CardDescription>{promotion.description}</S.CardDescription>
          </div>
        </S.CardContent>
      </a>
    </S.PromotionCard>
  );
};

export default React.memo(PromoCard);
