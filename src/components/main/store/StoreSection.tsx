import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './StoreSection.module.css';
import { safeSetInterval, safeSetTimeout } from './tabUtils';
import { StoreCard, StoryCard } from './StoreCards';
import { TabType, ImageLoadState, HoverState } from './types';
import { CONSTANTS } from './constants';

// 탭 컨테이너 컴포넌트 분리
function TabContainer({
  activeTab,
  handleTabClick,
}: {
  activeTab: TabType;
  handleTabClick: (tab: TabType) => void;
}) {
  return (
    <div className={styles.tabContainer}>
      <button
        className={`${styles.tabButton} ${activeTab === 'store' ? styles.active : ''}`}
        onClick={() => handleTabClick('store')}
        aria-selected={activeTab === 'store'}
        role="tab"
        aria-controls="store-panel"
        id="store-tab"
      >
        <span className={`${styles.tabIcon} ${styles.storeIcon}`}></span>
        매장 찾기
      </button>
      <button
        className={`${styles.tabButton} ${activeTab === 'story' ? styles.active : ''}`}
        onClick={() => handleTabClick('story')}
        aria-selected={activeTab === 'story'}
        role="tab"
        aria-controls="story-panel"
        id="story-tab"
      >
        <span className={`${styles.tabIcon} ${styles.storyIcon}`}></span>
        브랜드 스토리
      </button>
    </div>
  );
}

// 탭 패널 컴포넌트 분리
function TabPanel({
  children,
  id,
  ariaLabelledby,
  isActive,
}: {
  children: React.ReactNode;
  id: string;
  ariaLabelledby: string;
  isActive: boolean;
}) {
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledby}
      className={styles.tabPanel}
      style={{
        display: isActive ? 'block' : 'none',
        opacity: isActive ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}

// 탭 인디케이터 컴포넌트 분리
function TabIndicator({
  activeTab,
  onTabChange,
}: {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}) {
  return (
    <div className={styles.tabIndicator}>
      <span
        className={`${styles.indicator} ${activeTab === 'store' ? styles.activeIndicator : ''}`}
        onClick={() => onTabChange('store')}
        aria-label="매장 찾기 탭으로 이동"
      ></span>
      <span
        className={`${styles.indicator} ${activeTab === 'story' ? styles.activeIndicator : ''}`}
        onClick={() => onTabChange('story')}
        aria-label="브랜드 스토리 탭으로 이동"
      ></span>
    </div>
  );
}

export default function StoreSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('store');
  const [hoverState, setHoverState] = useState<HoverState>({
    store: false,
    story: false,
  });
  const [imagesLoaded, setImagesLoaded] = useState<ImageLoadState>({
    store: false,
    story: false,
  });
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
  const autoRotateTimerRef = useRef<number | null>(null);
  const pauseTimerRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 타이머 정리 로직 분리
  const clearTimers = useCallback(() => {
    if (autoRotateTimerRef.current) {
      clearInterval(autoRotateTimerRef.current);
      autoRotateTimerRef.current = null;
    }
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
  }, []);

  // 인터섹션 옵저버 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      clearTimers();
    };
  }, [clearTimers]);

  // 자동 회전 기능
  useEffect(() => {
    if (!isVisible || !autoRotateEnabled) return;

    const cleanup = safeSetInterval(
      () => {
        setActiveTab(prevTab => (prevTab === 'store' ? 'story' : 'store'));
      },
      CONSTANTS.ROTATION_INTERVAL,
      autoRotateTimerRef
    );

    return cleanup;
  }, [isVisible, autoRotateEnabled]);

  // 탭 클릭 핸들러
  const handleTabClick = useCallback(
    (tab: TabType) => {
      if (tab === activeTab) return;

      setActiveTab(tab);
      setAutoRotateEnabled(false);

      const cleanup = safeSetTimeout(
        () => {
          setAutoRotateEnabled(true);
        },
        CONSTANTS.RESUME_AUTO_ROTATION_DELAY,
        pauseTimerRef
      );

      return cleanup;
    },
    [activeTab]
  );

  // 이미지 로드 핸들러
  const handleImageLoaded = useCallback((type: TabType) => {
    setImagesLoaded(prev => ({
      ...prev,
      [type]: true,
    }));
  }, []);

  // 마우스 이벤트 핸들러
  const handleMouseEnter = useCallback(() => {
    setAutoRotateEnabled(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAutoRotateEnabled(true);
  }, []);

  // 호버 상태 변경 핸들러
  const handleHoverChange = useCallback((type: TabType, isHovered: boolean) => {
    setHoverState(prev => ({
      ...prev,
      [type]: isHovered,
    }));
  }, []);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return clearTimers;
  }, [clearTimers]);

  return (
    <div
      className={`${styles.mainBox} ${isVisible ? 'visible fade-in-item' : 'fade-in-item'}`}
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container}>
        <TabContainer activeTab={activeTab} handleTabClick={handleTabClick} />

        <div className={styles.contentContainer}>
          <TabPanel id="store-panel" ariaLabelledby="store-tab" isActive={activeTab === 'store'}>
            <StoreCard
              isVisible={isVisible}
              isHovered={hoverState.store}
              isLoaded={imagesLoaded.store}
              onHoverChange={hover => handleHoverChange('store', hover)}
              onImageLoad={() => handleImageLoaded('store')}
            />
          </TabPanel>

          <TabPanel id="story-panel" ariaLabelledby="story-tab" isActive={activeTab === 'story'}>
            <StoryCard
              isVisible={isVisible}
              isHovered={hoverState.story}
              isLoaded={imagesLoaded.story}
              onHoverChange={hover => handleHoverChange('story', hover)}
              onImageLoad={() => handleImageLoaded('story')}
            />
          </TabPanel>
        </div>

        <TabIndicator activeTab={activeTab} onTabChange={handleTabClick} />
      </div>
    </div>
  );
}
