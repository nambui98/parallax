import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, useLocation, useNavigate } from 'react-router-dom';

import './App.scss'
import Banner from './pages/Banner';
import Main from './pages/Main';

function App() {

  // console.log(location);



  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Banner />
          <Main />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
