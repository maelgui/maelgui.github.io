import React from "react";
import './navbar.scss';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            active: "",
            collapsed: true
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
            <nav className={`navbar navbar-expand-lg fixed-top ${this.state.hidden ? "hidden" : ""} dark navbar-dark`}>
                <div className="container">
                    <a className="navbar-brand" href="#home">Mael Guillossou</a>
                    <button 
                        onClick={ () => { this.setState({collapsed: !this.state.collapsed}) }} 
                        onBlur={ () => { this.setState({collapsed: true}) }} 
                        id="menuCollapseButton" 
                        className={`navbar-toggler ${this.state.collapsed ? "collapsed" : ""}`} 
                        type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className={`${this.state.collapsed ? "": "show"} collapse navbar-collapse`} id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {this.links.map((object, index) => 
                                <li className={`nav-item ${this.state.active === object.ref ? 'active' : ""}`} key={index}>
                                    <a className="nav-link" href={object.href ? object.href : "#" + object.ref}>{object.label} <span className="sr-only">(current)</span></a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    collapseNavbar = () => {
        this.setState({collapsed: !this.state.collapsed});
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