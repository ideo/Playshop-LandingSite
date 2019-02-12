import React, { Component } from 'react';
import logo from './assets/D4Play_logo.jpg';
import inspirationTourBalloon from './assets/InspirationTourBalloon.png';
import handsOfInspiration from './assets/handsOfInspiration.png';
import telescope from './assets/telescope.png';
import { Link } from 'react-router-dom'
import { ReactComponent as SummaryLine } from './assets/SummaryLine.svg';
import { ReactComponent as InspirationLine } from './assets/InspirationLine.svg';
import { ReactComponent as WorkshopLine } from './assets/WorkshopLine.svg';
import { ReactComponent as PopUpLine } from './assets/PopUpLine.svg';
import './App.css';
import WorkshopCard from './WorkshopCard.js';
import Contact from './Contact.js';
import esrbCert from './assets/privacy_certified_global_color.png';


class Home extends Component {
  constructor(props) {
    super(props);
    this.summaryRowRef = React.createRef();
    this.emailContainerRef = React.createRef();
    // this.state.showSummaryRow = "summaryRow";
    this.state = {showSummaryRow: "summaryRow", summaryRowHeight: "100%", emailContainerHeight: "100%"}
    // this.workshops 
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <header className="App-header">
          <div className="logoContainer">
            <img src={logo} />
          </div>
          <div className="menuContainer">
            <p>OUR APPS / SESAME STREET / FISHER-PRICE / SUPPORT</p>
          </div>
        </header>
        <div className="App-container"> 
          <div className="heroRow">
            <div className="videoContainer col6">
              <div className="video"></div>
            </div>
            <div className="heroTextContainer col6">
              <div className="heroText">
                <h1>Make with Us in Playshops</h1>
                <p>Generate new concepts, build innovative culture, and learn new design tools with IDEO's Play Lab</p>
                <Link to={"/contact"}>
                    <button>Join Us</button>
                </Link>
              </div>
            </div>
          </div>
            <div className={this.state.showSummaryRow} ref={this.summaryRowRef}>
              <div className="summaryBackground" style={{height: this.state.summaryRowHeight}}>
                <SummaryLine />
                <SummaryLine className="backPath" id="clipper"/>
              </div>
              <div className="summary">
                  <h2>here's the deal</h2>
                  <h1>IDEO's Play Lab offers a design-thinking workshop with a playful twist!</h1>
                  <p>Your team will walk away with new tools, new ideas, and new methodologies for innovation. Perfect for tackling old challenges, building positive company culture, and breaking down organizational barriers.</p>
              </div>
            </div>
            <div className="workshopCardsContainer">
              <img src={telescope} />
              <h1>We will create a conducive environment for collaborative ideation through playful methods that encourage creative confidence and thinking out of the box, in order to push ideas beyond what has previously been imagined.</h1>
              
              <div className="qualityCardsContainer">
              <h2>In the course of this interactive experience, participants will:</h2>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>1. Get Inspired</h3>
                  <p>Be introduced to analogous inspiration that exposes them to experiences that go beyond your industry to help jump-start fresh ideas</p>
                </div>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>2. Set Focus</h3>
                  <p>Identify rich opportunity areas to brainstorm.</p>
                </div>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>3. Gather Tools</h3>
                  <p>Master the rules of successful brainstorming and participate in activities to boost their  Creative Confidence</p>
                </div>
                <div className="spacer"></div>
                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>4. Create</h3>
                  <p>Brainstorm new concepts</p>
                </div>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>5. Share</h3>
                  <p>Prototype and share back these concepts at varying levels of fidelity</p>
                </div>
              </div>

              <div className="contactContainer">
                <h1>In addition to early concepts, participants walk away with a clear and actionable process for future innovation, with an emphasis on creating a low-stakes environments for creativity and play.</h1>
                <Contact></Contact>
              </div>

              <div className="emailContainer" ref={this.emailContainerRef}>
                <div className="background" style={{height: this.state.emailContainerHeight}}></div>
                <h1>We also do other sessions, such as inspiration tours, pop-ups, projects, & more.
                  <br/>
                  <br/>
                  Reach out to us at:<br/>
                  <a>play@ideo.com</a>
                </h1>
              </div>
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
    );
  }


  handleScroll(event) {
    var heightBound = window.height * 0.8
    var summaryRowHeight = this.summaryRowRef.current.clientHeight + 100 + 100;
    var emailContainerHeight = this.emailContainerRef.current.clientHeight;
    this.setState({showSummaryRow: "summaryRow active", summaryRowHeight: summaryRowHeight + "px", emailContainerHeight: emailContainerHeight + "px"})
  }
}

export default Home;
