import React from "react";

//utils
import { withStyles } from "@material-ui/core/styles";
import { debounce } from "lodash";
import compose from "compose-function";
import { connect } from "react-redux";

//Material ui components
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

//Material ui icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

//actions
import { getMoviesAction, isLoading } from "../actions";

const styles = () => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  filterContainer: { display: "flex", marginTop: "22px" }
});

//Components handles search and filter functionality
export class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: { year: false, genre: false },
      filterValues: { year: 2019, genre: "" },
      searchTxt: ""
    };
  }

  componentWillUnmount() {
    this.searchHandler.cancel();
  }

  makeApiRequest = value => {
    const searchTxt = value || this.state.searchTxt;
    const { getMoviesAction, isLoading } = this.props;
    const { filterValues, checked } = this.state;
    const filter = [];
    if (checked.year) {
      filter.push({ year: filterValues.year });
    }
    if (checked.genre) {
      filter.push({ genre: filterValues.genre });
    }
    const endPoint = `search?key=${searchTxt}${
      filter.length !== 0 ? `&filter=${JSON.stringify(filter)}` : ``
    }`;

    getMoviesAction(endPoint);
    isLoading(true);
  };

  searchHandler = debounce(searchTxt => {
    this.setState({ searchTxt }, () => {
      this.makeApiRequest(this.state.searchTxt);
    });
  }, 500);

  handleFilterValues = event => {
    const { filterValues } = this.state;
    const { name, value } = event.target;
    this.setState({ filterValues: { ...filterValues, [name]: value } });
  };

  displayFilter = () => {
    const { checked } = this.state;
    const visibility = checked.genre ? "visible" : "hidden";
    const { classes } = this.props;
    return (
      <Container className={classes.filterContainer} maxWidth="sm">
        <div>
          Filter By:- Year
          <Checkbox
            id="checkboxYear"
            checked={checked.year}
            style={{
              color: "#ffff"
            }}
            onChange={() => {
              this.setState({ checked: { ...checked, year: !checked.year } });
            }}
          />
          {checked.year && (
            <TextField
              id="standard-number"
              name="year"
              defaultValue={2019}
              style={{
                backgroundColor: "#fff",
                width: "100px",
                marginTop: "6px"
              }}
              type="number"
              onChange={this.handleFilterValues}
              InputProps={{
                disableUnderline: true,
                style: { marginLeft: "30px" }
              }}
            />
          )}
        </div>
        <div style={{ marginLeft: "auto" }}>
          Genre
          <Checkbox
            id="checkboxGenre"
            checked={checked.genre}
            style={{
              color: "#ffff"
            }}
            onChange={() => {
              this.setState({ checked: { ...checked, genre: !checked.genre } });
            }}
          />
          <TextField
            id="standard-genre"
            name="genre"
            style={{
              backgroundColor: "#fff",
              width: "100px",
              visibility,
              marginTop: "6px"
            }}
            onChange={this.handleFilterValues}
            InputProps={{
              disableUnderline: true,
              style: { marginLeft: "30px" }
            }}
          />
        </div>
        <Button
          id="applyFiler"
          variant="contained"
          style={{ marginLeft: "25px" }}
          onClick={() => {
            this.makeApiRequest();
          }}
        >
          Apply
        </Button>
      </Container>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="sm" className={classes.root}>
          <Paper className={classes.root}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <InputBase
              id="searchBar"
              className={classes.input}
              placeholder="Search Movies Here"
              onChange={event => {
                this.searchHandler(event.target.value);
              }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
        {this.displayFilter()}
      </React.Fragment>
    );
  }
}

const enhance = compose(
  withStyles(styles),
  connect(
    null,
    {
      getMoviesAction,
      isLoading
    }
  )
);

export default enhance(SearchComponent);
