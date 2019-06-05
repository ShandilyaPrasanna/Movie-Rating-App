import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store";
import "./index.css";
import MainComponent from "./modules/MainComponent";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroundImage" />
        <Provider store={store}>
          <MainComponent />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
