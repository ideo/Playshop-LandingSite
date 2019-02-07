import React, { Component } from 'react'
import logo from './assets/D4Play_logo.jpg';
import esrbCert from './assets/privacy_certified_global_color.png';
import './App.css'
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
      }
      componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll.bind(this));
      }
      render() {
        return (
          <div className="Contact">
            <header className="App-header">
                <div className="logoContainer">
                    <img src={logo} />
                </div>
                <div className="menuContainer">
                    <p>OUR APPS / SESAME STREET / FISHER-PRICE / SUPPORT</p>
                </div>
            </header>
            <div className="App-container">
                <h1>Let's Get This <br />Party Started!</h1>
                <div className="tabContainer">
                    <div className="buttonRow">
                        <div className="inspirationTourBtn chosen"style={{marginLeft: "0px"}}>
                            <img></img>
                            <h2>Inspiration Tour</h2>
                        </div>
                        <div className="workshopBtn">
                            <img></img>
                            <h2>Inspiration Tour</h2>
                        </div>
                        <div className="popUpBtn"style={{marginRight: "0px"}}>
                            <img></img>
                            <h2>Inspiration Tour</h2>
                        </div>
                    </div>
                </div>
                <div className="formContainer">
                        <div className="summaryContainer">
                            <p>So, you’re interested in a <span>tour</span><br />
                                Of the world of play, of fun, & more?<br />
                                To step outside the day to day,<br />
                                and <span>get inspired</span> in surpising ways?<br />
                                <br />
                                Request a session, what are you waiting for?!<br />
                                You won’t have to leave your office door.<br />
                                It’s <span>1 to 8 hours</span>, and <span>we will come to you</span>,<br />
                                with post-its, markers, wigs, & kazoos!<br />
                                <br />
                                Let’s change perspective, boost imagination,<br />
                                make even your backyard as a place for inspiration.<br />
                                We’ll go through how play can be used to change<br />
                                the world, our products, in so many ways.<br />
                                <br />
                                It’ll be a session filled with delight & laughter,<br />
                                & we hope we’ll leave your team inspired after.</p><br />
                        </div>
                        <div className="form">
                            <form>
                                <input type="text" name="name" placeholder="Name"></input> <br/>
                                <input type="text" name="company" placeholder="Company"></input> <br/>
                                <input type="text" name="email" placeholder="Email"></input> <br/>
                                <input type="text" name="sizeGroup" placeholder="Size of Group"></input> <br/>
                                <input type="text" name="apprDate" placeholder="Approximate Date"></input> <br/>
                                <input type="text" name="location" placeholder="Location"></input> <br/>
                                <input type="text" name="location" placeholder="anything else? questions, comments? We're all ears."></input> <br/>
                                <input className="submitButton" type="submit" value="Submit" />
                            </form>
                        </div>
                </div>
                <footer>
                    <div className="links">
                        <p>Visit IDEO.com</p>
                        <p>View our Web Privacy Policy</p>
                        <p>View our Mobile Privacy Policy</p>
                        <p>ⓒ IDEO PLAY LAB, 2019. All Rights Reserved</p>
                    </div>
                    <div className="certification">
                        <img src={esrbCert}></img>
                    </div>
                </footer>
            </div>
          </div>
        )
        }
}

export default Contact