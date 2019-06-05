import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainComponent from "./modules/MainComponent";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroundImage" />

        <MainComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
