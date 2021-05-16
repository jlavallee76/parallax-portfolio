import "./index.scss"
import { useRef, useEffect } from 'react'
import { gsap, Back, Power3, Power4 } from 'gsap'
import { init } from 'ityped'

export default function Index() {
    let timeline = gsap.timeline();
    const textRef = useRef();
    useEffect(() => {

        init(textRef.current, {
            showCursor: true,
            backDelay: 2000,
            typeSpeed: 75,
            backSpeed:50,
            strings: ["developer.", "photographer.", "traveller.", "student.", "sports fan.", "fantasy football legend.", "dog dad.", "gamer.", "skateboarder."]
        })

        timeline.from('.content', {
            opacity: 0,
            y: '-30%',
            duration: 2,
            ease: Power4.easeOut
        })

        timeline.from('.stagger1', {
            opactiy: 0,
            y: -50,
            stagger: .3,
            ease: Power3.easeOut,
            duration: 2

        }, "-=2")

        timeline.from('.hero-design', {
            opacity: 0,
            y: 50,
            ease: Power4.easeOut,
            duration: 2
        }, "-=2")

        gsap.from('.square-animation', {
            stagger: .4,
            scale: 0.1,
            duration: .8,
            ease: Back.easeOut.config(1.2)
        })
    }, [])

    return (
        <div id="index" className="index">
            <div className="navigation-container">
                <header>
                    <a href="#index" className="logo">
                        <h1>Josh Lavallee.</h1>
                    </a>
                    <nav>
                        <ul>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="social-header">
                    <ul>
                        <li ><a href="https://www.instagram.com/yoshigrams"><img className="social-logos" src="./assets/icons/instagram-1.svg" alt="instagram" /></a></li>
                        <li ><a href="https://www.linkedin.com/in/josh-lavallee/"><img className="social-logos" src="./assets/icons/linkedin-icon-plain.svg" alt="linkedin" /></a></li>
                        <li ><a href="https://github.com/jlavallee76"><img className="social-logos" src="./assets/icons/github-2.svg" alt="github" /></a></li>
                    </ul>
                </div>
            </div>

            <div className="hero">
                <div className="content">
                    <h2 className="stagger1">Welcome, I'm</h2>
                    <h1 className="stagger1">Josh Lavallee.</h1>
                    <h3>I am a <span ref={textRef}></span></h3>

                    <svg className="scroll stagger1" width="151" height="253" viewBox="0 0 151 253">
                        <g id="scroll" transform="translate(-695 -1843)">
                            <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(695 1843)" fill="none" stroke="#fff" strokeWidth="14">
                                <rect width="151" height="253" rx="75.5" stroke="none"/>
                                <rect x="7" y="7" width="137" height="239" rx="68.5" fill="none"/>
                            </g>
                                <circle className="circle" d="Ellipse_1" data-name="Ellipse 1" transform="translate(727 1873)" fill="#fff" stroke="#707070" cx="43.5" cy="43.5" r="43.5"/>
                        </g>
                    </svg>
                </div>
                <svg className="hero-design" width="1529" height="1557" viewBox="0 0 1529 1557">
                    <g id="hero-design" data-name="hero design" transform="translate(-3198 -757)">
                        <rect className="square-animation" id="Rectangle_4" data-name="Rectangle 4" width="388" height="388" rx="53" transform="translate(3951 757)" fill="#d6224f"/>
                        <rect className="square-animation" id="Rectangle_5" data-name="Rectangle 5" width="388" height="388" rx="53" transform="translate(3586 1145)" fill="#fff"/>
                        <rect className="square-animation" id="Rectangle_6" data-name="Rectangle 6" width="388" height="388" rx="53" transform="translate(4339 1145)" fill="#01a7a7"/>
                        <rect className="square-animation" id="Rectangle_7" data-name="Rectangle 7" width="388" height="388" rx="53" transform="translate(3198 1533)" fill="#2d2548"/>
                        <rect className="square-animation" id="Rectangle_8" data-name="Rectangle 8" width="388" height="388" rx="53" transform="translate(3951 1533)" fill="#d6224f"/>
                        <rect className="square-animation" id="Rectangle_9" data-name="Rectangle 9" width="388" height="388" rx="53" transform="translate(3586 1926)" fill="#fff"/>
                        <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(3977 1171)" fill="#2d2548" stroke="#707070" strokeWidth="1">
                            <circle cx="168" cy="168" r="168" stroke="none"/>
                        </g>
                        <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(3612 1559)" fill="#01a7a7" stroke="#707070" strokeWidth="1">
                            <circle cx="168" cy="168" r="168" stroke="none"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}
