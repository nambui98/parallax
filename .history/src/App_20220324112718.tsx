import { useState } from 'react'
import bg_1 from './assets/images/bg_1.svg'
import bg_2 from './assets/images/bg_2.svg'
import bg_3 from './assets/images/bg_3.svg'
import bg_4 from './assets/images/bg_4.svg'
import './App.scss'

function App() {

  return (
    <div className="App">
      <div className="main">
        <div className="banner">
          <img className='bg_1' src={bg_1} alt="" />
          <img className='bg_2' src={bg_2} alt="" />
          <img className='bg_3' src={bg_3} alt="" />
          <img className='bg_4' src={bg_4} alt="" />
          <h3>The sunset is the best time and of one day let's enjoy it together !!</h3>
          <h1>Sunset</h1>
        </div>
      </div>
    </div>
  )
}

export default App
