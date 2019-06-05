import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../assets/img/logo.png";

//Header Component
const useStyles = makeStyles(theme => ({
  logo: {
    marginLeft: "50%",
    transform: "translateX(-50%)"
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div style={{ margin: "30px" }}>
      <img src={logo} height="50px" width="200px" className={classes.logo} />
    </div>
  );
}
