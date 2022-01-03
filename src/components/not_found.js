import React from 'react';
import { Button, Paper, Typography, CssBaseline, Container, Box } from '@material-ui/core';
import Image from './../static/flip_flops.jpg';
import theme from '../theme';
import { makeStyles } from '@material-ui/styles';


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "93.5vh",
    borderRadius: 0,
  }
};
const textColorLight = theme.palette.text.light;
const gradient = theme.palette.gradient;
const gradient_hover = theme.palette.gradient_hover;
const useStyles = makeStyles((theme) => ({
  cta_button: {
    background: gradient,
    color: textColorLight + "!important",
    '&:hover': {
      background: gradient_hover,
    },
    borderRadius: "50px!important",
  },
}));


export default function NotFound() {
  const classes = useStyles();
  const portal_url = "https://portal.rentaflop.com";

  return (
    <Paper style={styles["paperContainer"]}>
      <CssBaseline />
      <Box
        sx={{
          pt: 20,
	  pl: 10,
	  pr: 70,
	  float: "left",
        }}
      >
        <Container maxWidth="sm">
	  <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
	  >
            404 page not found
	  </Typography>
	  <Typography variant="h5" align="center" color="text.primary" paragraph>
	    That request was a flop, but while you're here you can sit back and relax.
	  </Typography>
	  <Typography variant="h5" align="center" color="text.primary" paragraph>
	    Or...
	  </Typography>
          <Button href={portal_url+"/launchpad"} className={classes.cta_button} variant="contained">Rent some flops</Button>
	</Container>
      </Box>
    </Paper>
  );
}
