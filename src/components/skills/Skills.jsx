import "./skills.scss"

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from(".transition3", {
            scrollTrigger: {
                trigger: '.transition3',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .4
        })
    }, [])
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <ul>
                    <li className="transition3">
                        <div className="icon-container one">
                            <img src="../assets/theme/code.svg" alt="code icon" />
                        </div>
                        <p className="skill-title">Web Development</p>
                        <p className="featured-desc skill-desc">I genuinely enjoy the front-end development process and pushing creative boundaries. I am currently expanding my understanding of native Javascript practices and learning new frameworks and libraries such as React, Greensock, and Three.js.</p>
                    
                        <h3 className="sub-title">Things I've Used</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/html.svg" alt="html icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/css.svg" alt="css icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/javascript.svg" alt="js icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/php.svg" alt="js icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/sass.svg" alt="js icon" /></li>
                        </ul>

                        <h3 className="sub-title">What I'm Learning</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/react.svg" alt="react icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/greensock.svg" alt="gsap icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/three-js-logo.png" alt="js icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/d3.png" alt="d3 icon" /></li>
                        </ul>
                    </li>
                    
                    <li className="transition3">
                        <div className="icon-container two">
                            <img src="../assets/theme/photography.svg" alt="code icon" />
                        </div>
                        <p className="skill-title">Application Development</p>
                        <p className="featured-desc skill-desc">During my time at Red River College, I developed all types of applications, including business applications using C#, a mobile app with Java and an e-commerce website using Ruby. Currently, I am learning about data visualizations using Python.</p>
                    
                        <h3 className="sub-title">Things I've Used</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/csharp.svg" alt="c# icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/dotnet.svg" alt=".neticon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/java.svg" alt="java icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/ruby.svg" alt="js icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/android.png" alt="js icon" /></li>
                        </ul>

                        <h3 className="sub-title">What I'm Learning</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/python.svg" alt="python icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/python-pandas.png" alt="pandas icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/jupyter.png" alt="jupyter icon" /></li>
                        </ul>
                    </li>
                    
                    <li className="transition3">
                        <div className="icon-container three">
                            <img src="../assets/theme/communication.svg" alt="code icon" />
                        </div>
                        <p className="skill-title">Development Tools</p>
                        <p className="featured-desc skill-desc">Over the last few years, I have had the opportunity to work with many different development tools. These include different code editors, design tools, source control, and communication services. I am always looking forward to learning new technologies.</p>
                    
                        <h3 className="sub-title">Things I've Used</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/vscode.svg" alt="vscode icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/android-studio.png" alt="android studio icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/git.svg" alt="git icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/github-icon.svg" alt="github icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/gitlab.svg" alt="gitlab icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/jira.svg" alt="jira icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/slack-new-logo.svg" alt="js icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/adobe-xd.svg" alt="jira icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/lightroom.svg" alt="js icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/npm.svg" alt="npm icon" /></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}
