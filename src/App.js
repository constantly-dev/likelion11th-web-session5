import './App.css';
import Main from './page/Main.js';
import Movie from './components/Movie';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from '../src/components/Footer';
import { useState } from 'react';

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const openModal = () => {
    setLoginModalOpen(true);
  };
  return (
    <>
      <Header open={openModal}></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Main modalOpen={loginModalOpen} loginModal={setLoginModalOpen} />
          }
        ></Route>
        ;<Route path="/:movie" element={<Movie />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
