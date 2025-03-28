import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { theme } from '@/style/theme';

const { breakpoints } = theme;

// 폰트 정의를 컴포넌트 내부에서만 정의
export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Scoop';
    src: url('/fonts/Scoop.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --font-family-ko: Sandoll GothicNeo1 TTF, -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
    --font-family-en: Sandoll GothicNeo1 TTF, -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
    --font-family-scoop: "Scoop", Sandoll GothicNeo1 TTF, -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  }
`;

// 애니메이션 정의
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

// 공통 스타일 관련 객체 생성

// 프로모션 섹션 전체 컨테이너 개선
export const PromotionWrapper = styled.section`
  padding: 100px 0;
  background: #fff;
  overflow: hidden;
  position: relative;

  // 배경 효과 강화
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

  // 곡선 장식 추가
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
  margin-bottom: 50px;
  position: relative;

  h2 {
    color: #ff5484;
    font-family: var(--font-family-scoop);
    font-weight: 700;
    font-size: 50px;
    text-align: center;
    line-height: 1;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 18px;
    color: #666;
    font-weight: 400;
    line-height: 1.5;
    font-family: var(--font-family-ko);
  }

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: #ff7c98;
    margin: 25px auto 0;
  }

  @media (max-width: ${breakpoints.md}) {
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    h2 {
      font-size: 36px;
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

// 프로모션 컨테이너 - 반응형 개선
export const PromotionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // 중앙 정렬로 변경
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  // 터널 형태를 위한 구조 (아이템별로 높이 차이)
  & > div:nth-child(1) {
    margin-top: 30px;
  }

  & > div:nth-child(2) {
    margin-top: 0;
  }

  & > div:nth-child(3) {
    margin-top: 30px;
  }

  & > div:nth-child(4) {
    margin-top: 60px;
  }

  & > div:nth-child(5) {
    margin-top: 30px;
  }

  @media (max-width: ${breakpoints.lg}) {
    & > div:nth-child(4),
    & > div:nth-child(5) {
      margin-top: 0;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    & > div {
      margin-top: 0 !important;
    }
  }

  // 터널 형태를 위한 구조 설정 (화면 크기에 따라 다르게 적용)
  @media (min-width: 1281px) {
    & > div:nth-child(1) {
      margin-top: 30px;
    }
    & > div:nth-child(2) {
      margin-top: 0;
    }
    & > div:nth-child(3) {
      margin-top: 30px;
    }
    & > div:nth-child(4) {
      margin-top: 60px;
    }
    & > div:nth-child(5) {
      margin-top: 30px;
    }
  }

  @media (max-width: 1280px) and (min-width: ${breakpoints.lg}) {
    & > div:nth-child(1) {
      margin-top: 20px;
    }
    & > div:nth-child(2) {
      margin-top: 0;
    }
    & > div:nth-child(3) {
      margin-top: 20px;
    }
    & > div:nth-child(4) {
      margin-top: 0;
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    & > div {
      margin-top: 0 !important;
    }
  }
`;

// 프로모션 카드 - 반응형 개선
export const PromotionCard = styled.div`
  width: calc(20% - 16px);
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: perspective(1000px);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;

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

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 1280px) {
    width: calc(25% - 15px); // 1280px 이하에서는 한 줄에 4개로 표시
  }

  @media (max-width: ${breakpoints.lg}) {
    width: calc(33.333% - 14px); // 대중형 화면에서는 한 줄에 3개로 표시
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.md}) {
    width: calc(50% - 10px); // 태블릿에서는 한 줄에 2개로 표시
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    max-width: 320px; // 모바일에서는 한 줄에 1개로 표시
    margin: 0 auto 16px;
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

// 상세보기 버튼 - 애니메이션 개선
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
      rgba(255, 255, 255, 0.7) 50%,
      transparent 55%
    );
    transform: rotate(45deg);
    transition: all 0.7s ease;
    z-index: 1;
    opacity: 0;
  }

  // 테두리 효과 추가
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transform: scale(1.2);
    opacity: 0;
    transition: all 0.4s ease;
  }

  ${PromotionCard}:hover & {
    transform: translateY(0);
    box-shadow: 0 15px 30px rgba(255, 84, 132, 0.3);

    &::before {
      opacity: 1;
      transform: rotate(45deg) translateX(100%);
    }

    &::after {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

// 카드 콘텐츠 개선 - 반응형 개선
export const CardContent = styled.div`
  padding: 20px;
  background: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  position: relative;

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

  ${PromotionCard}:hover & {
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 15px;
    min-height: 120px; // 일관된 높이 보장
  }
`;

// 카드 기간 스타일 개선
export const CardPeriod = styled.p`
  font-size: 13px;
  color: #ff7c98;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: var(--font-family-ko);
  display: flex;
  align-items: center;
  background-color: rgba(255, 124, 152, 0.08);
  padding: 5px 10px;
  border-radius: 20px;
  width: fit-content;
  transition: all 0.3s ease;

  &::before {
    content: '\f073'; /* 캘린더 아이콘 (Font Awesome) */
    font-family: 'Font Awesome 5 Free';
    margin-right: 6px;
    font-size: 12px;
    color: #ff7c98;
  }

  ${PromotionCard}:hover & {
    background-color: rgba(255, 124, 152, 0.15);
    color: #ff5484;
    transform: translateY(-2px);
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 12px;
    padding: 4px 8px;
    margin-bottom: 8px;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 11px;
    padding: 3px 7px;
    margin-bottom: 7px;

    &::before {
      font-size: 11px;
      margin-right: 4px;
    }
  }
`;

// 카드 타이틀 개선
export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--font-family-ko);
  transition: all 0.3s ease;
  position: relative;
  background: linear-gradient(to right, #ff7c98, #ff5484);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0px 0px 1px rgba(255, 124, 152, 0.2);

  // 밑줄 효과 추가
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ff7c98;
    transition: width 0.4s ease;
  }

  ${PromotionCard}:hover & {
    color: transparent;
    background: linear-gradient(to right, #ff5484, #ff3b70);
    -webkit-background-clip: text;
    background-clip: text;
    transform: translateY(-1px);

    &::after {
      width: 40%;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 15px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: auto;
    max-height: 40px;
  }
`;

// 카드 설명 개선
export const CardDescription = styled.p`
  font-size: 14px;
  color: #777;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 42px;
  font-family: var(--font-family-ko);
  transition: all 0.3s ease;
  margin-top: 4px;
  position: relative;
  padding-left: 14px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    background-color: #ff7c98;
    border-radius: 50%;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  ${PromotionCard}:hover & {
    color: #333;

    &::before {
      opacity: 1;
      transform: scale(1.2);
      background-color: #ff5484;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 13px;
    min-height: 39px;
    -webkit-line-clamp: 2;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 13px;
    min-height: 39px;
    padding-left: 12px;

    &::before {
      top: 6px;
      width: 5px;
      height: 5px;
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
