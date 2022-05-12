import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";

import custmsoftwareicon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
     {/*-----Services Block-----  */}
     <Grid item style={{marginLeft:matchesSM ? 0:'5em', marginTop: matchesSM ? '1em': '2em'}}>
       <Typography align={matchesSM ? 'center' : undefined} variant="h2" gutterBottom >Services</Typography>
     </Grid>
      {/*----- iOS/Android Block-----  */}
      <Grid item>
        <Grid
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
          container
          direction="row"
          style={{marginTop: matchesSM ? '1em':'5em'}}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : "undefined",
              width: matchesSM ? undefined : '35em'
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }} variant="outlined">
                Learn More
              </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? "0" : "5em" }}>
            <img
              alt="mobile apps icon"
              className={classes.icon}
              src={mobileAppsIcon}
             width={matchesSM ? undefined : '250em'}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- End iOS/Android Block-----  */}
      {/*----- Custom Software Development Block-----  */}
      <Grid item>
        <Grid
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "undefined"}
          container
          direction="row"
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? "0" : "5em",
              textAlign: matchesSM ? "center" : "undefined",
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }} variant="outlined">
                Learn More
              </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              className={classes.icon}
              src={custmsoftwareicon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- End Custom Software Development Block-----  */}
     
      {/*-----  Website Block-----  */}
      <Grid item>
        <Grid
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
          container
          direction="row"
          style={{marginBottom: '10em'}}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : "undefined",
              width: matchesSM ? undefined : '35em'
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }} variant="outlined">
                Learn More
              </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{marginRight: matchesSM ? "0" : "5em",}}>
            <img
              alt="website icon"
              className={classes.icon}
              src={websitesIcon}
              width={matchesSM ? undefined : '250em'}  
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- End Website Block-----  */}

    </Grid>
  );
}
