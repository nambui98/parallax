import { useState } from 'react'
import bg_1 from './assets/images/bg_1.svg'
import './App.scss'

function App() {

  return (
    <div className="App">
      <div className="main">
        <div className="banner">
          <img src={bg_1} alt="" />
          <h3>The sunset is the best time and of one day let's enjoy it together !!</h3>
          <h1>Sunset</h1>
        </div>
      </div>
    </div>
  )
}

export default App
