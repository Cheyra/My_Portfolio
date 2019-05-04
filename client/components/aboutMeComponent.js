import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Card, CardTitle, Checkbox } from "react-materialize";
import "./App.css";
class About extends React.Component {
  render() {
    return (
      <Row>
        <Col m={3} s={12}>
          <Card className="allCards">
            <h4> How did you find this website</h4>
            <Checkbox value="Red" label="LinkIn" checked />
            <Checkbox value="Red" label="Search Engine" />
            <Checkbox value="Red" label="Word of Mouth" />
            <Checkbox value="Red" label="Business Card" />
          </Card>
        </Col>

        <Col m={9} s={12}>
          <Card
            className="allCards"
            horizontal
            header={<CardTitle />}
            actions={[<a href="www.google.com">two</a>]}
          >
            Info
          </Card>
        </Col>
        <Col m={3} s={12} />
        <Col m={9} s={12}>
          <Card
            className="allCards"
            horizontal
            header={<CardTitle />}
            actions={[<a href="www.google.com">two</a>]}
          >
            Skills
          </Card>
        </Col>
      </Row>
    );
  }
}
export default About;
