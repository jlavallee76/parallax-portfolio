import "./projects.scss"
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from(".transition4", {
            scrollTrigger: {
                trigger: '.transition4',
                start: "top center"
            },
            x: -50,
            opacity: 0,
            duration: 1.2,
            stagger: .6
        })
    }, [])
    return (
        <section id="projects" className="projects">
            <div className="project-container transition4">
                <div className="project-left">
                    <div className="inner">
                        <p className="subtitle">Web Development</p>
                        <p className="featured-title">Portfolio</p>
                        <p className="featured-desc">This is the second iteration of my current portfolio developed over the last week after recognizing that I left too many website/portfolio fields blank while applying for jobs. 
                                                     I've enjoyed getting back into the frontend web development process and have begun the process of learning React. Additionally, I discovered the Greensock animation library, which 
                                                     I've used for some simple animations on this page, and learned about Three.js and am currently taking Bruno Simon's course (Three.js Journey).
                                                     I'm looking forward to implementing some creative ideas using the techniques I've learned so far techniques here in the coming weeks and months!</p>
                        
                        <h3 className="skills-title">Created Using</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/vscode.svg" alt="vs code icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/html.svg" alt="html icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/sass.svg" alt="sass icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/react.svg" alt="react icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/greensock.svg" alt="gsap icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/netlify.svg" alt="netlify icon" /></li>
                        </ul>
                    </div>
                </div>
                <a target="_blank" rel="noreferrer" href="https://github.com/jlavallee76/Water-Assessment-Project"><img src="../assets/projects/portfolio.jpg" alt="portfolio" /></a>
            </div>

            {/* <div className="project-container transition4">
                <div className="project-left">
                    <div className="inner">
                        <p className="subtitle">Data Vizualization</p>
                        <p className="featured-title">Fantasy Football Data Analysis</p>
                        <p className="featured-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                <a href="https://github.com/jlavallee76/Water-Assessment-Project"><img src="../assets/projects/appplaceholder.jpg" alt="placeholder" /></a>
            </div> */}

            <div className="project-container transition4">
                <div className="project-left">
                    <div className="inner">
                        <p className="subtitle">E-Commerce</p>
                        <p className="featured-title">Crockodile</p>
                        <p className="featured-desc">Crockodile is an e-commerce website created with the concept of offering a different spin on a meal delivery service. The idea was to create a meal delivery option that delivers crock-pot meals in vacuum-sealed bags ready to be emptied into your slow cooker. Not only does it eliminate a vast portion of clean-up that comes with other self-cook services, but it's also able to be cooked by a wider variety of demographic. </p>
                    </div>
                    <h3 className="skills-title">Created Using</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/vscode.svg" alt="vs code icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/ruby.svg" alt="ruby icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/rails.svg" alt="rails icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/stripe-2.svg" alt="stripe icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/tailwind-css-2.svg" alt="tailwind icon" /></li>
                        </ul>
                </div>
                <a target="_blank" rel="noreferrer" href="https://github.com/jlavallee76/Water-Assessment-Project"><img src="../assets/projects/crockodile.jpg" alt="crockodile" /></a>
            </div>

            <div className="project-container transition4">
                <div className="project-left">
                    <div className="inner">
                        <p className="subtitle">Mobile Aplication</p>
                        <p className="featured-title">Water Assessment Project</p>
                        <p className="featured-desc">The Water Assessment Project is a mobile application for Android created for the Western Canada Aqua Hacking Challenge. I participated as a group of three to develop the application, which uses satellite imagery to analyze the surface of large bodies of water for algae bloom (or other changes) over a given period. The application's user interface was created using fragments, utilizes MySQL to store images locally and implements a few different libraries, including liquid swipe, why not image carousel and one signal.</p>
                        
                        <h3 className="skills-title">Created Using</h3>
                        <ul className="icon-list">
                            <li className="skill-icon"><img src="../assets/icons/android.png" alt="android studio icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/java.png" alt="java icon" /></li>
                            <li className="skill-icon"><img src="../assets/icons/mysql.png" alt="mysql icon" /></li>
                        </ul>
                    </div>
                </div>
                <a target="_blank" rel="noreferrer" href="https://github.com/jlavallee76/Water-Assessment-Project"><img src="../assets/projects/wap.png" alt="placeholder" /></a>
            </div>
        </section>
    )
}
