import styled from 'styled-components';
import ad from '../assets/image/ad.png';
import { useParams } from 'react-router-dom';
import { DATA } from '../assets/Data';
const MovieBottom = () => {
  const params = useParams();
  const data = DATA.filter((des) => des.rank === Number(params.movie))[0];
  return (
    <MovieBottomContainer>
      <BottomInnerContainer>
        <BottomLeftContainer>
          <BasicInfoSection>
            <BasicTitleBox>
              <InfoTitleLeft>기본 정보</InfoTitleLeft>
              <InfoTitleRightA>더보기</InfoTitleRightA>
            </BasicTitleBox>
            <BasicInfoSpecificBox>
              <BasicInfoSpecificTop>
                <div>{data.title}</div>
                <div>
                  {data.year}·{data.country}·{data.genre}
                </div>
                <div>
                  {data.runningTime}·{data.age}
                </div>
              </BasicInfoSpecificTop>
              <BasicInfoSpecificBottom>
                {data.description}
              </BasicInfoSpecificBottom>
            </BasicInfoSpecificBox>
          </BasicInfoSection>
          <ActorSection>
            <BasicTitleBox>
              <InfoTitleLeft>출연/제작</InfoTitleLeft>
            </BasicTitleBox>
            <ActorBox></ActorBox>
          </ActorSection>

          <GraphSection>
            <BasicTitleBox>
              <InfoTitleLeft>별점 그래프</InfoTitleLeft>
              <InfoTitleRight>평균 ★{data.average}</InfoTitleRight>
            </BasicTitleBox>
            <GraphBox></GraphBox>
          </GraphSection>

          <CommentSection>
            <BasicTitleBox>
              <InfoTitleLeft>코멘트</InfoTitleLeft>
              <InfoTitleRightA>더보기</InfoTitleRightA>
            </BasicTitleBox>
          </CommentSection>
        </BottomLeftContainer>
        <BottomRightContainer>
          <BottomRightTop>
            <AdA href="https://www.diaff.org/kor/default.asp" target="_blank">
              <AdImgBox>
                <AdImg src={ad}></AdImg>
              </AdImgBox>
            </AdA>
            <AdA href="https://www.diaff.org/kor/default.asp" target="_blank">
              <SpecificContainer>
                <AdSpecificBox>
                  <AdSpecificTitle>제11회 디아스포라영화제</AdSpecificTitle>
                  <AdSpecificTime>5/19(금)~23(화), 인천</AdSpecificTime>
                  <AdSpecificMark>디아스포라영화제·AD</AdSpecificMark>
                </AdSpecificBox>
                <SpecificButtonBox>
                  <SpecificButton>보러가기</SpecificButton>
                </SpecificButtonBox>
              </SpecificContainer>
            </AdA>
          </BottomRightTop>
          <BottomRightBottom></BottomRightBottom>
        </BottomRightContainer>
      </BottomInnerContainer>
    </MovieBottomContainer>
  );
};

// 여기부터 기본정보 등...

const MovieBottomContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(248, 248, 248);
`;
const BottomInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2% 20%;
`;
// --- left
const BottomLeftContainer = styled.div`
  width: calc(65% - 15px);
  height: 100%;
  margin: 0 15px;
  padding: 0 14px 0 14px;
  background: rgb(255, 255, 255);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-right: 1px solid rgb(227, 227, 227);
  border-left: 1px solid rgb(227, 227, 227);
  border-top: 1px solid rgb(227, 227, 227);
  overflow: hidden;
  float: left;

  @media screen and (max-width: 719px) {
    float: left;
    width: 80%;
    margin: auto;
  }
`;
const BasicInfoSection = styled.section`
  width: 100%;
  height: 228px;
  overflow: hidden;
  border-bottom: 1px solid rgb(227, 227, 227);

  /* white-space: nowrap; */
`;
const BasicTitleBox = styled.div`
  margin: 15px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InfoTitleLeft = styled.div`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 28px;
`;
const InfoTitleRightA = styled.a`
  font-size: 16px;
  color: #ff2f6e;
  cursor: pointer;
`;
const InfoTitleRight = styled.div`
  font-size: 17px;
  color: #282828;
`;

const BasicInfoSpecificBox = styled.div`
  width: 100%;
  height: 172px;
  margin: 27px 0;
  padding: 0 9px;
  color: #4a4a4a;
  font-size: 15px;
  letter-spacing: -0.2px;
  line-height: 24px;
`;
const BasicInfoSpecificTop = styled.div`
  margin-bottom: 10px;
`;
const BasicInfoSpecificBottom = styled.div`
  text-overflow: ellipsis;
`;

const ActorSection = styled.section`
  width: 100%;
  height: 292px;
`;
const ActorBox = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  border-bottom: 1px solid rgb(227, 227, 227);
`;

const GraphSection = styled.section`
  width: 100%;
  height: 247px;
`;
const GraphBox = styled.div`
  width: 100%;
  height: 190px;
  border-bottom: 1px solid rgb(227, 227, 227);
`;

const CommentSection = styled.section`
  width: 100%;
  height: 385px;
`;

// --- right
const BottomRightContainer = styled.div`
  width: calc(35% - 15px);
  height: 50%;
  float: right;
  border-radius: 6px;
  @media screen and (max-width: 719px) {
    float: left;
    width: 80%;
    margin: auto;
  }
`;
const BottomRightTop = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 13px;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(227, 227, 227);
`;
const AdA = styled.a`
  text-decoration: none;
  color: inherit;
  /* a(링크) 기본 색상 제거 */
`;
const AdImgBox = styled.div`
  width: 100%;
  height: 70%;
`;
const AdImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const SpecificContainer = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
`;
const AdSpecificBox = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 0;
`;
const AdSpecificTitle = styled.p`
  font-size: 15px;
  margin: 0 0 5px 0;
`;
const AdSpecificTime = styled.p`
  font-size: 13px;
  margin: 0 0 5px 0;
`;
const AdSpecificMark = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const SpecificButtonBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const SpecificButton = styled.button`
  background: #ff2f6e;
  font-size: 13px;
  color: #ffffff;
  width: 100%;
  height: 30%;
  border-radius: 2px;
`;
const BottomRightBottom = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(227, 227, 227);
`;

export default MovieBottom;
