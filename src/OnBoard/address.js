import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactPhoneInput from 'react-phone-input-mui';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Address({next,prev}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className="form-header" component="h1" variant="h5">
          Address Form
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="street"
                name="Street"
                variant="outlined"
                required
                fullWidth
                id="Street"
                label="Street Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                autoComplete="city"
                name="Street"
                variant="outlined"
                required
                fullWidth
                id="City"
                label="City"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                autoComplete="state"
                name="State"
                variant="outlined"
                required
                fullWidth
                id="State"
                label="State"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                autoComplete="postalcode"
                name="Postal Code"
                variant="outlined"
                required
                fullWidth
                id="Street"
                label="Postal Code"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                autoComplete="country"
                name="Country"
                variant="outlined"
                required
                fullWidth
                id="Country"
                label="Country"
                autoFocus
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} justify="center">
              <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>prev()}>
                    Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>next()}>
                    Next
                  </Button>
                </Grid>
              </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}