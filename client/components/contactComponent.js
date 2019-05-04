import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Row, Col, Card, CardTitle, TextInput } from "react-materialize";
import "./App.css"
class Contact extends React.Component {
    render() {
        return (
            <Row>
            <Col m={12} s={12}>
          <h3> If you want to get in Touch about a potential position, a collaboration, or just to chat feel free to fill out the form below.</h3>
           
            </Col>
            
            
            <Col m={12} s={12}>
            <Card className="allCards" horizontal header={<CardTitle />} actions={[  <h2> Message Me! </h2>
]}>
            <form class="contact-text" action="MAILTO:staierc@hotmail.com" method="post" enctype="text/plain">

            <Row><TextInput autocomplete="on" label="Name" /></Row>
            <Row><TextInput label="Message" icon="mode_edit" /></Row>
            <input class="contact-button" id="button" type="submit" value="Submit"/>

            </form>
            </Card>
            </Col>
            

      
            </Row>
         
        )
    }
}
export default Contact