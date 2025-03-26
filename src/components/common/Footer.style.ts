import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 10px 20px;
  color: white;
  background-color: #1c1b18;
  padding: 40px 0 96px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;

export const FooterWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const FooterPolicyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const FooterPolicyListItem = styled.li`
  padding: 7px;
  font-size: 12px;
`;

export const FooterInformationAndSiteMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 0 16px;
  border-top: 1px solid #333230;
`;

export const FooterInformationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
`;

export const FooterInformationText = styled.p`
  color: #ffffff3b;
  font-size: 12px;
`;

export const FooterInformationTextCopyright = styled.p`
  color: #ffffff80;
  font-size: 12px;
  margin-top: 40px;
`;

export const FooterInformationSiteMenuContainer = styled.ul`
  display: flex;
  gap: 60px;
`;

export const FooterInformationSiteMenuTitle = styled.span`
  color: #fff3;
  font-size: 24px;
  font-weight: 600;
`;

export const FooterInformationSiteMenuDepthList = styled.ul`
  margin-top: 24px;
`;

export const FooterInformationSiteMenuDepthListItem = styled.li`
  padding: 5px 0;
  font-size: 15px;
`;
