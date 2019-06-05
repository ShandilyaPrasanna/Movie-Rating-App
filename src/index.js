import React from "react";
import ReactDOM from "react-dom";

import MainComponent from "./modules/MainComponent";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div />
      
          <MainComponent />
   
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
