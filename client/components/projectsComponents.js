import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Card, CardTitle } from "react-materialize";
import "./App.css";
//importing images
import Burger from "../assets/eatDaBurger.png";
import Giph from "../assets/Giph-creator.png";
import Hike from "../assets/hikesite.png";
import Social from "../assets/Social-Qs.png";
import Train from "../assets/Train-Tracker.png";
import Trivia from "../assets/Trivia-game.png";
class Projects extends React.Component {
  render() {
    return (
      <Row>
        <Col m={6} s={12}>
          <Card
            className="allCards projectCards"
            horizontal
            header={
              <CardTitle className="projectCardsImages" image={Social}>
                {" "}
              </CardTitle>
            }
            actions={[<a href="www.google.com">Social Q's</a>]}
          >
            This a full stack MERN application I worked on with a team.
          </Card>
        </Col>

        <Col m={6} s={12}>
          <Card
            className="allCards projectCards"
            horizontal
            header={
              <CardTitle className="projectCardsImages" image={Trivia}>
                {" "}
              </CardTitle>
            }
            actions={[<a href="www.google.com">Iron Man Trivia Game</a>]}
          >
            This is a trivia game that utilizes timing.
          </Card>
        </Col>

        <Col m={6} s={12}>
          <Card
            className="allCards projectCards"
            horizontal
            header={
              <CardTitle className="projectCardsImages" image={Burger}>
                {" "}
                hello{" "}
              </CardTitle>
            }
            actions={[<a href="www.google.com">Eat Da Burger</a>]}
          >
            This is an application utilizing HTML CSS Javascript and a MangoDB
            database.
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card
            className="allCards projectCards"
            horizontal
            header={
              <CardTitle className="projectCardsImages" image={Train}>
                {" "}
              </CardTitle>
            }
            actions={[<a href="www.google.com">Train Tracker</a>]}
          >
            This a website utilizing CSS, HTML, and Javascript to showcase a
            train schedule.
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card
            className="allCards projectCards"
            horizontal
            header={
              <CardTitle className="projectCardsImages" image={Giph}>
                {" "}
              </CardTitle>
            }
            actions={[<a href="www.google.com">Giph Creator</a>]}
          >
            This a website that utilizes CSS, HTML and Javascript along with
            Gipphy API to show different Giphs and allows users to add
            categories.
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card
            className="allCards projectCards"
            horizontal
            header={
              <CardTitle className="projectCardsImages" image={Hike}>
                {" "}
              </CardTitle>
            }
            children={[<p>hello</p>]}
            actions={[<a href="www.google.com">Take a Hike</a>]}
          >
            This is a website utilizing CSS, HTML, Javascript, Bootstrap, and
            SQL to allow users to track what mountains in New Hampshire they
            have hiked.
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Projects;
