import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Bar from "./topBar";
import Home from "./home";
import Doctor from "./doctor";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "90%",
    minHeight: "85vh",
    maxHeight: "auto",
    margin: "30px auto 0 auto",
    backgroundColor: "white",
  },
}));
function App() {
  const classes = useStyles();

  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="md">
        <Typography
          component="div"
          style={{
            backgroundColor: "#c7dedb",
            minHeight: "100vh",
            paddingBottom: "20px",
          }}
        >
          <Bar />
          <Typography component="div" className={classes.mainContainer}>
            {show ? <Home show={handleClick} /> : <Doctor />}
          </Typography>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
