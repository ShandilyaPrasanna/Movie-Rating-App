import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";

//Components
import Grid from "./components/Grid";
import SearchComponent from "./components/SearchComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

//actions
import { getMoviesAction, isLoading } from "./actions";

export class MainComponent extends Component {
  componentDidMount() {
    const { getMoviesAction, isLoading } = this.props;
    getMoviesAction("movies"); // fetch call to get all movies on load
    isLoading(true); // start spinner
  }

  render() {
    return (
      <Container maxWidth="lg">
        {this.props.loading && <div className="spinner" />}
        <Header />
        <SearchComponent />
        <Grid />
        <Footer />
      </Container>
    );
  }
}

export function mapStateToProps(state) {
  return {
    loading: state.app.loading
  };
}

export default connect(
  mapStateToProps,
  {
    getMoviesAction,
    isLoading
  }
)(MainComponent);
