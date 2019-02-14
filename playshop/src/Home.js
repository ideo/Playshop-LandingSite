import React, { Component } from 'react';
import logo from './assets/D4Play_logo.jpg';
import inspirationTourBalloon from './assets/InspirationTourBalloon.png';
import handsOfInspiration from './assets/handsOfInspiration.png';
import telescope from './LightbulbAnimation/LightBulb-Strip.png';
import { Link } from 'react-router-dom'
import { ReactComponent as SummaryLine } from './assets/SummaryLine.svg';
import { ReactComponent as InspirationLine } from './assets/InspirationLine.svg';
import { ReactComponent as WorkshopLine } from './assets/WorkshopLine.svg';
import { ReactComponent as PopUpLine } from './assets/PopUpLine.svg';
import playLab from './assets/toy-lab-brainstorm.jpg'
import postIts from './assets/post-its.png'
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
  lightbulbClicked() {
    console.log("CLICKED!!");
    this.setState({bulbAnimation: {animation: "none"}})
    setTimeout(() => {
      this.setState({bulbAnimation: {animation: "spriteSheet-6frame 0.5s steps(6)"}})
    }, 10);
    // setTimeout(() => {
    //   this.setState({bulbAnimation: {}})
    // }, 1000);
    // this.setState({bulbAnimation: {animation: "animation: none"}})
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
            <div className="videoContainer col6" id="heroClip">
              <div className="video">
                <img src={playLab} />
              </div>
            </div>
            <div className="heroTextContainer col6">
              <div className="heroText">
                <h1>From Play <br/>to Innovation Workshops</h1>
                <p>Generate new concepts, <br/>build innovative culture, <br/>and enjoy the process <br/>with IDEO's Play Lab</p>
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
              <h1>A design-thinking workshop with a playful twist!</h1>

                  <p>Building upon a rich history as part of a world-renowned design firm, IDEO Play Lab will inspire your team to unleash their creativity & innovation.</p>
              </div>
              <div className="postIts col6">
                <img src={postIts}></img>
              </div>
            </div>
            <div className="workshopCardsContainer">
              <div className="summaryBackground inspiration" style={{height: this.state.summaryRowHeight}}>
                <InspirationLine />
                <InspirationLine className="backPath"/>
              </div>
              <div className="lightbulbAnimation" onClick={this.lightbulbClicked.bind(this)}>
                <img src={telescope} className="telescope" style={this.state.bulbAnimation}/>
              </div>
              <h1>Our workshops create a conducive environment for collaborative ideation through playful methods. Are you ready to build creative confidence and push your ideas beyond what has previously been imagined?</h1>

              <div className="qualityCardsContainer">
              <h2>In the course of this interactive experience, participants will:</h2>
                <div className="summaryBackground workshop" style={{height: this.state.summaryRowHeight}}>
                  <WorkshopLine />
                  <WorkshopLine className="backPath"/>
                </div>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>1. Get Inspired</h3>
                  <p>Be introduced to compelling experiences that that will jump start fresh ideas.</p>
                </div>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>2. Set Focus</h3>
                  <p>Identify rich opportunity areas that your team is well-positioned to purse.</p>
                </div>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>3. Learn New Tools</h3>
                  <p>Activiely engage in activities that introduce Design Thinking & boost Creative Confidence.</p>
                </div>
                <div className="spacer"></div>
                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>4. Generate Ideas</h3>
                  <p>Master the rules of successful brainstorming & improve your quality & quantity of ideas.</p>
                </div>

                <div className="qualityCard">
                  <img src={handsOfInspiration} />
                  <h3>5. Make Concepts Tangible</h3>
                  <p>Bring ideas to life and understand the value of prototyping throughout the design process.</p>
                </div>

              </div>

              <div className="contactContainer">
                <h1>In addition to early concepts, participants walk away with a clear and actionable process for future innovation, with an emphasis on creating a low-stakes environments for creativity and play.</h1>
                <div className="summaryBackground popUp" style={{height: this.state.summaryRowHeight}}>
                  <PopUpLine />
                  <PopUpLine className="backPath"/>
                </div>
                <Contact></Contact>
              </div>

              <div className="emailContainer" ref={this.emailContainerRef}>
                <div className="background" style={{height: this.state.emailContainerHeight}}></div>
                <h1>Looking for more? <br/>We also lead inspiration tours, <br/>welcome speaking engagements <br/>& run full design sprints and projects.
                  <br/>
                  <br/>
                  Please reach out to us at:<br/>
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
