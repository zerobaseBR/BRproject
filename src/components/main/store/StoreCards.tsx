import React from 'react';
import styles from './StoreSection.module.css';
import { IMAGES } from './constants';

interface CardProps {
  isVisible: boolean;
  isHovered: boolean;
  isLoaded: boolean;
  onHoverChange: (hover: boolean) => void;
  onImageLoad: () => void;
}

// 공통 로딩 오버레이 컴포넌트
const LoadingOverlay = () => (
  <div className={styles.loadingOverlay}>
    <div className={styles.spinner}></div>
  </div>
);

export function StoreCard({
  isVisible,
  isHovered,
  isLoaded,
  onHoverChange,
  onImageLoad,
}: CardProps) {
  return (
    <section
      className={`${styles.storeCard} ${isVisible ? 'visible fade-in-item' : 'fade-in-item'}`}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <div className={styles.storeImageContainer}>
        {!isLoaded && <LoadingOverlay />}
        <img
          src={IMAGES.STORE_IMAGE}
          alt="배스킨라빈스 매장 지도"
          loading="lazy"
          className={isHovered ? styles.imageHover : ''}
          onLoad={onImageLoad}
        />
        <div className={styles.overlay}>
          <div className={styles.pulseDot}></div>
        </div>
        <div className={styles.imageBadge}>매장 위치</div>
      </div>
      <div className={styles.storeInfo}>
        <h3 className={styles.storeTitle}>내 근처 매장 찾기</h3>
        <p className={styles.storeDescription}>
          가까운 배스킨라빈스 매장을 찾아보세요.
          <br />
          다양한 아이스크림과 케이크를 즐길 수 있습니다.
        </p>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <span className={`${styles.featureIcon} ${styles.locationIcon}`}></span>
            <span>전국 매장 검색</span>
          </div>
          <div className={styles.featureItem}>
            <span className={`${styles.featureIcon} ${styles.menuIcon}`}></span>
            <span>매장별 메뉴 확인</span>
          </div>
        </div>
        <a href="/store/map.php" className={styles.storeButton}>
          매장 찾기
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  );
}

export function StoryCard({
  isVisible,
  isHovered,
  isLoaded,
  onHoverChange,
  onImageLoad,
}: CardProps) {
  return (
    <section
      className={`${styles.storeCard} ${isVisible ? 'visible fade-in-item' : 'fade-in-item'}`}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <div className={`${styles.storeImageContainer} ${styles.storyContainer}`}>
        {!isLoaded && <LoadingOverlay />}
        <img
          src={IMAGES.BRWAY_IMAGE}
          alt="배스킨라빈스 브랜드 스토리"
          loading="lazy"
          className={isHovered ? styles.imageHover : ''}
          onLoad={onImageLoad}
        />
        <div className={`${styles.imageBadge} ${styles.historyBadge}`}>Since 1954</div>
      </div>
      <div className={styles.storeInfo}>
        <h3 className={styles.storeTitle}>배스킨라빈스 이야기</h3>
        <p className={styles.storeDescription}>
          오랜 시간 우리 곁에 함께한
          <br />
          배스킨라빈스의 브랜드 스토리를 만나보세요.
        </p>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <span className={`${styles.featureIcon} ${styles.historyIcon}`}></span>
            <span>브랜드 역사</span>
          </div>
          <div className={styles.featureItem}>
            <span className={`${styles.featureIcon} ${styles.visionIcon}`}></span>
            <span>미션과 비전</span>
          </div>
        </div>
        <a href="/story/story.php" className={styles.storeButton}>
          브랜드 스토리
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  );
}
