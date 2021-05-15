import React from 'react'
import "./featured.scss"

export default function Featured() {
    return (
        <section className="featured">
            <div className="left">
                <div className="inner transition2">
                    <p className="subtitle">Featured Project</p>
                    <a href="https://github.com/jlavallee76/Water-Assessment-Project" className="featured-title">Water Assessment Project</a>
                    <p className="featured-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
            </div>
            <img className="right transition 2" src="../assets/projects/appplaceholder.jpg" alt="placeholder" />
        </section>
    )
}
