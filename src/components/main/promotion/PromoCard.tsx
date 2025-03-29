import React, { useRef } from 'react';
import * as S from './styles';
import { PromoCardProps, DiscountType } from './types';

const PromoCard: React.FC<PromoCardProps> = ({
  promotion,
  isVisible,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateY = x * 0.03;
    const rotateX = -y * 0.03;

    card.style.transform = `perspective(1000px) translateY(${isVisible ? -15 : 30}px) rotateX(${
      isVisible ? rotateX : 5
    }deg) rotateY(${isVisible ? rotateY : 0}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = isVisible
      ? 'perspective(1000px) translateY(0) rotateX(0)'
      : 'perspective(1000px) translateY(30px) rotateX(5deg)';

    onMouseLeave();
  };

  const isPermanentEvent = promotion.period === '상시 진행';

  const formatTitle = (title: string) => {
    if (title.length > 15) {
      const midPoint = Math.floor(title.length / 2);
      let splitIndex = title.indexOf(' ', midPoint - 5);

      if (splitIndex === -1 || splitIndex > midPoint + 5) {
        splitIndex = midPoint;
      }

      return (
        <>
          {title.slice(0, splitIndex)}
          <wbr />
          {title.slice(splitIndex)}
        </>
      );
    }

    return title;
  };

  const formatDescription = (description: string) => {
    const pricePattern = /([0-9]+,?[0-9]*)(원|만원|천원|백원|\s*원)/g;

    const discountPattern =
      /([0-9]+%|[0-9]+\+[0-9]+|[0-9]+,[0-9]+원|FREE|[0-9]+원|OFF|최대|구매)/gi;

    const highlightedText = description
      .replace(pricePattern, '<strong class="price">$&</strong>')
      .replace(discountPattern, '<span class="discount-term">$&</span>');

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const getDiscountClass = () => {
    if (!promotion.discountType) return '';

    switch (promotion.discountType) {
      case DiscountType.PRICE_OFF:
        return 'price-off';
      case DiscountType.UPGRADE:
        return 'upgrade';
      case DiscountType.PLUS_ONE:
        return 'plus-one';
      case DiscountType.FREE_GIFT:
        return 'free-gift';
      case DiscountType.PERCENT_OFF:
        return 'percent-off';
      default:
        return '';
    }
  };

  return (
    <S.PromotionCard
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `perspective(1000px) translateY(0) rotateX(0)`
          : `perspective(1000px) translateY(30px) rotateX(5deg)`,
        transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.12}s`,
        zIndex: isHovered ? 10 : 1,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <a href={promotion.url} aria-label={`${promotion.title} - ${promotion.description}`}>
        <S.CardImageWrapper>
          <img
            src={promotion.image}
            alt=""
            aria-hidden="true"
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
            <S.CardPeriod className={isPermanentEvent ? 'permanent' : ''}>
              {promotion.period}
            </S.CardPeriod>
            <S.CardTitle
              className={isHovered ? 'highlighted' : ''}
              style={{
                textShadow: isHovered ? '0px 2px 2px rgba(255, 84, 132, 0.2)' : 'none',
                fontWeight: isHovered ? '800' : '700',
              }}
            >
              {formatTitle(promotion.title)}
            </S.CardTitle>
            <S.CardDescription className={getDiscountClass()}>
              {formatDescription(promotion.description)}
            </S.CardDescription>
          </div>
        </S.CardContent>
      </a>
    </S.PromotionCard>
  );
};

export default React.memo(PromoCard);
