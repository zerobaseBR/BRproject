import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BeBetterSection from '@/components/main/bebetter/BeBetterSection';
import BenefitSection from '../components/main/brBenefit/BenefitSection';
import PromotionSection from '@/components/main/promotion/PromotionSection';
import StoreSection from '@/components/main/store/StoreSection';

// 베이스 스타일 추가
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <PromotionSection />
        <BeBetterSection />
        <BenefitSection />
        <StoreSection />
      </PageWrapper>
    </>
  );
};

export default MainPage;
