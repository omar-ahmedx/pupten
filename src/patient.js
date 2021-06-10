import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Burno from "./resources/f7601d568b66ce2400f719f6be9489f4";
import Casper from "./resources/d015ccfb358b987a51485e8f85a56610";
import Willy from "./resources/9e0d440cb93a9114a04326c71663e09f";

const useStyles = makeStyles((theme) => ({
  dogs: {
    position: "relative",
    top: "-8vh",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    padding: "13px",
    border: "solid 1px black",
    borderRadius: 50,
    backgroundColor: "white",
    zIndex: 2,
  },
  list: {
    textAlign: "center",
  },
  links: {
    color: "black",
  },
}));

function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography component="div" className={classes.dogs}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          style={{ fontWeight: 800 }}
        >
          Who is the patient?
        </Typography>
        <List className={classes.list}>
          <Link onClick={props.showState} className={classes.links}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Dog" src={Burno} />
              </ListItemAvatar>
              <ListItemText primary="Bruno (Dog)" secondary="aID1412" />
            </ListItem>
          </Link>

          <Link href="#" className={classes.links}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Cat" src={Casper} />
              </ListItemAvatar>
              <ListItemText primary="Casper (Cat)" secondary="aID1540" />
            </ListItem>
          </Link>

          <Link href="#" className={classes.links}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Dog" src={Willy} />
              </ListItemAvatar>
              <ListItemText primary="Willy (Dog)" secondary="aID15667" />
            </ListItem>
          </Link>
        </List>
      </Typography>
    </React.Fragment>
  );
}

export default App;
