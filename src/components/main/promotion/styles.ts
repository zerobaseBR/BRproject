import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { theme } from '@/style/theme';

const { breakpoints } = theme;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotateY(30deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
`;

export const textFocus = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const textShimmer = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const pulseEffect = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(255, 124, 152, 0.1);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgba(255, 124, 152, 0.2);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(255, 124, 152, 0.1);
  }
`;

export const shimmerEffect = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family-ko: Sandoll GothicNeo1 TTF, -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
    --font-family-en: Sandoll GothicNeo1 TTF, -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  
  .animated {
    animation: ${textFocus} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  .multi-color-text {
    background: linear-gradient(to right, #ff3b70, #ff7c98, #ff3b70);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 200% auto;
    animation: ${textShimmer} 3s linear infinite;
  }

  .special-event {
    position: relative;
    display: inline-block;
    font-weight: 700;
    color: #ff3b70;
  }

  .special-event::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #ff3b70, transparent);
  }

  .price {
    font-weight: 800 !important;
    color: #ff2d67 !important;
    font-style: normal;
    position: relative;
    display: inline-block;
    padding: 0 2px;
  }

  .price::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background-color: rgba(255, 84, 132, 0.2);
    z-index: -1;
    transition: height 0.2s ease, background-color 0.2s ease;
  }

  .price-off:hover .price::after {
    height: 8px;
    background-color: rgba(255, 84, 132, 0.3);
  }

  .discount-term {
    font-weight: 600;
    color: #ff5484;
  }
  
  .footnote {
    display: block;
    font-size: 11px;
    color: #888;
    margin-top: 4px;
    font-style: italic;
  }
`;

export const PromotionWrapper = styled.section`
  padding: 100px 0;
  background: #fff;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 124, 152, 0.07) 100%
    );
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom right, transparent 49.5%, #f8f8f8 50%);
    z-index: 1;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 80px 0;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 60px 0;
  }
`;

// 프로모션 타이틀
export const PromoTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 0 20px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #2f2f2f;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: #ff7c98;
    }
  }
`;

// 배너 관련 스타일
export const BannerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;
`;

export const BannerSlider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

export const BannerItem = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => (props.active ? 1 : 0)};
  pointer-events: ${props => (props.active ? 'auto' : 'none')};

  img {
    width: 100%;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const BannerControls = styled.div`
  z-index: 2;
`;

export const BannerButton = styled.button<{ direction: 'prev' | 'next' }>`
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  ${props => (props.direction === 'prev' ? 'left: 10px;' : 'right: 10px;')}
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 124, 152, 0.9);
    color: white;
  }
`;

export const BannerIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
`;

export const BannerDot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#ff7c98' : '#ddd')};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${props => (props.active ? '#ff7c98' : '#bbb')};
  }
`;

// 배너 아이템에 정보 표시를 위한 스타일
export const BannerInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 30px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${BannerItem}:hover & {
    opacity: 1;
  }
`;

export const BannerPeriod = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const BannerTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const BannerDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

// 제품 섹션
export const ProductSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// 섹션 타이틀 - 정확한 폰트 적용
export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  padding: 20px 0;

  h2 {
    color: #ff5484;
    font-family: var(--font-family-en);
    font-weight: 700;
    font-size: 50px;
    text-align: center;
    line-height: 1;
    margin-bottom: 18px;
    letter-spacing: -0.5px;
    position: relative;
    display: inline-block;
    text-shadow: 2px 2px 0px rgba(255, 124, 152, 0.15); // 입체감을 위한 텍스트 그림자

    // 장식 효과 추가
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23ff7c98' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z'/%3E%3C/svg%3E");
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0.5;
      transform: rotate(15deg);
    }

    &::before {
      top: -15px;
      left: -45px;
      animation: ${pulseEffect} 3s ease-in-out infinite;
    }

    &::after {
      top: -10px;
      right: -45px;
      animation: ${pulseEffect} 3s ease-in-out infinite 1.5s;
    }
  }

  p {
    font-size: 18px;
    color: #666;
    font-weight: 400;
    line-height: 1.5;
    font-family: var(--font-family-ko);
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    letter-spacing: 0.3px; // 자간 미세 조정
    word-spacing: 1px; // 단어 간격 추가
  }

  // 하단 장식 추가
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff7c98, transparent);
  }

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 50px;

    h2 {
      font-size: 40px;

      &::before,
      &::after {
        width: 30px;
        height: 30px;
      }

      &::before {
        left: -35px;
      }

      &::after {
        right: -35px;
      }
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 40px;

    h2 {
      font-size: 36px;

      &::before,
      &::after {
        width: 24px;
        height: 24px;
      }

      &::before {
        left: -30px;
      }

      &::after {
        right: -30px;
      }
    }

    p {
      font-size: 14px;
    }
  }
