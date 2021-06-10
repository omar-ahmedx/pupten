import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import Img from "./resources/2e947b0252e46cb1ce2680d1bbd02ce7";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    background: "white",
    minHeight: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#979d9c",
  },
  title: {
    flexGrow: 1,
    display: "block",
    color: "#588b8b",
  },
}));

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Pupten.
          </Typography>
          <Avatar alt="Remy Sharp" src={Img} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
