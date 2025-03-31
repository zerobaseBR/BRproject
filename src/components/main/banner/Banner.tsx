import React, { useState, useRef } from 'react';
import * as S from './styles';
import BannerToggle from './BannerToggle';
console.log('배너 렌더링됨');

interface BannerEventItem {
  id: number;
  imageUrl: string;
  link: string;
  target?: string;
}

interface BannerProps {
  mainTitle?: string;
  mainImageUrl?: string;
  mainLink?: string;
  eventItems?: BannerEventItem[];
}

const Banner: React.FC<BannerProps> = ({
  mainTitle = '플레이버 오브 더 먼스',
  mainImageUrl = 'https://www.baskinrobbins.co.kr/upload/main/banner/9f4a1a178201c7369ca90355a4c2fbae.png',
  mainLink = 'https://www.baskinrobbins.co.kr/menu/fom.php',
  eventItems = [
    {
      id: 1,
      imageUrl:
        'https://www.baskinrobbins.co.kr/upload/main/banner/6aa1a789b3d094d5dcde7592a118708f.png',
      link: 'https://www.baskinrobbins.co.kr/play/event/view.php?seq=312',
    },
    {
      id: 2,
      imageUrl:
        'https://www.baskinrobbins.co.kr/upload/main/banner/142d488435205035c29c80cceee97c45.png',
      link: 'https://www.baskinrobbins.co.kr/play/event/view.php?seq=99&category=ALL',
    },
    {
      id: 3,
      imageUrl:
        'https://www.baskinrobbins.co.kr/upload/main/banner/62bf9ffee3ab241dc7e37fe3c122cd13.png',
      link: 'https://www.baskinrobbins.co.kr/play/event/view.php?seq=319',
    },
  ],
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <S.MainHero ref={heroRef}>
      <S.MainHeroContainer>
        <S.MainHeroContent>
          <S.MainHeroBox>
            <a
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <S.MainHeroImage src={mainImageUrl} alt={mainTitle} />
            </a>
            <S.FancyBorder />
            <S.GlowingOuterBorder />
            <S.ShimmerEffect />
            <S.SparkleEffect />

            <BannerToggle onToggle={state => setIsExpanded(state)} initialState={isExpanded} />

            <S.SubBannerContainer $isExpanded={isExpanded}>
              {eventItems.map(item => (
                <S.SubBannerItem
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.SubBannerImage src={item.imageUrl} alt={`Event ${item.id}`} />
                </S.SubBannerItem>
              ))}
            </S.SubBannerContainer>
          </S.MainHeroBox>
        </S.MainHeroContent>
      </S.MainHeroContainer>
    </S.MainHero>
  );
};

export default Banner;
