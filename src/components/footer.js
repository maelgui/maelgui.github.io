import React from "react"
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div>
                    Copyright 2019 Mael Guillossou
                </div>
                <div>
                    <a href="https://github.com/maelgui"><span className="fab fa-github"></span> Github</a>
                    <a href="https://www.linkedin.com/in/mael-guillossou/"><span className="fab fa-linkedin-in"></span> Linkedin</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
