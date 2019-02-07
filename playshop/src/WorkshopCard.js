import React, { Component } from 'react';
import { ReactComponent as SummaryLine } from './assets/SummaryLine.svg';
import { ReactComponent as InspirationLine } from './assets/InspirationLine.svg';
import { ReactComponent as WorkshopLine } from './assets/WorkshopLine.svg';
import './App.css';

class WorkshopCard extends Component {
    render() {
        return(
            <div className={"workshopCard " + this.props.title} >
                    <div className="workshopBackground">
                        {this.props.backgroundLine}
                    </div>
                    <div className="workshopCardText" style={{float: this.props.textSide}}>
                        <h2 style={{color: this.props.color}}>( {this.props.durationText} )</h2>
                        {this.props.headerText}
                        <div className="idealForCard " style={{backgroundColor: this.props.color}}>
                            <h3>IDEAL FOR:</h3>
                            <p>{this.props.idealForText}</p>
                        </div>
                        <button style={{color: "black", borderColor: this.props.color, backgroundImage: "linear-gradient(" + this.props.color + "," + this.props.color + ")"}}>Learn More</button>
                    </div>
                <div className="workshopCardImage">
                <img src={this.props.image} />
                </div>
            </div>
        );
    }
}

export default WorkshopCard;