import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Row, Col, Card, CardTitle, Chip, Button } from "react-materialize";
import Me from "../assets/boston.jpg";

import "./App.css";
var querystring = require("querystring");
class About extends React.Component {
  state = {
    surveyTaken: false,
    surveyChoice: "LinkedIn"
  };
  choiceSelection = event => {
    console.log(event);
  };
  surveySubmit = () => {
    console.log("Thank you!");
    if (this.state.surveyTaken) {
      return <h1> Thank you for the feedback! </h1>;
    } else {
      return (
        <div>
          <h4> How did you find this website</h4>
          <div class="custom-control custom-radio hello">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                id="defaultGroupExample1"
                name="groupOfDefaultRadios"
                //   value="Google"
                //   onClick={this.choiceSelection}
              />
              <label
                class="custom-control-label options pl-3"
                for="defaultGroupExample1"
                value="Google"
                onClick={this.choiceSelection}
              >
                Google
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                id="defaultGroupExample2"
                name="groupOfDefaultRadios"
              />
              <label
                class="custom-control-label options pl-3"
                for="defaultGroupExample2"
              >
                Linkedin
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                id="defaultGroupExample3"
                name="groupOfDefaultRadios"
              />
              <label
                class="custom-control-label options pl-3"
                for="defaultGroupExample3"
              >
                Business Card
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                id="defaultGroupExample4"
                name="groupOfDefaultRadios"
              />
              <label
                class="custom-control-label options pl-3"
                for="defaultGroupExample4"
              >
                Referred by someone
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                class="custom-control-input"
                id="defaultGroupExample5"
                name="groupOfDefaultRadios"
              />
              <label
                class="custom-control-label options pl-3"
                for="defaultGroupExample5"
              >
                Other
              </label>
            </div>
          </div>
          <Button onClick={this.surveySubmitted}> Submit </Button>
        </div>
      );
    }
  };
  surveySubmitted = () => {
    this.setState({ surveyTaken: true });
    this.surveySubmit();

    axios
      .post(
        "/insert",
        querystring.stringify({
          surveyChoice: this.state.surveyChoice
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(function(response) {
        console.log(response);
      });
  };
  render() {
    return (
      <div>
        <Row>
          <Col m={3} s={12}>
            <Card className="allCards survey">{this.surveySubmit()}</Card>
          </Col>

          <Col m={9} s={12}>
            <Card
              className="allCards"
              horizontal
              header={
                <CardTitle className="projectCardsImages" image={Me}>
                  {" "}
                </CardTitle>
              }
              actions={[<h2>About Me </h2>]}
            >
              I have a diverse background which helped me grow and ultimately
              uncover what I am passionate about which is Web Development and
              Design. I have a well rounded base knowledge of front and back end
              web development. I have experience with a broad array of
              applications including building basic static websites and more
              dynamic MERN applications. I am always seeking to grow and learn
              and look forward to continued learning in this ever changing
              field.
            </Card>
          </Col>
        </Row>
        <Row>
          <Col m={3} s={12}>
            {" "}
            <Card>
              <h5> Feel to contact me on other platforms </h5>{" "}
              <a
                href="https://www.linkedin.com/in/cheyra-dickinson-b2b64a16b/"
                className="page-icons-facebook"
                target="blank"
              >
                {" "}
                <i class="fab fa-linkedin" />
              </a>{" "}
              <a
                className="page-icons-linkedin"
                href="https://github.com/Cheyra"
                target="blank"
              >
                <i class="fab fa-github" />{" "}
              </a>
            </Card>{" "}
          </Col>
          <Col m={9} s={12}>
            <Card
              className="allCards"
              horizontal
              header={<CardTitle />}
              actions={[
                <h2 className="center"> Tools & Technologies Skill Set </h2>
              ]}
            >
              <Chip className="skill-list"> CSS </Chip>
              <Chip className="skill-list"> Bootstrap </Chip>
              <Chip className="skill-list"> Materialize </Chip>
              <Chip className="skill-list"> HTML </Chip>
              <Chip className="skill-list"> Javascript </Chip>
              <Chip className="skill-list"> JQuery </Chip>
              <Chip className="skill-list"> Mango DB </Chip>
              <Chip className="skill-list"> Mongoose </Chip>
              <Chip className="skill-list"> SQL </Chip>
              <Chip className="skill-list"> mySQL </Chip>
              <Chip className="skill-list"> Node.js </Chip>
              <Chip className="skill-list"> Express</Chip>
              <Chip className="skill-list"> Firebase</Chip>
              <Chip className="skill-list"> API calls</Chip>
              <Chip className="skill-list"> Ajax</Chip>
              <Chip className="skill-list"> GIT</Chip>
              <Chip className="skill-list"> MERN</Chip>
              <Chip className="skill-list"> CRUD</Chip>
              <Chip className="skill-list"> Webscraping</Chip>
              <Chip className="skill-list"> UX</Chip>
              <Chip className="skill-list"> UI</Chip>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default About;
