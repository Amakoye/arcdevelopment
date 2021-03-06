import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import custmsoftwareicon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },

  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingRight: 0,
      paddingLeft: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*----- Hero Block-----*/}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroText}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  onClick={() => props.setValue(5)}
                  className={classes.estimateButton}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/*----- End Hero Block-----*/}
      {/*-----Services Block-----  */}
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
      {/*----- iOS/Android Block-----  */}
      <Grid item>
        <Grid
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
          container
          direction="row"
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : "undefined",
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
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- End iOS/Android Block-----  */}
      {/*-----  Website Block-----  */}
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
          <Grid item>
            <img
              alt="website icon"
              className={classes.icon}
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- End Website Block-----  */}
      {/*----- Revolution Block ----- */}
      <Grid item>
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    onClick={() => {
                      props.setValue(2);
                    }}
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/*----- End Revolution Block ----- */}
      {/*-----  Information Block ----- */}
      <Grid
        style={{ height: "80em" }}
        container
        direction="row"
        alignItems="center"
        className={classes.infoBackground}
      >
        <Grid
          item
          container
          direction={matchesXS ? "column" : "row"}
          style={{
            textAlign: matchesXS ? "center" : "inherit",
          }}
        >
          <Grid
            sm
            style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            item
          >
            <Grid
              container
              style={{ marginBottom: matchesXS ? "10em" : 0 }}
              direction="column"
            >
              <Typography variant="h2" style={{ color: "white" }}>
                About us
              </Typography>
              <Typography variant="subtitle2">Let's get personal</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  onClick={() => {
                    props.setValue(3);
                  }}
                  className={classes.learnButton}
                  style={{ color: "white", borderColor: "white" }}
                  variant="outlined"
                >
                  <span style={{ marginRight: 10 }} variant="outlined">
                    Learn More
                  </span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sm
            style={{
              marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
              textAlign: matchesXS ? "center" : "right",
            }}
            item
          >
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>
                Contact us
              </Typography>
              <Typography variant="subtitle2">Say Hello!</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/contact"
                  onClick={() => {
                    props.setValue(4);
                  }}
                  className={classes.learnButton}
                  style={{ color: "white", borderColor: "white" }}
                  variant="outlined"
                >
                  <span style={{ marginRight: 10 }} variant="outlined">
                    Learn More
                  </span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*----- End Information Block ----- */}
      {/*-----  Call To Action Block ----- */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