`;

// 프로모션 배경 - 반응형 개선
export const PromotionBackground = styled.div`
  padding: 60px 0 80px;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://www.baskinrobbins.co.kr/assets/images/main/bg_promotion.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.12;
    z-index: -1;
    border-radius: 50px;
  }

  // 물결 효과 추가
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 30px;
    background: url("data:image/svg+xml,%3Csvg width='100' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 25 0, 50 5 T 100 5' fill='none' stroke='%23ff7c98' stroke-width='0.5'/%3E%3C/svg%3E")
      repeat-x;
    background-size: 100px 10px;
    opacity: 0.5;
  }

  @media (max-width: ${breakpoints.lg}) {
    margin: 0 20px;
    border-radius: 30px;
    padding: 50px 20px;
  }

  @media (max-width: ${breakpoints.md}) {
    margin: 0 15px;
    border-radius: 20px;
    padding: 40px 15px;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin: 0 10px;
    border-radius: 15px;
    padding: 30px 10px;
  }
`;

// 프로모션 컨테이너 - 균형 있는 레이아웃으로 개선
export const PromotionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  // 모든 카드가 동일한 레벨에 표시되도록 마진 제거
  & > div {
    margin-top: 0 !important;
  }

  @media (max-width: ${breakpoints.md}) {
    gap: 15px;
  }
`;

// 프로모션 카드 - 카드 크기 균형 조정
export const PromotionCard = styled.div`
  width: calc(20% - 16px); // 5개 카드 균등 배치
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: perspective(1000px);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;
  backface-visibility: hidden;

  // 그라데이션 효과 추가
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 124, 152, 0.15) 0%, rgba(255, 255, 255, 0) 80%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  // 입체적인 그림자 효과
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 8%;
    width: 84%;
    height: 15px;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -2;
  }

  &:hover {
    transform: perspective(1000px) translateY(-15px) rotateX(2deg);
    box-shadow: 0 20px 40px rgba(255, 124, 152, 0.2);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  // 클릭 효과 추가
  &:active {
    transform: perspective(1000px) translateY(-8px) rotateX(1deg);
    transition: all 0.2s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    user-select: none;
  }

  // 포커스 상태 추가 (접근성 향상)
  a:focus-visible {
    outline: 3px solid #ff7c98;
    outline-offset: 2px;
    border-radius: 15px;
  }

  @media (max-width: 1280px) {
    width: calc(33.333% - 14px); // 1280px 이하에서는 한 줄에 3개로 표시
  }

  @media (max-width: ${breakpoints.lg}) {
    width: calc(33.333% - 14px); // 대중형 화면에서는 한 줄에 3개로 표시
  }

  @media (max-width: ${breakpoints.md}) {
    width: calc(50% - 10px); // 태블릿에서는 한 줄에 2개로 표시
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%; // 모바일에서는 한 줄에 1개로 표시
    max-width: 90%; // 최대 너비 제한
    margin: 0 auto 10px;
  }
`;

