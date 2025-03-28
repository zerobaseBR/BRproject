export interface PromotionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  period: string;
}

export interface PromoCardProps {
  promotion: PromotionItem;
  isVisible: boolean;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
