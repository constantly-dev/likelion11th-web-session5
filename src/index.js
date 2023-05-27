import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Main from './page/Main';
import GlobalStyle from './assets/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
  // 컴포넌트 사이에 아무것도 없다면 </>으로 한개만 작성해주기!
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
