import styled, { keyframes } from 'styled-components';

// Media query breakpoints without theme dependency
const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

// 애니메이션 정의
const rippleEffect = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// Remove unused animation or use it in a component
// const floatAnimation = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-8px);
//   }
// `;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

// Uncomment this when needed
// const spinAnimation = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 배경 장식요소
export const Decorations = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

interface DecorationCircleProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size: string;
  delay: string;
}

export const DecorationCircle = styled.div<DecorationCircleProps>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.2), rgba(255, 107, 139, 0.1));
  filter: blur(20px);
  opacity: 0.6;
  animation: ${pulseAnimation} 8s ease-in-out infinite;
  animation-delay: ${props => props.delay};
  ${props => props.top && `top: ${props.top};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.left && `left: ${props.left};`}
`;

interface DecorationDotProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const DecorationDot = styled.div<DecorationDotProps>`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 107, 139, 0.3);
  box-shadow: 0 0 10px rgba(255, 107, 139, 0.2);
  ${props => props.top && `top: ${props.top};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.left && `left: ${props.left};`}
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid rgba(255, 107, 139, 0.15);
    animation: ${pulseAnimation} 3s ease-in-out infinite;
  }
`;

export const Wrapper = styled.section`
  padding: 120px 20px;
  background: linear-gradient(150deg, #ffffff 0%, #fef3f7 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &.visible .Title,
  &.visible .Subtitle,
  &.visible .CardLink,
  &.visible .MoreButtonWrapper {
    animation: ${fadeInUp} 0.8s forwards;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 80px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #ff6b8b;
  margin-bottom: 16px;
  letter-spacing: 0.8px;
  text-shadow: 2px 2px 4px rgba(255, 107, 139, 0.1);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);

  .visible & {
    animation: ${fadeInUp} 0.6s forwards;
  }

  &::before,
  &::after {
    content: '★';
    margin: 0 12px;
    color: #ff9fb5;
    font-size: 24px;
    vertical-align: middle;
    animation: twinkle 1.5s infinite;
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 32px;

    &::before,
    &::after {
      font-size: 18px;
      margin: 0 8px;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 60px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(20px);

  .visible & {
    animation: ${fadeInUp} 0.6s forwards 0.2s;
  }

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #ff9fb5, #ffb6c1);
    margin: 24px auto 0;
    border-radius: 3px;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
    margin-bottom: 40px;

    &::after {
      width: 60px;
      margin-top: 16px;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.md}) {
    gap: 32px;
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: 24px;
  }
`;

export const CardLink = styled.a`
  position: relative;
  width: 100%;
  max-width: 380px;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(255, 124, 152, 0.08);
  border: 1px solid rgba(255, 241, 245, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(20px);

  .visible & {
    animation: ${fadeInUp} 0.6s forwards;
    animation-delay: calc(0.1s * var(--index, 0) + 0.3s);
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(255, 124, 152, 0.15);
    border-color: rgba(255, 107, 139, 0.2);
  }

  &:active {
    transform: translateY(-6px);
  }

  &.loaded {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
  }
`;

export const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 62%; /* 이미지 비율 조정 - 잘림 방지 */
  overflow: hidden;
`;

export const ImageLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, #eff1f3 8%, #e2e2e2 18%, #eff1f3 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  z-index: 2;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지가 잘리지 않도록 변경 */
  display: block;
  transition: transform 0.5s ease;
  z-index: 1;
  background-color: #fcfcfc; /* 배경색 추가 */

  ${CardLink}:hover & {
    transform: scale(1.05);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.03) 100%);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardLink}:hover & {
    opacity: 1;
  }
`;

// Ribbon 스타일 컴포넌트 삭제 (사용하지 않음)
// export const Ribbon = styled.div`
//   position: absolute;
//   top: 16px;
//   right: -30px;
//   background: #ff6b8b;
//   color: white;
//   padding: 6px 40px;
//   font-size: 12px;
//   font-weight: 700;
//   transform: rotate(45deg);
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   z-index: 3;
//   letter-spacing: 1px;
// `;

export const CardContent = styled.div`
  padding: 32px;
  text-align: left;
  background: linear-gradient(to bottom, #ffffff, #fff8fa);
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.sm}) {
    padding: 24px;
  }
`;

export const Label = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
  transition: color 0.3s ease;

  ${CardLink}:hover & {
    color: #ff6b8b;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: #777;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #ff6b8b;
  margin-top: 8px;
  padding: 6px 0;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ff6b8b;
    transition: width 0.3s ease;
  }

  ${CardLink}:hover &::after {
    width: 100%;
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  margin-left: 6px;
  transition: transform 0.3s ease;

  ${CardLink}:hover & {
    transform: translateX(5px);
  }
`;

export const CardRipple = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  background: rgba(255, 107, 139, 0.2);
  border-radius: 50%;
  opacity: 0;
  z-index: 3;

  ${CardLink}:active & {
    animation: ${rippleEffect} 0.8s ease-out;
  }
`;

export const MoreButtonWrapper = styled.div`
  position: relative;
  margin-top: 70px;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);

  .visible & {
    animation: ${fadeInUp} 0.6s forwards 0.6s;
  }

  &::after {
    content: '';
    position: absolute;
    width: 140px;
    height: 40px;
    background: rgba(255, 107, 139, 0.08);
    border-radius: 50%;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    filter: blur(10px);
    z-index: -1;
  }
`;

export const MoreButton = styled.button`
  position: relative;
  background: linear-gradient(to right, #ff6b8b, #ff9fb5);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(255, 107, 139, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 25px rgba(255, 107, 139, 0.25);
  }

  &:active {
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: skewX(-20deg);
    transition: all 0.5s ease;
  }

  &:hover::before {
    left: 100%;
    transition: all 0.5s ease;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 14px 30px;
    font-size: 15px;
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  font-size: 16px;
  line-height: 1;
  transition: transform 0.3s ease;

  ${MoreButton}:hover & {
    transform: rotate(90deg);
  }
`;
