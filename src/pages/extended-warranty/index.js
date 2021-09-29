import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import backgroundPicture from "../../assets/img/bluebg.jpg";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    color: "white",
  },
  headingUnderline: {
    textAlign: "center",
    position: "relative",
    padding: theme.spacing(8, 0, 2),
    marginBottom: theme.spacing(5),
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: "0px",
      width: "250px",
      borderBottom: "2px solid white",
      transform: `translateX(-50%)`,
      transition: "width .5s ease",
    },
  },
  sections: {
    backgroundColor: "white",
    color: "#000",
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    margin: theme.spacing(1, 0),
  },
  inputs: {
    width: "100%",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0px",
    "& li": {
      display: "flex",
      gap: theme.spacing(0, 2),
      "&:not(:last-child)": {
        marginBottom: theme.spacing(1),
      },
    },
    "& svg": {
      fill: "green",
    },
  },
  radioSelect: {
    display: "flex",
    gap: "20px",
    marginTop: theme.spacing(5),
    "& .labl": {
      display: "block",
      width: "100%",
      "& .duration": {
        marginBottom: theme.spacing(1),
      },
      "& input": {
        visibility: "hidden",
        position: "absolute",
        "& + div": {
          border: "2px solid grey",
          padding: theme.spacing(1),
          borderRadius: theme.spacing(1),
          cursor: "pointer",
          fontSize: "20px",
        },
        "&:checked": {
          "& + div": {
            border: "2px solid blue",
          },
        },
      },
    },
  },
  buttonEnd: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  totalSection: {
    marginTop: theme.spacing(3),
  },
  list2: {
    fontSize: "13px",
    "& p":{
      marginBottom: "0px",
      color: "grey"
    },
    "& ol":{
      margin: "0px",
      paddingLeft: "15px",
      color: "grey"
    }
  }
}));

function ExtendedWarranty() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography className={classes.headingUnderline} variant="h4">
          Extended Warranty For your Air Conditioner
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className={classes.sections}>
              <Typography variant="h5">Extended Warranty Features</Typography>
              <Typography>
                <ul className={classes.list}>
                  <li>
                    <CheckCircleIcon fontSize="small" />
                    <span>
                      jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                      gidfjilgjdfig
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon fontSize="small" />
                    <span>
                      jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                      gidfjilgjdfig
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon fontSize="small" />
                    <span>
                      jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                      gidfjilgjdfig
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon fontSize="small" />
                    <span>
                      jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                      gidfjilgjdfig
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon fontSize="small" />
                    <span>
                      jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                      gidfjilgjdfig
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon fontSize="small" />
                    <span>
                      jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                      gidfjilgjdfig
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon fontSize="small" />
                    <span>
                      jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                      gidfjilgjdfig
                    </span>
                  </li>
                </ul>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.sections}>
              <Typography variant="h5">Hello!</Typography>

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    className={classes.inputs}
                    label="Name will appear invoice"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.inputs}
                    select
                    label="Select your device"
                  >
                    <MenuItem>One</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.inputs}
                    select
                    label="Price Range"
                  >
                    <MenuItem>One</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              <div className={classes.radioSelect}>
                <label class="labl">
                  <div className="duration">1 year</div>
                  <input type="radio" name="radioname" />
                  <div>$1000</div>
                </label>
                <label class="labl">
                  <div className="duration">1 year</div>
                  <input type="radio" name="radioname" />
                  <div>$20000</div>
                </label>
                <label class="labl">
                  <div className="duration">1 year</div>
                  <input type="radio" name="radioname" />
                  <div>$20000</div>
                </label>
                <label class="labl">
                  <div className="duration">1 year</div>
                  <input type="radio" name="radioname" />
                  <div>$20000</div>
                </label>
              </div>

              <Grid container spacing={2} className={classes.totalSection}>
                <Grid item xs={6}>
                  <Typography variant="h6">Total 3344</Typography>
                  <Typography>(Inclusive of all Tax)</Typography>
                </Grid>
                <Grid item xs={6} className={classes.buttonEnd}>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                </Grid>
              </Grid>

              <Typography className={classes.list2}>
                <p>Note</p>
                <ol>
                  <li>
                    jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                    gidfjilgjdfig
                  </li>
                  <li>
                    jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                    gidfjilgjdfig
                  </li>
                  <li>
                    jkfgndsl gfdglfd glifdjligjd fligjilfdjg lifdjl
                    gidfjilgjdfig
                  </li>
                </ol>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ExtendedWarranty;
