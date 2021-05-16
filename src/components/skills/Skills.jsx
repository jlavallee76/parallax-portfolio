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
                        <p className="featured-desc skill-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </li>
                    <li className="transition3">
                        <div className="icon-container two">
                            <img src="../assets/theme/photography.svg" alt="code icon" />
                        </div>
                        <p className="skill-title">Photography</p>
                        <p className="featured-desc skill-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </li>
                    <li className="transition3">
                        <div className="icon-container three">
                            <img src="../assets/theme/communication.svg" alt="code icon" />
                        </div>
                        <p className="skill-title">Communication</p>
                        <p className="featured-desc skill-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
