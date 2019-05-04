import React from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, Navbar, Row, Col } from "react-materialize";
import PageFooter from "./footerComponent";
import Projects from "./projectsComponents";
import About from "./aboutMeComponent";
import Contact from "./contactComponent";
import Logo from "../assets/dragon-icon-brighter.png";
import "./App.css";
class MainDisplay extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          className="white"
          brand={
            <Row>
              {" "}
              <Col m={6} s={12}>
                {" "}
                <img src={Logo} alt="Logo" className="logo" />{" "}
              </Col>{" "}
              <Col m={6} s={12}>
                {" "}
                <h2 className="page-title"> My WebPage</h2>{" "}
              </Col>{" "}
            </Row>
          }
          alignLinks="left"
          centerLogo
          extendWith={
            <Tabs className="tab-demo z-depth-1" options={{ swipeable: true }}>
              <Tab title="About" className="pageTabs white">
                <h1> My Details </h1>
                <About />
              </Tab>
              <Tab title="Work" active className="pageTabs white">
                <h1> Projects </h1>
                <Projects />
              </Tab>
              <Tab title="Contact" className="pageTabs white">
                <h1> </h1>
                <h2> Contact </h2>
                <Contact />
              </Tab>
            </Tabs>
          }
        />

        <PageFooter />
      </div>
    );
  }
}
export default MainDisplay;
