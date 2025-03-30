import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import {
  BenefitItemElement,
  BenefitIconElement,
  BenefitTitleElement,
  BenefitDescriptionElement,
  BenefitLinkButton,
  RippleElement,
  fadeIn,
} from './BenefitStyles';

// 타입 정의 분리
interface BenefitItemProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  variant?: 'default' | 'primary' | 'secondary';
  index?: number;
}

interface VariantProps {
  variant: string;
  index: number;
  onClick?: (e: React.MouseEvent) => void;
}

// 스타일 컴포넌트 분리
const BenefitItemContainer = styled(BenefitItemElement)<VariantProps>`
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
  animation-fill-mode: forwards;
  transform-origin: center bottom;
  position: relative;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  border: none;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 18px;
  overflow: visible;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);

    &:before {
      opacity: 1;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: ${props =>
      props.variant === 'primary'
        ? 'linear-gradient(135deg, #ff5a8a, #ff96af)'
        : props.variant === 'secondary'
          ? 'linear-gradient(135deg, #1a5ea0, #5a9bd5)'
          : 'linear-gradient(135deg, #777, #aaa)'};
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
`;

function BenefitItem({
  title,
  description,
  icon,
  link,
  variant = 'default',
  index = 0,
}: BenefitItemProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [rippleCount, setRippleCount] = useState(0);

  // 물결 효과 추가 함수 메모이제이션
  const addRipple = useCallback(
    (e: React.MouseEvent) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = {
        id: rippleCount,
        x,
        y,
      };

      setRipples(prev => [...prev, newRipple]);
      setRippleCount(prev => prev + 1);

      // 리플 효과 제거를 위한 타이머
      setTimeout(() => {
        setRipples(currentRipples => currentRipples.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    },
    [rippleCount]
  );

  // 클릭 이벤트 핸들러 메모이제이션
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      addRipple(e);

      if (!link) return;

      // 스크롤 위치 저장
      sessionStorage.setItem('benefitScrollPos', window.scrollY.toString());

      // 링크 이동을 위한 약간의 지연
      setTimeout(() => {
        window.open(link, '_blank', 'noopener,noreferrer');
      }, 150);
    },
    [addRipple, link]
  );

  return (
    <BenefitItemContainer
      variant={variant}
      index={index}
      onClick={handleClick}
      tabIndex={link ? 0 : -1}
      role={link ? 'button' : 'region'}
      aria-label={link ? `${title} - 자세히 보기` : title}
      style={{ '--item-index': index } as React.CSSProperties}
    >
      {/* 아이콘 표시 (선택적) */}
      {icon && (
        <BenefitIconElement
          src={icon}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
          }}
        />
      )}

      {/* 타이틀 및 설명 */}
      <BenefitTitleElement>{title}</BenefitTitleElement>
      <BenefitDescriptionElement>{description}</BenefitDescriptionElement>

      {/* 링크 버튼 (선택적) */}
      {link && (
        <BenefitLinkButton
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          onMouseDown={e => e.stopPropagation()}
          className="benefit-link"
          style={{
            fontSize: '16px',
            fontWeight: '700',
            padding: '5px 0',
            borderBottom: '2px solid #ff5a8a',
          }}
        >
          자세히 보기
        </BenefitLinkButton>
      )}

      {/* 리플 효과 엘리먼트 */}
      {ripples.map(ripple => (
        <RippleElement
          key={ripple.id}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '250px',
            height: '250px',
            marginLeft: '-125px',
            marginTop: '-125px',
            background: 'radial-gradient(circle, rgba(255,90,138,0.4) 0%, rgba(255,90,138,0) 70%)',
          }}
        />
      ))}
    </BenefitItemContainer>
  );
}

export default React.memo(BenefitItem);
