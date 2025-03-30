import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shimmerEffect = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const rainbow = keyframes`
  0% { border-color: #ffafc5; }
  20% { border-color: #ffb6d8; }
  40% { border-color: #ff7eb3; }
  60% { border-color: #ff5e9f; }
  80% { border-color: #ff7caa; }
  100% { border-color: #ffafc5; }
`;

const rotateGradient = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const glowPulse = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 0.8; }
  100% { opacity: 0.2; }
`;

const shineAcross = keyframes`
  0% { transform: translateX(-100%) rotate(25deg); }
  100% { transform: translateX(100%) rotate(25deg); }
`;

// twinkle 애니메이션 유지 (토글 버튼에서 사용)
const twinkle = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 0.1; transform: scale(0.8); }
  50% { opacity: 0.9; transform: scale(1.2); }
`;

export const MainHero = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 60px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`;

export const MainHeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const MainHeroContent = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const MainHeroBox = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 640px;
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const MainHeroLink = styled.a`
  position: absolute;
  left: 50px;
  bottom: 80px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7c98;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #d52b1e;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(213, 43, 30, 0.3);
  }

  @media (max-width: 768px) {
    left: 20px;
    bottom: 40px;
    padding: 10px 20px;
  }
`;

export const MainHeroText = styled.span`
  font-size: 1.1rem;
  line-height: 1.4;
  font-weight: 700;
  color: #ffffff;
`;

// FancyBorder 정의를 앞으로 이동
export const FancyBorder = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  bottom: 16px;
  border-radius: 25px;
  border: 3px dashed rgba(255, 255, 255, 0.9); // 점선 테두리 강화
  box-shadow:
    inset 0 0 20px rgba(255, 124, 152, 0.4),
    0 0 20px rgba(255, 124, 152, 0.3),
    0 0 30px rgba(255, 182, 193, 0.3);
  z-index: 3;
  pointer-events: none;
  animation: ${rainbow} 8s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 36px;
    border: 2px dotted rgba(255, 255, 255, 0.7);
    opacity: 0.7;
    animation: ${rainbow} 6s linear infinite reverse;
  }

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 18px;
  }
`;

// GlowingOuterBorder 정의도 앞으로 이동
export const GlowingOuterBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  z-index: 1; // 가장 뒤에 위치
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    background: conic-gradient(#ff9ec5, #ffe3e3, #ffc6d9, #ff7eb3, #ff5e9f, #ff9ec5);
    opacity: 0.7;
    animation: ${rotateGradient} 10s linear infinite;
  }

  // 빛나는 포인트 효과 수정
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 20%),
      radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 20%),
      radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.8) 0%, transparent 20%),
      radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.8) 0%, transparent 20%);
    background-size: 150% 150%;
    opacity: 0.5;
    animation: ${glowPulse} 3s infinite alternate;
    z-index: 2;
  }

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

// ShimmerEffect 정의도 앞으로 이동
export const ShimmerEffect = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  z-index: 4; // 가장 위에 위치하도록 변경
  pointer-events: none;
  border-radius: 27px;
  overflow: hidden;

  // 빛나는 라인 효과 추가
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(
      45deg,
      transparent 20%,
      rgba(255, 255, 255, 0.4) 22%,
      rgba(255, 255, 255, 0.4) 23%,
      transparent 25%,
      transparent 70%,
      rgba(255, 255, 255, 0.4) 72%,
      rgba(255, 255, 255, 0.4) 73%,
      transparent 75%
    );
    background-size: 200% 200%;
    animation: ${shimmerEffect} 5s infinite linear;

    // 움직이는 반짝임 효과는 그대로 유지
    box-shadow:
      0 0 5px 2px rgba(255, 255, 255, 0.8),
      30px 20px 4px 1px rgba(255, 255, 255, 0.6),
      -20px 40px 3px 1px rgba(255, 255, 255, 0.7),
      40px -30px 5px 2px rgba(255, 255, 255, 0.5),
      -30px -20px 4px 1px rgba(255, 255, 255, 0.6);
  }

  // 반짝이는 오버레이 추가
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
    width: 100%;
    height: 100%;
    transform: translateX(-100%) rotate(25deg);
    animation: ${shineAcross} 3s infinite;
    animation-delay: 0.5s;
  }

  @media (max-width: 768px) {
    top: 7px;
    left: 7px;
    right: 7px;
    bottom: 7px;
    border-radius: 20px;
  }
`;

// 이제 MainHeroElement를 정의 (FancyBorder, GlowingOuterBorder, ShimmerEffect 정의 후)
export const MainHeroElement = styled.div`
  position: relative;

  &:hover ${FancyBorder} {
    border-width: 4px;
    border-color: white;
    box-shadow:
      inset 0 0 25px rgba(255, 124, 152, 0.6),
      0 0 25px rgba(255, 124, 152, 0.5),
      0 0 40px rgba(255, 182, 193, 0.5);
    animation: ${rainbow} 2s linear infinite;

    &::before {
      border-width: 2px;
      opacity: 1;
    }

    &::after {
      border-width: 3px;
      opacity: 0.9;
      animation: ${rainbow} 3s linear infinite reverse;
    }
  }

  &:hover ${GlowingOuterBorder} {
    &::before {
      opacity: 0.95;
      animation: ${rotateGradient} 5s linear infinite;
    }

    &::after {
      opacity: 0.9;
      animation: ${glowPulse} 1.5s infinite alternate;
      filter: blur(2px);
    }
  }

  &:hover ${ShimmerEffect} {
    &::before {
      background: linear-gradient(
        45deg,
        transparent 20%,
        rgba(255, 255, 255, 0.7) 22%,
        rgba(255, 255, 255, 0.7) 23%,
        transparent 25%,
        transparent 70%,
        rgba(255, 255, 255, 0.7) 72%,
        rgba(255, 255, 255, 0.7) 73%,
        transparent 75%
      );
      animation: ${shimmerEffect} 3s infinite linear;

      // 호버 시 box-shadow 효과 강화
      box-shadow:
        0 0 10px 4px rgba(255, 255, 255, 0.9),
        30px 20px 8px 2px rgba(255, 255, 255, 0.7),
        -20px 40px 6px 2px rgba(255, 255, 255, 0.8),
        40px -30px 10px 4px rgba(255, 255, 255, 0.6),
        -30px -20px 8px 2px rgba(255, 255, 255, 0.7);
    }

    &::after {
      animation: ${shineAcross} 1.5s infinite;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 100%
      );
    }
  }
