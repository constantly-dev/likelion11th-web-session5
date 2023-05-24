import styled from 'styled-components';
import logo from '../assets/image/icon_logo.png';
const Footer = () => {
  return (
    <FooterBox>
      <FtUp>
        <FtUpContent>
          지금까지 <UpContentColor>★690,627,532 개의 평가가</UpContentColor>
          쌓였어요.
        </FtUpContent>
      </FtUp>
      <FtDown>
        <FtDownContent>
          <CompanyUl>
            <CompanyLi>서비스 이용약관 |</CompanyLi>
            <CompanyLi>개인정보 처리방침 |</CompanyLi>
            <CompanyLi>회사 안내</CompanyLi>
          </CompanyUl>
          <CompanyUl>
            <CompanyLi>고객 센터 |</CompanyLi>
            <CompanyLi>cs@watchapedia.co.kr, 02-515-9985</CompanyLi>
          </CompanyUl>
          <CompanyUl>
            <CompanyLi>광고 문의 |</CompanyLi>
            <CompanyLi>ad_sales@watcha.com·최신 광고 소개서</CompanyLi>
          </CompanyUl>
          <CompanyUl>
            <CompanyLi>제휴 및 대외 협력 </CompanyLi>
            <CompanyLi>https://watcha.team/contact</CompanyLi>
          </CompanyUl>
          <CompanyUl>
            <CompanyLi>주식회사 왓챠 |</CompanyLi>
            <CompanyLi>대표 박태훈 |</CompanyLi>
            <CompanyLi>서울특별시 서초구 강남대로 343 신덕빌딩 3층</CompanyLi>
          </CompanyUl>
          <CompanyUl>사업자 등록 번호 211-88-66013</CompanyUl>
          <CompanyUl>
            <CompanyLi>
              <CompanyLogo src={logo}></CompanyLogo>
            </CompanyLi>
            <CompanyLi>대표 박태훈 |</CompanyLi>
          </CompanyUl>
        </FtDownContent>
        <FtDownPlus>
          <PlusLangBtn>한국어</PlusLangBtn>
          <SnsWrapper>
            <SnsItem>
              <SnsImg></SnsImg>
            </SnsItem>
          </SnsWrapper>
        </FtDownPlus>
      </FtDown>
    </FooterBox>
  );
};
// FOOTER
const FooterBox = styled.div`
  width: 100%;
  height: 30%;
  /* 높이를 반응형에 맞게. 미디어 쿼리..? */
  border: 1px solid black;
  position: relative;
  bottom: 0;
  left: 0;
`;
const FtUp = styled.section`
  width: 100%;
  height: 62px;
  background-color: #101113;
  text-align: center;
  padding: 18px 0;
`;
const FtUpContent = styled.span`
  color: #d1d1d2;
  font-size: 19px;
  font-weight: 700;
`;
const UpContentColor = styled.span`
  color: #ff0558;
  font-size: 19px;
  font-weight: 700;
  margin-right: 8px;
`;
const FtDown = styled.section`
  width: 100%;
  height: 239px;
  background-color: #1c1d1f;
  padding: 20px 0 38px;
  color: #a5a5a7;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FtDownContent = styled.div`
  width: 70%;
  height: 100%;
`;
const CompanyUl = styled.ul`
  width: 100%;
  height: 22px;
  font-size: 13px;
  font-weight: 600;
`;
const CompanyLi = styled.li`
  color: #a5a5a7;
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  margin: 0 4px;
`;
const CompanyLogo = styled.img`
  width: 73px;
  height: 14px;
`;
const FtDownPlus = styled.div`
  width: 10%;
  height: 100%;
`;
const PlusLangBtn = styled.button`
  background: none;
  font-size: 15px;
  padding: 3px 57px 3px 8px;
  border-radius: 3px;
  border: 1px solid #a5a5a7;
  color: #a5a5a7;
`;
const SnsWrapper = styled.ul`
  list-style: none;
`;
const SnsItem = styled.li``;
const SnsImg = styled.img``;
export default Footer;
