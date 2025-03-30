import styled, { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-15px) rotate(5deg); }
`;

export const sparkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.3); }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

export const pulseEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const slideFromRight = keyframes`
  from { 
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const bounceEffect = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

export const glowEffect = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(255, 124, 152, 0.2); }
  50% { box-shadow: 0 0 20px rgba(255, 124, 152, 0.5); }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const expandWidth = keyframes`
  from { width: 0; }
  to { width: 60px; }
`;

export const fadeInUpSmall = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: rotate(10deg); }
  40% { transform: translateY(-5px) rotate(10deg); }
  60% { transform: translateY(-2px) rotate(10deg); }
`;

export const skeletonLoading = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

export const rippleEffect = keyframes`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
`;

export const borderGlow = keyframes`
  0% { 
    box-shadow: 0 0 5px rgba(255, 90, 138, 0.3), 0 0 8px rgba(255, 90, 138, 0), inset 0 0 0 rgba(255, 90, 138, 0);
    border-color: rgba(255, 90, 138, 0.5);
  }
  50% { 
    box-shadow: 0 0 15px rgba(255, 90, 138, 0.6), 0 0 30px rgba(255, 90, 138, 0.2), inset 0 0 5px rgba(255, 90, 138, 0.1);
    border-color: rgba(255, 90, 138, 0.8);
  }
  100% { 
    box-shadow: 0 0 5px rgba(255, 90, 138, 0.3), 0 0 8px rgba(255, 90, 138, 0), inset 0 0 0 rgba(255, 90, 138, 0);
    border-color: rgba(255, 90, 138, 0.5);
  }
