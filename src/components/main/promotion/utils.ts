import { DiscountType, PromotionItem } from './types';

/**
 * 할인 유형에 따른 CSS 클래스 반환
 */
export const getDiscountClassName = (discountType?: DiscountType): string => {
  if (!discountType) return '';

  switch (discountType) {
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

/**
 * 프로모션 설명 텍스트에 하이라이팅 적용
 */
export const formatPromotionDescription = (description: string): string => {
  const pricePattern = /([0-9]+,?[0-9]*)(원|만원|천원|백원|\s*원)/g;
  const discountPattern = /([0-9]+%|[0-9]+\+[0-9]+|[0-9]+,[0-9]+원|FREE|[0-9]+원|OFF|최대|구매)/gi;

  return description
    .replace(pricePattern, '<strong class="price">$&</strong>')
    .replace(discountPattern, '<span class="discount-term">$&</span>');
};

/**
 * 긴 제목 텍스트를 분할하는 함수
 */
export const formatLongTitle = (title: string): { first: string; second: string } => {
  if (title.length <= 15) {
    return { first: title, second: '' };
  }

  const midPoint = Math.floor(title.length / 2);
  let splitIndex = title.indexOf(' ', midPoint - 5);

  if (splitIndex === -1 || splitIndex > midPoint + 5) {
    splitIndex = midPoint;
  }

  return {
    first: title.slice(0, splitIndex),
    second: title.slice(splitIndex),
  };
};

/**
 * 프로모션 아이템이 상시 진행 중인지 확인
 */
export const isPermanentPromotion = (promotion: PromotionItem): boolean => {
  return promotion.period === '상시 진행';
};

/**
 * 스크롤 위치 저장
 */
export const saveScrollPosition = (): void => {
  sessionStorage.setItem('promotionScrollPos', window.scrollY.toString());
};

/**
 * 스크롤 위치 복원
 */
export const restoreScrollPosition = (): void => {
  const savedPosition = sessionStorage.getItem('promotionScrollPos');
  if (savedPosition) {
    window.scrollTo(0, parseInt(savedPosition));
    sessionStorage.removeItem('promotionScrollPos');
  }
};

/**
 * 프로모션 카드의 변환 스타일 계산
 */
export const calculateCardTransform = (
  isVisible: boolean,
  rotateX: number = 0,
  rotateY: number = 0
): string => {
  if (!isVisible) {
    return 'perspective(1000px) translateY(30px) rotateX(5deg)';
  }

  return `perspective(1000px) translateY(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
