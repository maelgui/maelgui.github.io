import React from "react";
import styles from './section.module.scss';

class Section extends React.Component {
    render() {
        return (
            <section id={this.props.id} class={ `${styles.section} ${this.props.class} ${this.props.dark ? "dark" : ""}` }>
                {this.props.children}
            </section>
        );
    }
}

export default Section