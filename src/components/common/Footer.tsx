import { Link } from 'react-router-dom';

import * as S from '@/components/common/Footer.style';

import Logo from '@/assets/images/footer/logo-footer.png';
import HappyPoint from '@/assets/images/footer/happy-point.png';
import HappyMarket from '@/assets/images/footer/happy-market.png';
import SpcStory from '@/assets/images/footer/spc-story.png';
import Ksa from '@/assets/images/footer/ksa.png';
import Ccm from '@/assets/images/footer/ccm.png';
import Instagram from '@/assets/images/footer/instagram.png';
import Youtube from '@/assets/images/footer/youtube.png';
import Facebook from '@/assets/images/footer/facebook.png';
import Magazine from '@/assets/images/footer/magazine.png';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterWrap>
        <S.FooterPolicyList>
          <S.FooterPolicyListItem>
            <Link to="/">신규 직영점 입점제의</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">점포개설문의</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">채용문의</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">윤리신고센터</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">해피포인트카드 이용약관</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">배스킨라빈스 리워드 이용약관</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">개인정보처리방침</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">영상정보처리기기운영관리방침</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">안전보건 경영방침</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">공정거래자율준수</Link>
          </S.FooterPolicyListItem>
          <S.FooterPolicyListItem>
            <Link to="/">거래희망회사 사전등록</Link>
          </S.FooterPolicyListItem>
        </S.FooterPolicyList>
        <S.FooterInformationAndSiteMenuContainer>
          <div>
            <Link to="/">
              <img src={Logo} alt="배스킨라빈스 로고" />
            </Link>
            <S.FooterInformationTextContainer>
              <S.FooterInformationText>사업자 등록번호 : 303-81-09535</S.FooterInformationText>
              <S.FooterInformationText>비알코리아(주) 대표이사 도세호</S.FooterInformationText>
              <S.FooterInformationText>
                서울특별시 서초구 남부순환로 2620(양재동 11-149번지)
              </S.FooterInformationText>
              <S.FooterInformationText>TEL : 080-555-3131</S.FooterInformationText>
              <S.FooterInformationText>개인정보관리책임자 : 김민숙/상무</S.FooterInformationText>
            </S.FooterInformationTextContainer>
            <S.FooterInformationTextCopyright>
              Copyright © 2023 BRKOREA Company. All Rights Reserved.
            </S.FooterInformationTextCopyright>
          </div>
          <S.FooterInformationSiteMenuContainer>
            <li>
              <Link to="/menu">
                <S.FooterInformationSiteMenuTitle>Menu</S.FooterInformationSiteMenuTitle>
              </Link>
              <S.FooterInformationSiteMenuDepthList>
                <S.FooterInformationSiteMenuDepthListItem>
                  <Link to="/menu/monthly">이달의 맛</Link>
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  <Link to="/menu">아이스크림</Link>
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  프리팩
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  아이스크림 케이크
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  디저트
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  음료
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  커피
                </S.FooterInformationSiteMenuDepthListItem>
              </S.FooterInformationSiteMenuDepthList>
            </li>
            <li>
              <Link to="/brplay">
                <S.FooterInformationSiteMenuTitle>BR Play</S.FooterInformationSiteMenuTitle>
              </Link>
              <S.FooterInformationSiteMenuDepthList>
                <S.FooterInformationSiteMenuDepthListItem>
                  이벤트
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  배라광장
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  BR레시피
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  마이플레이버리스트
                </S.FooterInformationSiteMenuDepthListItem>
              </S.FooterInformationSiteMenuDepthList>
            </li>
            <li>
              <S.FooterInformationSiteMenuTitle>BR Story</S.FooterInformationSiteMenuTitle>
              <S.FooterInformationSiteMenuDepthList>
                <S.FooterInformationSiteMenuDepthListItem>
                  브랜드 스토리
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  이달의 맛 히스토리
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  Be Better
                </S.FooterInformationSiteMenuDepthListItem>
              </S.FooterInformationSiteMenuDepthList>
            </li>
            <li>
              <S.FooterInformationSiteMenuTitle>Delivery/Store</S.FooterInformationSiteMenuTitle>
              <S.FooterInformationSiteMenuDepthList>
                <S.FooterInformationSiteMenuDepthListItem>
                  매장 찾기
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  100flavor 플래그십스토어
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  워크샵 by 배스킨라빈스
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  점포개설문의
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  배달주문
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  단체주문
                </S.FooterInformationSiteMenuDepthListItem>
              </S.FooterInformationSiteMenuDepthList>
            </li>
            <li>
              <S.FooterInformationSiteMenuTitle>
                Information Center
              </S.FooterInformationSiteMenuTitle>
              <S.FooterInformationSiteMenuDepthList>
                <S.FooterInformationSiteMenuDepthListItem>
                  고객센터
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  소비자중심경영(CCM)
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  칭찬점포
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  공지사항
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  보도자료
                </S.FooterInformationSiteMenuDepthListItem>
                <S.FooterInformationSiteMenuDepthListItem>
                  공정거래자율준수
                </S.FooterInformationSiteMenuDepthListItem>
              </S.FooterInformationSiteMenuDepthList>
            </li>
          </S.FooterInformationSiteMenuContainer>
        </S.FooterInformationAndSiteMenuContainer>
        <S.FooterRelationAndSnsContainer>
          <S.FooterRelationContainer>
            <S.FooterRelationImage src={HappyPoint} alt="해피포인트 로고" />
            <S.FooterRelationImage src={HappyMarket} alt="해피마켓 로고" />
            <img src={SpcStory} alt="spc스토리 로고" />
            <S.FooterRelationImageSmall src={Ksa} alt="ksa 로고" />
            <S.FooterRelationImageSmall src={Ccm} alt="ccm 로고" />
          </S.FooterRelationContainer>
          <S.FooterSnsAndFamilySiteContainer>
            <S.FooterSnsContainer>
              <Link
                to="https://www.instagram.com/baskinrobbinskorea/"
                rel="noreferrer noopener external"
                target="_blank"
              >
                <img src={Instagram} alt="인스타그램 로고" />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCdUlCaxi7gx9Q-WDVDe30YA"
                rel="noreferrer noopener external"
                target="_blank"
              >
                <img src={Youtube} alt="유튜브 로고" />
              </Link>
              <Link
                to="https://www.facebook.com/baskinrobbinskr/?locale=ko_KR"
                rel="noreferrer noopener external"
                target="_blank"
              >
                <img src={Facebook} alt="페이스북 로고" />
              </Link>
              <Link
                to="https://www.brmagazine.co.kr/"
                rel="noreferrer noopener external"
                target="_blank"
              >
                <img src={Magazine} alt="배라 메거진 로고" />
              </Link>
            </S.FooterSnsContainer>
          </S.FooterSnsAndFamilySiteContainer>
        </S.FooterRelationAndSnsContainer>
      </S.FooterWrap>
    </S.FooterContainer>
  );
}
