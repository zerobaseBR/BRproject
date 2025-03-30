import React from 'react';
import styled from 'styled-components';

export interface BannerToggleProps {
  onToggle: (state: boolean) => void;
  initialState: boolean;
}

const ToggleButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: linear-gradient(145deg, #ff9fb9, #ff3385);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  color: white;
  font-size: 18px;
  box-shadow:
    0 5px 20px rgba(255, 64, 129, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.15),
    inset 0 2px 3px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 105, 180, 0.3);
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  outline: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 5px;
    width: 36px;
    height: 16px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
    border-radius: 50px;
    transform: rotate(-35deg);
    opacity: 0.8;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 8px;
    right: 10px;
    width: 20px;
    height: 10px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.15), transparent);
    border-radius: 50px;
    transform: rotate(-35deg);
    opacity: 0.4;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow:
      0 8px 25px rgba(255, 64, 129, 0.5),
      0 3px 8px rgba(0, 0, 0, 0.2),
      inset 0 2px 3px rgba(255, 255, 255, 0.5),
      0 0 15px rgba(255, 105, 180, 0.5);
    background: linear-gradient(145deg, #ff9fb9, #ff1a77);
  }

  &:active {
    transform: translateY(1px) scale(0.97);
    box-shadow:
      0 2px 10px rgba(255, 64, 129, 0.3),
      0 1px 3px rgba(0, 0, 0, 0.15),
      inset 0 1px 2px rgba(255, 255, 255, 0.3),
      0 0 8px rgba(255, 105, 180, 0.2);
    transition: all 0.1s ease;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  position: relative;

  svg {
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1;
  }

  &:hover svg {
    transform: scale(1.15);
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.25));
  }
`;

const BannerToggle: React.FC<BannerToggleProps> = ({ onToggle, initialState }) => {
  const handleClick = () => {
    onToggle(!initialState);
  };

  return (
    <ToggleButton onClick={handleClick} aria-label={initialState ? '닫기' : '열기'}>
      <IconWrapper>
        {initialState ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M5 12H19"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </IconWrapper>
    </ToggleButton>
  );
};

export default BannerToggle;
