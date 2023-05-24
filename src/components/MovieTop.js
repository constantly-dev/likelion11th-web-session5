// import styled from 'styled-components';
// import GiveStar from './GiveStar';
// import { useParams } from 'react-router-dom';
// import { DATA } from '../assets/Data';

// const MovieTop = () => {
//   const params = useParams();
//   const data = DATA.filter((des) => des.rank === Number(params.movie))[0];
//   // const data = DATA[params.movie - 1];
//   // return <div>{data.description}</div>;
//   // movie값이 숫자라는 보장이 없기 때문에 이 방식은 쓰지 말고 filter로
//   const { img, rank, audience, title, year, genre, country, average } = data;
//   return (
//     <MovieTopContainer>
//       <PosterContainer>
//         <HeaderPoster></HeaderPoster>
//         <PosterAddContainer>
//           <PosterAddUl>
//             <MiniPosterBox>
//               <MiniPoster src={img}></MiniPoster>
//             </MiniPosterBox>
//             <PosterAddBox>
//               <PosterAdd>
//                 예매 순위 <strong>{rank}위(19%)</strong> 개봉{' '}
//                 <strong>14일째</strong> 누적 관객 <strong>{audience}명</strong>
//               </PosterAdd>
//             </PosterAddBox>
//           </PosterAddUl>
//         </PosterAddContainer>
//       </PosterContainer>
//       <MovieTitleWrapper>
//         <MovieTitleLeft></MovieTitleLeft>
//         <MovieTitleRight>
//           <MovieTitleTitle>{title}</MovieTitleTitle>
//           <MovieTitleYear>
//             {year}・{genre}・{country}
//           </MovieTitleYear>
//           <MovieTitleStar>
//             평균 ★{average} {''}@명
//           </MovieTitleStar>
//           <MovieTitleStarPlus>
//             <GiveStar></GiveStar>
//           </MovieTitleStarPlus>
//         </MovieTitleRight>
//       </MovieTitleWrapper>
//     </MovieTopContainer>
//   );
// };
// const MovieTopContainer = styled.section`
//   width: 100%;
//   height: 586px;
//   border-bottom: 1px solid rgb(227, 227, 227);
// `;
// const PosterContainer = styled.div`
//   width: 100%;
//   height: 338px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
// `;
// const HeaderPoster = styled.div`
//   width: 100%;
//   height: 400px;
//   background-image: url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg');
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: -1;
// `;

// const PosterAddContainer = styled.div`
//   width: 100%;
//   height: 10%;
// `;
// const PosterAddUl = styled.div`
//   list-style: none;
//   width: 60%;
//   height: 100%;
//   margin: 0px auto;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   line-height: middle;
// `;
// const MiniPosterBox = styled.div`
//   width: 166px;
//   height: 238px;
// `;
// const MiniPoster = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
//   border: 1px solid rgb(237, 237, 237);
// `;
// const PosterAddBox = styled.div`
//   display: inline-block;
//   display: flex;
//   align-items: center;
//   padding: 0px 0px 10px 25px;
//   margin: -4px;
// `;
// const PosterAdd = styled.div`
//   font-size: 13px;
//   color: #ffffff80;
// `;

// const MovieTitleWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   padding: 20px 276px 22px 276px;
// `;
// const MovieTitleLeft = styled.div`
//   width: 22%;
// `;
// const MovieTitleRight = styled.div`
//   width: 78%;
// `;
// const MovieTitleTitle = styled.div`
//   font-size: 33px;
//   font-weight: 700;
//   line-height: 33px;
//   text-overflow: ellipsis;
//   letter-spacing: -2.7px;
// `;
// const MovieTitleYear = styled.div`
//   font-size: 17px;
//   color: #00000080;
//   margin-top: 4px;
// `;
// const MovieTitleStar = styled.div`
//   font-size: 17px;
//   color: #282828;
//   margin-top: 14px;
//   padding: 8px 0;
//   border-top: 1px solid rgb(237, 237, 237);
//   border-bottom: 1px solid rgb(237, 237, 237);
// `;
// const MovieTitleStarPlus = styled.div`
//   width: 100%;
//   height: 50%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 10px 0;
// `;
// // 여기까지 상위 포스터 및 정보
// export default MovieTop;