// 카드 이미지 래퍼 - 반응형 개선
export const CardImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%; // 정사각형 비율
  position: relative;
  overflow: hidden;
  border-radius: 50% 50% 0 0; // 사진 모양 유지
  perspective: 800px;

  // 반짝이는 효과 추가
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      transparent 45%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 55%
    );
    transform: rotate(45deg);
    transition: transform 0.7s ease;
    z-index: 2;
    opacity: 0;
  }

  // 외곽선 효과 추가
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 0 0;
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.3);
    z-index: 3;
    pointer-events: none;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform-origin: center center;
  }

  ${PromotionCard}:hover & {
    &::before {
      opacity: 1;
      transform: rotate(45deg) translateX(100%);
    }

    img {
      transform: scale(1.08) translateY(-5px);
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-bottom: 90%; // 모바일에서는 높이를 약간 줄임
  }
`;

// 카드 오버레이 - 향상된 효과
export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
  backdrop-filter: blur(2px);

  ${PromotionCard}:hover & {
    opacity: 1;
  }
`;

// 상세보기 버튼 - 화살표 제거 및 스타일 개선
export const ViewButton = styled.div`
  padding: 12px 28px;
  background: #ff7c98;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 30px;
  transform: translateY(25px);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  font-family: var(--font-family-ko);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  user-select: none;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  // 반짝이는 효과 추가 (화살표 대신)
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  ${PromotionCard}:hover & {
    transform: translateY(0);
    box-shadow: 0 15px 30px rgba(255, 84, 132, 0.3);
    font-weight: 700;

    &::before {
      transform: translateX(100%);
    }
  }

  // 클릭 효과
  ${PromotionCard}:active & {
    transform: translateY(2px);
    box-shadow: 0 8px 15px rgba(255, 84, 132, 0.2);
    transition: all 0.2s ease;
  }
`;

// 카드 콘텐츠 개선 - 반응형 개선 및 고정 높이 설정
export const CardContent = styled.div`
  padding: 25px 20px;
  background: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  position: relative;
  min-height: 160px; // 최소 높이 설정으로 일관성 확보

  // 배경 그라데이션 효과
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #fff9fa 0%, #fff 80%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  // 페이퍼 효과 추가
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    right: 10px;
    width: 60%;
    height: 10px;
    background: rgba(0, 0, 0, 0.03);
    filter: blur(5px);
    transform: rotate(-3deg);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  ${PromotionCard}:hover & {
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 20px 15px;
    min-height: 150px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 20px 15px;
    min-height: 140px;
  }
`;

// 카드 기간 스타일 개선 - 디자인 수정 및 버그 수정
export const CardPeriod = styled.p`
  font-size: 12px;
  color: #ff7c98;
  margin-bottom: 12px;
  font-weight: 600;
  font-family: var(--font-family-ko);
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 124, 152, 0.08);
  padding: 6px 12px;
  border-radius: 20px;
  width: fit-content;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;

  // 캘린더 아이콘
  &::before {
    content: '\f073'; /* 캘린더 아이콘 (Font Awesome) */
    font-family: 'Font Awesome 5 Free';
    margin-right: 8px;
    font-size: 12px;
    color: #ff7c98;
    font-weight: 900;
  }

  // 반짝이는 배경 효과
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${shimmerEffect} 3s infinite linear;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  // 상시 진행 이벤트 스타일 차별화
  &.permanent {
    background-color: rgba(96, 179, 87, 0.1);
    color: #4caf50;

    &::before {
      content: '\f3c5'; // 위치 아이콘 (Font Awesome)
      color: #4caf50;
    }

    ${PromotionCard}:hover & {
      background-color: rgba(96, 179, 87, 0.2);
      color: #3d8b40;
    }
  }

  ${PromotionCard}:hover & {
    background-color: rgba(255, 124, 152, 0.15);
    color: #ff5484;
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(255, 124, 152, 0.1);

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 12px;
    padding: 5px 10px;
    margin-bottom: 10px;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 11px;
    padding: 4px 9px;
    margin-bottom: 8px;

    &::before {
      font-size: 11px;
      margin-right: 6px;
    }
  }
`;

// 카드 타이틀 개선 - 높이 제한 및 다중 라인 처리
export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.3;
  font-family: var(--font-family-ko);
  transition: all 0.4s ease;
  position: relative;
  padding: 5px 0;
  min-height: 2.6em; // 최소 2줄 높이 확보
  letter-spacing: -0.2px; // 제목 스타일에 적합한 자간 미세 조정

  // 2줄까지 표시하고 말줄임표 처리
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  // 배경 그라데이션 강화 및 텍스트 선명도 향상
  background: linear-gradient(135deg, #ff5484, #ff3b70);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0px 1px 1px rgba(255, 84, 132, 0.15);

  // 진한 텍스트 효과를 위한 추가 속성
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;

  // 왼쪽 강조 효과 추가
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: linear-gradient(to bottom, #ff7c98, #ff3b70);
    border-radius: 3px;
    transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  // 밑줄 효과 강화
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #ff3b70, #ff7c98);
    transition: width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &.highlighted,
  ${PromotionCard}:hover & {
    transform: translateY(-2px);
    font-size: 19px;
    letter-spacing: 0px; // 호버 시 자간 조정
    margin-left: 5px;
    text-shadow: 0px 2px 2px rgba(255, 84, 132, 0.2); // 강화된 그림자

    &::before {
      height: 80%;
    }

    &::after {
      width: 70%;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
    min-height: 2.6em;

    &.highlighted,
    ${PromotionCard}:hover & {
      font-size: 17px;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 15px;
    min-height: 2.6em;

    &.highlighted,
    ${PromotionCard}:hover & {
      font-size: 16px;
    }
  }
`;

// 카드 설명 개선 - 시각적 강조와 가독성 향상
export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 42px;
  max-height: 42px;
  font-family: var(--font-family-ko);
  transition: all 0.35s ease;
  margin-top: 10px;
  position: relative;
  padding-left: 22px;
  letter-spacing: 0.3px;
  word-spacing: 0.5px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 8px;

  // 아이콘 추가
  &::before {
    content: '\f3ff'; // 태그 아이콘 (Font Awesome - 선물/할인)
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    position: absolute;
    left: 6px;
    top: 3px;
    font-size: 12px;
    color: #ff5484;
    opacity: 0.9;
    transition: all 0.35s ease;
  }

  // 할인 금액이나 숫자 강조
  strong,
  em,
  .highlight {
    font-weight: 700;
    color: #ff3b70;
    font-style: normal;
    position: relative;
    padding: 0 2px;

    // 밑줄 효과
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 100%;
      height: 5px;
      background-color: rgba(255, 84, 132, 0.15);
      border-radius: 2px;
      z-index: -1;
      transition: all 0.3s ease;
    }
  }

  // 가격 할인 타입일 때 아이콘 변경
  &.price-off::before {
    content: '\f155'; // 달러 아이콘
  }

  // 업그레이드 타입일 때 아이콘 변경
  &.upgrade::before {
    content: '\f062'; // 위 화살표 아이콘
  }

  // 1+1 혜택 타입일 때 아이콘 변경
  &.plus-one::before {
    content: '\f067'; // 플러스 아이콘
  }

  ${PromotionCard}:hover & {
    color: #444;
    transform: translateY(-2px);
    background-color: rgba(255, 246, 248, 0.9);
    box-shadow: 0 3px 10px rgba(255, 124, 152, 0.1);
    letter-spacing: 0.4px;

    &::before {
      color: #ff3b70;
      transform: scale(1.15) translateX(1px);
    }

    strong,
    em,
    .highlight {
      color: #ff3b70;

      &::after {
        height: 7px;
        background-color: rgba(255, 84, 132, 0.25);
        bottom: 0px;
      }
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 13px;
    min-height: 39px;
    max-height: 39px;
    -webkit-line-clamp: 2;
    padding-left: 20px;

    &::before {
      font-size: 11px;
      left: 5px;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 13px;
    min-height: 39px;
    max-height: 39px;
    padding-left: 18px;

    &::before {
      top: 3px;
      font-size: 10px;
      left: 4px;
    }
  }
`;

// 탭과 제품 관련 스타일
export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.sm}) {
    gap: 5px;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 12px 25px;
  border: none;
  background-color: ${props => (props.active ? '#ff7c98' : '#f0f0f0')};
  color: ${props => (props.active ? 'white' : '#666')};
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.2) 100%
    );
    transition: left 0.7s ease;
    opacity: 0;
  }

  &:hover {
    background-color: ${props => (props.active ? '#ff5c7c' : '#e6e6e6')};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &::before {
      left: 100%;
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  min-height: 400px;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${rotateIn} 0.5s ease-out;
  animation-fill-mode: both;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }

  &:hover {
    transform: translateY(-10px) rotateY(5deg);
    box-shadow: 0 15px 30px rgba(255, 124, 152, 0.1);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    transition: transform 0.5s ease;
  }

  ${ProductCard}:hover & img {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 124, 152, 0) 70%, rgba(255, 124, 152, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  ${ProductCard}:hover & {
    color: #ff7c98;
  }
`;

export const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Tag = styled.span`
  font-size: 13px;
  color: #666;
  transition: color 0.3s ease;

  ${ProductCard}:hover & {
    color: #ff7c98;
  }
`;

export const MoreButton = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 12px 30px;
  background-color: transparent;
  color: #ff7c98;
  border: 2px solid #ff7c98;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff7c98;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 124, 152, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(255, 124, 152, 0.2);
  }
`;
