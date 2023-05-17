import styled from 'styled-components';
import plus from '../assets/image/icon_plus.png';
import pen from '../assets/image/icon_pen.png';
import eye from '../assets/image/icon_eye.png';
import option from '../assets/image/icon_option.png';

const GiveStar = () => {
  // const StarData = [1,2,3,4,5]
  // map으로 아래 별 반복을 한줄로 줄일 수 있지 않을까?
  return (
    <>
      <StarLeft>
        <StarTitle>평가하기</StarTitle>
        <StarForm>
          <StarFieldset>
            <StarInput id="star1" type="radio" name="rating" value="1" />
            <StarLabel htmlFor="star1">★</StarLabel>
            <StarInput id="star2" type="radio" name="rating" value="2" />
            <StarLabel htmlFor="star2">★</StarLabel>
            <StarInput id="star3" type="radio" name="rating" value="3" />
            <StarLabel htmlFor="star3">★</StarLabel>
            <StarInput id="star4" type="radio" name="rating" value="4" />
            <StarLabel htmlFor="star4">★</StarLabel>
            <StarInput id="star5" type="radio" name="rating" value="5" />
            <StarLabel htmlFor="star5">★</StarLabel>
            {/* htmlFor 속성으로 */}
          </StarFieldset>
        </StarForm>
      </StarLeft>
      <StarRight>
        <StarIconContainer>
          <StarIconButton>
            <StarIcon className="StIcon" src={plus}></StarIcon>보고싶어요
          </StarIconButton>
          <StarIconButton>
            <StarIcon className="StIcon" src={pen}></StarIcon>코멘트
          </StarIconButton>
          <StarIconButton>
            <StarIcon className="StIcon" src={eye}></StarIcon>보는중
          </StarIconButton>
          <StarIconButton>
            <StarIcon className="StIcon" src={option}></StarIcon>더보기
          </StarIconButton>
        </StarIconContainer>
      </StarRight>
    </>
  );
};

export default GiveStar;
const StarLeft = styled.div`
  width: 30%;
  height: 80%;
  border-right: 1px solid rgb(237, 237, 237);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StarTitle = styled.div`
  font-size: 12px;
  color: #787878;
  text-align: center;
`;
const StarForm = styled.form``;
const StarFieldset = styled.fieldset`
  display: inline-block;
  direction: rtl;
  border: 0;
`;
const StarInput = styled.input`
  display: none;
  :checked ~ label {
    /* ~는 일반 형제 선택자로, 같은 레벨의 바로 뒤에 있는 엘리먼트를 모두 선택 */
    text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
  }
`;
const StarLabel = styled.label`
  font-size: 3em;
  color: transparent;
  text-shadow: 0 0 0 #f0f0f0;
  margin: 0 -5px;
  :hover {
    text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
    cursor: pointer;
  }
  :hover ~ label {
    text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
  }
`;
const StarRight = styled.div`
  width: 70%;
  height: 100%;
`;
const StarIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StarIconButton = styled.button`
  margin: 0 16px;
  color: #292a32;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  :hover .StIcon {
    transform: scale(1.2);
  }
`;
const StarIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transition: all ease-in-out 0.2s;
`;
