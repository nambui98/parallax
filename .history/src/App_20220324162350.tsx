import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import content1 from './assets/images/content1.png'
import content2 from './assets/images/content2.svg'
import content3 from './assets/images/content3.svg'
import content4 from './assets/images/content4.svg'
import icon from './assets/images/icon.svg'
import './App.scss'

function App() {
  let location = useLocation();
  console.log(location);

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
  const h1p2Ref = useRef<any>()

  // console.log(location);

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
      btnRef.current.style.transform = `translate(-50%, calc(-50% - ${value * 0.2}px))`
      h1p2Ref.current.style.transform = `scale(${0.5 + (1 - value * 0.0004)})`
      h1p2Ref.current.style.letterSpacing = `${-value * 0.05 + 8}rem`
      h1p2Ref.current.style.wordSpacing = `${- value * 0.01 + 8}rem`

    })

    return () => {
      window.removeEventListener("scroll", () => {

      })
    }
  }, [])
  useEffect(() => {
    let url = window.location.href.split("/");
    // debugger
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);
  return (
    <div className="App">
      <div className="main">
        <div className="banner" id='home' ref={bannerRef}>
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
        <Link to="/content" className="btn" ref={btnRef}>Let's start</Link>
        <div className="content" id="content">
          <h1 ref={h1p2Ref}> <Link to="/home" className='content__link'><img src={icon} alt="" /></Link> Much more than a sunset</h1>
          <div className="content__list">
            <div className="content__card">
              <div className="content__bg">
              </div>
              <h3 className='content__txt'>Enjoy the scenery on the road</h3>
            </div>
            <div className="content__card">
              <div className="content__bg content__bg--2">
              </div>
              <h3 className='content__txt'>Enjoy the scenery on the road</h3>
            </div>
            <div className="content__card">
              <div className="content__bg content__bg--3">
              </div>
              <h3 className='content__txt'>Enjoy the scenery on the road</h3>
            </div>
            <div className="content__card">
              <div className="content__bg content__bg--4">
              </div>
              <h3 className='content__txt'>Enjoy the scenery on the road</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