`;

export const borderRotate = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const S = {
  BenefitWrapper: styled.section`
    width: 100%;
    background: linear-gradient(135deg, #fff8fa 0%, #f9f9ff 50%, #f0f8ff 100%);
    padding: 160px 0 140px;
    position: relative;
    overflow: hidden;
    scroll-margin-top: 80px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      z-index: 0;
      opacity: 0.15;
      filter: blur(50px);
      animation: ${float} 18s ease-in-out infinite alternate;
    }

    &:before {
      background: radial-gradient(circle, #ff5a8a 0%, transparent 70%);
      top: -120px;
      left: -80px;
    }

    &:after {
      background: radial-gradient(circle, #2f72b9 0%, transparent 70%);
      bottom: -120px;
      right: -80px;
    }

    @media (max-width: 768px) {
      padding: 110px 0 90px;
    }
  `,

  BackgroundDecorationCircle: styled.div`
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    pointer-events: none;
    z-index: 0;

    &.decoration-1 {
      width: 150px;
      height: 150px;
      background: linear-gradient(135deg, #ff5a8a, #ff96af);
      top: 10%;
      left: 5%;
      animation: ${float} 10s ease-in-out infinite;
      filter: blur(20px);
    }

    &.decoration-2 {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #2f72b9, #5a9bd5);
      bottom: 15%;
      right: 5%;
      animation: ${float} 9s ease-in-out infinite reverse;
      filter: blur(15px);
    }

    &.decoration-3 {
      width: 80px;
      height: 80px;
      background: linear-gradient(45deg, #ff5a8a, #ff96af);
      top: 20%;
      right: 15%;
      animation: ${sparkle} 12s ease-in-out infinite;
      filter: blur(12px);
    }

    &.decoration-4 {
      width: 130px;
      height: 130px;
      background: linear-gradient(45deg, #2f72b9, #6aabf5);
      bottom: 10%;
      left: 15%;
      animation: ${sparkle} 15s ease-in-out infinite 2s;
      filter: blur(18px);
    }

    &.decoration-5 {
      animation: ${sparkle} 8s ease-in-out infinite 1s;
    }

    &.decoration-6 {
      animation: ${float} 13s ease-in-out infinite reverse;
    }

    @media (max-width: 768px) {
      &.decoration-1 {
        width: 80px;
        height: 80px;
      }

      &.decoration-2 {
        width: 60px;
        height: 60px;
      }

      &.decoration-3,
      &.decoration-4 {
        width: 40px;
        height: 40px;
      }
    }
  `,

  BenefitInner: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  `,

  BenefitTitleWrapper: styled.div`
    text-align: center;
    margin-bottom: 70px;
    animation: ${fadeInUp} 0.8s ease forwards;

    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
  `,

  BenefitTitle: styled.h2`
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    color: #111;
    margin-bottom: 26px;
    font-family: 'Avenir', 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      display: block;
      width: 150px;
      height: 6px;
      background: linear-gradient(to right, #ff5a8a, #2f72b9);
      margin: 20px auto 0;
      border-radius: 6px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      animation:
        ${pulseEffect} 3s ease-in-out infinite,
        ${shimmer} 3s linear infinite;
      transform-origin: center;
    }

    @media (max-width: 768px) {
      font-size: 38px;
      margin-bottom: 15px;

      &:after {
        width: 80px;
        height: 3px;
        margin: 10px auto 0;
      }
    }
  `,

  TitleSpan: styled.span`
    color: #ff5a8a;
    position: relative;
    display: inline-block;

    &:before {
      content: '31';
      position: absolute;
      font-size: 0.3em;
      top: -15px;
      right: -12px;
      color: #2f72b9;
      font-weight: 900;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }
  `,

  BenefitSubTitle: styled.p`
    font-size: 22px;
    text-align: center;
    color: #555;
    font-weight: 500;
    line-height: 1.6;
    max-width: 75%;
    margin: 0 auto;
    position: relative;

    &:before,
    &:after {
      content: '♦';
      color: rgba(255, 90, 138, 0.5);
      padding: 0 12px;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 17px;
      max-width: 100%;

      &:before,
      &:after {
        display: none;
      }
    }
  `,

  BenefitFrame: styled.div`
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background-color: white;
    aspect-ratio: 1 / 1;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translateY(0);
    width: 100%;
    border: 2px solid rgba(255, 90, 138, 0.5);
    transform-style: preserve-3d;

    animation: ${borderGlow} 3s ease-in-out infinite;

    &:before {
      content: '';
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border-radius: 36px;
      background: linear-gradient(45deg, #ff5a8a, #ff96af, #ff5a8a, #ff96af, #ff5a8a);
      background-size: 400% 400%;
      z-index: -1;
      filter: blur(8px);
      opacity: 0;
      transition: opacity 0.4s ease;
      animation: ${borderRotate} 8s linear infinite;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-8px) scale(1.05);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      border-color: rgba(255, 90, 138, 0.8);
      animation: none;

      &:before {
        opacity: 0.7;
      }
    }

    &:after {
      display: none;
    }

    a:focus-visible & {
      outline: none;
      box-shadow: 0 0 0 3px #ff7c98;
      border: none;
    }

    @media (max-width: 768px) {
      border-radius: 15px;
      box-shadow: none;
      width: 100%;

      &:hover {
        transform: none;
      }

      &:before {
        border-radius: 19px;
      }
    }
  `,

  BenefitImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: none;
    will-change: transform;
  `,

  BenefitSwiperContainer: styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    padding: 0 0 40px;

    &:before {
      content: '';
      position: absolute;
      width: 90%;
      height: 70%;
      top: 15%;
      left: 5%;
      background: transparent;
      border-radius: 30px;
      z-index: -1;
    }

    .benefit-swiper {
      padding-bottom: 60px;
      overflow: visible;
      z-index: 1;
      position: relative;
    }

    .swiper-pagination {
      bottom: 0;
    }

    .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid #ddd;
      opacity: 1;
      margin: 0 6px;
      transition: all 0.3s ease;
    }

    .swiper-pagination-bullet-active {
      background: #ff5a8a;
      border-color: #ff5a8a;
      width: 35px;
      border-radius: 10px;
      box-shadow: 0 0 12px rgba(255, 90, 138, 0.6);
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #ff5a8a;
      width: 48px;
      height: 48px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 50%;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      top: calc(50% - 30px);

      &:hover {
        background: #ff5a8a;
        color: white;
        transform: scale(1.15);
        box-shadow: 0 8px 20px rgba(255, 90, 138, 0.4);
      }

      &:after {
        font-size: 20px;
        font-weight: bold;
      }
    }

    .swiper-slide {
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      transition: transform 0.4s ease;
      opacity: 1;
      overflow: visible;
      z-index: 1;

      &-active {
        z-index: 3;
      }
    }

    .swiper-slide-active .benefit-frame,
    .active-slide .benefit-frame {
      animation: ${borderGlow} 2s ease-in-out infinite;
      border-color: rgba(255, 90, 138, 0.8);

      &:before {
        opacity: 0.3;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
      }

      &:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow:
          0 18px 35px rgba(0, 0, 0, 0.2),
          0 0 15px rgba(255, 90, 138, 0.5);
        border-color: rgba(255, 90, 138, 0.9);
        animation: none;

        &:before {
          opacity: 0.8;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 0 0 30px;
      margin: 0 auto;
      width: 100%;
      max-width: 100%;

      .benefit-swiper {
        padding-bottom: 40px;
        padding-left: 0;
        padding-right: 0;
        position: relative;
      }

      .swiper-slide {
        padding: 2px;
        justify-content: center;
        align-items: center;
      }

      .swiper-button-next,
      .swiper-button-prev {
        width: 30px;
        height: 30px;
        display: none;

        &:after {
          font-size: 12px;
        }
      }

      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
      }

      .swiper-pagination-bullet-active {
        width: 20px;
      }
    }
  `,

  BenefitLink: styled.a`
    display: block;
    width: 100%;
    max-width: 200px;
    text-decoration: none;
    transition: none;
    margin: 0 auto;
    cursor: pointer;
    padding: 6px;
    overflow: visible;

    &:hover {
      transform: none;
    }

    @media (max-width: 768px) {
      margin: 0 auto;
      padding: 4px;
      max-width: 180px;

      &:hover {
        transform: none;
      }
    }
  `,

  MorePromotionButton: styled.button`
    background-color: #fff;
    color: #ff5a8a;
    border: 2px solid #ff5a8a;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 700;
    padding: 16px 40px;
    margin: 50px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 6px 15px rgba(255, 90, 138, 0.2);
    position: relative;
    overflow: hidden;
    animation: ${fadeInUp} 0.8s ease forwards 0.5s;
    opacity: 0;
    animation-fill-mode: forwards;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: 0.5s;
      animation: ${shimmer} 2s infinite;
    }

    &:hover {
      background-color: #ff5a8a;
      color: white;
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(255, 90, 138, 0.4);
      letter-spacing: 1px;

      &:before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(0);
    }

    &:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 3px #ff7c98,
        0 10px 20px rgba(255, 124, 152, 0.35);
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 10px 25px;
    }
  `,

  ArrowIcon: styled.span`
    display: inline-block;
    margin-left: 8px;
    transition: transform 0.3s ease;

    ${props => props.theme.MorePromotionButton}:hover & {
      transform: translateX(5px);
    }
  `,

  LoadingContainer: styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    animation: ${fadeInUp} 0.5s ease forwards;
  `,

  LoadingSpinner: styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 124, 152, 0.2);
    border-top: 5px solid #ff7c98;
    border-radius: 50%;
    animation:
      ${spin} 1s linear infinite,
      ${glowEffect} 2s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(255, 124, 152, 0.3);
  `,

  LoadingText: styled.p`
    font-size: 18px;
    color: #666;
    background: linear-gradient(to right, #f6f6f6, #f0f0f0, #f6f6f6);
    background-size: 800px 100%;
    animation: ${shimmer} 2s infinite;
    border-radius: 50px;
    padding: 12px 25px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    font-weight: 500;
  `,

  BenefitSkeleton: styled.div`
    background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${skeletonLoading} 1.5s infinite;
    border-radius: 30px;
    border: 2px solid rgba(255, 90, 138, 0.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
      animation: ${shimmer} 2s infinite;
    }
  `,
};

export const BenefitWrapper = S.BenefitWrapper;
export const BackgroundDecorationCircle = S.BackgroundDecorationCircle;
export const BenefitInner = S.BenefitInner;
export const BenefitTitleWrapper = S.BenefitTitleWrapper;
export const BenefitTitle = S.BenefitTitle;
export const TitleSpan = S.TitleSpan;
export const BenefitSubTitle = S.BenefitSubTitle;
export const BenefitSwiperContainer = S.BenefitSwiperContainer;
export const MorePromotionButton = S.MorePromotionButton;
export const ArrowIcon = S.ArrowIcon;

export const BenefitFrame = S.BenefitFrame;

export const BenefitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: none;
  will-change: transform;

  ${BenefitFrame}:hover & {
    transform: none;
  }

  @media (max-width: 768px) {
    ${BenefitFrame}:hover & {
      transform: none;
    }
  }
`;

export const BenefitLink = styled.a`
  display: block;
  width: 100%;
  max-width: 200px;
  text-decoration: none;
  transition: none;
  margin: 0 auto;
  cursor: pointer;
  padding: 6px;
  overflow: visible;

  &:hover {
    transform: none;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 4px;
    max-width: 180px;

    &:hover {
      transform: none;
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  animation: ${fadeInUp} 0.5s ease forwards;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 124, 152, 0.2);
  border-top: 5px solid #ff7c98;
  border-radius: 50%;
  animation:
    ${spin} 1s linear infinite,
    ${glowEffect} 2s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(255, 124, 152, 0.3);
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: #666;
  background: linear-gradient(to right, #f6f6f6, #f0f0f0, #f6f6f6);
  background-size: 800px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: 50px;
  padding: 12px 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-weight: 500;
`;

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  position: relative;
`;

export const BenefitTitleElement = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: #222;
  position: relative;
  display: inline-block;
  animation: ${fadeIn} 0.8s ease forwards;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #ff7c98, #2f72b9);
    border-radius: 2px;
    animation: ${expandWidth} 1s ease forwards;
  }
`;

export const BenefitDescriptionElement = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.8s ease forwards 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

export const BenefitIconElement = styled.img`
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
  transition: transform 0.3s ease;
`;

export const BenefitsRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;
  margin: 20px 0;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const BenefitItemElement = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 25px 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform-origin: center bottom;
  animation: ${fadeInUpSmall} 0.5s ease forwards;
  animation-delay: calc(var(--item-index, 0) * 0.1s);
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: transparent;

    &:before {
      opacity: 1;
    }

    ${BenefitIconElement} {
      transform: scale(1.1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #ff7c98, #2f72b9);
    border-radius: 13px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:after {
    display: none;
  }

  &:hover:after {
    opacity: 0;
  }

  &:focus-visible {
    outline: none;
    transform: none;
    box-shadow: 0 0 0 3px #ff7c98;
    border: none;
  }

  @media (max-width: 768px) {
    min-width: calc(50% - 15px);
    padding: 20px 15px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }

  @media (hover: none) {
    &:active {
      transform: none;
      transition: none;
    }
  }
`;

export const BenefitLinkButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  color: #ff7c98;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  position: relative;
  padding-right: 20px;
  transition: all 0.3s ease;

  &:after {
    content: '→';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #2f72b9;
    padding-right: 25px;

    &:after {
      transform: translate(5px, -50%);
    }
  }

  &:focus-visible {
    outline: none;
    color: #2f72b9;
    padding-right: 25px;
    box-shadow: 0 0 0 2px #ff7c98;
    border-radius: 4px;
  }
`;

export const RippleElement = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 124, 152, 0.3);
  transform: scale(0);
  animation: ${rippleEffect} 0.6s linear;
`;

export const BenefitSkeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
  border-radius: 30px;
  border: 2px solid rgba(255, 90, 138, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: ${shimmer} 2s infinite;
  }
`;
