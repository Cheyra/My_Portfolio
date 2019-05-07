import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "react-materialize";
import "./App.css";
class PageFooter extends React.Component {
  render() {
    return (
      <Footer className="page-footer">
        {" "}
        <div className="quote">
          "The doubters said 'Man can not fly', The doers said, 'Maybe, but
          we'll try', And finally soared in the morning glow while non-believers
          watched from below.” -Bruce Lee{" "}
        </div>{" "}
      </Footer>
    );
  }
}
export default PageFooter;
