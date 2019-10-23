import React from "react"
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header class={`${styles.home} dark`}>
            <div class="content">
                <div class={styles.head}>
                    <h1>Hello, I'm <span class={styles.name}>Mael Guillossou</span>.</h1>
                    <h2>I'm a third year engineer student at <a href="https://ec-nantes.fr">Centrale Nantes</a></h2>
                </div>
                <div class={styles.social}>
                    <a href="#" class="btn btn-icon"><span class="fab fa-github"></span></a>
                    <a href="#" class="btn btn-icon"><span class="fab fa-linkedin-in"></span></a>
                </div>
                <div class={styles.action}>
                    <a href="#portfolio" class="btn">Check My Work</a>
                </div>
            </div>
            <div class={styles.background}>
                <div id={styles.stars}></div>
                <div id={styles.stars2}></div>
                <div id={styles.stars3}></div>        
            </div>
            <a href="#about" class={styles.next}><i class="fa fa-chevron-down"></i></a>
        </header>
    );
}

export default Header
