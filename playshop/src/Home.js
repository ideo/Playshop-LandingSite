import React, { Component } from 'react';
import logo from './assets/D4Play_logo.jpg';
import inspirationTourBalloon from './assets/InspirationTourBalloon.png';
import moon from './assets/moon.png';
import { Link } from 'react-router-dom'
import { ReactComponent as SummaryLine } from './assets/SummaryLine.svg';
import { ReactComponent as InspirationLine } from './assets/InspirationLine.svg';
import { ReactComponent as WorkshopLine } from './assets/WorkshopLine.svg';
import { ReactComponent as PopUpLine } from './assets/PopUpLine.svg';
import './App.css';
import WorkshopCard from './WorkshopCard.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.summaryRowRef = React.createRef();
    // this.state.showSummaryRow = "summaryRow";
    this.state = {showSummaryRow: "summaryRow", summaryRowHeight: "100%"}
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
            <div className="videoContainer">
              <div className="video"></div>
            </div>
            <div className="heroTextContainer">
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
              <p>We offer 3 types of <br/>Play Lab Workshops:</p>

              <WorkshopCard 
                  title="inspirationTour" 
                  image = {inspirationTourBalloon}
                  backgroundLine = {<InspirationLine />}
                  textSide="left" 
                  color="#67DDAB"
                  durationText="1 - 8 Hours"
                  headerText={<h1>Need a <span>boost</span> of energy, momentum, creativity, or innovation? <br />Let's go on <span>an <br/>Inspiration Tour.</span></h1>}
                  idealForText="Teams looking to broaden their perspective, gain insights from innovation in adjacent industries, and rinse out stress with laughter and delight."
              />
              <WorkshopCard 
                  title="playWorkshop" 
                  image = {moon}
                  backgroundLine = {<WorkshopLine />}
                  textSide="right" 
                  color="#FF9C1C"
                  durationText="2 - 8 Hours"
                  headerText={<h1>Our <span>Play Workshops</span> are interactive, action-oriented, and filled with laughter.</h1>}
                  idealForText="Teams looking for a memorable high-energy experience that can take place in one room as a stand alone event or as a portion of a larger program."
              />
              <WorkshopCard 
                  title="popUp" 
                  image = {inspirationTourBalloon}
                  backgroundLine = {<PopUpLine />}
                  textSide="left" 
                  color="#8ECCEC"
                  durationText="1 Day - 2 Weeks"
                  headerText={<h1>Our <span>Play Workshops</span> are interactive, action-oriented, and filled with laughter.</h1>}
                  idealForText="Teams that want to move quickly from ideas to tangilble prototypes by leverageing the science of play."
              />

            </div>
            <div className="workshopReviewRow">
                <div className="background"></div>
                <div className="reviewCard" style={{marginLeft: "0px"}}>
                  <img></img>
                  <h1 style={{color: "#67DDAB"}}>Inspiration Tour</h1>
                  <h2>( 1 - 8 Hours )</h2>
                  <p>Learn from the best, be the best. Inspire the Fire.</p>
                  <button style={{color: "#67DDAB", borderColor: "#67DDAB"}}>Activate Fire</button>
                </div>
                <div className="reviewCard">
                  <img></img>
                  <h1 style={{color: "#FF9C1C"}}>Play Shop Shop</h1>
                  <h2>( 2 - 8 Hours )</h2>
                  <p>Learn from the best, be the best. Inspire the Fire.</p>
                  <button style={{color: "#FF9C1C", borderColor: "#FF9C1C"}}>Activate Fire</button>
                </div>
                <div className="reviewCard" style={{marginRight: "0px"}}>
                  <img></img>
                  <h1 style={{color: "#8eccec"}}>Pop Up Session</h1>
                  <h2>( 1 Day - 2 Weeks )</h2>
                  <p>Learn from the best, be the best. Inspire the Fire.</p>
                  <button style={{color: "#8eccec", borderColor: "#8eccec"}}>Activate Fire</button>
                </div>

          </div>
        </div>
        <footer></footer>
      </div>
    );
  }


  handleScroll(event) {
    var heightBound = window.height * 0.8
    // this.state.showSummaryRow = "active";
    console.log(this.summaryRowRef.current.clientHeight)
    var summaryRowHeight = this.summaryRowRef.current.clientHeight + 60 + 40;
    this.setState({showSummaryRow: "summaryRow active", summaryRowHeight: summaryRowHeight + "px"})
    // console.log(event)
    // console.log(this.summaryRef.current)
    // const node = this.summaryRef.current;
    // node.style.animation = {animation: "fillLeft 1s ease"}
    // this.summaryRef.setState({animation: 'fillLeft 1s ease'});
    
  }
}

export default Home;
