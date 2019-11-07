import React from "react"
import styles from "./header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 0,
            offsetButtons: 0
        };

        this.enableScrollEvent = true;
    }

    render() {
        return (
            <header className={`${styles.home} dark`} id="home">
                <div className={`${styles.content} ${this.state.hide ? styles.hide : ""}`}>
                    <div id="homeTitle" className={styles.head}>
                        <h1>Hello, I'm <span className={styles.name}>Mael Guillossou</span>.</h1>
                        <h2>I'm a third year engineer student at <a href="https://ec-nantes.fr">Centrale Nantes</a></h2>
                    </div>
                    <div id="homeButtons">
                        <div className={styles.social}>
                            <a href="https://github.com/maelgui" className="btn btn-icon"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/mael-guillossou/" className="btn btn-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                        <div className={styles.action}>
                            <a href="#portfolio" onClick={this.checkProjects} className="btn">Check My Work</a>
                        </div>
                    </div>
                </div>
                <div className={styles.background}>
                    <div id={styles.stars}></div>
                    <div id={styles.stars2}></div>
                    <div id={styles.stars3}></div>        
                </div>
                <a href="#about" onClick={this.next} className={`${styles.next} ${this.state.hide ? styles.hide : ""}`}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </a>
            </header>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    next = (e) => {
        e.preventDefault();
        this.setState({hide: true});
        setTimeout(function() {
            document.getElementById("about").scrollIntoView();
        }, 500);
    }

    checkProjects = (e) => {
        e.preventDefault();
        this.enableScrollEvent = false;
        document.getElementById("portfolio").scrollIntoView();
        setTimeout(() => {
            this.enableScrollEvent = true;
        }, 500);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        this.setState({hide: window.scrollY > 0});

        if (this.enableScrollEvent) {
            if (window.scrollY > 0 && window.scrollY < document.querySelector("#about").offsetTop) {
                document.getElementById("about").scrollIntoView();
            }
        }
    }
}

export default Header
