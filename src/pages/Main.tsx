import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import icon from '../assets/images/icon.svg'

type Props = {}

const Main = (props: Props) => {
    const btnRef = useRef<any>()
    const h1p2Ref = useRef<any>()
    const card1Ref = useRef<any>()
    const card2Ref = useRef<any>()
    const card3Ref = useRef<any>()
    const card4Ref = useRef<any>()
    let location = useLocation();
    let url = window.location.href.split("/");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let value = window.scrollY;
            btnRef.current.style.transform = `translate(-50%, calc(-50% - ${value * 0.2}px))`
            h1p2Ref.current.style.transform = `scale(${0.5 + (1 - value * 0.0004)})`
            h1p2Ref.current.style.letterSpacing = `${-value * 0.001 + 2}rem`
            h1p2Ref.current.style.wordSpacing = `${- value * 0.01 + 8}rem`

            // card2Ref.current.style.opacity = 1;
            // card3Ref.current.style.wordSpacing = `${- value * 0.01 + 8}rem`
            // card4Ref.current.style.wordSpacing = `${- value * 0.01 + 8}rem`
            // h1p2Ref.current.style.fontWeight = `${- value * 0.001 + 2}rem`

        })

        return () => {
            window.removeEventListener("scroll", () => {

            })
        }
    }, [])
    useEffect(() => {

        // debugger
        let target = url[url.length - 1].toLowerCase();
        if (target === "content") {
            card1Ref.current.classList.remove(`outAnimation`)
            card1Ref.current.classList.add(`animation`)
            card1Ref.current.style.animationDelay = `.2s`

            card2Ref.current.classList.remove(`outAnimation`)
            card2Ref.current.classList.add(`animation`)
            card2Ref.current.style.animationDelay = `.5s`

            card3Ref.current.classList.remove(`outAnimation`)
            card3Ref.current.classList.add(`animation`)
            card3Ref.current.style.animationDelay = `.8s`

            card4Ref.current.classList.remove(`outAnimation`)
            card4Ref.current.classList.add(`animation`)
            card4Ref.current.style.animationDelay = `1.3s`
        } else {
            card1Ref.current.classList.remove(`animation`)
            card1Ref.current.classList.add(`outAnimation`)

            card2Ref.current.classList.remove(`animation`)
            card2Ref.current.classList.add(`outAnimation`)

            card3Ref.current.classList.remove(`animation`)
            card3Ref.current.classList.add(`outAnimation`)

            card4Ref.current.classList.remove(`animation`)
            card4Ref.current.classList.add(`outAnimation`)
        }
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [location]);
    return (
        <>
            <Link to="/content" className="btn" ref={btnRef}>Let's start</Link>
            <div className="content" id="content">
                <h1 ref={h1p2Ref}> <Link to="/home" className='content__link'><img src={icon} alt="" /></Link> Much more than a sunset</h1>
                <div className="content__list">
                    <div className="content__card" ref={card1Ref}>
                        <div className="content__bg">
                        </div>
                        <h3 className='content__txt'>Enjoy the scenery on the road</h3>
                    </div>
                    <div className="content__card" ref={card2Ref}>
                        <div className="content__bg content__bg--2">
                        </div>
                        <h3 className='content__txt'>Enjoy the scenery on the road</h3>
                    </div>
                    <div className="content__card " ref={card3Ref}>
                        <div className="content__bg content__bg--3">
                        </div>
                        <h3 className='content__txt'>Enjoy the scenery on the road</h3>
                    </div>
                    <div className="content__card" ref={card4Ref}>
                        <div className="content__bg content__bg--4">
                        </div>
                        <h3 className='content__txt'>Enjoy the scenery on the road</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;
