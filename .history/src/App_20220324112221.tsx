import { useState } from 'react'
import bg_1 from './assets/images/bg_1.svg'
import bg_2 from './assets/images/bg_2.svg'
import bg_3 from './assets/images/bg_3.svg'
import './App.scss'

function App() {

  return (
    <div className="App">
      <div className="main">
        <div className="banner">
          <img src={bg_1} alt="" />
          <img src={bg_2} alt="" />
          <img src={bg_3} alt="" />
          <h3>The sunset is the best time and of one day let's enjoy it together !!</h3>
          <h1>Sunset</h1>
        </div>
      </div>
    </div>
  )
}

export default App
