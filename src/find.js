import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Shereya from "./resources/b4b4487e97e8f394d35c42743c550382";
import Jaswinder from "./resources/dd12cb85e297ab0760cc810bbdc75c41";
import Siddharth from "./resources/a558906153c99901bef0eba67e58a1ac";
import Anuj from "./resources/81a02abc067e003fc5d7f8aa71d44679";
import Sanchita from "./resources/455986d673dc96e6f3e3ee5df4db5933";
import Dilip from "./resources/3eb4654318c17e194111f913fb863c96";
import Palki from "./resources/c6ebcade53ec4dc6ea0dc30b5b637e76";
import AnujGu from "./resources/8fc8d1397fe67158362d185fbce8ba9a";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    marginRight: "40px",
  },
}));

function App(props) {
  const classes = useStyles();
  let doctors;

  if ((props.search.location === "") & (props.search.doctor === "")) {
    doctors = (
      <List className={classes.list}>
        <Link className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Shreya Kumar"
                src={Shereya}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Shreya Kumar"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 6 years experience
                  <br /> Marathahalli, Karnataka
                </p>
              }
            />
          </ListItem>
        </Link>

        <Link href="#" className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Jaswinder Singh"
                src={Jaswinder}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Jaswinder Singh"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 10 years
                  experience
                  <br /> Sector 27, Chandigarh
                </p>
              }
            />
          </ListItem>
        </Link>
        <Link href="#" className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Siddharth Roy"
                src={Siddharth}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Siddharth Roy"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 15 years
                  experience
                  <br /> Park Street, Kolkata
                </p>
              }
            />
          </ListItem>
        </Link>
      </List>
    );
  } else if (
    (props.search.location === "Kolkata") &
    (props.search.doctor === "")
  ) {
    doctors = (
      <List className={classes.list}>
        <Link onClick={props.show} className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Anuj Saha" src={Anuj} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary="Dr. Anuj Saha"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 10 years
                  experience
                  <br /> Park Street, Kolkata
                </p>
              }
            />
          </ListItem>
        </Link>

        <Link href="#" className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Sanchita Gupta"
                src={Sanchita}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Dr. Sanchita Gupta"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 14 years
                  experience
                  <br /> New Alipore, Kolkata
                </p>
              }
            />
          </ListItem>
        </Link>

        <Link href="#" className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Dilip Roy" src={Dilip} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary="Dr. Dilip Roy"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 18 years
                  experience
                  <br /> Kalikapur, Kolkata
                </p>
              }
            />
          </ListItem>
        </Link>

        <Link href="#" className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Palki Choudhury"
                src={Palki}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Dr. Palki Choudhury"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 6 years experience
                  <br /> New Alipore, Kolkata
                </p>
              }
            />
          </ListItem>
        </Link>
      </List>
    );
  } else if (
    (props.search.location === "Kolkata") &
    (props.search.doctor === "Anuj")
  ) {
    doctors = (
      <List className={classes.list}>
        <Link onClick={props.show} className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Anuj Saha" src={Anuj} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary="Dr. Anuj Saha"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 10 years
                  experience
                  <br /> Park Street, Kolkata
                </p>
              }
            />
          </ListItem>
        </Link>

        <Link href="#" className={classes.links}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Anuj Gupta"
                src={AnujGu}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Dr. Anuj Gupta"
              secondary={
                <p>
                  Bachelor in Vaterinary Science (BVS) <br /> 11 years
                  experience
                  <br /> New Alipore, Kolkata
                </p>
              }
            />
          </ListItem>
        </Link>
      </List>
    );
  }
  return (
    <React.Fragment>
      <Typography component="div">{doctors}</Typography>
    </React.Fragment>
  );
}

export default App;
