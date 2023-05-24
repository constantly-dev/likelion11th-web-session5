import styled from 'styled-components';
import kakao from '../assets/image/icon_kakao.png';
import google from '../assets/image/icon_google.png';
import twitter from '../assets/image/icon_twitter.png';
import line from '../assets/image/icon_line.png';
import logo from '../assets/image/icon_logo.png';
const Modal = (props) => {
  const { open, close } = props;

  return (
    <>
      {open && (
        <ModalBackground>
          <ModalBlock>
            <TopContent>
              <CloseButton onClick={close}>&times;</CloseButton>
              <LogoImage src={logo} alt="로고 이미지" />
              <Title>로그인</Title>
              <LoginInput placeholder="이메일" />
              <LoginInput placeholder="비밀번호" />
              <LoginRedButton>로그인</LoginRedButton>
              <ContentBox color="#ff2f6e">
                비밀번호를 잃어버리셨나요?
              </ContentBox>
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
                TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
                사용해요.
              </LoginTip>
            </TopContent>
            {props.children}
          </ModalBlock>
        </ModalBackground>
      )}
      {/* 원래는 ?삼항연산자로 null이랑 같이 사용 -> null을 쓴다면 &&연산자로 사용 */}
    </>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  display: flex;
`;

const ModalBlock = styled.div`
  width: 350px;
  height: 600px;
  margin: auto;

  border-radius: 5px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  display: flex;
  width: 10px;
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  color: #696969;
  background-color: transparent;
  cursor: pointer;
  border: white;
  margin: 2px 0 0 8px;
`;

const TopContent = styled.div`
  position: relative;
  font-size: 30px;
  /* background-color: blue; */
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
  /* 스타일 컴포넌트 작성하는 곳에서 props를 사용해 동적으로 컨트롤 가능하다. */
  margin: 15px 10px;
  font-size: 15px;
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
  font-size: 15px;
`;
export default Modal;
