import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  S,
  BenefitFrame,
  BenefitImage,
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  BenefitSkeleton,
  BenefitLink,
} from './BenefitStyles';

interface BenefitItem {
  id: string;
  title: string;
  link: string;
  image: string;
  altText?: string;
}

const benefitItems: BenefitItem[] = [
  {
    id: 'event-314',
    title: '이벤트 1',
    link: '/event/314',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/c9b25ee4553b2ecfc6da305bdc5de276.png',
    altText: '배스킨라빈스 신제품 프로모션 이벤트',
  },
  {
    id: 'event-309',
    title: '이벤트 2',
    link: '/event/309',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/37ca9bacd1069187ca9c50f64eda5e3f.png',
    altText: '배스킨라빈스 월간 특별 혜택',
  },
  {
    id: 'event-253',
    title: '이벤트 3',
    link: '/event/253',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/02de337a0b96ddbc1500461cccc6801c.png',
  },
  {
    id: 'event-25',
    title: '이벤트 4',
    link: '/event/25',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/872ac902cefee2ecab1774466e203c6c.png',
  },
  {
    id: 'event-11',
    title: '이벤트 5',
    link: '/event/11',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/8e5747a04cbeb6c854716c824d19ec27.png',
  },
  {
    id: 'event-122',
    title: '이벤트 6',
    link: '/event/122',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/cd99fb2f46c76c61090adc4c446f29c0.png',
  },
  {
    id: 'event-10',
    title: '이벤트 7',
    link: '/event/10',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/8cd1cd1a26445abb0ad98fad3171582f.png',
  },
  {
    id: 'event-9',
    title: '이벤트 8',
    link: '/event/9',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/051904573a6faab9482caafffa2d6bfc.png',
  },
  {
    id: 'event-7',
    title: '이벤트 9',
    link: '/event/7',
    image:
      'https://www.baskinrobbins.co.kr/upload/promotion/event/feefab979b65d3197e6671326820c63d.png',
    altText: '배스킨라빈스 시즌 한정 프로모션',
  },
];

const saveScrollPosition = () => {
  sessionStorage.setItem('benefitScrollPos', window.scrollY.toString());
};

const swiperStyles = `
  .swiper-wrapper {
    padding: 10px 0;
  }

  .swiper-slide {
    overflow: visible !important;
  }
  
  .swiper-slide, .swiper-slide-active {
    transform: scale(1) !important;
  }
  
  .swiper-slide:hover .benefit-frame {
    transform: translateY(-8px) scale(1.05) !important;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 0 10px rgba(255, 90, 138, 0.3) !important;
    animation: none !important;
  }
  
  .swiper-slide-active .benefit-frame, 
  .active-slide .benefit-frame {
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15), 0 0 10px rgba(255, 90, 138, 0.4) !important;
    animation: borderGlowAnimation 3s ease-in-out infinite !important;
  }
  
  .swiper-slide-active:hover .benefit-frame,
  .active-slide:hover .benefit-frame {
    transform: translateY(-8px) scale(1.05) !important;
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.2), 0 0 15px rgba(255, 90, 138, 0.5) !important;
  }
  
  .swiper-slide:hover .benefit-frame:before {
    opacity: 0.7 !important;
  }
  
  .swiper-slide-active .benefit-frame:before,
  .active-slide .benefit-frame:before {
    opacity: 0.3 !important;
  }
  
  .swiper-slide-active:hover .benefit-frame:before,
  .active-slide:hover .benefit-frame:before {
    opacity: 0.8 !important;
  }
  
  @media (max-width: 768px) {
    .swiper-slide:hover .benefit-frame,
    .swiper-slide-active:hover .benefit-frame,
    .active-slide:hover .benefit-frame {
      transform: none !important;
      box-shadow: none !important;
    }
  }

  @keyframes fadeInStart {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes borderGlowAnimation {
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
  }

  @keyframes floatAnimation {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }

  @keyframes shimmerAnimation {
    0% { background-position: -468px 0; }
    100% { background-position: 468px 0; }
  }

  .bg-decoration {
    animation: floatAnimation 18s ease-in-out infinite alternate;
  }

  .title-shimmer:after {
    animation: shimmerAnimation 3s linear infinite;
  }

  .promotion-button:before {
    animation: shimmerAnimation 2s infinite;
  }
`;

