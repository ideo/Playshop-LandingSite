import React, { Component } from 'react';
import logo from './assets/D4Play_logo.jpg';
import './Header.css'
import './Mobile.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {menuLevel: 0};
    }
    onClickMenu(e){
        // console.log(e);
        let newElement = document.getElementsByClassName("App-container");
        document.getElementsByClassName("App-container").className = "App-container menuLevel-1";
        // document.getElementsByClassName("App-container").classList.add('menuLevel-1');
        newElement.className = "App-container menuLevel-1"
        this.setState({menuLevel: 1});
        console.log(document.getElementsByClassName("App-container"));
    }

      render() {
        return (
            <header className="App-header">
            <div className="logoContainer">
                <img src={logo} />
            </div>
            <div className="menuContainer">
                <button className="mobileMenu" onClick={this.onClickMenu.bind(this)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </button>
                <ul>
                    <li>
                        <button className="dropdownParent">Our Apps <span>></span></button>
                        <div className="hoverMenu">
                            <div className="mobile mobileTitle">
                                    <button className="back-chevron">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                    </button>
                                    <p>Fisher-Price</p>
                                </div>
                            <button>Spin and Spot Safari</button>
                            <button>Monster Moves</button>
                            <button>Balloonimals</button>
                            <button>Balloonimals Babies</button>
                            <button>Magic Creature Creator</button>
                        </div>
                    </li>
                        <span> / </span>
                    <li>
                        <button className="dropdownParent">Sesame Street <span>></span></button>
                        <div className="hoverMenu">
                        <div className="mobile mobileTitle">
                            <button className="back-chevron">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                            </button>
                            <p>Sesame Street</p>
                        </div>
                        <button>Elmo Calls</button>
                        <button>Cookie Calls</button>
                        <button>Elmo's Monster Maker</button>
                        <button>Sesame Street Video Maker</button>
                        </div>
                    </li>
                        <span> / </span>
                    <li>
                        <button className="dropdownParent">Fisher-Price <span>></span></button>
                        <div className="hoverMenu">
                            <div className="mobile mobileTitle">
                                <button className="back-chevron">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                </button>
                                <p>Fisher-Price</p>
                            </div>
                            <button>See 'n Say</button>
                        </div>
                    </li>
                        <span> / </span>
                    <li>
                        <button className="dropdownParent">Support</button>
                    </li>
                </ul>
            </div>
            </header>
            )
        }
}

export default Header