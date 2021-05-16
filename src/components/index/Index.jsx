import React from 'react'
import "./index.scss"

export default function Index() {
    return (
        <div className="index">
            <div className="navigation-container">
                <header>
                    <a href="#index" className="logo">Josh Lavallee.</a>
                    <nav>
                        <ul>
                            <li><a href="#index">Index</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#education">Education</a></li>
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
                        <li ><a href="https://github.com/jlavallee76"><img className="social-logos" src="./assets/icons/github-icon.svg" alt="github" /></a></li>
                    </ul>
                </div>
            </div>

            <div className="hero">
                <div className="content">
                    <h1>Beautifully Crafted Web Experiences</h1>
                    <div className="meet">
                        <span>👇</span>
                        <p>Meet Josh Lavallee</p>
                    </div>
                    <svg className="scroll" width="151" height="253" viewBox="0 0 151 253">
                        <g id="scroll" transform="translate(-695 -1843)">
                            <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(695 1843)" fill="none" stroke="#fff" stroke-width="14">
                                <rect width="151" height="253" rx="75.5" stroke="none"/>
                                <rect x="7" y="7" width="137" height="239" rx="68.5" fill="none"/>
                            </g>
                            <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(727 1873)" fill="#fff" stroke="#707070" stroke-width="1">
                                <circle cx="43.5" cy="43.5" r="43.5" stroke="none"/>
                            </g>
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
                        <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(3977 1171)" fill="#2d2548" stroke="#707070" stroke-width="1">
                            <circle cx="168" cy="168" r="168" stroke="none"/>
                        </g>
                        <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(3612 1559)" fill="#01a7a7" stroke="#707070" stroke-width="1">
                            <circle cx="168" cy="168" r="168" stroke="none"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}
