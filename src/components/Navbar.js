import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  root: {
    backgroundColor: "white",
    color: "#000",
    padding: theme.spacing(1),
  },
  logo: {
    height: "60px",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    marginLeft: theme.spacing(3),
    color: "#000",
  },
  logoFlex: {
    display: "flex",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" className={classes.root}>
      <Container maxWidth="lg">
        <CssBaseline />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3} className={classes.logoFlex}>
            {isMobile && <DrawerComponent />}
            <img src={Logo} className={classes.logo} />
          </Grid>
          <Grid item xs={6}>
            {!isMobile && (
              <div className={classes.navlinks}>
                <NavLink to="/" className={classes.link}>
                  <Typography>Home</Typography>
                </NavLink>
                <NavLink to="/about" className={classes.link}>
                  <Typography>Services</Typography>
                </NavLink>
                <NavLink to="/contact" className={classes.link}>
                  <Typography>Device</Typography>
                </NavLink>
                <NavLink to="/faq" className={classes.link}>
                  <Typography>Tracking</Typography>
                </NavLink>
                <NavLink to="/faq" className={classes.link}>
                  <Typography> Blog</Typography>
                </NavLink>
                <NavLink to="/faq" className={classes.link}>
                  <Typography>Contact Us</Typography>
                </NavLink>
              </div>
            )}
          </Grid>
          <Grid item xs={3}>
            <Typography style={{ textAlign: "right" }}> Login</Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Navbar;
