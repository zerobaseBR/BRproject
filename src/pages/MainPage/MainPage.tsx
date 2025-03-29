import { useEffect, useRef } from 'react';
import BeBetterSection from '@/components/main/bebetter/BeBetterSection';
import PromotionSection from '@/components/main/promotion/PromotionSection';
import StoreSection from '@/components/main/store/StoreSection';
import styles from './MainPage.module.css';

export default function MainPage() {
  const mainRef = useRef<HTMLElement>(null);

  // 페이드인 애니메이션을 위한 스크롤 관찰 로직
  useEffect(() => {
    // ...existing code...
  }, []);

  return (
    <main className={styles.main} ref={mainRef}>
      <PromotionSection />
      <BeBetterSection />
      <StoreSection />
    </main>
  );
}
