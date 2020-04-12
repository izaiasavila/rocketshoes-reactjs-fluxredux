import React from 'react';
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routers';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
