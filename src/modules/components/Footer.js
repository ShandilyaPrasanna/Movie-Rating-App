import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// Footer Component
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "73vh"
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    fontSize: "18px",
    backgroundColor: "transparent"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          Follow us on social media Sites :- <a>Facebook</a> <a>Twitter</a>{" "}
          <a>Instagram</a> <a>Linkedln</a>
        </Container>
      </footer>
    </div>
  );
}
