import styled, { keyframes } from 'styled-components';
import { breakpoints } from '@/style/theme';

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  padding: 60px 20px;
  background-color: #ffffff;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #ff7c98;
    margin: 0;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-top: 10px;
  }

  span {
    display: inline-block;
    font-size: 16px;
    color: #ff7c98;
    margin-top: 5px;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #ff7c98;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5c7c;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 1s ease,
    transform 1s ease;
  padding: 80px 0;
  background-color: #f9f9f9;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 0 20px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const Image = styled.div`
  width: 100%;
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 50px;

  @media (max-width: 1024px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const Title = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #ff7c98;
    margin-bottom: 15px;
  }

  p {
    font-size: 24px;
    color: #333;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    br {
      display: none;
    }
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: #ff7c98;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5c7c;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const Background = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

export const StoreContent = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: all 0.6s ease-in-out;
  padding: 50px;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (min-width: ${breakpoints.md}) {
    max-width: 450px;
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 40px;
`;

export const StoreTitleHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;

  span {
    color: #ff7c98;
    position: relative;
    display: inline-block;
  }
`;

export const StoreDesc = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  word-break: keep-all;

  br {
    content: '';
    margin: 8px 0;
    display: block;
  }
`;

export const StoreButton = styled(PrimaryButton)`
  font-size: 16px;
  padding: 14px 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 124, 152, 0.3);
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #ff5c7c;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 124, 152, 0.4);
  }
`;

export const ButtonArrow = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease;

  &:after {
    content: '→';
  }

  ${StoreButton}:hover & {
    transform: translateX(3px);
  }
`;

export const StoreImageContainer = styled.div<{ $isVisible: boolean }>`
  flex: 1.2;
  position: relative;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateX(0)' : 'translateX(30px)')};
  transition: all 0.8s ease-in-out 0.2s;
  margin-top: 30px;
  min-height: 250px;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
    max-width: 550px;
  }
`;

export const StoreImage = styled.img`
  width: 100%;
  border-radius: 15px;
  display: block;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
  object-fit: cover;
  height: auto;
  max-height: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 124, 152, 0.02);
  border-radius: 15px;
`;

export const Pointer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: #ff7c98;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 124, 152, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${pulse} 2s infinite;
    z-index: 4;
  }
`;

export const BRStoreCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

export const BRMapContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;

  @media (min-width: ${breakpoints.md}) {
    max-width: 50%;
  }
`;

export const BRStoryContainer = styled(BRMapContainer)`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 124, 152, 0.1), transparent);
    z-index: 1;
  }
`;

export const BRCardStoreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${BRMapContainer}:hover &,
  ${BRStoryContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const StoreInfo = styled.div`
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${breakpoints.md}) {
    padding: 40px;
  }
`;

export const StoreTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #ff7c98;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 32px;
  }
`;

export const StoreDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #666;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`;