`;

export const MainHeroImage = styled.img`
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  display: block;
  object-fit: cover;
  object-position: center;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: absolute;
  top: 16px;
  left: 16px;
  border-radius: 25px;
  z-index: 2;

  animation: ${fadeIn} 0.8s ease-in-out;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    top: 10px;
    left: 10px;
    border-radius: 18px;
  }

  /* 호버 효과를 MainHeroElement로 이동 */
  ${MainHeroElement}:hover & {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(255, 124, 152, 0.2);
  }
`;

export const InnerDashedBorder = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  bottom: 16px;
  border-radius: 25px;
  border: 3px dashed rgba(255, 255, 255, 0.9);
  pointer-events: none;
  z-index: 3;

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 18px;
  }
`;

export const BorderGlowEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

export const ShimmerBorder = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  z-index: 4;
  pointer-events: none;
  border-radius: 27px;
  overflow: hidden;

  @media (max-width: 768px) {
    top: 7px;
    left: 7px;
    right: 7px;
    bottom: 7px;
    border-radius: 20px;
  }
`;

export const SparkleEffect = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.8) 0, rgba(255, 255, 255, 0) 8px),
      radial-gradient(circle at 75% 20%, rgba(255, 255, 255, 0.7) 0, rgba(255, 255, 255, 0) 10px),
      radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.9) 0, rgba(255, 255, 255, 0) 7px),
      radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.8) 0, rgba(255, 255, 255, 0) 9px),
      radial-gradient(circle at 60% 50%, rgba(255, 255, 255, 0.7) 0, rgba(255, 255, 255, 0) 6px);
    animation: ${starTwinkle} 3s infinite alternate;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.8) 0, rgba(255, 255, 255, 0) 10px),
      radial-gradient(circle at 15% 60%, rgba(255, 255, 255, 0.7) 0, rgba(255, 255, 255, 0) 8px),
      radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.9) 0, rgba(255, 255, 255, 0) 12px),
      radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.8) 0, rgba(255, 255, 255, 0) 7px);
    animation: ${starTwinkle} 4s infinite alternate-reverse;
  }
`;

// 서브 배너 컨테이너의 위치와 간격 조정
export const SubBannerContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  gap: 20px;
  z-index: 10;
  flex-direction: column;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    gap: 18px;
  }
`;

// 서브 배너 아이템 비율 완전 조정 - 각 이미지에 맞춤
export const SubBannerItem = styled.a`
  display: block;
  width: 210px;
  height: 155px; // 요청한 크기로 변경
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.25),
    0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  background-color: transparent; // 배경색을 투명하게 변경

  // 반짝이는 테두리 효과 수정
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 13px;
    border: 3px solid white;
    opacity: 0.7; // 더 뚜렷하게
    pointer-events: none;
    animation: ${rainbow} 4s linear infinite;
    z-index: 1;
  }

  &:hover {
    transform: translateX(-10px) scale(1.08); // X축으로 이동 효과
    border-color: #ff7eb3;
    box-shadow:
      0 15px 35px rgba(255, 124, 152, 0.6),
      0 5px 15px rgba(0, 0, 0, 0.2); // 그림자 더 강화
    z-index: 11; // 다른 요소 위에 올라오도록

    &::before {
      opacity: 0.9;
      animation: ${rainbow} 2s linear infinite;
    }
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 45px; // 비율 유지
    border-width: 2px;
  }
`;

export const SubBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 다시 cover로 변경, 실제 크기에 맞추어서
  position: relative;
  z-index: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); // 확대 효과 약간 줄임
  }
`;

// 중복된 토글 버튼들 삭제하고 하나만 깔끔하게 유지
export const BannerToggleButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 80px;
  z-index: 15;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ff7c98;
  border: 2px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
    animation: ${twinkle} 1.5s infinite ease-in-out;
  }

  &:hover {
    transform: scale(1.1);
    background-color: #ff5e9f;
    box-shadow: 0 6px 15px rgba(255, 124, 152, 0.5);

    &::before {
      animation: ${twinkle} 0.8s infinite ease-in-out;
    }
  }

  @media (max-width: 768px) {
    right: 15px;
    bottom: 45px;
    width: 35px;
    height: 35px;
  }
`;

// 토글 버튼 아이콘 - 클래스 기반 스타일링으로 수정
export const BannerToggleIcon = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  color: white;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: white;
    transition: all 0.3s ease;
  }

  &::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
  }

  &::after {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%) rotate(0) scale(1);
  }

  &.open::after {
    transform: translateX(-50%) rotate(90deg) scale(0);
  }

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;
