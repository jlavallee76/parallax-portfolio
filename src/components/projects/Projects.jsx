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
                        <p className="featured-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                <a href="https://github.com/jlavallee76/Water-Assessment-Project"><img src="../assets/projects/appplaceholder.jpg" alt="placeholder" /></a>
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
                        <p className="featured-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                <a href="https://github.com/jlavallee76/Water-Assessment-Project"><img src="../assets/projects/appplaceholder.jpg" alt="placeholder" /></a>
            </div>

            <div className="project-container transition4">
                <div className="project-left">
                    <div className="inner">
                        <p className="subtitle">Mobile Aplication</p>
                        <a href="https://github.com/jlavallee76/Water-Assessment-Project" className="featured-title">Water Assessment Project</a>
                        <p className="featured-desc">The Water Assessment Project is a mobile application for Android created for the Western Canada Aqua Hacking Challenge. I participated as a group of three to develop the application, which uses satellite imagery to analyze the surface of large bodies of water for algae bloom (or other changes) over a given period. The application's user interface was created using fragments, utilizes MySQL to store images locally and implements a few different libraries, including liquid swipe, why not image carousel and one signal.</p>
                        <div className="featured-desc">Developed using Android Studio and written in Java.</div>
                    </div>
                </div>
                <a href="https://github.com/jlavallee76/Water-Assessment-Project"><img src="../assets/projects/appplaceholder.jpg" alt="placeholder" /></a>
            </div>
        </section>
    )
}
