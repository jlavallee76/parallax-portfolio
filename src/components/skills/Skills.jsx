import React from 'react'
import "./skills.scss"

export default function Skills() {
    return (
        <section className="skills">
            <div className="skills-container">
                <ul>
                    <li className="transition2">
                        <div className="icon-container one">
                            <img src="../assets/theme/code.svg" alt="code icon" />
                        </div>
                        <p className="skill-title">Web Development</p>
                        <p className="featured-desc skill-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </li>
                    <li className="transition2">
                        <div className="icon-container two">
                            <img src="../assets/theme/photography.svg" alt="code icon" />
                        </div>
                        <p className="skill-title">Photography</p>
                        <p className="featured-desc skill-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </li>
                    <li className="transition2">
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
