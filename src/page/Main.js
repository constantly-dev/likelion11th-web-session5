import styled from 'styled-components';
import { useState } from 'react';
import Modal from '../components/Modal';
import kakao from '../assets/image/icon_kakao.png';
import google from '../assets/image/icon_google.png';
import twitter from '../assets/image/icon_twitter.png';
import line from '../assets/image/icon_line.png';
import logo from '../assets/image/icon_logo.png';
import Footer from '../components/Footer';
import Content from '../components/Content';

const Main = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const closeModal = () => {
    setLoginModalOpen(false);
  };
  const openModal = () => {
    setLoginModalOpen(true);
  };

  return (
    <AllContainer>
      <header>
        <nav>
          <NavWrapper>
            <NavContainer>
              <NavLogoLi>
                <a href="!#">
                  <NavLogoImg src={logo} alt="WatchaLogo"></NavLogoImg>
                </a>
              </NavLogoLi>
              <NavLeftLi>
                <NavLeftBtn>영화</NavLeftBtn>
              </NavLeftLi>
              <NavLeftLi>
                <NavLeftBtn>TV</NavLeftBtn>
              </NavLeftLi>
              <NavLeftLi>
                <NavLeftBtn>책</NavLeftBtn>
              </NavLeftLi>
              <NavLeftLi>
                <NavLeftBtn>웹툰</NavLeftBtn>
              </NavLeftLi>
              <NavSearchLi>
                <NavSearch for="search">
                  <input
                    type="text"
                    id="search"
                    placeholder="콘텐츠,인물,컬렉션,유저를 검색해보세요."
                    size={30}
                  />
                </NavSearch>
              </NavSearchLi>
              <NavSignLi>
                <NavSignInBtn onClick={openModal}>로그인</NavSignInBtn>
              </NavSignLi>
              <NavSignLi>
                <NavSignUpBtn>회원가입</NavSignUpBtn>
              </NavSignLi>
            </NavContainer>
          </NavWrapper>
        </nav>
      </header>
      <Modal open={loginModalOpen} close={closeModal}>
        <LogoImage src={logo} alt="로고 이미지" />
        <Title>로그인</Title>
        <LoginInput placeholder="이메일" />
        <LoginInput placeholder="비밀번호" />
        <LoginRedButton>로그인</LoginRedButton>
        <Content color="#ff2f6e">비밀번호를 잃어버리셨나요?</Content>
        <CenterBlock>
          <ContentBox color="#8c8c8c">계정이 없으신가요?</ContentBox>
          <ContentBox color="#ff2f6e">회원가입</ContentBox>
        </CenterBlock>
        <CenterBlock>
          <GrayLine />
          <OrContent>OR</OrContent>
          <GrayLine />
        </CenterBlock>
        <WrapIcon>
          <img src={kakao} alt="kako" />
          <img src={google} alt="google" />
          <img src={twitter} alt="twitter" />
          <img src={line} alt="line" />
        </WrapIcon>
        <LoginTip>
          TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
        </LoginTip>
      </Modal>
      <Content></Content>
      <Footer></Footer>
    </AllContainer>
  );
};

// ALL Container
const AllContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

//Header

const NavWrapper = styled.div`
  width: 100%;
  height: 62px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
`;
const NavContainer = styled.ul`
  width: 80%;
  height: 62px;
  margin: auto;
  padding: 13px 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const NavLogoLi = styled.li`
  width: 200px;
  height: 100%;
`;
const NavLogoImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  /* 이미지 비율 유지 */
`;
const NavLeftLi = styled.li`
  background-color: white;
  margin: 0 0 0 24px;
`;
const NavLeftBtn = styled.button`
  color: #7e7e7e;
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 700;
`;
const NavSearchLi = styled.li`
  margin: 0 0 0 24px;
  font-size: 15px;
`;
const NavSearch = styled.label`
  background-color: #f5f5f7;
  width: 300px;
  height: 38px;
  padding: 7px 10px 8px 30px;
  margin: 0 0 0 460px;
  border-radius: 2px;
`;
const NavSignLi = styled.li`
  margin: 0 0 0 24px;
  font-size: 15px;
`;
const NavSignInBtn = styled.button`
  color: #74747b;
  border: none;
  background: none;
  font-weight: 700;
`;
const NavSignUpBtn = styled.button`
  color: #353535;
  padding: 4px 11px;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: 700;
`;
// 모달

const LogoImage = styled.img`
  width: 200px;
`;
const CenterBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const WrapIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px;
`;
const Title = styled.div`
  font-weight: bolder;
  font-size: 17px;
  margin-bottom: 20px;
`;
const LoginRedButton = styled.button`
  width: 330px;
  height: 40px;
  margin-top: 20px;
  background-color: #ff2f6e;
  border-radius: 5px;
  border: none;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: bolder;
`;
const ContentBox = styled.div`
  color: ${(props) => props.color};
  margin: 15px 10px;
`;
const LoginInput = styled.input`
  width: 330px;
  height: 40px;
  margin: 5px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  ::placeholder {
    /* 여기서 placeholder를 가상선택자로 스타일 지정 가능 */
    font-size: 15px;
    padding-left: 10px;
  }
`;
const GrayLine = styled.div`
  width: 130px;
  height: 1px;
  background-color: #00000020;
  margin-top: 10px;
`;
const OrContent = styled.div`
  color: #8c8c8c;
  font-size: 14px;
  margin: 0 20px;
`;
const LoginTip = styled.div`
  color: #8d8e8f;
  background-color: #f7f7f7;
  height: 50px;
  padding-top: 10px;
  border-radius: 5px;
  margin: 10px;
`;

// background-color:transparent;을 global로 스타일 제거해서 사용 : input 배경 투명화

export default Main;
