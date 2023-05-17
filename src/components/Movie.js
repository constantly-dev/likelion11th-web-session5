import styled from 'styled-components';
import MovieTop from './MovieTop';
import MovieBottom from './MovieBottom';

const Movie = () => {
  return (
    <>
      <MovieAllContainer>
        <MovieTop></MovieTop>
        <MovieBottom></MovieBottom>
      </MovieAllContainer>
    </>
  );
};

const MovieAllContainer = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Movie;
