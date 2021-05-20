import "./footer.scss"

import React from 'react'

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <ul>
                <li><a target="_blank" rel="noreferrer" href="mailto:joshlavallee11@gmail.com"><img className="social-logos" src="./assets/icons/email.svg" alt="email" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/yoshigrams"><img className="social-logos" src="./assets/icons/instagram-1-white.svg" alt="instagram" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/josh-lavallee/"><img className="social-logos" src="./assets/icons/linkedin-icon-plain-white.svg" alt="linkedin" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/jlavallee76"><img className="social-logos" src="./assets/icons/github-2-white.svg" alt="github" /></a></li>
            </ul>
        </div>
    )
}
