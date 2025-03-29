export interface PromotionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  period: string;
  discount?: string;
  discountType?: DiscountType;
}

export enum DiscountType {
  PRICE_OFF = 'price_off',
  PERCENT_OFF = 'percent_off',
  PLUS_ONE = 'plus_one',
  FREE_GIFT = 'free_gift',
  UPGRADE = 'upgrade',
}

export interface PromoCardProps {
  promotion: PromotionItem;
  isVisible: boolean;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export enum EventStatus {
  UPCOMING = 'upcoming',
  ONGOING = 'ongoing',
  ENDED = 'ended',
  PERMANENT = 'permanent',
}
