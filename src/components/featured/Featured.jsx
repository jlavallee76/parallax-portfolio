import "./featured.scss"
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Featured() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from(".transition2", {
            scrollTrigger: {
                trigger: '.transition2',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .4
        })
    }, [])
    return (
        <section id="featured" className="featured">
            <div className="left">
                <div className="inner transition2">
                    <p className="subtitle">Featured Project</p>
                    <a href="https://github.com/jlavallee76/Water-Assessment-Project" className="featured-title">Water Assessment Project</a>
                    <p className="featured-desc">The Water Assessment Project is a mobile application for Android created for the Western Canada Aqua Hacking Challenge. I participated as a group of three to develop the application, which uses satellite imagery to analyze the surface of large bodies of water for algae bloom (or other changes) over a given period. The application's user interface was created using fragments, utilizes MySQL to store images locally and implements a few different libraries, including liquid swipe, why not image carousel and one signal.</p>
                </div>
            </div>
            <img className="right transition2" src="../assets/projects/appplaceholder.jpg" alt="placeholder" />
        </section>
    )
}