export default function BenefitSection() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleImageError = useCallback((index: number) => {
    console.warn(`이미지 로드 실패 (${benefitItems[index].title})`);
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const promises = benefitItems.map((item, index) => {
          return new Promise(resolve => {
            const img = new Image();
            img.src = item.image;
            img.onload = resolve;
            img.onerror = () => {
              handleImageError(index);
              resolve(true);
            };
          });
        });

        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('이미지 로드 중 오류 발생:', error);
        setError('이미지를 불러오는 중 문제가 발생했습니다.');
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      preloadImages();
    }, 500);

    return () => clearTimeout(timer);
  }, [handleImageError]);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = swiperStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const restorePosition = () => {
      const savedPosition = sessionStorage.getItem('benefitScrollPos');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('benefitScrollPos');
      }
    };

    restorePosition();

    return () => {
      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleKeydown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      window.open(benefitItems[index].link, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const handleImageLoad = useCallback(() => {
    console.log('이미지 로드 완료');
  }, []);

  const handleItemClick = useCallback((link: string) => {
    saveScrollPosition();
    window.open(link, '_blank', 'noopener,noreferrer');
  }, []);

  if (error) {
    return (
      <S.BenefitWrapper>
        <S.BenefitInner>
          <S.BenefitTitleWrapper>
            <S.BenefitTitle>BR BENEFIT</S.BenefitTitle>
            <S.BenefitSubTitle>배스킨라빈스의 다양한 혜택을 만나보세요</S.BenefitSubTitle>
          </S.BenefitTitleWrapper>
          <LoadingContainer>
            <div
              role="alert"
              aria-live="assertive"
              style={{ color: '#ff5252', textAlign: 'center' }}
            >
              {error}
              <p>잠시 후 다시 시도해주세요.</p>
            </div>
            <S.MorePromotionButton onClick={() => window.location.reload()}>
              다시 시도하기
              <S.ArrowIcon>↻</S.ArrowIcon>
            </S.MorePromotionButton>
          </LoadingContainer>
        </S.BenefitInner>
      </S.BenefitWrapper>
    );
  }

  if (isLoading) {
    return (
      <S.BenefitWrapper ref={sectionRef}>
        <S.BenefitInner>
          <S.BenefitTitleWrapper>
            <S.BenefitTitle>BR BENEFIT</S.BenefitTitle>
            <S.BenefitSubTitle>배스킨라빈스의 다양한 혜택을 만나보세요</S.BenefitSubTitle>
          </S.BenefitTitleWrapper>
          <S.BenefitSwiperContainer>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <BenefitSkeleton
                    key={`skeleton-${idx}`}
                    style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '24px',
                    }}
                  />
                ))}
            </div>
          </S.BenefitSwiperContainer>
          <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>혜택 정보를 불러오는 중입니다...</LoadingText>
          </LoadingContainer>
        </S.BenefitInner>
      </S.BenefitWrapper>
    );
  }

  return (
    <S.BenefitWrapper ref={sectionRef} id="benefit-section">
      <S.BackgroundDecorationCircle className="decoration-1 bg-decoration" />
      <S.BackgroundDecorationCircle className="decoration-2 bg-decoration" />
      <S.BackgroundDecorationCircle className="decoration-3 bg-decoration" />
      <S.BackgroundDecorationCircle className="decoration-4 bg-decoration" />
      <S.BackgroundDecorationCircle
        className="decoration-5 bg-decoration"
        style={{
          width: '70px',
          height: '70px',
          background: 'linear-gradient(45deg, #ff96af, #ffb6c6)',
          top: '40%',
          left: '20%',
          filter: 'blur(10px)',
          opacity: 0.12,
        }}
      />
      <S.BackgroundDecorationCircle
        className="decoration-6 bg-decoration"
        style={{
          width: '90px',
          height: '90px',
          background: 'linear-gradient(45deg, #5a9bd5, #7abbe5)',
          bottom: '30%',
          right: '25%',
          filter: 'blur(14px)',
          opacity: 0.12,
        }}
      />

      <S.BenefitInner>
        <S.BenefitTitleWrapper
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <S.BenefitTitle className="title-shimmer">
            <S.TitleSpan>BR</S.TitleSpan> BENEFIT
          </S.BenefitTitle>
          <S.BenefitSubTitle>배스킨라빈스의 다양한 혜택을 만나보세요</S.BenefitSubTitle>
        </S.BenefitTitleWrapper>

        <S.BenefitSwiperContainer
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            transitionDelay: '0.2s',
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={4}
            slideToClickedSlide={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return `<span class="${className}" role="button" aria-label="${index + 1}번째 혜택"></span>`;
              },
            }}
            navigation={true}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 25,
              },
              480: {
                slidesPerView: 1.7,
                spaceBetween: 28,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 35,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
            }}
            className="benefit-swiper"
            a11y={{
              enabled: true,
              prevSlideMessage: '이전 혜택',
              nextSlideMessage: '다음 혜택',
              firstSlideMessage: '첫번째 혜택',
              lastSlideMessage: '마지막 혜택',
              paginationBulletMessage: '{{index}}번째 혜택으로 이동',
              slideLabelMessage: '{{index}}번째 혜택 / 총 {{slidesLength}}개',
              containerMessage: '배스킨라빈스 혜택 슬라이더',
            }}
          >
            {benefitItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <BenefitLink
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={activeIndex === index ? 0 : -1}
                  onKeyDown={e => handleKeydown(e, index)}
                  aria-label={item.altText || item.title}
                  onClick={e => {
                    e.preventDefault();
                    handleItemClick(item.link);
                  }}
                  style={{
                    padding: '8px',
                    overflow: 'visible',
                  }}
                  className={activeIndex === index ? 'active-slide' : ''}
                >
                  <BenefitFrame
                    className="benefit-frame"
                    style={{
                      borderColor: activeIndex === index ? 'rgba(255, 90, 138, 0.9)' : undefined,
                      boxShadow:
                        activeIndex === index
                          ? '0 12px 25px rgba(0, 0, 0, 0.15), 0 0 10px rgba(255, 90, 138, 0.4)'
                          : undefined,
                      zIndex: activeIndex === index ? 2 : 1,
                      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
                      animation:
                        activeIndex === index
                          ? 'borderGlowAnimation 3s ease-in-out infinite'
                          : 'none',
                    }}
                  >
                    <BenefitImage
                      src={item.image}
                      alt={item.altText || item.title}
                      loading="lazy"
                      onLoad={handleImageLoad}
                      onError={e => {
                        e.currentTarget.src = '/images/placeholder.png';
                        handleImageError(index);
                      }}
                    />
                  </BenefitFrame>
                </BenefitLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.BenefitSwiperContainer>

        <S.MorePromotionButton
          onClick={() => {
            saveScrollPosition();
            window.open(
              'https://www.baskinrobbins.co.kr/play/event/list.php',
              '_blank',
              'noopener,noreferrer'
            );
          }}
          aria-label="배스킨라빈스 웹사이트에서 더 많은 이벤트 보기"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '0.4s',
          }}
          className="promotion-button"
        >
          더 많은 이벤트 보기
          <S.ArrowIcon>→</S.ArrowIcon>
        </S.MorePromotionButton>
      </S.BenefitInner>
    </S.BenefitWrapper>
  );
}
