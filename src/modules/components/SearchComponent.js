import React from "react";

//utils
import { withStyles } from "@material-ui/core/styles";

//Material ui components
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

//Material ui icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

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
  }
});

export class SearchComponent extends React.Component {
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
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SearchComponent);
