import styled, { keyframes } from 'styled-components';
import { theme } from '@/style/theme';

const { breakpoints } = theme;

const shimmerAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const BeBetterWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 120px auto;
  padding: 70px 30px;
  background-color: #f4e8df;
  border-radius: 24px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255, 117, 152, 0.1) 0%, rgba(255, 117, 152, 0) 70%);
    border-radius: 50%;
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 3px;
    background: linear-gradient(
      to right,
      rgba(255, 117, 152, 0.1),
      rgba(255, 84, 132, 0.8),
      rgba(255, 117, 152, 0.1)
    );
    border-radius: 50px;
    top: -15px;
  }

  &::before {
    left: 25%;
    transform: translateX(-50%);
  }

  &::after {
    right: 25%;
    transform: translateX(50%);
  }

  h2 {
    color: #ff5484;
    font-family: var(--font-family-en);
    font-weight: 700;
    font-size: 42px;
    line-height: 1.1;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      content: '★';
      position: absolute;
      color: #ff7c98;
      font-size: 24px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.8;
    }

    &::before {
      left: -35px;
    }

    &::after {
      right: -35px;
    }
  }

  p {
    font-size: 19px;
    color: #666;
    font-family: var(--font-family-kr);
    margin-bottom: 5px;
  }

  span {
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: #ff7c98;
    margin-top: 5px;
    font-family: var(--font-family-kr);
  }

  @media (max-width: ${breakpoints.md}) {
    &::before,
    &::after {
      width: 80px;
      top: -10px;
    }

    h2 {
      font-size: 32px;

      &::before,
      &::after {
        font-size: 18px;
      }

      &::before {
        left: -25px;
      }

      &::after {
        right: -25px;
      }
    }

    p,
    span {
      font-size: 16px;
    }
  }
`;

export const BeBetterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin-top: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
    max-width: 380px;
    margin: 60px auto 0;
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

export const BeBetterItem = styled.div`
  background-color: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 100%;
  max-width: 380px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      rgba(255, 117, 152, 0.2),
      rgba(255, 84, 132, 1),
      rgba(255, 117, 152, 0.2)
    );
    transition: width 0.4s ease;
    border-radius: 0 0 18px 18px;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 30px rgba(255, 84, 132, 0.12);
  }

  &:hover::after {
    width: 100%;
    animation: ${shimmerAnimation} 1.5s infinite;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const BeBetterImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const BeBetterContent = styled.div`
  padding: 24px;
  position: relative;
`;

export const BeBetterTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #ff5484;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  ${BeBetterItem}:hover & {
    color: #ff3d7f;
  }
`;

export const BeBetterDescription = styled.p`
  font-size: 17px;
  color: #666;
  line-height: 1.4;
  margin-top: 5px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #ff7c98;
    font-size: 20px;
    line-height: 1;
  }
`;
