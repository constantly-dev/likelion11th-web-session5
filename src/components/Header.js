import styled from 'styled-components';
import logo from '../assets/image/icon_logo.png';

const Header = (props) => {
  console.log(props);
  const handleClick = () => {
    props.open();
  };

  return (
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
              <NavSearch htmlFor="search">
                <input
                  type="text"
                  id="search"
                  placeholder="콘텐츠,인물,컬렉션,유저를 검색해보세요."
                  size={30}
                />
              </NavSearch>
            </NavSearchLi>
            <NavSignLi>
              <NavSignInBtn onClick={handleClick}>로그인</NavSignInBtn>
            </NavSignLi>
            <NavSignLi>
              <NavSignUpBtn>회원가입</NavSignUpBtn>
            </NavSignLi>
          </NavContainer>
        </NavWrapper>
      </nav>
    </header>
  );
};

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
  background: transparent;
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
export default Header;
