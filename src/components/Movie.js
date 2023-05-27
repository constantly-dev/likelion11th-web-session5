import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import ad from '../assets/image/ad.png';
import GiveStar from './GiveStar';
import { useRecoilValue } from 'recoil';
import { recAtom } from '../recoil/recommend';
import { Link } from 'react-router-dom';

const Movie = () => {
  const params = useParams();
  // const data = DATA.filter((des) => des.rank === Number(params.movie))[0];
  // const data = DATA[params.movie - 1];
  // return <div>{data.description}</div>;
  // movie값이 숫자라는 보장이 없기 때문에 이 방식은 쓰지 말고 filter로

  const handleScroll = (e) => {
    if (!window.scrollY) return;
    // 현재 위치가 이미 최상단일 경우 return

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [detailData, setDetailData] = useState([]);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movie}?language=ko-KO`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((Response) => {
        setDetailData(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.movie]);
  const {
    title,
    release_date,
    overview,
    original_language,
    adult,
    runtime,
    poster_path,
    vote_average,
    vote_count,
  } = detailData;
  // 구조분해할당

  const recData = useRecoilValue(recAtom);
  console.log('추천 데이터임', recData);
  return (
    <>
      <MovieAllContainer>
        <MovieTopContainer>
          <PosterContainer>
            <HeaderPoster></HeaderPoster>
            <PosterAddContainer>
              <PosterAddUl>
                <MiniPosterBox>
                  {poster_path && (
                    <MiniPoster
                      src={'https://image.tmdb.org/t/p/w500' + poster_path}
                    ></MiniPoster>
                  )}
                </MiniPosterBox>
                <PosterAddBox>
                  <PosterAdd>
                    평점 <strong>{vote_average}점 (19%)</strong> 투표수{' '}
                    <strong>{vote_count}명 </strong> 누적 관객{' '}
                    <strong>*명</strong>
                  </PosterAdd>
                </PosterAddBox>
              </PosterAddUl>
            </PosterAddContainer>
          </PosterContainer>
          <MovieTitleWrapper>
            <MovieTitleLeft></MovieTitleLeft>
            <MovieTitleRight>
              <MovieTitleTitle>{title}</MovieTitleTitle>
              <MovieTitleYear>
                {release_date}・{original_language}
              </MovieTitleYear>
              <MovieTitleStar>
                평균 ★{vote_average} {''}@명
              </MovieTitleStar>
              <MovieTitleStarPlus>
                <GiveStar></GiveStar>
              </MovieTitleStarPlus>
            </MovieTitleRight>
          </MovieTitleWrapper>
        </MovieTopContainer>{' '}
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
                    <div>{title}</div>
                    <div>
                      {release_date}·{original_language}
                    </div>
                    <div>
                      {runtime}·{adult ? '성인' : '미성년자'}
                    </div>
                  </BasicInfoSpecificTop>
                  <BasicInfoSpecificBottom>{overview}</BasicInfoSpecificBottom>
                </BasicInfoSpecificBox>
              </BasicInfoSection>
              <ActorSection>
                <BasicTitleBox>
                  <InfoTitleLeft>출연/제작</InfoTitleLeft>
                </BasicTitleBox>
                <ActorBox></ActorBox>
              </ActorSection>

              <RecommendSection>
                <BasicTitleBox>
                  <InfoTitleLeft>추천작</InfoTitleLeft>
                  <InfoTitleRightA>더보기</InfoTitleRightA>
                </BasicTitleBox>
                <RecommendAllBox>
                  {recData.map((item) => (
                    <RecommendMovieBox key={item.id}>
                      <Link
                        to={`/${item.id}`}
                        style={{ textDecoration: 'none' }}
                        onClick={handleScroll}
                      >
                        <RecommendImg
                          src={
                            'https://image.tmdb.org/t/p/w500' + item.poster_path
                          }
                        ></RecommendImg>
                        <RecommendTitle>{item.title}</RecommendTitle>
                        <RecommendAverage>
                          평균 ★{item.vote_average}
                        </RecommendAverage>
                      </Link>
                    </RecommendMovieBox>
                  ))}
                </RecommendAllBox>
              </RecommendSection>
              {/*  */}
            </BottomLeftContainer>
            <BottomRightContainer>
              <BottomRightTop>
                <AdA
                  href="https://www.diaff.org/kor/default.asp"
                  target="_blank"
                >
                  <AdImgBox>
                    <AdImg src={ad}></AdImg>
                  </AdImgBox>
                </AdA>
                <AdA
                  href="https://www.diaff.org/kor/default.asp"
                  target="_blank"
                >
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
      </MovieAllContainer>
    </>
  );
};
// 추천작
const RecommendAllBox = styled.div`
  width: 100%;
  height: 150%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const RecommendMovieBox = styled.div`
  width: 25%;
  height: 40%;
  padding: 0 10px;
  margin-bottom: 20px;
`;
const RecommendImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 5px;
`;
const RecommendTitle = styled.div`
  width: 100%;
  height: 8%;
  font-size: 15px;
  color: #292a32;
  font-weight: 700;
  margin: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* text-overflow: ellipsis는 혼자는 적용 X !!
  overflow: hidden; 이랑 white-space: nowrap;을 같이 적용
  */
`;
const RecommendAverage = styled.div`
  font-size: 13px;
  color: #787878;
`;

// 시작
const MovieAllContainer = styled.div`
  width: 100%;
  height: 300vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MovieTopContainer = styled.section`
  width: 100%;
  height: 586px;
  border-bottom: 1px solid rgb(227, 227, 227);
`;
const PosterContainer = styled.div`
  width: 100%;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const HeaderPoster = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg');
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

const PosterAddContainer = styled.div`
  width: 100%;
  height: 10%;
`;
const PosterAddUl = styled.div`
  list-style: none;
  width: 60%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  line-height: middle;
`;
const MiniPosterBox = styled.div`
  width: 166px;
  height: 238px;
`;
const MiniPoster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid rgb(237, 237, 237);
`;
const PosterAddBox = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  padding: 0px 0px 10px 25px;
  margin: -4px;
`;
const PosterAdd = styled.div`
  font-size: 13px;
  color: #ffffff80;
`;

const MovieTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 276px 22px 276px;
`;
const MovieTitleLeft = styled.div`
  width: 22%;
`;
const MovieTitleRight = styled.div`
  width: 78%;
`;
const MovieTitleTitle = styled.div`
  font-size: 33px;
  font-weight: 700;
  line-height: 33px;
  text-overflow: ellipsis;
  letter-spacing: -2.7px;
`;
const MovieTitleYear = styled.div`
  font-size: 17px;
  color: #00000080;
  margin-top: 4px;
`;
const MovieTitleStar = styled.div`
  font-size: 17px;
  color: #282828;
  margin-top: 14px;
  padding: 8px 0;
  border-top: 1px solid rgb(237, 237, 237);
  border-bottom: 1px solid rgb(237, 237, 237);
`;
const MovieTitleStarPlus = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;
// Bottom 시작
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

const RecommendSection = styled.section`
  width: 100%;
  height: 385px;
`;

// --- right
const BottomRightContainer = styled.div`
  width: calc(35% - 15px);
  height: 30%;
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
export default Movie;
