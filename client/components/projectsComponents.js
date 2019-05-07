import React from "react";
import ReactDOM from "react-dom";
import {
  Row,
  Col,
  Card,
  CardTitle,
  Chip,
  Container,
    Button
} from "react-materialize";
import Modal from "react-modal";
import "./App.css";
//importing images
import Burger from "../assets/eatDaBurger.png";
import Giph from "../assets/Giph-creator.png";
import Hike from "../assets/hikesite.png";
import Social from "../assets/Social-Qs.png";
import Train from "../assets/Train-Tracker.png";
import Trivia from "../assets/Trivia-game.png";
class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.onClick = this.onClick.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement("body");
  }
  openModal(event) {
    this.setState({
      modalIsOpen: true
    });
    console.log(event);
  }
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
  onClick(e) {
    console.log("added name");
  }
  render() {
    return (
      <Container>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add Name"
          className="Modal"
        >
          <Button onClick={this.closeModal}>
            <i class="fa fa-times-circle" aria-hidden="true" />
          </Button>
          <h2>hello</h2>
          <div className="button-center">
            <br />
            <Button>Add New Name</Button>
          </div>
        </Modal>
        <Row>
          {" "}
          <h4 className="invite">
            {" "}
            (Feel free to filter the projects by the tags below){" "}
          </h4>{" "}
        </Row>
        <Row>
          <Chip> CSS </Chip>
          <Chip> HTML </Chip>
          <Chip> Javascript </Chip>
          <Chip> Mango DB </Chip>
          <Chip> SQL </Chip>
          <Chip> Node.js </Chip>
          <Chip> Express</Chip>
          <Chip> Firebase</Chip>
          <Chip> API </Chip>
        </Row>
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
              actions={[<p onClick={this.openModal}>Iron Man Trivia Game</p>]}
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
              Gipphy API to show different Giphs.
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
              SQL to allow users to track mountains hiked.
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Projects;
