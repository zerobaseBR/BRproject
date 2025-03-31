import React, { useRef, useMemo } from 'react';
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

  // 완전히 새로운 문자열로 대체
  const getPeriodText = useMemo(() => {
    // 원본 텍스트가 '상시 진행'을 포함하는지 확인
    const isRegularEvent = String(promotion.period).includes('상시 진행');

    // 완전히 새로운 문자열 반환
    return isRegularEvent ? '상시 진행' : String(promotion.period).replace(/[^0-9.~\s년월일]/g, '');
  }, [promotion.period]);

  const isPermanentEvent = getPeriodText === '상시 진행';

  // 변환 로직을 useMemo로 최적화
  const formattedTitle = useMemo(() => {
    if (promotion.title.length > 15) {
      const midPoint = Math.floor(promotion.title.length / 2);
      let splitIndex = promotion.title.indexOf(' ', midPoint - 5);

      if (splitIndex === -1 || splitIndex > midPoint + 5) {
        splitIndex = midPoint;
      }

      return (
        <>
          {promotion.title.slice(0, splitIndex)}
          <wbr />
          {promotion.title.slice(splitIndex)}
        </>
      );
    }

    return promotion.title;
  }, [promotion.title]);

  // 설명 텍스트 변환 로직을 useMemo로 최적화
  const formattedDescription = useMemo(() => {
    const pricePattern = /([0-9]+,?[0-9]*)(원|만원|천원|백원|\s*원)/g;
    const discountPattern =
      /([0-9]+%|[0-9]+\+[0-9]+|[0-9]+,[0-9]+원|FREE|[0-9]+원|OFF|최대|구매)/gi;

    const highlightedText = promotion.description
      .replace(pricePattern, '<strong class="price">$&</strong>')
      .replace(discountPattern, '<span class="discount-term">$&</span>');

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  }, [promotion.description]);

  // 할인 클래스 반환 로직
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

  // 마우스 이동 핸들러
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

  // 마우스 떠남 핸들러
  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = isVisible
      ? 'perspective(1000px) translateY(0) rotateX(0)'
      : 'perspective(1000px) translateY(30px) rotateX(5deg)';

    onMouseLeave();
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
              {getPeriodText}
            </S.CardPeriod>
            <S.CardTitle
              className={isHovered ? 'highlighted' : ''}
              style={{
                textShadow: isHovered ? '0px 2px 2px rgba(255, 84, 132, 0.2)' : 'none',
                fontWeight: isHovered ? '800' : '700',
              }}
            >
              {formattedTitle}
            </S.CardTitle>
            <S.CardDescription className={getDiscountClass()}>
              {formattedDescription}
            </S.CardDescription>
          </div>
        </S.CardContent>
      </a>
    </S.PromotionCard>
  );
};

export default React.memo(PromoCard);
