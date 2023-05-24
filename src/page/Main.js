import styled from 'styled-components';
import Modal from '../components/Modal';
import Movies from '../components/Movies';

const Main = (props) => {
  //const {modalOpen} = props

  const closeModal = () => {
    props.loginModal(false);
  };

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
