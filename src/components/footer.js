import React from "react"
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="container row">
                <div className="col-md-6 mb-2">
                    Copyright 2019 Mael Guillossou
                </div>
                <div className="col-md-6 mb-2">
                    <a href="https://github.com/maelgui"><FontAwesomeIcon icon={faGithub} /> Github</a>
                    <a href="https://www.linkedin.com/in/mael-guillossou/"><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
