import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 10px 20px;
  color: white;
  background-color: #1c1b18;
  padding: 40px 24px 96px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 20px 16px 76px;
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

  &:hover {
    color: #ff5484;
  }
`;

export const FooterInformationAndSiteMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 36px 0 16px;
  border-top: 1px solid #333230;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 24px 0 16px;
    gap: 24px;
  }
`;

export const FooterInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const FooterInformationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 8px;
  }
`;

export const FooterInformationText = styled.p`
  color: #ffffff3b;
  font-size: 12px;
`;

export const FooterInformationTextCopyright = styled.p`
  color: #ffffff80;
  font-size: 12px;
  margin-top: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: 16px;
  }
`;

export const FooterInformationSiteMenuContainer = styled.ul`
  display: flex;
  gap: 52px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FooterInformationSiteMenuTitle = styled.span`
  color: #fff3;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #e69291;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const FooterInformationSiteMenuDepthList = styled.ul`
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: 12px;
  }
`;

export const FooterInformationSiteMenuDepthListItem = styled.li`
  padding: 5px 0;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: #ff5484;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 12px;
  }
`;

export const FooterRelationAndSnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 120px;
  flex-wrap: wrap;
  border-top: 1px solid #333230;
  padding-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
    row-gap: 32px;
  }
`;

export const FooterRelationContainer = styled.div`
  display: flex;
`;

export const FooterRelationImage = styled.img`
  margin-right: 45px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 4px;
  }
`;

export const FooterRelationImageSmall = styled.img`
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 4px;
  }
`;

export const FooterSnsAndFamilySiteContainer = styled.div`
  display: flex;
  gap: 56px;
`;

export const FooterSnsContainer = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 40px;
  }
`;
