import React from "react";
import './navbar.scss';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            active: ""
        };
        this.links = [
            {label: "About", ref: "about"},
            {label: "Studies", ref: "studies"},
            {label: "Portfolio", ref: "portfolio"},
            {label: "Contact", href: "#contact"},
        ];

    }

    render() {
        return (
            <nav class={`navbar navbar-expand-lg fixed-top ${this.state.hidden ? "hidden" : ""} dark`}>
                <div class="container">
                    <a class="navbar-brand" href="#home">Mael Guillossou</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            {this.links.map((object) => 
                                <li class={`nav-item ${this.state.active === object.ref ? 'active' : ""}`}>
                                    <a class="nav-link" href={object.href ? object.href : "#" + object.ref}>{object.label} <span class="sr-only">(current)</span></a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        var top = window.scrollY;
        var active = "";
        [...document.getElementsByTagName("section")].forEach(section => {
            if (
                section.offsetTop <= top + 300 &&
                section.offsetTop + section.offsetHeight > top + 300
            ) {
                active = section.id;
            }
        });
        this.setState({
            hidden: top < window.innerHeight,
            active: active
        });
    }
}

export default Navbar