import { useEffect, useRef, useState } from 'react'
import bg_1 from './assets/images/bg_1.svg'
import bg_2 from './assets/images/bg_2.svg'
import bg_3 from './assets/images/bg_3.svg'
import bg_4 from './assets/images/bg_4.svg'
import bg_5 from './assets/images/bg_5.svg'
import bg_6 from './assets/images/bg_6.svg'
import bg_7 from './assets/images/bg_7.svg'
import bg_8 from './assets/images/bg_8.svg'
import bg_9 from './assets/images/bg_9.svg'
import bg_10 from './assets/images/bg_10.svg'
import bg_11 from './assets/images/bg_11.svg'
import './App.scss'

function App() {
  const bg_1Ref = useRef<any>()
  const bg_2Ref = useRef<any>()
  const bg_3Ref = useRef<any>()
  const bg_4Ref = useRef<any>()
  const bg_5Ref = useRef<any>()
  const bg_6Ref = useRef<any>()
  const bg_7Ref = useRef<any>()
  const bg_8Ref = useRef<any>()
  const bg_9Ref = useRef<any>()
  const bg_10Ref = useRef<any>()
  const bg_11Ref = useRef<any>()
  const h3Ref = useRef<any>()
  const h1Ref = useRef<any>()
  const bannerRef = useRef<any>()
  const btnRef = useRef<any>()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      // h3Ref.current.style =
      // bg_1Ref.current.style.left = `calc(${value}px + 40rem)`;
      bg_9Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_10Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_8Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_7Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_6Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_5Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_4Ref.current.style.transform = `translateX(-50%) scale(${1 + value * 0.0005})`
      bg_3Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_2Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_1Ref.current.style.transform = `scale(${1 + value * 0.0005})`
      bg_11Ref.current.style.transform = `scale(${1 + value * 0.0004})`

      h3Ref.current.style.transform = `translateZ(${value * 0.8}px) scale(${1 + (value * 0.0009)})`
      h1Ref.current.style.transform = `translateY(${value * 0.2}px)`
      btnRef.current.style.transform = `translate(-50%, calc(-50% - ${value * 0.05}px))`
      console.log();

    })

    return () => {
      window.removeEventListener("scroll", () => {

      })
    }
  }, [])

  return (
    <div className="App">
      <div className="main">
        <div className="banner" ref={bannerRef}>
          <img className='bg_1' ref={bg_1Ref} src={bg_1} alt="" />
          <img className='bg_2' ref={bg_2Ref} src={bg_2} alt="" />
          <img className='bg_3' ref={bg_3Ref} src={bg_3} alt="" />
          <img className='bg_4' ref={bg_4Ref} src={bg_4} alt="" />
          <img className='bg_5' ref={bg_5Ref} src={bg_5} alt="" />
          <img className='bg_6' ref={bg_6Ref} src={bg_6} alt="" />
          <img className='bg_7' ref={bg_7Ref} src={bg_7} alt="" />
          <img className='bg_8' ref={bg_8Ref} src={bg_8} alt="" />
          <img className='bg_9' ref={bg_9Ref} src={bg_9} alt="" />
          <img className='bg_10' ref={bg_10Ref} src={bg_10} alt="" />
          <img className='bg_11' ref={bg_11Ref} src={bg_11} alt="" />

          <h3 ref={h3Ref}>The sunset is the best time and of one day let's enjoy it together !!</h3>
          <h1 ref={h1Ref}>Sunset</h1>
        </div>
        <a className="btn" ref={btnRef}>Let's start</a>
        <div className="content" id="content">

        </div>
      </div>
    </div>
  )
}

export default App
