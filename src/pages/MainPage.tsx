import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BenefitSection from '@/components/main/brBenefit/BenefitSection';
import BeBetterSection from '@/components/main/bebetter/BeBetterSection';
import PromotionSection from '@/components/main/promotion/PromotionSection';
import Banner from '@/components/main/banner/Banner';
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
  position: relative;
  z-index: 1;
  background-color: transparent;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Banner />
        <PromotionSection />
        <BeBetterSection />
        <BenefitSection />
        <StoreSection />
      </PageWrapper>
    </>
  );
};

export default MainPage;
