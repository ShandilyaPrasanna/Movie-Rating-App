import React, { Component } from "react";

//Components
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchComponent from "./components/SearchComponent";

export class MainComponent extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        {this.props.loading && <div className="spinner" />}
        <Header />
        <SearchComponent />
        <Footer />
      </Container>
    );
  }
}

export default MainComponent;
