import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";

//Components
import SearchComponent from "./components/SearchComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

//actions
import { getMoviesAction, isLoading } from "./actions";

export class MainComponent extends Component {
  componentDidMount() {
    const { getMoviesAction, isLoading } = this.props;
    getMoviesAction("movies"); // fetch call to get all movies on load
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Header />
        <SearchComponent />
        <Footer />
      </Container>
    );
  }
}

export default connect(
  null,
  {
    getMoviesAction,
    isLoading
  }
)(MainComponent);
