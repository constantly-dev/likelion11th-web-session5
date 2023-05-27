import styled from 'styled-components';
import Modal from '../components/Modal';
import Movies from '../components/Movies';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { recAtom } from '../recoil/recommend';
import axios from 'axios';
// import { recAtom } from '../recoil/recommend';

const Main = (props) => {
  //const {modalOpen} = props

  const closeModal = () => {
    props.loginModal(false);
  };

  const [recommendData, setRecommendData] = useRecoilState(recAtom);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?language=ko-KO&page=1',
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((Response) => {
        setRecommendData(Response.data.results);
        // console.log('추천작 데이터', recommendData); set은 비동기 처리, 그래서 데이터 안뜸
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AllContainer>
      <Modal open={props.modalOpen} close={closeModal}></Modal>
      <Movies></Movies>
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

// background-color:transparent;을 global로 스타일 제거해서 사용 : input 배경 투명화

export default Main;
