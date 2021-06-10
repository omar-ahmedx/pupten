import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Anuj from "./resources/81a02abc067e003fc5d7f8aa71d44679";

const useStyles = makeStyles((theme) => ({}));

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="div">
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{ fontWeight: 900 }}
        >
          Dr. Anuj saha <span>(13565691114)</span>
        </Typography>
        <Avatar alt="Remy Sharp" src={Anuj} />
        <Typography component="div">
          <Typography component="p">
            BVS | 10 years experience <br />
            Park Street, Kolkata
          </Typography>

          <Typography component="div">
            <Typography component="span">97xxxxxx24</Typography>
            <Typography component="span">97xxxxxx24</Typography>
          </Typography>

          <Typography component="mail">Mail: anuj.saha@gmail.com</Typography>
        </Typography>
      </Typography>
      <Divider variant="middle" style={{ marginTop: " 20px" }} />
      <Typography component="p">
        Dr. Anuj is available for a miniumu of 7 days for free follow up via
        text post Consultatuin. However, doctor can decide to increase the
        follow up text days as per case basis.
      </Typography>
      <Divider variant="middle" style={{ marginTop: " 20px" }} />
      <Typography component="div">
        <Typography component="span">Appointment History</Typography>
        <Typography component="span">1 Prior Consultation</Typography>
      </Typography>

      <Typography component="div">
        <Typography component="div">1 January, 10:00 AM</Typography>
        <Typography component="div">15 February, 11:30 AM</Typography>
      </Typography>

      <Divider variant="middle" style={{ marginTop: " 20px" }} />
    </React.Fragment>
  );
}
