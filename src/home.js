import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import Dogs from "./patient";
import Find from "./find";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    borderRadius: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  topSection: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "0 auto",
    padding: "70px 0 30px 0",
  },
  input: {
    borderRadius: 20,
  },
}));

function App(props) {
  const classes = useStyles();

  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    setShow(false);
  };

  const [state, setState] = React.useState({
    location: "",
    doctor: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Typography
        style={show ? { opacity: 0.3 } : { opacity: 1 }}
        component="div"
        className={classes.topSection}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ fontWeight: 900 }}
        >
          Find and Book
        </Typography>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-location-native-simple">
            Location
          </InputLabel>
          <Select
            disabled={show}
            className={classes.input}
            native
            value={state.location}
            onChange={handleChange}
            label="Location"
            inputProps={{
              name: "location",
              id: "outlined-location-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="Kolkata">Kolkata</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            htmlFor="outlined-doctor-native-simple"
            className={classes.input}
          >
            Doctor
          </InputLabel>
          <Select
            disabled={show}
            className={classes.input}
            native
            value={state.doctor}
            onChange={handleChange}
            label="Doctor"
            inputProps={{
              name: "doctor",
              id: "outlined-Doctor-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="Anuj">Anuj</option>
          </Select>
        </FormControl>
        <Divider variant="middle" style={{ marginTop: " 20px" }} />
      </Typography>
      {show ? (
        <Dogs showState={handleClick} />
      ) : (
        <Find search={state} show={props.show} />
      )}
    </React.Fragment>
  );
}

export default App;
