import React, { Component } from 'react';
import inspirationTourBalloon from './assets/InspirationTourBalloon.png';
import handsOfInspiration from './assets/handsOfInspiration.png';
import getInspired from './assets/image-1.png';
import setFocus from './assets/image-2.png';
import learnNewTools from './assets/image-3.png';
import generateIdeas from './assets/image-4.png';
import conceptsTangible from './assets/image-5.png';
import buildCreativeConfidence from './assets/image-6.png';
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
import Header from './Header.js';
import esrbCert from './assets/ESRBbadge.jpg';
import logo from './assets/D4Play_logo.jpg';
import './Header.css'
import './Mobile.css'

var smoothScroll = {
	timer: null,

	stop: function () {
		clearTimeout(this.timer);
	},

	scrollTo: function (id, callback) {
		var settings = {
			duration: 1500,
			easing: {
				outQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		var percentage;
		var startTime;
		var node = document.getElementById(id);
		var nodeTop = node.offsetTop;
		var nodeHeight = node.offsetHeight;
		var body = document.body;
		var html = document.documentElement;
		var height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		var windowHeight = window.innerHeight
		var offset = window.pageYOffset;
		var delta = nodeTop - offset;
		var bottomScrollableY = height - windowHeight;
		var targetY = (bottomScrollableY < delta) ?
			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
			delta;

		startTime = Date.now();
		percentage = 0;

		if (this.timer) {
			clearInterval(this.timer);
		}

		function step () {
			var yScroll;
			var elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(this.timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(this.timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				window.scrollTo(0, yScroll);
				this.timer = setTimeout(step, 10);     
			}
		}

		this.timer = setTimeout(step, 10);
	}
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.summaryRowRef = React.createRef();
    this.emailContainerRef = React.createRef();
    this.state = {showSummaryRow: "summaryRow", summaryRowHeight: "100%", emailContainerHeight: "100%", menuLevel: 0, mounted: "pre-mounted"}
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    setTimeout(() => {
      this.setState({mounted: "mounted"});
    }, 10);
    setTimeout(() => {
      this.setState({showSummaryRow: "summaryRow active"});
    }, 4000);
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
  onClickMenu(e){
    // console.log(e);
    let newElement = document.getElementsByClassName("App-container");
    document.getElementsByClassName("App-container").className = "App-container menuLevel-1";
    // document.getElementsByClassName("App-container").classList.add('menuLevel-1');
    newElement.className = "App-container menuLevel-1"
    if(this.state.menuLevel != 1) {
      this.setState({menuLevel: 1});
    } else {
      this.setState({menuLevel: 0});
    }
    console.log(document.getElementsByClassName("App-container"));
  }
  onClickSubmenu(e, id){
    console.log(e);
    console.log(id);
    this.setState({menuLevel: 2});
  }
  handleTopClick() {
    smoothScroll.scrollTo('contact-form');
  }
  render() {
    return (
      <div className={"App menuLevelAll-" + this.state.menuLevel + " " + this.state.mounted}onScroll={this.handleScroll}>
        
        <header className={"App-header menuLevel-" + this.state.menuLevel}>
            <div className="logoContainer">
                <img src={logo} />
            </div>
            <div className="menuContainer">
                <button className="mobileMenu" onClick={this.onClickMenu.bind(this)}>
                    {/* <div />
                    <div />
                    <div /> */}

                    <svg className="hamburger" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
                    <svg className="cross" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>                </button>
                <ul>
                    <li>
                        <button className="dropdownParent" onClick={this.onClickSubmenu.bind(this, 1)} id="item-1">Our Apps</button>
                        <div className="hoverMenu">
                            <a target="_blank" href="http://www.ideotoylab.com/spin-and-spot-safari/"><button>Spin and Spot Safari</button></a>
                            <a target="_blank" href="http://www.ideotoylab.com/spin-and-spot-safari/"><button>Monster Moves</button></a>
                            <a target="_blank" href="http://www.ideotoylab.com/balloonimals/"><button>Balloonimals</button></a>
                            <a target="_blank" href="http://www.ideotoylab.com/balloonimalbabies/"><button>Balloonimals Babies</button></a>
                            <a target="_blank" href="http://www.ideotoylab.com/magiccreaturecreator/"><button>Magic Creature Creator</button></a>
                        </div>
                    </li>
                        <span> / </span>
                    <li style={{transitionDelay: "0.1s"}}>
                        <button className="dropdownParent" onClick={this.onClickSubmenu.bind(this, 2)} id="item-2">Sesame Street</button>
                        <div className="hoverMenu">
                        {/* <div className="mobile mobileTitle">
                            <button className="back-chevron">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                            </button>
                            <p>Sesame Street</p>
                        </div> */}
                        <a target="_blank" href="http://www.ideotoylab.com/elmocalls/"><button>Elmo Calls</button></a>
                        <a target="_blank" href="http://www.ideotoylab.com/cookiecalls/"><button>Cookie Calls</button></a>
                        <a target="_blank" href="http://www.ideotoylab.com/elmosmonstermaker"><button>Elmo's Monster Maker</button></a>
                        <a target="_blank" href="http://www.ideotoylab.com/sesamestreetvideomaker"><button>Sesame Street Video Maker</button></a>
                        </div>
                    </li>
                        <span> / </span>
                    <li style={{transitionDelay: "0.2s"}}>
                        <button className="dropdownParent" onClick={this.onClickSubmenu.bind(this, 3)} id="item-3">Fisher-Price</button>
                        <div className="hoverMenu">
                            {/* <div className="mobile mobileTitle">
                                <button className="back-chevron">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                </button>
                                <p>Fisher-Price</p>
                            </div> */}
                            <a target="_blank" href="http://www.ideotoylab.com/seensay"><button>See 'n Say</button></a>
                        </div>
                    </li>
                        <span> / </span>
                    <li style={{transitionDelay: "0.3s"}}>
                        <a target="_blank" href="http://www.ideotoylab.com/support"><button className="dropdownParent" onClick={this.onClickSubmenu.bind(this, 4)} id="item-4">Support</button></a>
                    </li>
                </ul>
            </div>
          </header>

        <div className={"App-container menuLevel-" + this.state.menuLevel}> 
          <div className="heroRow">
            <div className="videoContainer col6" id="heroClip">
              <div className="video">
                <img src={playLab} />
              </div>
            </div>
            <div className="heroTextContainer col6">
              <div className="heroText">
                <h1><span className="indv-Span">From</span> <span className="indv-Span" style={{transitionDelay: "0.1s"}}>Play</span> <span className="indv-Span" style={{transitionDelay: "0.2s"}}>to</span><span className="indv-Span" style={{transitionDelay: "0.3s"}}>Innovation</span> <span className="indv-Span" style={{transitionDelay: "0.4s"}}>Workshops</span></h1>
                {/* <h1><span style={{transitionDelay: "0.1s"}}>F</span><span style={{transitionDelay: "0.15s"}}>r</span><span style={{transitionDelay: "0.2s"}}>o</span><span style={{transitionDelay: "0.24s"}}>m</span><span style={{transitionDelay: "0.29s"}}> </span><span style={{transitionDelay: "0.33s"}}>P</span><span style={{transitionDelay: "0.37s"}}>l</span><span style={{transitionDelay: "0.4s"}}>a</span><span style={{transitionDelay: "0.44s"}}>y</span><span style={{transitionDelay: "0.48s"}}> </span><span style={{transitionDelay: "0.52s"}}>t</span><span style={{transitionDelay: "0.54s"}}>o</span><span style={{transitionDelay: "0.56s"}}> </span><span style={{transitionDelay: "0.57s"}}>I</span><span style={{transitionDelay: "0.1s"}}>n</span><span style={{transitionDelay: "0.1s"}}>n</span><span style={{transitionDelay: "0.1s"}}>o</span><span style={{transitionDelay: "0.1s"}}>v</span><span style={{transitionDelay: "0.1s"}}>a</span><span style={{transitionDelay: "0.1s"}}>t</span><span style={{transitionDelay: "0.1s"}}>i</span><span style={{transitionDelay: "0.1s"}}>o</span><span style={{transitionDelay: "0.1s"}}>n</span><span style={{transitionDelay: "0.1s"}}> </span><span style={{transitionDelay: "0.1s"}}>W</span><span style={{transitionDelay: "0.1s"}}>o</span><span style={{transitionDelay: "0.1s"}}>r</span><span style={{transitionDelay: "0.1s"}}>k</span><span style={{transitionDelay: "0.1s"}}>s</span><span style={{transitionDelay: "0.1s"}}>h</span><span style={{transitionDelay: "0.1s"}}>o</span><span style={{transitionDelay: "0.1s"}}>p</span><span style={{transitionDelay: "0.1s"}}>s</span></h1> */}
                <p>Generate new concepts, build innovative culture, and enjoy the process <br/>with IDEO's Play Lab</p>
                <button onClick={this.handleTopClick}>Join Us</button>
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
              <h1>Our workshops create a conducive environment for collaborative ideation through playful methods. <br/>Are you ready to build creative confidence <br/>and push your ideas beyond what has <br/>previously been imagined?</h1>

              <div className="qualityCardsContainer">
              <h2>In the course of this interactive experience, participants will:</h2>
                <div className="summaryBackground workshop" style={{height: this.state.summaryRowHeight}}>
                  <WorkshopLine />
                  <WorkshopLine className="backPath"/>
                </div>

                <div className="qualityCard">
                  <img src={getInspired} />
                  <h3>1. Get Inspired</h3>
                  <p>Be introduced to compelling experiences that that will jump start fresh ideas.</p>
                </div>

                <div className="qualityCard">
                  <img src={setFocus} />
                  <h3>2. Set Focus</h3>
                  <p>Identify rich opportunity areas that your team is well-positioned to purse.</p>
                </div>

                <div className="qualityCard">
                  <img src={learnNewTools} />
                  <h3>3. Learn New Tools</h3>
                  <p>Activiely engage in activities that introduce Design Thinking & boost Creative Confidence.</p>
                </div>
                {/* <div className="spacer"></div> */}
                <div className="qualityCard">
                  <img src={generateIdeas} />
                  <h3>4. Generate <br/>Ideas</h3>
                  <p>Master the rules of successful brainstorming & improve your quality & quantity of ideas.</p>
                </div>

                <div className="qualityCard">
                  <img src={conceptsTangible} />
                  <h3>5. Make Concepts Tangible</h3>
                  <p>Bring ideas to life and understand the value of prototyping throughout the design process.</p>
                </div>
                <div className="qualityCard">
                  <img src={buildCreativeConfidence} />
                  <h3>6. Build Creative Confidence</h3>
                  <p>Empower your team by surfacing their creativity and giving them a process to innovate while having fun.</p>
                </div>

              </div>

              <div className="contactContainer">
                <h1>In addition to early concepts, participants will <br/>walk away with a clear and actionable process <br/>for future innovation, with an emphasis <br/>on creating a low-stakes environments <br/>for creativity and play.</h1>
                <div id="contact-form" className="summaryBackground popUp" style={{height: this.state.summaryRowHeight}}>
                  <PopUpLine />
                  <PopUpLine className="backPath"/>
                </div>
                <Contact></Contact>
              </div>

              <div className="emailContainer" ref={this.emailContainerRef}>
                <div className="background" style={{height: this.state.emailContainerHeight}}></div>
                <h1>Looking for more? <br/>We also lead <span className="oscar">inspiration tours</span>, <br/>welcome <span className="ernie">speaking engagements</span> <br/>& run <span className="cookie">full design sprints</span> and <span className="cookie">projects</span>.
                  <br/>
                  <br/>
                  Please reach out to us at:<br/>
                  <a href="mailto:play@ideo.com">play@ideo.com</a>
                </h1>
              </div>
            </div>
        </div>
        <footer>
        <div className="links">
                        <a href="http://www.ideo.com">
                          <p>Visit IDEO.com</p>
                        </a>
                        <a href="http://www.ideotoylab.com/webprivacy">
                          <p>View our Web Privacy Policy</p>
                        </a>
                        <a href="http://www.ideotoylab.com/mobileprivacypolicy">
                          <p>View our Mobile Privacy Policy</p>
                        </a>
                        <p>ⓒ IDEO PLAY LAB, 2019. All Rights Reserved</p>
                    </div>
                    <div className="certification">
                        <a href="http://www.esrb.org/confirm/ideo-confirmation.aspx">
                          <img src={esrbCert}></img>
                        </a>
                    </div>
        </footer>
      </div>
    );
  }


  handleScroll(event) {
    var heightBound = window.height * 0.8
    if(this != null) {
      var summaryRowHeight = this.summaryRowRef.current.clientHeight + 100 + 100;
      var emailContainerHeight = this.emailContainerRef.current.clientHeight;
      this.setState({showSummaryRow: "summaryRow active", summaryRowHeight: summaryRowHeight + "px", emailContainerHeight: emailContainerHeight + "px"})
    }
  }
}

export default Home;
