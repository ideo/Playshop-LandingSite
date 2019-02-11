import React, { Component } from 'react'
import logo from './assets/D4Play_logo.jpg';
import './App.css'
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll.bind(this));
      }
      handleSubmit(event){
        var data = new FormData(event.target);
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
        })
        .catch(error => {
            console.log(error);
        })
      }

      render() {
        return (
          <div className="Contact">
            <div className="App-container">
                <div className="formContainer">
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="NAME" placeholder="Name"></input> <br/>
                                <input type="text" name="COMPANY" placeholder="Company"></input> <br/>
                                <input type="text" name="EMAIL" placeholder="Email"></input> <br/>
                                <input type="text" name="SIZE_OF_GROUP" placeholder="Size of Group"></input> <br/>
                                <input type="text" name="APPR_DATE" placeholder="Approximate Date"></input> <br/>
                                <input type="text" name="LOCATION" placeholder="Location"></input> <br/>
                                <input type="text" name="OTHER_COMMENTS" placeholder="anything else? questions, comments? We're all ears."></input> <br/>
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