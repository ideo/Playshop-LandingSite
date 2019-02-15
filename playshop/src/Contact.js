import React, { Component } from 'react'
import logo from './assets/D4Play_logo.jpg';
import mailSent from './assets/mailSent.png';
import './App.css'
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {contactClasses: "Contact"}
      }
      componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll.bind(this));
      }
      handleSubmit(event){
        var data = new FormData(event.target);
        this.setState({contactClasses: "Contact submitted"})
        // console.log(data.keys);
        var newData = {
            NAME: data.get("NAME"),
            COMPANY: data.get("COMPANY"),
            EMAIL: data.get("EMAIL"),
            SIZE_OF_GROUP: data.get("SIZE_OF_GROUP"),
            APPR_DATE: data.get("APPR_DATE"),
            LOCATION: data.get("LOCATION"),
            OTHER_COMMENTS: data.get("OTHER_COMMENTS")         }

        var dataString = 
            "NAME=" + data.get("NAME") +
            "&COMPANY=" + data.get("COMPANY") +
            "&EMAIL=" + data.get("EMAIL") +
            "&SIZE_OF_GROUP=" + data.get("SIZE_OF_GROUP") +
            "&APPR_DATE=" + data.get("APPR_DATE") +
            "&LOCATION=" + data.get("LOCATION") +
            "&OTHER_COMMENTS=" + data.get("OTHER_COMMENTS");

        var json = JSON.stringify(newData);
        console.log(data);
        console.log(newData);
        console.log(json);
        var url = 'https://script.google.com/macros/s/AKfycbyaTfz5ip_za3J958BO2w0X5jJ8EzPShvotuayJ67iEgGxjnA4/exec?' + dataString;
        console.log(url);
        event.preventDefault();
        fetch(url, {
            method: "GET",
            dataType: "json",
            data: newData
        }).then(row => {
            console.log("HELEOLE");
            console.log(row);
            this.setState({contactClasses: "Contact submitted"})
        })
        .catch(error => {
            this.setState({contactClasses: "Contact"})
            console.log(error);
        })
      }

      render() {
        return (
          <div className={this.state.contactClasses} id="contact-form">
            <div className="App-container">
                <div className="sentContainer">
                    <img src={mailSent}></img>
                    <h1>Thank you for your message. <br />We will get back to you as soon as we can.</h1>
                </div>
                <div className="formContainer">
                        <div className="form">
                            <h2>Request a workshop!</h2>
                            <p>Fill in the form, or, if you prefer, <a href="mailto:play@ideo.com">send us an email</a></p>

                            <form onSubmit={this.handleSubmit}>
                                <input style={{transitionDelay: "0.03s"}} type="text" name="NAME" placeholder="What's your name?"></input> <br/>
                                <input style={{transitionDelay: "0.05s"}} type="text" name="COMPANY" placeholder="Company"></input> <br/>
                                <input style={{transitionDelay: "0.1s"}} type="text" name="EMAIL" placeholder="Email"></input> <br/>
                                <input style={{transitionDelay: "0.13s"}} type="text" name="SIZE_OF_GROUP" placeholder="Size of Group"></input> <br/>
                                <input style={{transitionDelay: "0.17s"}} type="text" name="APPR_DATE" placeholder="Approximate Date"></input> <br/>
                                <input style={{transitionDelay: "0.21s"}} type="text" name="LOCATION" placeholder="Location"></input> <br/>
                                <input style={{transitionDelay: "0.24s"}} type="text" name="OTHER_COMMENTS" placeholder="Anything else? Questions, comments? We're all ears."></input> <br/>
                                <input className="submitButton" type="submit" id="submit-form" value="Submit"/>
                            </form>
                        </div>
                </div>
            </div>
          </div>
        )
        }
}

export default Contact