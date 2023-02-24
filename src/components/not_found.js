import React from 'react';
import { Paper, Typography, CssBaseline, Container, Box } from '@material-ui/core';
import Image from '../../public/static/flip_flops.jpg';
import Page from './page'
import { RentaflopButton } from './utils';


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image.src})`,
    backgroundSize: "cover",
    height: "93.5vh",
    borderRadius: 0,
  }
};


export default function NotFound() {
  return (
    <Page>
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
              color="textPrimary"
              gutterBottom
	    >
              404 page not found
	    </Typography>
	    <Typography variant="h5" align="center" color="textPrimary" paragraph>
	      That request was a flop, but while you're here you can sit back and relax.
	    </Typography>
	    <Typography variant="h5" align="center" color="textPrimary" paragraph>
	      Or...
	    </Typography>
	    <RentaflopButton button_class="cta_button" text="Rent some flops" dest={"https://portal.rentaflop.com/launchpad"} />
	  </Container>
	</Box>
      </Paper>
    </Page>
  );
}
