import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get('https://api.themoviedb.org/3/movie/popular?language=ko-KO&page=1', {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((Response) => {
        console.log(Response.data.results);
        setMovieData(Response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BoxOffice>
      <BxHeader>
        <BxHeaderTitle>박스오피스 순위</BxHeaderTitle>
      </BxHeader>
      <BxContent className="bx-content">
        {movieData.map((data, idx) => (
          <BxItemLi key={idx}>
            <Link to={`/${data.id}`} style={{ textDecoration: 'none' }}>
              {/* Link 컴포넌트는 a태그의 개념으로 생각하면 쉽다. but 새로고침은 안될 뿐! */}
              <BXItemImg
                src={' https://image.tmdb.org/t/p/w500' + data.poster_path}
              ></BXItemImg>
              <BxItemBottom>
                <ItemTitle>{data.title}</ItemTitle>
                <ItemYear>
                  {data.release_date}ㆍ{data.original_language}
                </ItemYear>
                <ItemAverage>평균★{data.vote_average}</ItemAverage>
                <ItemPercent>
                  {/* 예매율 {data.percent}ㆍ누적 관객 {data.audience}만명 */}
                  {/* 데이터 없어서 제외 */}
                </ItemPercent>
              </BxItemBottom>
            </Link>
          </BxItemLi>
        ))}
      </BxContent>
    </BoxOffice>
  );
};

const BoxOffice = styled.div`
  width: 80%;
  height: 500px;
  margin: auto;
  margin-bottom: 42px;
  margin-top: 42px;
`;
const BxHeader = styled.div`
  height: 56px;
  padding: 12px 0 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BxHeaderTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;
const BxContent = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
    /* &는 ul을 가리킨다. */
  }
`;

const BxItemLi = styled.li`
  flex: 0 0 20%;
  /* width: 20%; */
  /* 왜 width는 적용이 안되는가? 부모 ul에 flex를 썼기 때문에, 초기 크기를 지정해주는 flex-basis가 따로 존재한다. 
  따라서 flex를 쓰면 width보다 basis가 우선 순위로 적용되니까 flex는 basis속성으로 초기 크기를 지정해주자.
  BUT, flex-basis를 쓰면 grow와 shrink는 기본 1로 설정. 그래서 grow와 shrink를 같이 써줘야 한다. 아니면 flex 단축속성을 사용.
  */
  text-decoration: none;
  height: calc(100% - 56px);
  padding: 0 8px;
`;

const BXItemImg = styled.img`
  width: 90%;
  height: 70%;
  border-radius: 5px;
  object-fit: cover;
  margin: 8px 0;
`;
const BxItemBottom = styled.div``;
const ItemTitle = styled.div`
  width: 234px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #292a32;
  font-size: 16px;
  font-weight: 600;
  /* white-space를 nowrap으로 해서 밑줄로 내려가는 것 방지, overflow를 hidden로 넘어간 글자 숨기기
  그리고 text-overflow: ellipsis로 넘어간 글자를 ...으로 처리
  */
`;
const ItemYear = styled.div`
  color: #292a32;
  font-size: 14px;
  font-weight: 500;
`;
const ItemAverage = styled.span`
  color: #555765;
  font-size: 14px;
  font-weight: 600;
`;
const ItemPercent = styled.div`
  color: #74747b;
  font-size: 13px;
`;
export default Movies;
